import { useState, useEffect } from 'react';

interface Country {
  name: string;
  country_id: string;
}

interface Season {
  year: string;
  season_id: string;
}

interface League {
  year: string;
  league_id: string;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                name: 'Country 1',
                country_id: '1',
              },
              {
                name: 'Country 2',
                country_id: '2',
              },
              {
                name: 'Country 3',
                country_id: '3',
              },
              {
                name: 'Country 4',
                country_id: '4',
              },
            ],
          },
        };
        await new Promise(resolve => setTimeout(resolve, 1000));
        const countries: Country[] = response.data.response;
        setCountries(countries);
        console.log(countries);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSeasons = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                year: '2021',
                season_id: '1',
              },
              {
                year: '2022',
                season_id: '2',
              },
              {
                year: '2023',
                season_id: '3',
              },
            ],
          },
        };
        await new Promise(resolve => setTimeout(resolve, 1000));
        const seasons: Season[] = response.data.response;
        setSeasons(seasons);
        console.log(seasons);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchLeagues = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                year: '2018',
                league_id: '1',
              },
              {
                year: '2019',
                league_id: '2',
              },
              {
                year: '2020',
                league_id: '3',
              },
            ],
          },
        };
        await new Promise(resolve => setTimeout(resolve, 1000));
        const leagues: League[] = response.data.response;
        setLeagues(leagues);
        console.log(leagues);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
    fetchSeasons();
    fetchLeagues();
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

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Ligas:</h2>
        <ul>
          {leagues.map((league) => (
            <li key={league.league_id}>{league.year}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
