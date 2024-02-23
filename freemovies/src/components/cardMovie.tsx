import { Movie } from "@/interface/CardMovieInterface";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

interface CardMovieProps {
  movies: Movie[];
  className?: string;
}

function CardMovie({ movies, className }: CardMovieProps): JSX.Element {
  return (
    <div className={className}>
      {/* Adicione esta linha */}
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <Card className="min-w-[150px] max-w-[200px] rounded-2xl flex flex-col m-4 hover:bg-sky-600 hover:border-sky-800">
            <CardContent className="py-0 pt-1 px-1">
              <div key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="h-full object-cover w-full rounded-2xl"
                />
                <h2 className="text-lg font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
                  {movie.title}
                </h2>

                <div className=" flex flex-col text-sm font-serif ">
                  <span>Nota: {movie.vote_average}</span>
                  <span>Popularidade: {movie.popularity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default CardMovie;
