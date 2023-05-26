import { useState, useEffect } from 'react';

interface GraphicsData {
  time: string;
  percentage: number;
}

export function useGraphics() {
  const [graphicsData, setGraphicsData] = useState<GraphicsData[]>([]);

  useEffect(() => {
    const generateRandomData = () => {
      const data: GraphicsData[] = [
        { time: '0-15"', percentage: Math.random() * 100 },
        { time: '16-30"', percentage: Math.random() * 100 },
        { time: '31-45"', percentage: Math.random() * 100 },
      ];
      setGraphicsData(data);
    };

    generateRandomData();
  }, []);

  return graphicsData;
}
