//task №1
function findTypes() {
  let datatypes = [];
  for (let i=0; i < arguments.length; i++) {
      datatypes[i] = typeof arguments[i]
  }
  return datatypes;
}
findTypes("number"); 
findTypes(null, 5, "hello"); 

//task №2
function executeforEach(arr, callbackfunc) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callbackfunc(arr[i]);
  }
  return arr;
}
executeforEach([1, 2, 3], function(el){
  return console.log(el);
});

//task №3
function mapArray(arr, callbackfunc) {
  return executeforEach(arr, callbackfunc);
}
mapArray([2, 5, 8], function(el) { 
  return el + 3 
}); 

//task №4
function filterArray(arr, callbackfunc) {
  let cloneArray = [];
  for (let i = 0; i < arr.length; i++) {
      cloneArray[i] = arr[i];
  }
  let filteredArray = [];
  executeforEach(arr, callbackfunc);
  for (let i=0; i < cloneArray.length; i++) {
      if (arr[i] === true) {
          filteredArray.push(cloneArray[i]);
      }
  }
  return filteredArray;
}
filterArray([2, 5, 8], function(el) {
  return el > 3;
});

//Inputed data for tasks №5 and №6
let data = [
  {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 19,
    "eyeColor": "green",
    "name": "George",
    "favoriteFruit": "banana"
  }
];

//task №5
function getAmountOfAdultPeople(data) {
  let adultPeople = [];
  for (let i = 0; i < data.length; i++) {
      adultPeople[i] = data[i].age;        
  }
  adultPeople = filterArray(adultPeople, function(el) {
      return el > 18;
  })
  return adultPeople.length;
}
getAmountOfAdultPeople(data);

//task №6
function getGreenAdultBananaLovers(data) {
  let chosenPeople = []
  filterArray(data, function(el) {
      if (el.age > 18 && el.eyeColor === "green" && el.favoriteFruit === "banana") {
          chosenPeople.push(el.name);
      }
  })
  return chosenPeople;
}
getGreenAdultBananaLovers(data) 

//task №7
function keys (obj) {
  let keysArray = [];
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          keysArray.push(key);
      }
  }
  return keysArray;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3}) 

//task №8
function values (obj) {
  let valuesArray = [];
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          valuesArray.push(obj[key]);
      }
  }
  return valuesArray;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3}) 

//task №9
function showFormattedDate(date) {
  var options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  let shortFormat = (date.toLocaleString("en-GB", options)).toString().split(" ");
  return ("Date: " + shortFormat[0] + " of " + shortFormat[1] + ", " + shortFormat[2]);
}
showFormattedDate(new Date('2019-01-27T01:10:00'))

//task №10
function isEvenYear(date){
  return (((date.getFullYear()) % 2) === 0);
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//task №11
function isEvenMonth(date){
  return (((date.getMonth()+1) % 2) === 0);
}
isEvenMonth(new Date('2019-02-27T01:10:00'));