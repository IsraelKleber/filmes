import { useEffect, useState } from "react";
import movieService from "../../service/api/movieService";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    handleMovies();
  }, []);

  function handleMovies(): void {
    void movieService
      .getMoviePopularList()
      .then((response) => {
        setMovies(response.results);
        console.log("Filmes", response);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  }

  return (
    <>
      <h1 className="text-2xl font-bold underline">Filmes</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </>
  );
}

export default Home;
