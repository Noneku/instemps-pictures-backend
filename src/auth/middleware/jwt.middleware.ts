import {Injectable, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {UsersService} from "../../users/users.service";
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as process from "node:process";

export interface JwtPayload {
    sub: number;
    email: string;
}

@Injectable()
export class JwtMiddleware extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.usersService.findOneByEmailAuth(payload.email);
        if (!user) {
            throw new UnauthorizedException("This user doesn't exist");
        }

        const {password, ...result} = user;
        return result;
    }
}