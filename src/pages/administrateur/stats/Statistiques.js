import { Bar, Line} from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import Nav from "../../Nav";
import Hist from "../../../classes/Hist";
import Facture from "../../../classes/Facture";
import { useEffect, useState} from "react";
import Livraison from "../../../classes/Livraison";

const Statistiques = () =>{

    /*Stats des CAISSES*/
    /*Variable*/
    const [caisses, setCaisses] = useState([]);
    const [livraison, setLivraison] = useState([]);
    const [fournissuer, setFournissuer] = useState([]);
    const [montant, setMontant] = useState([]);
    const [cmd, setCmd] = useState([]);
    const [dates, setDates] = useState([]);
    const [dates2, setDates2] = useState([]);
    const [plat, setPlats] = useState();
    const [boisson, setBoisson] = useState();
    const [complement, setComplements] = useState();
    /*Appel de la fonction*/
    useEffect(()=>{Hist.Afficher(setCaisses)},[])
    useEffect(()=>{Hist.Afficher2(setFournissuer)},[])
    useEffect(()=>{Facture.Montant(setMontant)},[])
    useEffect(()=>{Facture.dates(setDates)},[])
    useEffect(()=>{Facture.NbreCmd(setCmd)},[])
    useEffect(()=>{Hist.SommePlats(setPlats)},[]);
    useEffect(()=>{Hist.SommeBoissons(setBoisson)},[]);
    useEffect(()=>{Hist.SommeComplements(setComplements)},[]);
    useEffect(()=>{Livraison.nombreLivraisons(setLivraison)},[]);
    useEffect(()=>{Livraison.datesLivraisons(setDates2)},[]);
    /*Mise à jour des données pour le graphe*/
    const chartData = {
        labels: caisses.map(item => item.caisses),
        datasets: [
         {
          label: "Utilisation totale",
          data: caisses.map(item => item.quantite),
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    }
    /*Mise à jour des données pour le graphe*/
    const chartDatas = {
        labels: fournissuer.map(item => item.fournisseur),
        datasets: [
         {
          label: "Livraison totale",
          data: fournissuer.map(item => item.quantite),
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    }
    /*Mise à jour des données pour le graphe*/
    const chartDatas2 = {
        labels: dates,
        datasets: [
         {
          label: "Recettes du restaurants par jour en XAF",
          data: montant,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    }
    /*Mise à jour des données pour le graphe*/
    const chartDatas3 = {
        labels: dates,
        datasets: [
         {
          label: "Nombre de commandes par jour",
          data: cmd,
          backgroundColor: 'rgba(75, 192, 192, 0.6)'
        }
      ]
    }

    const chartDatas4 = {
        labels: ["Plats", "Boissons", "Compléments"],
        datasets: [
         {
          label: "Total",
          data: [plat, boisson, complement],
          backgroundColor: "rgba(75, 192, 192, 0.6)"
        }
      ]
    }

    const chartDatas5 = {
        labels: dates2,
        datasets: [
         {
          label: "Nombre de livraisons par jour",
          data: livraison,
          backgroundColor: "rgba(75, 192, 192, 0.6)"
        }
      ]
    }
    /*****************************************/

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
                                <h1 class="h1"><b>Statistiques</b></h1>
                            </div>
                            <div class="col-md-4"></div>
                        </div><br/>
                        <div class="container-fluid"> 
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Utilisation des caisses</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                            <Bar data={chartData}/>
                                        </div>
                                    </div><br/>
                                </div>
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Livraison totale par Fournisseurs</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                            <Bar data={chartDatas}/>
                                        </div>
                                    </div><br/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Recettes journalières</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                            <Line data={chartDatas2}/>
                                        </div>
                                    </div><br/>
                                </div>
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Nombre de commandes par jours</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                            <Line data={chartDatas3}/>
                                        </div>
                                    </div><br/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Total des produits commandés</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                        <Bar data={chartDatas4}/>
                                        </div>
                                    </div><br/>
                                </div>
                                <div class="col-md-6">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title"><strong>Nombre de livraisons par jours</strong></h3>
                                        </div> 
                                        <div class="card-body">
                                            <Line data={chartDatas5}/>
                                        </div>
                                    </div><br/>
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
export default Statistiques;