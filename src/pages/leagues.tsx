import { useState, useEffect } from 'react';

interface League {
  name: string;
  league_id: string;
}

export default function LeaguesPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                name: 'league 1',
                league_id: '1',
              },
              {
                name: 'league 2',
                league_id: '2',
              },
              {
                name: 'league 3',
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

    if (isLoggedIn) {
      fetchLeagues();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto p-4">
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Ligas</h1>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Lista de ligas:</h2>
            <ul>
              {leagues.map((league) => (
                <li key={league.league_id}>{league.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Faça o login para acessar esta página.</p>
      )}
    </div>
  );
}
