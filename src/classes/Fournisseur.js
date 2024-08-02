import Config from "./Config";

class Fournisseur{

    static AfficherFournisseur(params){
        const fetchFournisseurs = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/afficherFournisseur");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchFournisseurs();
    }

    static TotalPersonnel(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/totalFournisseur");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchPersonnels();
    }

    static Ajout(params){
        const fetchPersonnels = async () =>{
            try {
                await fetch(Config.url+Config.port8084+"/API/Fournisseurs/ajouterFournisseur", {
                    method : "POST",
                    headers : {"content-Type": "application/json"},
                    body: JSON.stringify(params)
                })
            } catch (error) {
                alert("Une erreur est survenue!")
            }
        } 
        fetchPersonnels();
    }
}
export default Fournisseur