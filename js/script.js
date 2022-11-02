let numberOfFilms;

function start(){
     numberOfFilms=prompt("Сколько фильмов вы посмотрели?","");
     while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
        numberOfFilms=prompt("Сколько фильмов вы посмотрели?","");
     }
}

start();

const personalMovieDB={

    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false

};

function rememberMyFilms(){
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
}
rememberMyFilms();

function detectPersonalLevel(){
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
}
detectPersonalLevel();

function writeYourGenres(){
    for(let i=0;i<3;i++){
        personalMovieDB.genres[i]=prompt(`Ваш любимый жанр под номером ${i+1}`,"");
    }
}
writeYourGenres();

function showMyDB(){
if(personalMovieDB.privat==false){
    console.log(personalMovieDB);
} else{
    console.log('База засекречена');
}
}
showMyDB();


