import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { User } from './entities/auth.entities';
import { AuthDto } from './dto';
import { JwtPayload, Tokens } from './types';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: AuthDto): Promise<Tokens> {
    const hashedPassword = await argon.hash(dto.password);
    const user = await this.userModel.create({
      email: dto.email,
      password: hashedPassword,
    });

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async signin(dto: AuthDto): Promise<Tokens> {
    const user: any = await this.userModel.findOne({
      email: dto.email,
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.password, dto.password);
    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user._id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async logout(_id: number): Promise<boolean> {
    await this.userModel.findOneAndUpdate(
      { _id },
      { $set: { hashedRt: null } },
    );
    return true;
  }

  async refreshTokens(_id: number, rt: string): Promise<Tokens> {
    const user = await this.userModel.findOne({
      _id,
    });
    if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(user.hashedRt, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    await this.updateRtHash(user.id, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(id: number, rt: string): Promise<void> {
    const hash = await argon.hash(rt);

    await this.userModel.findByIdAndUpdate(id, {
      hashedRt: hash,
    });
  }

  async getTokens(id: number, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: id,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('AT_SECRET'),
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('RT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
