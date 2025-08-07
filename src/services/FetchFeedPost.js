export async function FetchFeedPost(withTimeStamp = false, lastTimestamp, setPosts, setLastTimestamp) {
    console.log(lastTimestamp);
    let url = "http://localhost:5000/api/feed";
    if (withTimeStamp && lastTimestamp)
        url += `?timestamp=${lastTimestamp}`;
    else
        url += `/${Date.now() / 1000}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length === 0)
            return;
        setPosts(prev => {
            const uniquePosts = removeDuplicatePosts(prev, data);
            if (uniquePosts.length === 0) {
                console.log("No new unique posts. Stop fetching.");
                return prev;
            }

            const last = uniquePosts[uniquePosts.length - 1];
            if (last && last.timestamp) setLastTimestamp(last.timestamp);
            
            return [...prev, ...uniquePosts];
        });
    }   catch(error){
        console.log("Error fetching Feed");
    }
}

function removeDuplicatePosts(existingPosts, newPosts) {
    const existingIds = new Set(existingPosts.map(p => p._id));
    return newPosts.filter(post => !existingIds.has(post._id));
}
  