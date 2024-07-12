import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../components/MovieDetails.css";

type Filme = {
  id: number;
  title: string;
  imageURL: string;
  amount: number;
  describe: string;
  time_minutes: number;
  vote_average: number;
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Filme | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3333/filme/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar o filme');
        }
        return response.json();
      })
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError('Erro ao buscar o filme: ' + error.message);
      });
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="movie-details">
      <div className='info'>
        <h1>{movie.title}</h1>
        <img src={movie.imageURL} alt={movie.title} />
        <p>{movie.describe}</p>
        <p>Tempo: {movie.time_minutes} minutos</p>
        <p>Orçamento: {movie.amount}</p>
        <p>Avaliação: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
