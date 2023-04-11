import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Model } from "mongoose";
import { DoctorsService } from "../../doctors/doctors.service";


@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(
       private readonly doctorsService: DoctorsService
    ) { }

    async validate(param: string, args: ValidationArguments) {
        const user = await this.doctorsService.findByParam(param);
        if (user) { return false }
        return true
    }

}

export function IsUnique(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsUniqueConstraint,
        });
    };
}