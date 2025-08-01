import {PinataSDK} from "pinata"

const pinata = new PinataSDK({
    pinataJwt:import.meta.env.VITE_PINATA_JWT,
    pinataGateway:import.meta.env.VITE_PINATA_GATEWAY
})

async function UploadtoPinata(image){
   try{
     const upload = await pinata.upload.public.file(image)
     return upload.cid;
   }catch(error){ 
     console.log("Error Occued at  Uploading Image to Pinata", error.message);
   }
}

export default UploadtoPinata;