import { useState, useEffect } from 'react';
// import axios from 'axios';

interface Country {
  name: string;
  country_id: string;
}

// interface Season {
//   year: string;
//   season_id: number;
// }

// interface League {
//   league: {
//     name: string;
//     league_id: string;
//   }
// }

export default function Home() {
  const [countries] = useState<Country[]>([]);
  // const [seasons, setSeasons] = useState<Season[]>([]);
  // const [leagues, setLeagues] = useState<League[]>([]);

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
        console.log(countries);
      } catch (error) {
        console.error(error);
      }
    };

    // const fetchSeasons = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://v3.football.api-sports.io/leagues/seasons`,
    //       {
    //         headers: {
    //           'x-rapidapi-host': 'v3.football.api-sports.io',
    //           'x-apisports-key': 'f369337349f82b04406e5b1ec2576022'
    //         },
    //       }
    //     );
    //     setSeasons(response.data.response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // const fetchLeagues = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://v3.football.api-sports.io/leagues`,
    //       {
    //         headers: {
    //           'x-rapidapi-host': 'v3.football.api-sports.io',
    //           'x-rapidapi-key': 'f369337349f82b04406e5b1ec2576022'
    //         },
    //       }
    //     );
    //     setLeagues(response.data.response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

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

      {/* <div className="mb-4">
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
            <li key={league.league.league_id}>{league.league.name}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
