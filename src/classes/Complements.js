import Config from "./Config";

class Complements{

    static Afficher(params, fonction){
        const fetchPlats = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8082+fonction);
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchPlats();
    }
}
export default Complements