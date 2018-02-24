// 'use strict';

// const name = 'Josh';
// let happy = true;
// let age = 3;
// const hairColor = 'red';

// const josh = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

// if (happy) {
//   console.log(Array.isArray(josh), josh[4][0]);
// }

// for (let index = 0; index < josh.length; index++) {
//     console.log(josh[index]);
// }


// console.log(typeof happy, happy);
// happy = false;
// console.log(typeof happy, happy);
// console.log(typeof age, age);


const josh = {
    name: 'Josh',
    age: 33,
    happy: true,
    hairColor: 'red',
};

const mustafa = {
    name: 'Mustafa',
    age: 27,
    happy: false,
    hairColor: 'red',
};

const majid = {
    name: 'Majid',
    age: 26,
    happy: true,
    hairColor: 'red',
};

const studentArray = [josh, mustafa, majid];
// console.log(studentArray);

for (let i = 0; i < studentArray.length; i++) {
    console.log(`Hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${ studentArray[i].happy ? 'happy' : 'unhappy'}?`);
}

if (josh.happy) {
    return 'happy';
} else {
    return 'unhappy';
}