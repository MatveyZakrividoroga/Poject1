const numberOfFilms=+prompt("Сколько фильмов вы посмотрели?","");
const personalMovieDB={

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

};
const lastWF1=prompt("Один из последних просмотренных фильмов?","");
const rate1=prompt("На сколько оцените его?","");
const lastWF2=prompt("Один из последних просмотренных фильмов?","");
const rate2=prompt("На сколько оцените его?","");
personalMovieDB.movies[lastWF1]=rate1;
personalMovieDB.movies[lastWF2]=rate2;
//console.log(personalMovieDB);