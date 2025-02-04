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


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = [...array].sort((a, b) => a.title.localeCompare(b.title));
  result = result.map(item => item.title);
  result = result.slice(0, 20)
  console.log("EXERCICE 4 ->", result);
  return result;

}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesCopy = [...movies];
  return moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(category) {

  const moviesInCategory = this.movies.filter(
    movie => movie.genre.includes(category) && movie.score !== null
  );

  if (moviesInCategory.length === 0) {
    return 0;
  }

  const totalScore = moviesInCategory.reduce((sum, movie) => sum + movie.score, 0);

  const averageScore = totalScore / moviesInCategory.length;

  return averageScore;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration;
    let totalMinutes = 0;

    if (duration.includes('h')) {
      const [hoursStr, minutesStr] = duration.split('h');
      const hours = parseInt(hoursStr.trim(), 10) || 0;
      const minutes = parseInt(minutesStr?.replace('min', '').trim(), 10) || 0;
      totalMinutes = hours * 60 + minutes;
    } else if (duration.includes('min')) {
      totalMinutes = parseInt(duration.replace('min', '').trim(), 10);
    }
    return {
      ...movie, // Copia todas las propiedades de la película original
      duration: totalMinutes, // Reemplaza el campo duration con minutos
    };
  });
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let result = [];
  let peliculasAño = movies.filter(movie => movie.year === year);

  if (peliculasAño.length === 0) {
    return `No hay películas registradas en el año ${year}.`;
  }
  let mejorPelicula = peliculasAño.reduce((best, current) => {
    return current.score > best.score ? current : best;
  });
  result.push(mejorPelicula);
  console.log(`La mejor película del año ${year} es: ${mejorPelicula.title}`);
  return res;
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
