import { useEffect, useState } from "react";
import movieService from "../../service/api/movieService";
import { Movie } from "@/interface/CardMovieInterface";
import CardMovie from "@/components/cardMovie";

function Home() {
	const [movies, setMovies] = useState<Movie[]>([]);

	useEffect(() => {
		handleMovies();
	}, []);

	function handleMovies(): void {
		void movieService
			.getMoviesPopularList()
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
			<CardMovie
				movies={movies}
				className="flex flex-wrap justify-center"
			/>
		</>
	);
}

export default Home;
