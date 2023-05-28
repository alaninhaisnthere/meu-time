import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchCountries, Country } from '../utils/api-countries';
import { fetchLeaguesByCountryAndSeason, League } from '@/utils/api-leagues';
import { fetchSeasons, Season } from '@/utils/api-seasons';
import { fetchTeamsById, Team } from '@/utils/api-teams';

export default function IndexPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string | number>('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedSeasons = await fetchSeasons();
      setSeasons(fetchedSeasons);
    };

    fetchData();
  }, []);

  const handleCountryChange = (event: { target: { value: string } }) => {
    setSelectedCountry(event.target.value);
  };

  const handleSeasonChange = (event: { target: { value: string } }) => {
    setSelectedSeason(event.target.value);
  };

  useEffect(() => {
    if (selectedCountry && selectedSeason) {
      const fetchData = async () => {
        const fetchedLeagues = await fetchLeaguesByCountryAndSeason(selectedCountry, selectedSeason);
        setLeagues(fetchedLeagues);
      };

      fetchData();
    }
  }, [selectedCountry, selectedSeason]);

  const handleLeagueChange = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value;
    setSelectedLeague(selectedValue);

    const selectedLeague = leagues.find((league) => league.name === selectedValue);

    if (selectedLeague) {
      setSelectedLeagueId(selectedLeague.id);
    }
  };

  useEffect(() => {
    if (selectedCountry && selectedSeason && selectedLeagueId) {
      const fetchData = async () => {
        const fetchedTeams = await fetchTeamsById(selectedLeagueId, Number(selectedSeason));
        setTeams(fetchedTeams);
      };

      fetchData();
    }
  }, [selectedCountry, selectedSeason, selectedLeagueId]);

  const handleTeamsChange = (event: { target: { value: string } }) => {
    const selectedValue = event.target.value.toString();
    setSelectedSeason(selectedValue);
  };

  const isSearchDisabled = !selectedCountry || !selectedSeason || !selectedLeague;

  const handleSearch = () => {
    if (!isSearchDisabled) {
      router.push(`/results?country=${selectedCountry}&season=${selectedSeason}&league=${selectedLeague}`);
    }
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen font-mulish">
        <h1 className="text-6xl font-bold mb-5">Nova Pesquisa</h1>
        <div className="flex flex-col items-center w-full space-y-4">
          <div className="flex mb-2 text-2xl font-bold">
            <select
              id="country"
              value={selectedCountry}
              onChange={handleCountryChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10 focus:outline-none"
            >
              <option value="">Selecione um país</option>
              {countries.map((country) => (
                <option value={country.name} key={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-2 text-2xl font-bold">
            <select
              id="season"
              value={selectedSeason}
              onChange={handleSeasonChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10 focus:outline-none"
              disabled={!selectedCountry}
            >
              <option value="">Selecione uma temporada</option>
              {seasons.map((season) => (
                <option value={String(season.response)} key={season.response}>
                  {season.response}
                </option>
              ))}
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
              {leagues.map((league) => (
                <option value={league.name} key={league.id}>
                  {league.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex mb-4 text-2xl font-bold">
            <select
              id="teams"
              value={selectedSeason}
              onChange={handleTeamsChange}
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10"
              disabled={!selectedCountry || !selectedSeason || !selectedLeague}
            >
              <option value="">Selecione um time</option>
              {teams.map((team) => (
                <option value={team.name} key={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className={`${isSearchDisabled ? 'opacity-50 cursor-not-allowed' : ''
            } bg-yellow-400 text-black text-xl font-bold py-2 px-4 rounded mt-4`}
          disabled={isSearchDisabled}
        >
          Pesquisar
        </button>
      </div>
    </>
  );
}
