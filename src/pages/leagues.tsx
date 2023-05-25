import { useState, useEffect } from 'react';

interface League {
  year: string;
  league_id: string;
}

export default function LeaguesPage() {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const leagues: League[] = response.data.response;
        setLeagues(leagues);
        console.log(leagues);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ligas</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Lista de ligas:</h2>
        <ul>
          {leagues.map((league) => (
            <li key={league.league_id}>{league.year}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
