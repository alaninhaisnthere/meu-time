import { useState, useEffect } from 'react';

interface Season {
  year: string;
  season_id: string;
}

export default function SeasonsPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const seasons: Season[] = response.data.response;
        setSeasons(seasons);
        console.log(seasons);
      } catch (error) {
        console.error(error);
      }
    };

    if (isLoggedIn) {
      fetchSeasons();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto p-4">
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Temporadas</h1>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Lista de temporadas:</h2>
            <ul>
              {seasons.map((season) => (
                <li key={season.season_id}>{season.year}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Faça o login para acessar as informações de temporadas.</p>
      )}
    </div>
  );
}
