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
          {/* ... */}
        </div>

        {/* ... */}

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
      </div>
    </>
  );
}
