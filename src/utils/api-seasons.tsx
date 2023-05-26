import axios from 'axios';

export interface Season {
  response: number;
}

export const fetchSeasons = async (): Promise<Season[]> => {
  try {
    const headers = {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88',
    };

    const response = await axios.get('https://v3.football.api-sports.io/leagues/seasons', { headers });
    const seasons: Season[] = response.data.response.map((year: number) => ({ response: year }));
    return seasons;
  } catch (error) {
    console.error(error);
    return [];
  }
};
