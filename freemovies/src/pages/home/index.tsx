import { useEffect, useState } from "react";
import movieService from "../../service/api/movieService";
import { Card, CardContent } from "@/components/ui/card";

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
      <h1 className="text-2xl font-bold flex justify-center">
        Filmes populares
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* Adicione esta linha */}
        {movies.map((movie) => (
          <Card className="min-w-[150px] max-w-[200px] rounded-2xl flex flex-col m-4">
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

                <div className=" flex flex-col">
                  <span className="text-sm">Nota: {movie.vote_average}</span>
                  <span className="text-sm">
                    Popularidade: {movie.popularity}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
