/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов

 'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item =>{
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();


movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});  


const btns = document.querySelector('button'),
      overlay = document.querySelector('.overlay');
 btn.onclick = function() {
    alert('click');
};

btn.onclick = function() {
    alert('Second click');
};
 

// let i = 0
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    i++;
    if (i ==1) {
        btn.removeEventListener('click', deleteElement);
    } 
};

 btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); 

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    console.log(event.target);
});
 */

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('current').parentNode.parentNode);
// console.log(document.querySelector('current').parentElement);

// console.log(document.querySelector('[data-current="3]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}