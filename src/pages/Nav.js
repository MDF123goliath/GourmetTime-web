import Admin from "../classes/Admin";

const Nav = () =>{
    return(
        <aside class="main-sidebar sidebar-light-primary elevation-4" data-bs-theme="ligth">
            <div class="sidebar-brand"> 
                <a href="/accueil" class="brand-link"> 
                    <span class="brand-text fw-light">Gourmet Time</span>
                </a>
            </div>
            <div class="sidebar-wrapper">
                <nav class="mt-2"> 
                    <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                        <li class="nav-item"> 
                            <a href="/accueil" class="nav-link"> <i class="bi bi-house"></i>
                                <p>
                                    Accueil
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/aliments" class="nav-link"> <i class="bi bi-box-seam"></i>
                                <p>
                                    Aliments
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/caisses" class="nav-link"> <i class="bi bi-laptop"></i>
                                <p>
                                    Caisses
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/personnels" class="nav-link"> <i class="bi bi-people"></i>
                                <p>
                                    Personnels
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/fournisseurs" class="nav-link"> <i class="bi bi-truck"></i>
                                <p>
                                    Fournisseurs
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/historique" class="nav-link"> <i class="bi bi-clock-history"></i>
                                <p>
                                    Historiques
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/paramètres" class="nav-link active"> <i class="bi bi-gear"></i>
                                <p>
                                    Paramètres
                                </p>
                            </a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/statistiques" class="nav-link active"> <i class="bi bi-activity"></i>
                                <p>
                                    Statistiques
                                </p>
                            </a>
                        </li>
                        <li class="nav-item" onClick={Admin.logout}> 
                            <a href="/" class="nav-link"> <i class="bi bi-power"></i>
                                <p>
                                    Déconnexion
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </aside>
    )
}
export default Nav;