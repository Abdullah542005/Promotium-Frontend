

export async function getOtp (email){ 
    try{ 
       const response =  await fetch("http://localhost:3000/api/auth/getemailotp",
         { 
            headers:{
             "Content-Type": "application/json",
            },
            method:"POST",
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                email:email,
                userAddress:localStorage.getItem("userAddress")
            })
         }
       )
        const parseResponse = await response.json()
        return parseResponse;
    }catch(error){ 
        console.log("Error at getting Otp : " + error.message);
    }
}


export async function  verifyOtp(otp) {
      try{ 
       const response =  await fetch("http://localhost:3000/api/auth/verifyemailotp",
         { 
            headers:{
             "Content-Type": "application/json",
            },
            method:"POST",
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                otp:otp,
                userAddress:localStorage.getItem("userAddress")
            })
         }
       )
        const parseResponse = await response.json()
        return parseResponse;
    }catch(error){ 
        console.log("Error at getting Otp : " + error.message);
    }
}