import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PUSH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://iemgjpeo:gOlzI8TT-TM8p0A3zvt0On-SxSngdbg7@moose.rmq.cloudamqp.com/iemgjpeo'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
