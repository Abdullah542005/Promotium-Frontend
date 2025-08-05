import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function OnboardingAuth() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const userParam = params.get('user');

        if (userParam && window.opener) {
            try {
                const userData = JSON.parse(decodeURIComponent(userParam));
              
                window.opener.postMessage({
                    source: 'promotium-oauth',  
                    user: userData
                }, 'http://localhost:5173');

                window.close();
            } catch (err) {
                console.error('Failed to parse user data:', err);
            }
        }
    }, [location]);

    return <h1>Connecting your X account...</h1>;
}
