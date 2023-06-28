import axios from 'axios';
export  const createPackage = async(pkg)=>{
    return await axios.post("http://localhost:3000/package/create", pkg);
}
