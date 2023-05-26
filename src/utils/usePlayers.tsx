import { useState, useEffect } from 'react';

interface Player {
  name: string;
  player_id: string;
  player_age: string;
}

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                name: 'João da Silva',
                player_id: '1',
                player_age: '25'
              },
              {
                name: 'Pedro Santos',
                player_id: '2',
                player_age: '25'
              },
              {
                name: 'André Almeida',
                player_id: '3',
                player_age: '25'
              },
              {
                name: 'Ricardo Ferreira',
                player_id: '4',
                player_age: '25'
              },
              {
                name: 'Luís Oliveira',
                player_id: '5',
                player_age: '25'
              },
              {
                name: 'Miguel Costa',
                player_id: '6',
                player_age: '25'
              },
              {
                name: 'Carlos Rodrigues',
                player_id: '7',
                player_age: '25'
              },
              {
                name: 'António Martins',
                player_id: '8',
                player_age: '25'
              },
              {
                name: 'Fernando Pereira',
                player_id: '9',
                player_age: '25'
              },
              {
                name: 'Gustavo Carvalho',
                player_id: '10',
                player_age: '25'
              },
              {
                name: 'Rui Sousa',
                player_id: '11',
                player_age: '25'
              }
            ],
          },
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const players: Player[] = response.data.response;
        setPlayers(players);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  return players;
}
