import React, { useEffect } from "react";
import axios from "axios";
import { options } from "../constants/apiConstants";
import { useDispatch } from "react-redux";
import { actionsTypes } from "../redux/actions/ActionsTypes";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((store) => ({
    genres: store.movieReducer.genres,
  }));

  useEffect(() => {
    dispatch(setLoading(true));

    //film çekme işlemini tetikleme
    dispatch(getMovies());

    //  kategori çekne iişlemini tetileme
    dispatch(getGenres());
  }, []);
  console.log(genres);

  return (
    <div>
      <Hero />
      {genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
