import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate.dto'
import { Calculated } from './interfaces/calculated.interface';
//https://codepen.io/forbesg/pen/eNBLRa

@Injectable()
export class AppService {

  constructor(){}
 
  calculateLove(countArray){
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
      this.calculateLove(hold);
    } else {
      returnValue = ((100 - (parseInt(countArray[0] +""+ countArray[1])))/100);
      console.log(returnValue);
      return returnValue;     
    }
  }

  calculateString(nameOne, nameTwo){      
     
    let loves = ["l", "o", "v", "e", "s"];;
    let countArray = new Array;
    let count;
    let names;
    let jointNames;
    let returnFinalValue;

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
    returnFinalValue = this.calculateLove(countArray);
    console.log("2--------->",returnFinalValue);
    return returnFinalValue;    
  }

  calculateStart(getCalculted:CalculateDto){
     
    let calculated;
    let someValue = this.calculateString(getCalculted.nameOne, getCalculted.nameTwo);
    calculated = {'value':someValue};
    return calculated;
  }

  async getCalculted(getCalculted: CalculateDto): Promise<Calculated> {   
    return this.calculateStart(getCalculted);
   }
}
