export interface League {
  name: string;
  type: string;
}

export const fetchLeague = async (): Promise<League[]> => {
  try {
    const response = {
      data: {
        response: [
          {
            name: 'Euro Championship',
            type: 'Cup',
          },
          {
            name: 'Ligue 1',
            type: 'League',
          },
          {
            name: 'Jupiler Pro League',
            type: 'League',
          },
        ],
      },
    };
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const leagues: League[] = response.data.response;
    return leagues;
  } catch (error) {
    console.error(error);
    return [];
  }
};
