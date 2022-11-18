import React, { useState,useEffect } from "react";
import { getDataFilm } from "../../../helpers/getData";
import { DataFilm, FilmPeople } from "../../../types/film";

interface Props {
  film: string;
}

const initialState: FilmPeople = {
  title: "",
  episode_id: 0,
  opening_crawl: "",
  director: "",
  producer: "",
};

export const Film: React.FC<Props> = ({ film }) => {
  const [filmState, setFilmState] = useState<DataFilm>({
    film: initialState,
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    getDataFilm(film)
      .then((response) =>
        setFilmState({ film: response, isLoading: false, isError: false })
      )
      .catch((err) =>
        setFilmState({ film: initialState, isLoading: false, isError: true })
      );
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {!filmState.isLoading ? (
        <div style={{}}>
          <h6>{filmState.film.title}</h6>
        </div>
      ) : (
        <>cargando</>
      )}
    </div>
  );
};
