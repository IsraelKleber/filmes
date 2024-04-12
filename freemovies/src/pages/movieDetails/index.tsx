import { Card, CardContent } from "@/components/ui/card";
import movieService from "@/service/api/movieService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function MovieDetails() {
  const { id } = useParams<string>();
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    handleMovieDetails();
  }, []);

  async function handleMovieDetails() {
    if(id){
      await movieService
        .getMovieDetails(id)
        .then((response) => {
          setMovie(response);
          console.log("Filmes", response);
        })
        .catch((error) => {
          console.log("Erro", error);
        });
      }
  }

  return (
      <div className="grid grid-cols-4 w-full h-[350px] bg-slate-600 items-center">
        <div></div> {/* Primeira parte do grid */}
        {movie && (
          <Card className="min-w-[150px] max-w-[200px] rounded-2xl flex flex-col items-center justify-center ml-4">
            {" "}
            {/* Segunda parte do grid */}
            <CardContent className="p-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie?.title}
                className="h-full object-cover w-full rounded-2xl"
              />
            </CardContent>
          </Card>
        )}
        <div className="p-2">
          {" "}
          {/* Terceira parte do grid */}
          {movie && (
            <>
              <h2 className="text-lg font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
                {movie?.title}
              </h2>

              <div className="flex flex-col gap-1">
                <span className="text-sm">Nota: {movie?.vote_average}</span>
                <span className="text-sm">
                  Popularidade: {movie?.popularity}
                </span>
                <h2 className="text-lg font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
                  Sinopse:
                </h2>
                <p>{movie?.overview}</p>
              </div>
            </>
          )}
        </div>
        <div></div> {/* Quarta parte do grid */}
      </div>
  );
}

export default MovieDetails;
