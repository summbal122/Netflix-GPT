import { useSelector} from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
 
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
 

  
  return (
    <div className="text-white space-y-4">
  
      {movieNames.map((movieName, index) => (
       <> 
        <MovieList
          key={movieName.key}
          title={movieName}
          movies={movieResults[index]}
        />
        </>
      ))
      }
    </div>
  );
};

export default GptMovieSuggestions;

