import Config from "./Config";

class Personnel{

    static AfficherPersonnel(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8081+"/public/personnels");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }

    static TotalPersonnel(params){
        const fetchPersonnels = async () =>{
            try {
                const respose = await fetch(Config.url+Config.port8081+"/public/totalpersonnel");
                const data = await respose.json();
                params(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchPersonnels();
    }

    static ajouter(params){
        const ajouter = async () =>{
            try {
                const response = await fetch(Config.url+Config.port8081+"/public/save", {
                    method : "POST",
                    headers : {"content-Type": "application/json"},
                    body: JSON.stringify(params)
                })
                const data = await response.json();
                alert("Le nouveau membre du personnel a été ajouté : ", data)
            } catch (error) {
                alert("Une erreur est survenue (vérifier votre connexion réseau)")
            }
        }
        ajouter();
    }
}
export default Personnel