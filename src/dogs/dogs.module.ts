import { Module } from '@nestjs/common';
import { DogsServices } from './dogs.services';
import { DogsController } from './dogs.controller';

@Module({ controllers: [DogsController], providers: [DogsServices] })
export class DogsModule {}
