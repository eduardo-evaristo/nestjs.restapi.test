import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsServices } from './dogs.services';
import { CreateDogDTO } from './dto/create-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(readonly dogsServices: DogsServices) {}

  @Post()
  create(@Body() createDogDTO: CreateDogDTO) {
    const dog = this.dogsServices.create(createDogDTO);
    return dog;
  }

  @Get()
  getAllDogs() {
    const dogs = this.dogsServices.getAll();
    return dogs;
  }
}
