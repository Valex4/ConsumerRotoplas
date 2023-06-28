import axios from 'axios';
export  const createPackage = async(pkg)=>{
    return await axios.post("http://52.22.219.247:3000/package/create", pkg);
}
