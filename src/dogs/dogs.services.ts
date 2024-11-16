import { Injectable } from '@nestjs/common';
import { CreateDogDTO } from './dto/create-dog.dto';

@Injectable()
export class DogsServices {
  create(createDogDTO: CreateDogDTO): CreateDogDTO {
    return { ...createDogDTO };
  }

  getAll(): Record<string, string> {
    return { data: 'This will return all dogs' };
  }
}
