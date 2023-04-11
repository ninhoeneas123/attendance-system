import { IsString } from "class-validator";

export class FindPatientForCpf {
    @IsString()
    param: string;
}

