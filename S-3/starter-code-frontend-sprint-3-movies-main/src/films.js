const array = require('../src/data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director === director)

  return result;
}

// Exercise 3: Calculate the average of the films of a given director
function moviesAverageOfDirector(array, director) {
  let result = array.filter(item => item.director === director);
  if (result.length === 0) {
    console.log(`No movies found for director: ${director}`);
    return 0; 
  }

  let totalScore = result.reduce((acc, item) => acc + item.score, 0);

  let average = (totalScore / result.length).toFixed(2);

  console.log(`Average score of movies by ${director}: ${average}`);
  return parseFloat(average); 
}


// // Exercise 4:  Alphabetic order by title 
// function orderAlphabetically(array) {
//   let result = [...array].sort((a, b) => a.title.localeCompare(b.title));
//   result = result.map(item => item.title);
//   result = result.slice(0, 20)
//   console.log("EXERCICE 4 ->", result);
//   return result;

// }

// // Exercise 5: Order by year, ascending
// function orderByYear(movies) {
//   if (!Array.isArray(movies)) {
//     throw new Error("Input debe ser un array");
//   }
//   const moviesCopy = [...movies];

//   return moviesCopy.sort((a, b) => {
//     if (a.year === b.year) {
//       return a.title.localeCompare(b.title); 
//     }
//     return a.year - b.year; 
//   });
// }


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
