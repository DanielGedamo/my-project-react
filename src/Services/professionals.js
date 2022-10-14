export default async function ProfessionalsFetch (endpoint){
    try{
    return await fetch("https://my-json-server.typicode.com/DanielGedamo/Professionals-JSON/db"+endpoint).then(response=>response.json())
    // .thenconsole.log(response);
}
catch(error){
    console.log(error);
}
}