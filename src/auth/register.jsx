
export const register = () => {
  // Load environment variables
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  if (!CLIENT_ID || !REDIRECT_URI) {
    console.error("Missing Spotify Client ID or Redirect URI");
    return;
  }


  /** Redirect to Spotify Login */
  const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      scope: "user-read-private user-read-email",
  });

    // Redirect user to Spotify authorization page
  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
};
