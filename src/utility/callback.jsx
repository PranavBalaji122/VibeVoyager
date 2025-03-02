import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = ({ onAuthSuccess }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get("code");

        if (code) {
            console.log(" Authorization Code:", code);
            exchangeCodeForToken(code);
        } else {
            console.error("No authorization code found!");
            navigate("/");
        }
    }, [location, navigate]);

    // Function to exchange authorization code for access token
    const exchangeCodeForToken = async (code) => {
        try {
            const response = await fetch("https://accounts.spotify.com/api/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
                    client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
                }),
            });

            const data = await response.json();

            if (data.access_token) {
                console.log("Access Token:", data.access_token);
                localStorage.setItem("SpotifyToken", data.access_token);
                onAuthSuccess(data.access_token);
                navigate("/dashboard");
            } else {
                console.error("Error retrieving access token:", data);
                navigate("/");
            }
        } catch (error) {
            console.error("Error exchanging code for token:", error);
            navigate("/");
        }
    };

    return (
        <div className="text-center">
            <h2>Authenticating... Please wait</h2>
        </div>
    );
};

export default Callback;