import { Controller, Logger, OnModuleInit, Param, Post} from '@nestjs/common';
import { microserviceOptions } from "./grpc.options";
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from "./grpc.interface";

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit(): any {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('add/:text')
  async concatenate(@Param('text') text: string) {
    this.logger.log('Adding ' + text);
    return this.grpcService.concatenate({ text });
  }
}
