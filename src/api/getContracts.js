
export default async function getContracts(){
    const response = await fetch("");
    return (await response.json())
}