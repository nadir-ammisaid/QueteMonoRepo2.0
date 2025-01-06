import { useEffect, useState } from "react";
import "./Programs.css";

function Programs() {
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((resultAPI) => resultAPI.json())
      .then((responseJson) => setProgramsData(responseJson));
  }, []);

  return (
    <>
      <h1>These are our programs :</h1>
      <article>
        {programsData ? (
          <>
            {programsData.map((tableau) => (
              <div key={tableau.id}>
                <h2>{tableau.id}</h2>
                <h2>{tableau.title}</h2>
                <h2>{tableau.country}</h2>
                <h2>{tableau.year}</h2>
                <p>{tableau.synopsis}</p>
                <img src={tableau.poster} alt={tableau.title} />
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </>
  );
}

export default Programs;
