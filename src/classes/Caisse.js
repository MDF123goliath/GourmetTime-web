import Config from "./Config";
import axios from "axios";

class Caisse{

    static AfficherCaisse(params){
        const fetchCaisse = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/afficherCaisse");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisse();
    }

    static Ajouter(params){
        try {
            axios.post(Config.url+Config.port8083+"/API/Commandes/ajouterCaisse", params, {
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => alert("Nouvelle caisse ajoutée")).catch(err => alert(err));
        } catch (error) {
            alert("Une erreur est survenue")
        }
    }

    static Retirer(id){
        try {
            axios.delete(Config.url+Config.port8083+`/API/Commandes/delete/${id}`).then(res => alert("La caisse a été retirée")).catch(err => alert(err));
        } catch (error) {
            alert("Une erreur est survenue")
        }
    }
}
export default Caisse