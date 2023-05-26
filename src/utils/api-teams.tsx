import axios from 'axios';

export const fetchTeamsById = async (teamId: number) => {
  try {
    const response = await axios.get(`https://v3.football.api-sports.io/teams?id=${teamId}`, {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88',
      },
    });

    return response.data.response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
