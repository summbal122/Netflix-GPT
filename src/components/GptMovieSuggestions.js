import { useSelector } from "react-redux"
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
 const { movieNames, movieResults }   = useSelector((store) => store.gpt)
  if(!movieNames) return null;

  return (
    <div className="p-4 m-4 text-orange-500 bg-black">
      {movieNames.map((movieName, index) => (
  <MovieList
    key={movieName}
    title={movieName}
    movies={movieResults[index]}
  />
))}

    </div>
  )
}

export default GptMovieSuggestions
