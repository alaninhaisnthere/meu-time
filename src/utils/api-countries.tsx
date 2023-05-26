import axios from 'axios';

export interface Country {
  name: string;
  code: string;
}

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get('https://v3.football.api-sports.io/countries', {
      headers: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': 'd98cd2a439afddad8db38ccc118dfe88'
      }
    });

    const countries: Country[] = response.data.response;
    return countries;
  } catch (error) {
    console.error(error);
    return [];
  }
};
