import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate.dto'
import { Calculated } from './interfaces/calculated.interface';
//https://codepen.io/forbesg/pen/eNBLRa

@Injectable()
export class AppService {

  static someVar = null;

  constructor(){}
 
  calculateLove(countArray){
    console.log("----firing from within calculateLove");
    let hold = new Array;
    let newArray =  new Array;
    let returnValue;

    if (countArray.length > 2) {
      newArray = countArray.map(function(item, index, newArray) {
        return item + newArray[index + 1];
      });
      newArray.forEach(function(item) {
        if (typeof item === "number" && !isNaN(item)) {
          if (item < 10) {
            hold.push(item);
          } else if (item > 9) {
            hold.push(parseInt(item.toString()[0]));
            hold.push(parseInt(item.toString()[1]));
          }
        }
      }); 
      console.log(AppService.someVar);
      this.calculateLove(hold);      
    } else {      
      AppService.someVar = (((parseInt(countArray[0] +""+ countArray[1])))/100);
      console.log(AppService.someVar)
      return AppService.someVar;  
    }   
    if(AppService.someVar!=null){
      return AppService.someVar;
    }   
  }

  async calculateString(nameOne, nameTwo){      
    console.log("----firing from within calculateString");
    let loves = ["l", "o", "v", "e", "s"];;
    let countArray = new Array;
    let count;
    let names;
    let jointNames;
    let value;

    names = "" + nameOne + "" + nameTwo + ""; 

    jointNames = names.toLowerCase();
    countArray = loves.map(function(item) {
      count = 0;
      for (var i = 0; i < jointNames.length; i += 1) {
              if (item === jointNames[i]) {
                      count += 1;
              }
      }
      return count;
    });
    value = await this.calculateLove(countArray);
    console.log("------------2",value);
    return value;    
  }

  async calculateStart(getCalculted:CalculateDto): Promise<Calculated>{  
    console.log("----firing from within calculateStart");
    return {'value':await this.calculateString(getCalculted.nameOne, getCalculted.nameTwo)};
  }

  async getCalculted(getCalculted: CalculateDto): Promise<Calculated> {   
    console.log("----firing from within getCalculted");
    return await this.calculateStart(getCalculted);
   }
}
