import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CustomerDTO } from './dto/CustomerDTO';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('createdCustomer')
  async createCustomer(customer: CustomerDTO) {
    // Push atacak method.
    console.log('Mail gönderildi: ' + JSON.stringify(customer))
  }
}
