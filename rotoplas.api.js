import axios from 'axios';
export  const createEventRotoplas = async(pkg)=>{
    return await axios.post("http://44.207.54.43:4000/api/rotoplas", pkg);
}