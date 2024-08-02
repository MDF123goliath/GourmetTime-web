import Accueil from './pages/administrateur/accueil/Accueil';
import Fournisseurs from './pages/administrateur/fournisseurs/Fournisseurs';
import AjouterFournisseur from './pages/administrateur/fournisseurs/ajouter/AjouterFournisseur';
import Parametres from './pages/administrateur/parametre/Parametres';
import Personnels from './pages/administrateur/personnels/Personnels';
import Ajouter from './pages/administrateur/personnels/ajouter/Ajouter';
import Aliments from './pages/administrateur/produits/Aliments';
import Connexion from "./pages/inscription-connexion/Connexion";
import Inscription from './pages/inscription-connexion/Inscription';
import { Route, Routes } from "react-router-dom";
import 'admin-lte/dist/js/adminlte.js';
import Plats from './pages/administrateur/produits/ajouter/Plats';
import Boissons from './pages/administrateur/produits/ajouter/Boissons';
import Complements from './pages/administrateur/produits/ajouter/Complements';
import Caisses from './pages/administrateur/caisses/Caisses';
import Page from './pages/Pages';
import Historiques from './pages/administrateur/historiques/Commandes/Historiques';
import Commandes from './pages/administrateur/historiques/Commandes/Commandes';
import AjouterCaisse from './pages/administrateur/caisses/ajout/AjouterCaisse';
import Factures from './pages/administrateur/historiques/Commandes/factures/Factures';
import Statistiques from './pages/administrateur/stats/Statistiques';

function App() {
    return ( 
        <div class="wrapper">
            <Routes>
                <Route path="/accueil" element={<Accueil/>}/>
                <Route path="/aliments" element={<Aliments/>}/>
                <Route path="/plats" element={<Plats/>}/>
                <Route path="/boissons" element={<Boissons/>}/>
                <Route path="/complements" element={<Complements/>}/>
                <Route path="/caisses" element={<Caisses/>}/>
                <Route path="/ajoutcaisse" element={<AjouterCaisse/>}/>
                <Route path="/personnels" element={<Personnels/>}/>
                <Route path="/ajouter-personnel" element={<Ajouter/>}/>
                <Route path="/fournisseurs" element={<Fournisseurs/>}/>
                <Route path="/ajouter-fournisseur" element={<AjouterFournisseur/>}/>
                <Route path="/paramètres" element={<Parametres/>}/>
                <Route path="/statistiques" element={<Statistiques/>}/>
                <Route path="/historique" element={<Historiques/>}/>
                <Route path="/commandes/:nom" element={<Commandes/>}/>
                <Route path="/factures/:numero/:total" element={<Factures/>}/>
                <Route path="/" element={<Connexion/>}/>
                <Route path="/inscription" element={<Inscription/>}/>
                <Route path="*" element={<Page/>}/>
            </Routes>
        </div>
    );
}

export default App;   