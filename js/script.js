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

for(let i=0;i<2;i++){
    const lastWF=prompt("Один из последних просмотренных фильмов?",""),
    rate=prompt("На сколько оцените его?","");
    if(lastWF != null && rate != null && lastWF != '' && rate != '' && lastWF.length < 50){
        personalMovieDB.movies[lastWF]= rate;
        console.log('done');
    } else{
        console.log('error');
        i--;
    }
}
if(personalMovieDB.count<10){
    alert('Просмотрено мало фильмов');
} else{
    if(personalMovieDB.count>10 && personalMovieDB.count<30){
        alert('Вы классический зритель');
    } else{
        if(personalMovieDB.count>30){
            alert('Вы киноман');
        } else{
            alert('Произошла ошибка');
        }
    }
}
console.log(personalMovieDB);