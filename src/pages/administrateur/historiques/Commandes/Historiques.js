import { useEffect, useState} from "react";
import Nav from "../../../Nav";
import { Link} from "react-router-dom";
import Hist from "../../../../classes/Hist";

const Historiques = () =>{

    /*CAISSE*/
    /*Variable pour les caisses*/
    const [caisses, setCaisses] = useState([]);
    /*Variables pour arcourir le tableau*/
    const [currentPage, setCurrentPage] = useState(1);
    const reccordPage = 5;
    const lastindex = currentPage * reccordPage;
    const firstindex = lastindex - reccordPage;
    const reccord = caisses.slice(firstindex, lastindex);
    const nbrePage = Math.ceil(caisses.length/reccordPage);
    const number = [...Array(nbrePage + 1).keys()].slice(1);
    /**************************/
    useEffect(()=>{Hist.Afficher(setCaisses)},[])
    /*fonction de retour sur la page précédente*/
    function prePage(){
        if(currentPage !== firstindex){
            setCurrentPage(currentPage - 1)
        }
    }
    /*fonction pour aller sur la page suivante*/
    function nextPage(){
        if(currentPage !== lastindex){
            setCurrentPage(currentPage + 1)
        }
    }
    /*fonction pour parcourir les pages en suivant les numéros*/
    function changePage(id){
        setCurrentPage(id)
    }
    /***************************/
    /***************************************/
    
    return(
        <>
            <section class="hold-transition sidebar-mini">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css" integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q=" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css" integrity="sha256-dSokZseQNT08wYEWiz5iLI8QPlKxG+TswNRD8k35cpg=" crossorigin="anonymous"></link>
                <div class="app-wrapper"> 
                    <nav class="main-header navbar navbar-expand navbar-light">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" data-widget="pushmenu" href="#/" role="button"><i class="fas fa-bars"></i></a>
                            </li>
                        </ul>
                    </nav>
                    <Nav/>  
                    <main class="app-main"> 
                        <div class="app-content-header"> 
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-6">
                                    <h1 class="h1"><b>Liste du total des commandes par caisse</b></h1>
                                </div>
                                <div class="col-sm-3"></div>
                            </div>
                            <div class="container-fluid"> 
                                <div class="row">
                                    <div class="col-1"></div>
                                    <div class=" col-sm-10">
                                        <div class="card card-success card-tabs">
                                            <div class="card-body">
                                                <div class="tab-content" id="custom-tabs-one-tabContent">
                                                    <div class="card card-success">
                                                        <div class="card-header">
                                                            <h3 class="card-title"><strong>Total des commandes par caisses</strong></h3>
                                                        </div> 
                                                        <div class="card-body p-3">
                                                            <div class="table-responsive">
                                                                <table class="table table-default table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>caisses</th>
                                                                            <th>Total</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {reccord.map((caisse => (
                                                                            <tr key={caisse.id}>
                                                                                <td>{caisse.caisses}</td>
                                                                                <td>{caisse.quantite} Commandes</td>
                                                                                <td class="mailbox-date">
                                                                                    <Link to={"/commandes/"+caisse.caisses+""}><button class="btn btn-primary"><i class="bi bi-eye"></i></button></Link> {" "}
                                                                                    <button class="btn btn-success"><i class="bi bi-pencil"></i></button>{" "} 
                                                                                    <button class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
                                                                                </td>
                                                                            </tr>
                                                                        )))}
                                                                    </tbody>
                                                                </table>
                                                                <nav>
                                                                    <ul className="pagination">
                                                                        <li className="page-item">
                                                                            <Link to={"#"} className="page-link" onClick={prePage}>
                                                                                Previous
                                                                            </Link>
                                                                        </li>
                                                                        {
                                                                            number.map((n,i) =>(
                                                                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                                                                <Link to={"#"} className="page-link" onClick={() =>changePage(n)}>{n}</Link>
                                                                            </li>
                                                                            ))
                                                                        }
                                                                        <li className="page-item">
                                                                            <Link to={"#"} className="page-link" onClick={nextPage}>
                                                                                Next
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </main> 
                    <footer class="app-footer"> 
                    <strong>
                        Copyright &copy; 2023-2024&nbsp;Gourmet Time.
                    </strong>
                </footer>  
                </div> 
                <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
            </section>
        </>
    )
}
export default Historiques;