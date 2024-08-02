import { useState, useEffect } from "react";
import Nav from "../../Nav";
import Personnel from "../../../classes/Personnel";
import Hist from "../../../classes/Hist";
import Fournisseur from "../../../classes/Fournisseur";
import Livraison from "../../../classes/Livraison";
import { Doughnut} from "react-chartjs-2";

const Accueil = () =>{

    const [nbrePersonnel, setPersonnel] = useState();
    useEffect(()=>{Personnel.TotalPersonnel(setPersonnel)},[]);

    const [nbreFournisseur, setFournisseur] = useState();
    useEffect(()=>{Fournisseur.TotalPersonnel(setFournisseur)},[]);

    const [nbreCmd, setCmd] = useState();
    useEffect(()=>{Hist.TotalCmd(setCmd)},[]);

    const [plat, setPlats] = useState();
    useEffect(()=>{Hist.SommePlats(setPlats)},[]);

    const [boisson, setBoisson] = useState();
    useEffect(()=>{Hist.SommeBoissons(setBoisson)},[]);

    const [complement, setComplements] = useState();
    useEffect(()=>{Hist.SommeComplements(setComplements)},[]);

    const [nbreLiv, setLiv] = useState();
    useEffect(()=>{Livraison.Total(setLiv)},[]);

    /*Mise à jour des données pour le graphe*/
    const chartDatas = {
        labels: ["Plats", "Boissons", "Compléments"],
        datasets: [
         {
          label: "Total",
          data: [plat, boisson, complement],
          backgroundColor: ["green", "blue", "rgba(75, 192, 192, 0.6)"]
        }
      ]
    }

    return(
        <section>
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
                            <div class="col-sm-4"></div>
                            <div class="col-sm-4">
                                <h1 class="h1"><b>Accueil</b></h1>
                            </div>
                            <div class="col-sm-4"></div>
                        </div>
                        <div class="container-fluid"> 
                            <div class="row">
                                <div class="app-content"> 
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-lg-3 col-6"> 
                                                <div class="small-box text-bg-success">
                                                    <div class="inner">
                                                        <h3>{nbreCmd}</h3>
                                                        <p>Total commandes</p>
                                                    </div> <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
                                                    </svg> <a href="/historique" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">
                                                        More info <i class="bi bi-link-45deg"></i> </a>
                                                </div>
                                            </div> 
                                            <div class="col-lg-3 col-6"> 
                                                <div class="small-box text-bg-success">
                                                    <div class="inner">
                                                        <h3>{nbreLiv}<sup></sup></h3>
                                                        <p>Total livraison</p>
                                                    </div> <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                                                    </svg> <a href="/#" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">
                                                        More info <i class="bi bi-link-45deg"></i> </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <div class="small-box text-bg-success">
                                                    <div class="inner">
                                                        <h3>{nbrePersonnel}</h3>
                                                        <p>Total personnels</p>
                                                    </div> <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                                    </svg> <a href="/personnels" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">
                                                        More info <i class="bi bi-link-45deg"></i> </a>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-6">
                                                <div class="small-box text-bg-success">
                                                    <div class="inner">
                                                        <h3>{nbreFournisseur}</h3>
                                                        <p>Total fournisseurs</p>
                                                    </div> <svg class="small-box-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                                    </svg> <a href="/fournisseurs" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">
                                                        More info <i class="bi bi-link-45deg"></i> </a>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div> 
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <div class="card-title"><strong>Informations personnelles</strong></div>
                                        </div> 
                                        <div class="card-body">
                                            <div class="alert alert-success" role="alert">
                                                <strong>Nom : </strong>Mandeng
                                            </div>
                                        </div> 
                                        <div class="card-body">
                                            <div class="alert alert-success" role="alert">
                                                <strong>Email : </strong>MDF@gmail.com
                                            </div>
                                        </div> 
                                        <div class="card-body">
                                            <div class="alert alert-success" role="alert">
                                                <strong>Role : </strong>Administrateur
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-2"></div>
                                        <div class="col-md-8">
                                            <div class="card card-success">
                                                <div class="card-header">
                                                    <h3 class="card-title">Total des produits commandés</h3>
                                                </div> 
                                                <div class="card-body p-0">
                                                    <div class="table-responsive">
                                                        <Doughnut data={chartDatas}/>
                                                    </div>
                                                </div> 
                                                <div class="card-footer">
                                                    <div class="small-box text-bg-success">
                                                        <a href="/statistiques" class="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover">
                                                            More info <i class="bi bi-link-45deg"></i> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2"></div>
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
    )
}
export default Accueil;