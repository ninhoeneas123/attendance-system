import { IsString } from "class-validator";

export class FindForCpf {

    @IsString()
    cpf: string;

}
