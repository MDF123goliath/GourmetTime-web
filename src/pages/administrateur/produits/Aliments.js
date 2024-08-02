import { useEffect, useState} from "react";
import Nav from "../../Nav";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Config from "../../../classes/Config";
import Plats from "../../../classes/Plats";
import Boissons from "../../../classes/Boissons";
import Complements from "../../../classes/Complements";
import Aliments from "../../../classes/Aliments";

function Produits(){

    /*VARIABLES*/
    const fonction = "/API/Aliments/afficherAliment";
    const fonction1 = "/API/Aliments/afficherPlats";
    const fonction2 = "/API/Aliments/afficherBoissons";
    const fonction3 = "/API/Aliments/afficherComplements";
    /*Variable pour les aliments*/
    const [aliments, setAliments] = useState([]);
    /*Variable pour les plats*/
    const [plats, setPlats] = useState([]);
    /*Variable pour les compléments*/
    const [complements, setComplements] = useState([]);
    /*Variable pour les boissons*/
    const [boissons, setBoissons] = useState([]);
    /*Variables pour arcourir le tableau*/
    const [currentPage, setCurrentPage] = useState(1);
    const reccordPage = 5;
    const lastindex = currentPage * reccordPage;
    const firstindex = lastindex - reccordPage;
    const reccord = plats.slice(firstindex, lastindex);
    const reccord1 = boissons.slice(firstindex, lastindex);
    const reccord2 = complements.slice(firstindex, lastindex);
    const reccord3 = aliments.slice(firstindex, lastindex);
    const nbrePage = Math.ceil(plats.length/reccordPage);
    const number = [...Array(nbrePage + 1).keys()].slice(1);
    /*Variable pour rediriger*/
    const navigate = useNavigate();

    /*ALIMENTS*/
    /*Fonction qui affiche les aliments*/
    useEffect(()=>{Aliments.Afficher(setAliments, fonction)}, []);
    /**********************************/

    /*PLATS*/
    /*Fonction qui affiche les plats*/
    useEffect(()=>{Plats.Afficher(setPlats, fonction1)},[])
    /*Fonction pour supprimer un plat*/
    const SupprimerPalt = (id) =>{
        try{
            axios.delete(Config.url+Config.port8082+`/API/Aliments/deletePlats/${id}`).then(res =>{alert("Plat retiré avec succès")}).catch(err => alert("Une erreur est survenue"));
            navigate("/aliments")
        }catch(error){
            alert("Une erreur est survenue")
        }
    }
    /***************************************/

    /*BOISSONS*/
    /*Fonction qui affiche les boissons*/
    useEffect(()=>{Boissons.Afficher(setBoissons, fonction2)},[])
    /*Fonction pour supprimer une boisson*/
    const SupprimerBoisson = (id) =>{
        try{
            axios.delete(Config.url+Config.port8082+`/API/Aliments/deleteBoissons/${id}`).then(res =>{alert("Boisson supprimée avec succès")}).catch(err => alert("Une erreur est survenue"));
            navigate("/aliments")
        }catch(error){
            alert("Une erreur est survenue")
        }
    }
    /***************************************/

    /*COMPLEMENT*/
    /*Fonction qui affiche les compléments*/
    useEffect(()=>{Complements.Afficher(setComplements, fonction3)},[])
    /*Fonction pour supprimer un complément*/
    const SupprimerComplement = (id) =>{
        try{
            axios.delete(Config.url+Config.port8082+`/API/Aliments/deleteComplements/${id}`).then(res =>{alert("Complément supprimée avec succès")}).catch(err => alert("Une erreur est survenue"));
            navigate("/aliments")
        }catch(error){
            alert("Une erreur est survenue")
        }
    }
    /***************************************/
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
    
    return(
        <section class="layout-fixed sidebar-expand-lg bg-body-tertiary">
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
                            <div class="col-md-4"></div>
                            <div class="col-md-4">
                                <h1 class="h1"><b>Listes des produits</b></h1>
                            </div>
                            <div class="col-md-4"></div>
                        </div><br/>
                        <div class="container-fluid"> 
                            <div class="row">
                                <div class="col-1"></div>
                                <div class=" col-sm-10">
                                    <div class="card card-success card-tabs">
                                        <div class="card-header p-0 pt-1">
                                            <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="custom-tabs-one-home-tab" data-toggle="pill" href="#aliments" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true"><strong>Aliments</strong></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="custom-tabs-one-home-tab" data-toggle="pill" href="#plats" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false"><strong>Plats</strong></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="custom-tabs-one-profile-tab" data-toggle="pill" href="#boissons" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false"><strong>Boissons</strong></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="custom-tabs-one-messages-tab" data-toggle="pill" href="#complements" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false"><strong>Compléments</strong></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content" id="custom-tabs-one-tabContent">
                                                <div class="tab-pane fade show active" id="aliments" role="tabpanel" aria-labelledby="custom-tabs-one-home-tab">
                                                    <div class="card card-success">
                                                        <div class="card-header">
                                                            <h3 class="card-title"><strong>Liste des aliments en stock</strong></h3>
                                                        </div> 
                                                        <div class="card-body p-3">
                                                            <div class="table-responsive">
                                                                <table id="example" class="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Nom</th>
                                                                            <th>Quantité </th>
                                                                            <th>Poids </th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {reccord3.map((aliment,i) => (
                                                                            <tr key={i}>
                                                                                <td>{aliment.nom}</td>
                                                                                <td>{aliment.quantite}</td>
                                                                                <td>{aliment.poids} Kg</td>
                                                                                <td class="mailbox-date">
                                                                                    <Link className="btn btn-success"><i class="bi bi-pencil-fill"></i></Link>{" "}
                                                                                    <Link className="btn btn-danger" onClick={() =>{SupprimerPalt(aliment.id)}}><i class="bi bi-trash3-fill"></i></Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
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
                                                <div class="tab-pane fade" id="plats" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                                    <div class="card card-success">
                                                        <div class="card-header">
                                                            <h3 class="card-title"><strong>Liste des plats</strong></h3>
                                                        </div> 
                                                        <div class="card-body p-3">
                                                            <div class="table-responsive">
                                                                <table id="example" class="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Nom</th>
                                                                            <th>Catégorie </th>
                                                                            <th>Description</th>
                                                                            <th>Prix </th>
                                                                            <th>Image</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {reccord.map((plat,i) => (
                                                                            <tr key={i}>
                                                                                <td>{plat.nom}</td>
                                                                                <td>{plat.categorie}</td>
                                                                                <td>{plat.description}</td>
                                                                                <td>{plat.prix} XAF</td>
                                                                                <td><img src= {Config.url+Config.port8082+"/images/"+plat.image} width={75} height={75} alt=""/></td>
                                                                                <td class="mailbox-date">
                                                                                    <Link className="btn btn-success"><i class="bi bi-pencil-fill"></i></Link>{" "}
                                                                                    <Link className="btn btn-danger" onClick={() =>{SupprimerPalt(plat.id)}}><i class="bi bi-trash3-fill"></i></Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
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
                                                        <div class="card-footer clearfix">
                                                            <a href="/plats">
                                                                <button class="btn btn-primary"><i class="bi bi-plus"></i></button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="boissons" role="tabpanel" aria-labelledby="custom-tabs-one-profile-tab">
                                                    <div class="card card-success">
                                                        <div class="card-header">
                                                            <h3 class="card-title"><strong>Liste des boissons</strong></h3>
                                                        </div> 
                                                        <div class="card-body p-3">
                                                            <div class="table-responsive">
                                                                <table id="example" class="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Nom</th>
                                                                            <th>Catégorie </th>
                                                                            <th>Prix </th>
                                                                            <th>Image</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {reccord1.map((boisson,i) => (
                                                                            <tr key={i}>
                                                                                <td>{boisson.nom}</td>
                                                                                <td>{boisson.categorie}</td>
                                                                                <td>{boisson.prix} XAF</td>
                                                                                <td><img src= {Config.url+Config.port8082+"/images/"+boisson.image} width={75} height={75} alt=""/></td>
                                                                                <td class="mailbox-date">
                                                                                    <Link className="btn btn-success"><i class="bi bi-pencil-fill"></i></Link>{" "}
                                                                                    <Link className="btn btn-danger" onClick={() =>{SupprimerBoisson(boisson.id)}}><i class="bi bi-trash3-fill"></i></Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
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
                                                        <div class="card-footer clearfix">
                                                            <a href="/boissons">
                                                                <button class="btn btn-primary"><i class="bi bi-plus"></i></button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="complements" role="tabpanel" aria-labelledby="custom-tabs-one-messages-tab">
                                                    <div class="card card-success">
                                                        <div class="card-header">
                                                            <h3 class="card-title"><strong>Liste des compléments</strong></h3>
                                                        </div> 
                                                        <div class="card-body p-3">
                                                            <div class="table-responsive">
                                                                <table id="example" class="table table-striped">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Nom</th>
                                                                            <th>Prix </th>
                                                                            <th>Quantité</th>
                                                                            <th>Image</th>
                                                                            <th>Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {reccord2.map((complement,i) => (
                                                                            <tr key={i}>
                                                                                <td>{complement.nom}</td>
                                                                                <td>{complement.prix} XAF</td>
                                                                                <td>{complement.quantite}</td>
                                                                                <td><img src= {Config.url+Config.port8082+"/images/"+complement.image} width={75} height={75} alt=""/></td>
                                                                                <td class="mailbox-date">
                                                                                    <Link className="btn btn-success"><i class="bi bi-pencil-fill"></i></Link>{" "}
                                                                                    <Link className="btn btn-danger" onClick={() =>{SupprimerComplement(complement.id)}}><i class="bi bi-trash3-fill"></i></Link>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
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
                                                        <div class="card-footer clearfix">
                                                            <a href="/complements">
                                                                <button class="btn btn-primary"><i class="bi bi-plus"></i></button>
                                                            </a>
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
            <script></script>
        </section>
    )
}
export default Produits;