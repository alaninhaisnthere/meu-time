import axios from 'axios';

export interface League {
  name: string;
}

export const fetchLeague = async (): Promise<League[]> => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/leagues', {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88',
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const leagues: League[] = response.data.response.map((item: any) => ({
      name: item.league.name,
    }));

    return leagues;
  } catch (error) {
    console.error(error);
    return [];
  }
};
