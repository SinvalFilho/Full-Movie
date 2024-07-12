import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

type MovieCardProps = {
  movie: {
    id: number;
    title: string;
    imageURL: string;
    vote_average: number;
  };
};

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.imageURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
