import Link from 'next/link';
import { SetStateAction, useState } from 'react';

export default function IndexPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');

  const handleCountryChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedCountry(event.target.value);
  };

  const handleSeasonChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const selectedValue = event.target.value;
    if (selectedCountry) {
      setSelectedSeason(selectedValue);
    }
  };

  const handleLeagueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    const selectedValue = event.target.value;
    if (selectedCountry && selectedSeason) {
      setSelectedLeague(selectedValue);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen font-mulish">
        <h1 className="text-6xl font-bold mb-5">Nova Pesquisa</h1>
        <div className="space-y-4">
          <div className="flex mb-2 text-2xl font-bold">
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10"
            >
              <option value="">Selecione um país</option>
              <option value="Country 1">Country 1</option>
              <option value="Country 2">Country 2</option>
              <option value="Country 3">Country 3</option>
              <option value="Country 4">Country 4</option>
            </select>
          </div>
          <div className="flex mb-2 text-2xl font-bold">
            <select
              id="season"
              value={selectedSeason}
              onChange={handleSeasonChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10"
              disabled={!selectedCountry}
            >
              <option value="">Selecione uma temporada</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>
          <div className="flex mb-4 text-2xl font-bold">
            <select
              id="league"
              value={selectedLeague}
              onChange={handleLeagueChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10"
              disabled={!selectedCountry || !selectedSeason}
            >
              <option value="">Selecione uma liga</option>
              <option value="Liga 1">Liga 1</option>
              <option value="Liga 2">Liga 2</option>
              <option value="Liga 3">Liga 3</option>
            </select>
          </div>
        </div>
        <Link
          href={`/results?country=${selectedCountry}&season=${selectedSeason}&league=${selectedLeague}`} className="bg-yellow-400 text-black text-xl font-bold py-2 px-4 rounded mt-4"
        >
          Pesquisar
        </Link>
      </div>
    </>
  );
}
