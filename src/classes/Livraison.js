import Config from "./Config";

class Livraison{

    static Total(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/totalLivraison");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchPersonnels();
    }

    static nombreLivraisons(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/nombreLivraisons");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }

    static datesLivraisons(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/datesLivraisons");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }

}
export default Livraison;