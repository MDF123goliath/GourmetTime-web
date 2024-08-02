import axios from "axios";
import Config from "./Config";
class Admin{

    static async inscription(donnees, token){
        console.log(donnees);
        try {
            const respose = await axios.post(Config.url+Config.port8081+`/auth/signup`,donnees, {
                headers : {Authorization: `Bearer ${token}`}
            })
            return respose.data;
        } catch (error) {
            throw error 
        }
    }

    static login(param, email){
        const fetchCMD = async () =>{
            try{
                const respose = await fetch(Config.url+Config.port8080+`/API/Admin/connexion/${email}`);
                const data = await respose.json();
                param(data);
            }catch(err){
                alert("Une erreur est survenue")
            }
        }
        fetchCMD();
    }

     /**AUTHENTICATION CHECKER */
     static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('autorite')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('autorite')
        return role === 'ADMIN'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }
}
export default Admin;