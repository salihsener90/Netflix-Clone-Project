import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom"
import { baseImageURL } from "../constants/apiConstants";

const Hero = () => {
  //store abone olma
  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.populerMovies,
    isLoading: store.movieReducer.isLoading,
  }));

  const randomIndex = Math.floor(Math.random() * movieList.length);
  // console.log(randomIndex);
  const randomMovie = movieList[randomIndex];
  // console.log(randomMovie);

  return (
    <div className="row p-4">
      {isLoading && <Loading />}
      {/* yüklenme bittiyse  */}
      {!isLoading && (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center">
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className="text-warning fw-bold" > IMDB {randomMovie.vote_average}</p>

            <div className="d-flex gap-3">
        <Link to={`movie/${randomMovie.id}`}
        className="btn btn-danger">
        Film İzle       
        </Link>
        <Link className="btn btn-info">
        Listeye Ekle     
        </Link>
            </div>
          </div>

          <div className="col-md-6">
        <img className="img-fluid" src={`${baseImageURL}${randomMovie.backdrop_path}`}/>

          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
