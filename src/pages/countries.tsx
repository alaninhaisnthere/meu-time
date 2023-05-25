import { useState, useEffect } from 'react';

interface Country {
  name: string;
  country_id: string;
}

export default function CountriesPage({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                name: 'Country 1',
                country_id: '1',
              },
              {
                name: 'Country 2',
                country_id: '2',
              },
              {
                name: 'Country 3',
                country_id: '3',
              },
              {
                name: 'Country 4',
                country_id: '4',
              },
            ],
          },
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const countries: Country[] = response.data.response;
        setCountries(countries);
        console.log(countries);
      } catch (error) {
        console.error(error);
      }
    };

    if (isLoggedIn) {
      fetchCountries();
    }
  }, [isLoggedIn]);

  return (
    <div className="container mx-auto p-4">
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl font-bold mb-4">Países</h1>

          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Lista de países:</h2>
            <ul>
              {countries.map((country) => (
                <li key={country.country_id}>{country.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Faça o login para acessar esta página.</p>
      )}
    </div>
  );
}
