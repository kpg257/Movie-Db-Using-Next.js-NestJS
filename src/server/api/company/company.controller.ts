import { Controller, Post } from '@nestjs/common';

@Controller('/api/company')
export class CompanyController {
  @Post('/get')
  get() {
    return 'hello from company';
  }
}
