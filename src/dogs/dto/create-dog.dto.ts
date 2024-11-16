import { IsIn, IsString, Length } from 'class-validator';

const allowedBreeds = ['terrier', 'bulldog'];

export class CreateDogDTO {
  @IsString()
  @Length(1, 10)
  name: string;

  @IsString()
  @IsIn(allowedBreeds, {
    message: `Breed can only be one of these values: ${allowedBreeds.join(', ')}`,
  })
  breed: string;
}
