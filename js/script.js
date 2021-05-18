 "use strict";

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns);




// let x = 5; alert( x++);

// [ ] + false - null + true
// console.log([] + false - null + true); // "false"

// let y = 1;
// let x = y = 2;
// alert(x);

//console.log([] + 1 + 2); // '12'

// alert( '1'[0] );

// console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи
// ИЛИ запинается на правде

// console.log(!! (1 && 2) === (1 && 2));
           // 3
//alert(null || 2 && 3 || 4);

// const a = [1, 2, 3]; 
// const b = [1, 2, 3];

// console.log(a == b);

//alert(+'infinity');

// console.log('Ежик' > 'яблоко');

/* console.log(0 || '' || 2 || undefined) || true || false; */


/* // to string

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log('https://vk.com/catalog/' + num);

const fontzide = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));


let answ = +prompt('hello','');

// To boolean

// 0, '', null, undefined, NaN;

// 1)
let switcher = null;

if (switcher) {
    console.log('working...');
}

switcher = 1;

if (switcher) {
    console.log('working...');
}

//2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4444')); */


/*  function hello() {
    console.log('Hello world');
}

hello();

function hi() {
    console.log('Say hi!');
}

hi();

const arr = [1, 14, 4, 30, 54],
      sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(sorted); */



/* let str = 'some';
let strObj = new String(str);

 console.log(typeof(str));
console.log(typeof(strObj)); 

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('hello');
    }
};

const john = Object.create(soldier);

 const john = {
    health: 100
};

 john.__proto__ = soldier; 

Object.setPrototypeOf(john, soldier);

 console.log(john);
john.sayHello(); */
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


/* const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.cound >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB >= 30) {
            console.log('Вы киноман');
        } else{
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
             let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre === null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе ');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }  
            
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres === null) {
                console.log('Вы ввели некоректные данные или не ввели их вовсе ');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }  
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i +1} - это ${item}`);
        });
    }
};
 */