/* "use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }   
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно давольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB); */

for (let i =1; i <= 5; i++) {
    const a = prompt('Сколько раз вы отжимаетесь за один подход?', '');
    
    if (a !=null && a !='' && a.length >= 10) {
        console.log('Низкий уровень');
    } else if (a <= 15) {
        console.log('Средний уровень!');
    } else if (a <= 30) {
        console.log('Хороший уровень!');
    } else if (a <=50) {
        console.log('Высокий уровень!');
    } else if (a <= 75) {
        console.log('Мастер!');
    }
}