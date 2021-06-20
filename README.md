# love-calculator-restapi-nestjs-typescript

This is a Love Calculator based on [the original paper love calculator](https://www.youtube.com/watch?v=oFsLVG7EAZ4). Built in NodeJS, NestJS and TypeScript.

## Installation

Ensure you have nodejs installed. [Download](https://nodejs.org/en/download/) the latest version if you do not have it installed. Then run the following command from within the project directory.

```node
npm install
```

## Usage

Once npm in installed, start the project using the following command


```node
npm run start
```

Once the project is running in your terminal of choice, you can post values as follow using your method of choice i.e. [Postman](https://www.postman.com/)

Referring to [the original paper love calculator](https://www.youtube.com/watch?v=oFsLVG7EAZ4) the value would be 0.86 to achieve this you can use a weight of 1 and flag the original parameter as true

```json
{
   "nameOne" : "James",
   "nameTwo" : "Mary",
   "weight" : 1,
   "original" : true
}
```
The response should be in a decimal percentage with a weight of 1. 

```json
{
   "value" : 0.860
}
```

## Notes
Credits to [forbesg](https://codepen.io/forbesg/pen/eNBLRa)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)