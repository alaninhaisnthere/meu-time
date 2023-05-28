import axios from 'axios';

export interface Team {
  id: number,
  name: String,
  country: String
}

export const fetchTeamsById = async (leagueId: number, season: number) => {
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/teams?league=${leagueId}&season=${season}`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88',
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const teams: Team[] = response.data.response.map((item: any) => ({
      id: item.team.id,
      name: item.team.name,
      country: item.team.name,
    }));

    return teams;
  } catch (error) {
    console.error(error);
    return [];
  }
};