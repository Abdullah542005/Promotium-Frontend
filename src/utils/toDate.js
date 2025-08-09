export  function toDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function toTimeAgo(unixTimestamp) {
    const now = Date.now();
    const past = unixTimestamp * 1000; // Convert to milliseconds
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minute(s) ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hour(s) ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} day(s) ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} month(s) ago`;
    
    return `${Math.floor(diffInSeconds / 31536000)} year(s) ago`;
}


export function getCountdown(startTimestamp) {
  const targetTime = startTimestamp + 24 * 60 * 60 * 1000;
  const now = Date.now();
  let diff = targetTime - now;

  if (diff <= 0) return "0h 0m 0s";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  return `${hours}h ${minutes}m ${seconds}s`;
}
