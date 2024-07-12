import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

type Movie = {
  id: number;
  title: string;
  imageURL: string;
  amount: number;
  describe: string;
  time_minutes: number;
  vote_average: number;
};

const MovieDetails = ({ movies }: { movies: Movie[] }) => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.imageURL} alt={movie.title} />
      <p>{movie.describe}</p>
      <p>Tempo: {movie.time_minutes} minutos</p>
      <p>Quantidade: {movie.amount}</p>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieDetails;
