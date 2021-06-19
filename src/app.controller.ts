import { Body, Controller, Post, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateDto } from './dto/calculate.dto'
import { Calculated } from './interfaces/calculated.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()  
  culculate(@Body() getCalculted: CalculateDto): Promise<Calculated> {
    return this.appService.getCalculted(getCalculted);
  }
}
