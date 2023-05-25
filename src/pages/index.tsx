import Link from 'next/link';
import { useState } from 'react';

export default function IndexPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(event.target.value);
  };

  const handleLeagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLeague(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Meu Time</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Selecionar:</h2>
        <div className="flex mb-2">
          <label htmlFor="country">País:</label>
          <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Selecione um país</option>
            <option value="Country 1">Country 1</option>
            <option value="Country 2">Country 2</option>
            <option value="Country 3">Country 3</option>
            <option value="Country 4">Country 4</option>
          </select>
        </div>
        <div className="flex mb-2">
          <label htmlFor="season">Temporada:</label>
          <select id="season" value={selectedSeason} onChange={handleSeasonChange}>
            <option value="">Selecione uma temporada</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className="flex mb-2">
          <label htmlFor="league">Liga:</label>
          <select id="league" value={selectedLeague} onChange={handleLeagueChange}>
            <option value="">Selecione uma liga</option>
            <option value="Liga 1">Liga 1</option>
            <option value="Liga 2">Liga 2</option>
            <option value="Liga 3">Liga 3</option>
          </select>
        </div>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={`/results?country=${selectedCountry}&season=${selectedSeason}&league=${selectedLeague}`}>
          Ver Resultados
        </Link>
      </div>
    </div >
  );
}
