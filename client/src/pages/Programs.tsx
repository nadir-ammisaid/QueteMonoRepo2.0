import { useEffect, useState } from "react";
import "./Programs.css";

interface programsType {
  id: number;
  title: string;
  country: string;
  year: number;
  synopsis: string;
  poster: string;
}

function Programs() {
  const [programsData, setProgramsData] = useState<programsType[]>([]);

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
            {programsData.map((programs) => (
              <div key={programs.id}>
                <h2>{programs.id}</h2>
                <h2>{programs.title}</h2>
                <h2>{programs.country}</h2>
                <h2>{programs.year}</h2>
                <p>{programs.synopsis}</p>
                <img src={programs.poster} alt={programs.title} />
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
