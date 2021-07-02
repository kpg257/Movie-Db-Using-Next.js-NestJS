import { Module } from '@nestjs/common';
import { CompanyController } from './company/company.controller';

@Module({
  controllers: [CompanyController],
})
export class ApiModule {}
