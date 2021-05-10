 "use strict";

let str = 'some';
let strObj = new String(str);

/* console.log(typeof(str));
console.log(typeof(strObj)); */

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = Object.create(soldier);

/* const john = {
    health: 100
};

 john.__proto__ = soldier; 

Object.setPrototypeOf(john, soldier);

 console.log(john); */
john.sayHello();
/*
let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
}; */

/* const copy = obj; //Ссылку

copy.a = 10;

console.log(copy);
console.log(obj); 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj [key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers); 

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

 console.log(add);
console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'adidas';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimio', 'rutube'],
      blogs = ['wrodpress','livejournal','blogger'],
      internet = [...video, ...blogs, 'vk','facebook'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q}; */

/*  const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
} 


arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

 arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

 for (let value of arr) {
    console.log(value);
}

const str = prompt('','');
const products = str.split('','');
products.sort();
console.log(products.join('; '));
 */

/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);
 */
/* console.log(Object.keys(options).length);
 */
/* console.log(options.name);

delete options.name;

console.log(options); */

/* let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);
 */


/*   function first() {
      // Do something
      setTimeout(function () {
          console.log(1);
      }, 500);
  }

  function second() {
      console.log(2);
  }

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}
function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done); */


/* let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
        if (a != null && b !=null && a !='' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

 rememberMyFilms (); 

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.cound >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB >= 30) {
        console.log('Вы киноман');
    } else{
        console.log('Произошла ошибка');
    }
}

 detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = 
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres(); */