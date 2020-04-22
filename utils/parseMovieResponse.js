const validateMovie = (movie) => {
  return !!(
    movie.id &&
    movie.title &&
    movie.release_date &&
    movie.runtime &&
    movie.synopsis
  );
};

const validateAndParseGenres = (genres) => {
  const genreArr = genres.map((genre) => {
    return genre.genre_name ? genre.genre_name : '';
  });
  return genreArr.join(' ');
};

const validateAndParseLists = (lists) => {
  const listArr = lists.map((list) => {
    return list.list_name ? list.list_name : '';
  });
  return listArr.join(' ');
};

const parseMovieResponse = (dataObj) => {
  console.log('***', dataObj);
  const errorMessage = 'Improper data format';
  if (!dataObj.movie || !dataObj.genres || !dataObj.lists) {
    return errorMessage;
  }
  const { movie, genres, lists } = dataObj;

  const isValid = validateMovie(movie);

  if (isValid) {
    return {
      id: movie.id,
      title: movie.title,
      releaseDate: movie.release_date,
      runtime: movie.runtime,
      synopsis: movie.synopsis,
      trailerUrl: movie.trailer_url || null,
      genres: validateAndParseGenres(genres),
      lists: validateAndParseLists(lists),
    };
  }
  return errorMessage;
};

export default parseMovieResponse;
