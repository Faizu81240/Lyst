import { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../components/searchBar/search';
import Sug from '../components/suggestionCard/sug';
import bg from '../assets/Tunnel.svg';

const CLIENT_ID = '3962da298329443a9dd0e28c904beee9';
const CLIENT_SECRET = '464393ac7c9d4feeb6399beb5a1277df';


async function getAccessToken(clientId, clientSecret) {
  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return '';
  }
}

async function searchSpotify(query, accessToken) {
  if (!query || !accessToken) return [];

  try {
    const response = await axios.get(
      `https://api.spotify.com/v1/search`,
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
        params: {
          q: query,
          type: 'track',
          limit: 7
        },
      }
    );
    console.log(query)
    return response.data.tracks?.items || [];
  } catch (error) {
    console.error('Error fetching Spotify tracks:', error);
    return [];
  }
}

function SearchPage() {
  const [accessToken, setAccessToken] = useState('');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAccessToken(CLIENT_ID, CLIENT_SECRET).then(setAccessToken);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        searchSpotify(query, accessToken).then(setResults);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query, accessToken]);

  return (
    <div className='hero'>
      <img src={bg} className='bg'/>
      <Search query={query} setQuery={setQuery} />
      <Sug results={results} />
    </div>
  )
}

export default SearchPage
