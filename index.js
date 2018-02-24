// 'use strict';

const name = 'Josh';
let happy = true;
let age = 3;
const hairColor = 'red';

const josh = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

if (happy) {
  console.log(Array.isArray(josh), josh[4][0]);
}


// console.log(typeof happy, happy);
// happy = false;
// console.log(typeof happy, happy);
// console.log(typeof age, age);