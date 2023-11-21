import React from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Movie ID: {id}</p>
    </div>
  );
};

export default Movies;
