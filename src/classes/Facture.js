import Config from "./Config";

class Facture{

    static Factures(params, numero) {
        const fetchCMD = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+`/API/Commandes/search/${numero}`);
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchCMD();
    }

    /*Fonction qui affiche les sommes par dates*/
    static Montant(params) {
        const fetchCaisses = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/somme");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisses();
     }
     /*Fonction qui affiche les sommes par dates*/
    static NbreCmd(params) {
        const fetchCaisses = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/nombre");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisses();
     }
     /*Fonction qui affiche les dates*/
     static dates(params) {
        const fetchCaisses = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/dates");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisses();
     }
    /***************************************/

}
export default Facture;