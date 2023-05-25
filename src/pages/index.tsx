import { useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  name: string;
  country_id: number;
}

interface Season {
  year: string;
  season_id: number;
}


export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `http://api-football.com/v3/countries`,
          {
            headers: {
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
              'x-rapidapi-key': process.env.API_FOOTBALL_KEY,
            },
          }
        );
        setCountries(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSeasons = async (countryId: number) => {
      try {
        const response = await axios.get(
          `http://api-football.com/v3/leagues/seasons/${countryId}`,
          {
            headers: {
              'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
              'x-rapidapi-key': process.env.API_FOOTBALL_KEY,
            },
          }
        );
        setSeasons(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meu Time</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Países:</h2>
        <ul>
          {countries.map((country) => (
            <li key={country.country_id}>{country.name}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Temporadas:</h2>
        <ul>
          {seasons.map((season) => (
            <li key={season.season_id}>{season.year}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
