import { useRouter } from 'next/router';
import { SetStateAction, useState, useEffect } from 'react';
import { fetchCountries, Country } from '../utils/api-countries';
import { fetchLeaguesByCountryAndSeason, League } from '@/utils/api-leagues';
import { fetchSeasons, Season } from '@/utils/api-seasons';
import { fetchTeamsById } from '@/utils/api-teams';

export default function IndexPage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [leagues, setLeagues] = useState<League[]>([]);
  const [seasons, setSeasons] = useState<Season[]>([]);
  const [teams, setTeams] = useState<any[]>([]);

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

  const handleCountryChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSelectedCountry(event.target.value);
  };

  const handleSeasonChange = (event: { target: { value: SetStateAction<string> } }) => {
    const selectedValue = event.target.value;
    setSelectedSeason(selectedValue);
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

  const handleLeagueChange = (event: { target: { value: SetStateAction<string> } }) => {
    const selectedValue = event.target.value;
    setSelectedLeague(selectedValue);
  };

  const isSearchDisabled = !selectedCountry || !selectedSeason || !selectedLeague;

  const handleSearch = async () => {
    if (!isSearchDisabled) {
      const league = leagues.find((league) => league.name === selectedLeague);
      if (league) {
        const leagueTeams = league.teams;
        const teamsData = await Promise.all(
          leagueTeams.map(async (teamId: number) => {
            const teamData = await fetchTeamsById(teamId);
            return teamData;
          })
        );
        setTeams(teamsData);
      }

      router.push(`/results?country=${selectedCountry}&season=${selectedSeason}&league=${selectedLeague}`);
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
                <option value={season.response} key={season.response}>
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
              className="border text-white bg-purple-600 rounded px-4 py-1 w-full h-10 "
              disabled={!selectedCountry || !selectedSeason}
            >
              <option value="">Selecione uma liga</option>
              {leagues.map((league) => (
                <option value={league.name} key={league.name}>
                  {league.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {teams.length > 0 && (
          <div className="mt-8">
            <h2 className="text-4xl font-bold mb-4">Times</h2>
            <ul>
              {teams.map((team) => (
                <li key={team.team.id}>{team.team.name}</li>
              ))}
            </ul>
          </div>
        )}


        {selectedCountry && selectedSeason && selectedLeague ? (
          <button
            onClick={handleSearch}
            className="bg-yellow-400 text-black text-xl font-bold py-2 px-4 rounded mt-4"
          >
            Pesquisar
          </button>
        ) : (
          <button
            className="bg-yellow-400 text-black text-xl font-bold py-2 px-4 rounded mt-4 opacity-50 cursor-not-allowed"
            disabled
          >
            Pesquisar
          </button>
        )}
      </div>
    </>
  );
}