import { IsEmail, IsString } from "class-validator";

export class FindForParamDto {

    @IsString()
    param: string;

}

