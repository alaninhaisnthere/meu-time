import axios from 'axios';

export interface League {
  id: number
  name: string;
  country: string;
}

export const fetchLeaguesByCountryAndSeason = async (country: string, season: string): Promise<League[]> => {
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/leagues?country=${country}&season=${season}`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88',
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const leagues: League[] = response.data.response.map((item: any) => ({
      id: item.league.id,
      name: item.league.name,
      country: item.country.name,
    }));

    return leagues;
  } catch (error) {
    console.error(error);
    return [];
  }
};