import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate.dto'
import { Calculated } from './interfaces/calculated.interface';

@Injectable()
export class AppService {
  constructor(){}
 
  calculateStart(getCalculted:CalculateDto){   
    let someValue = 0.4 + 0.3;    
    let calculated;
    console.log(getCalculted.nameOne);
    console.log(getCalculted.nameTwo);

    calculated = {'value':someValue}


    return calculated;
  }

  async getCalculted(getCalculted: CalculateDto): Promise<Calculated> {
    return this.calculateStart(getCalculted);
   }
}
