import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventsEntity } from "./events.entity";
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {

     constructor(
         @InjectRepository(EventsEntity)
         private readonly eventRepository: Repository<EventsEntity>,
     ) {}

    findAll(): Promise<EventsEntity[]> {
        return this.eventRepository.find();
    }

    findOne(id: string): Promise<EventsEntity> {
        return this.eventRepository.findOne(id);
    }
}
