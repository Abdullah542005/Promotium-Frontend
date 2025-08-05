
export async function getNonce(userAddress) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/auth/getNonce/${userAddress}`
    );
    const nonce =  (await response.json());
    return nonce.nonce;
  } catch (error) {
    console.log("Error at Getting Nonce :" + error.message);
  }
}
export async function login(signature, address) {
  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signature: signature,
        userAddress: address,
      }),
    });
  
   const data = await response.json()
   return data;
    
  } catch (error) {
    console.log("Error at Login :" + error.message);
  }
}


export async function createAccount(data) {
      const response = await fetch("http://localhost:3000/api/auth/createAccount", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Authorization:`Bearer ${localStorage.getItem("token")}`,
        user:{
          address:localStorage.getItem('userAddress').toLocaleLowerCase(),
          fullName:data.fullName,
          username:data.userName,
          pfp:data.pfp,
          X:{username:data.XUserName,token:data.XAccesstoken,secret:data.XTokenSecret},
          facebook:{username:data.facebookProfile,token:data.facebookAccessToken},
          country:data.country
        }
      }),
    });
    const parseResponse  = await response.json();
    return parseResponse;
}