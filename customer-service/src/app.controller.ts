import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CustomerDTO } from './dto/CustomerDTO';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('PUSH_SERVICE') private readonly client: ClientProxy
    ) {}

  @Post()
  createCustomer(@Body() customer: CustomerDTO): CustomerDTO {
    this.client.emit('createdCustomer', customer)
    return this.appService.createCustomer(customer);
  }
}
