import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parseMovieReponse from '../../utils/parseMovieResponse';
import Row from '../../components/Row';
import styled from 'styled-components';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { data } = await axios.get('http://localhost:8888/movies');
        const parsedData = data.movies.map((movie) => parseMovieReponse(movie));
        setMovies(parsedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, []);

  console.log('movies', movies);

  return (
    <Page>
      <div>Welcome to A_List</div>
      <div>
        {movies &&
          movies.map((movie) => (
            <Row key={movie.id} rowType="MOVIE" content={movie} />
          ))}
      </div>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
`;

export default Movies;
