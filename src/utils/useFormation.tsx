import { useState, useEffect } from 'react';

interface Formation {
  formation_id: string;
  type: string;
  usage: string;
}

export function useFormation() {
  const [formations, setFormations] = useState<Formation[]>([]);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = {
          data: {
            response: [
              {
                formation_id: '1',
                type: '4-2-3-1',
                usage: '15'
              },
            ],
          },
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const formations: Formation[] = response.data.response;
        setFormations(formations);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormation();
  }, []);

  return formations;
}
