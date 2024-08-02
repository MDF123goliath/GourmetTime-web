import Config from "./Config";

class Hist{
    /*Fonction qui affiche l'historique des commandes selon les caisses*/
    static Afficher(params) {
        const fetchCaisses = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/afficherHistorique");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisses();
     }
    /***************************************/

    /*Fonction qui affiche l'historique des commandes selon les caisses*/
    static Afficher2(params) {
        const fetchCaisses = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8084+"/API/Fournisseurs/afficherLivraison");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCaisses();
     }
    /***************************************/

    /*Fonction qui affiche l'historique des commandes*/
    static Commandes(params, nom) {
        const fetchCMD = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+`/API/Commandes/search/${nom}`);
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue")
            }
        } 
        fetchCMD();
    }
    /***************************************/

    /*Fonction qui affiche le total des commandes*/
    static TotalCmd(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/total");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }
    /**********************************************/

    /*Fonction qui affiche le total des commandes*/
    static SommePlats(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/sommeplat");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }
    static SommeBoissons(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/sommeboisson");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }
    static SommeComplements(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8083+"/API/Commandes/sommecomplement");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }
    /**********************************************/
}
export default Hist;