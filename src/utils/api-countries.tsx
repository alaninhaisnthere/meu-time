export interface Country {
  name: string;
  code: string;
}

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = {
      data: {
        response: [
          {
            name: 'Albania',
            code: 'AL',
          },
          {
            name: 'Algeria',
            code: 'DZ',
          },
          {
            name: 'Andorra',
            code: 'AD',
          },
        ],
      },
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const countries: Country[] = response.data.response;
    return countries;
  } catch (error) {
    console.error(error);
    return [];
  }
};
