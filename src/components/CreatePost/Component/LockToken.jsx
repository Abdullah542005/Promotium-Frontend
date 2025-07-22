import { useState } from 'react';
import './LockToken.css'; // contains your loader CSS

export default function LockTokens({setIsStaked}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    // Simulate a loading task (e.g., async operation)
    setTimeout(() => {
      setLoading(false);
      setIsStaked(true);
    }, 3000);
  };

  return (
    <div className="lockTokensWrapper">
      <button
        className="lockToken"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <div className="loaderWrapper">
            <div className="loader"></div>
          </div>
        ) : (
          'Lock Tokens'
        )}
      </button>
    </div>
  );
}
