import queryString from "query-string";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI;
const SCOPES = ["user-read-email", "user-top-read"];

export const getSpotifyAuthUrl = () => {
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}`;
};

// Extract access token from URL after Spotify login
export const getAccessTokenFromUrl = () => {
  return queryString.parse(window.location.hash).access_token;
};
