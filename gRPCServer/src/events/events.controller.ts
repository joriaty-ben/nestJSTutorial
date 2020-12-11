import {Controller, Get, Param} from '@nestjs/common';
import {EventsService} from "./events.service";
import {EventsEntity} from "./events.entity";

@Controller('events')
export class EventsController {
    constructor(private readonly eventService: EventsService) {}

    @Get()
    findAll(): Promise<EventsEntity[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): any {
        return this.eventService.findOne(id);
    }
}
