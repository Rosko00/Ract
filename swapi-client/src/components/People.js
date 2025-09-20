import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../utils/api"; // predpokladám, že máš funkciu apiGet

function People() {
  const [people, setPeople] = useState(null); // state pre postavy

  useEffect(() => {
    async function fetchPeople() {
      const data = await apiGet("people/");
      setPeople(data.results);
    }
    fetchPeople();
  }, []); // spustí sa iba raz pri načítaní komponentu

  if (!people) return <p>Načítavam...</p>;

  return (
    <div>
      <h1>Postavy</h1>
      {people.map((person, index) => (
        <div key={index}>
          <h2>
            <Link to={`/people/${index + 1}`}>{person.name}</Link>
          </h2>
          <p>Výška: {person.height}</p>
          <p>Váha: {person.mass}</p>
        </div>
      ))}
    </div>
  );
}
export default People;
