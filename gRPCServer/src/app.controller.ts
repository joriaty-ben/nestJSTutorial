import {Controller, Get, Logger} from '@nestjs/common';
import { AppService } from './app.service';
import {GrpcMethod} from "@nestjs/microservices";

interface IStartString {
  text: string;
}

interface IConcatenatedString {
  textSum: string;
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'Concatenate')

  concatenate(string: IStartString, metadata: any): IConcatenatedString {
    this.logger.log('Concatednating ' + string.text);
    return { textSum: this.getHello() + '' + string.text };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
