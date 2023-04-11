import { Expose } from 'class-transformer';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class FindForDoctoDto {

    @Expose()
    @IsNotEmpty()
    @IsMongoId()
    id: Types.ObjectId;
}

