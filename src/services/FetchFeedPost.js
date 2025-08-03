export async function FetchFeedPost(withTimeStamp = false, lastTimestamp, setPosts, setLastTimestamp) {
    let url = "http://localhost:5000/api/feed";
    if (withTimeStamp && lastTimestamp)
        url += `?timestamp=${lastTimestamp}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length === 0)
            return;
        setPosts(prev => [...prev, ...data]);

        const last = data[data.length - 1];
        if (last && last.timestamp)
            setLastTimestamp(last.timestamp);
    }   catch(error){
        console.log("Error fetching Feed");
    }
}