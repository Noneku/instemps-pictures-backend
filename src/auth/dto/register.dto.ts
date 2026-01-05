import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class RegisterDto {

    @IsNotEmpty({message: 'Name required'})
    name: string;

    @IsNotEmpty({message: 'Surname required'})
    surname: string;

    @IsEmail({}, {message: 'email address required'})
    @IsNotEmpty({message: 'email address required'})
    email: string;

    @IsNotEmpty({message: 'password address required'})
    @IsString({message: 'password address required'})
    @MinLength(8, {message: '8 characters minimum'})
    password: string;
}