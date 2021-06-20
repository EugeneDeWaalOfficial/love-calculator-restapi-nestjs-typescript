import { Injectable } from '@nestjs/common';
import { CalculateDto } from './dto/calculate.dto'
import { Calculated } from './interfaces/calculated.interface';

@Injectable()
export class AppService {
  // set golabal variables
  static someVar = null;

  constructor(){}
 
  calculateLove(countArray, weight, original){
    // set variables
    let hold = new Array;
    let newArray =  new Array;

    if (countArray.length > 2) {
      // map new values into new array
      newArray = countArray.map(function(item, index, newArray) {
        return item + newArray[index + 1];
      });
      newArray.forEach(function(item) {
        // check if item is a number
        if (typeof item === "number" && !isNaN(item)) {
          // check if item is less than 10 to convert to int
          if (item < 10) {
            hold.push(item);
          } else if (item > 9) {
            // push to holding array 
            hold.push(parseInt(item.toString()[0]));
            hold.push(parseInt(item.toString()[1]));
          }
        }
      }); 
      this.calculateLove(hold, weight, original);      
    } else {      
      // calculate the value
      if (original){
        AppService.someVar = (((100-((parseInt(countArray[0] +""+ countArray[1]))))/100)*weight).toFixed(3);
      }else{
        AppService.someVar = ((((parseInt(countArray[0] +""+ countArray[1])))/100)*weight).toFixed(3);
      }
      // return the calculated value      
      return AppService.someVar;  
    }   
    // check if function is firing without values
    if(AppService.someVar!=null){
      return AppService.someVar;
    }   
  }

  async calculateString(nameOne, nameTwo, weight, original){ 
    // set variables     
    let loves = ["l", "o", "v", "e", "s"];;
    let countArray = new Array;
    let count;
    let names;
    let jointNames;
    let value;

    //aggregate the names
    names = "" + nameOne + "" + nameTwo + ""; 

    jointNames = names.toLowerCase();

    // map out loves array to joint names
    countArray = loves.map(function(item) {
      count = 0;
      for (var i = 0; i < jointNames.length; i += 1) {
              if (item === jointNames[i]) {
                      count += 1;
              }
      }
      return count;
    });
    // return final value
    value = await this.calculateLove(countArray, weight, original);
    return value;    
  }

  async calculateStart(getCalculted:CalculateDto): Promise<Calculated>{ 
    return {'value':await this.calculateString(getCalculted.nameOne, getCalculted.nameTwo, getCalculted.weight, getCalculted.original)};
  }

  async getCalculted(getCalculted: CalculateDto): Promise<Calculated> {  
    return await this.calculateStart(getCalculted);
   }
}
