export interface Season {
  response: number;
}

export const fetchSeasons = async (): Promise<Season[]> => {
  try {
    const response = {
      data: {
        response: [
          2008,
          2009,
          2010,
        ],
      },
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const seasons: Season[] = response.data.response.map((year: number) => ({ response: year }));
    return seasons;
  } catch (error) {
    console.error(error);
    return [];
  }
};
