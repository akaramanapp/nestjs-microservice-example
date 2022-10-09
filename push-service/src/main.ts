import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://iemgjpeo:gOlzI8TT-TM8p0A3zvt0On-SxSngdbg7@moose.rmq.cloudamqp.com/iemgjpeo'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  app.listen();
}
bootstrap();
