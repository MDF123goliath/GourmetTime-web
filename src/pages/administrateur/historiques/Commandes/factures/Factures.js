import { useEffect, useState, useRef } from "react";
import Facture from "../../../../../classes/Facture";
import Nav from "../../../../Nav";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Button } from "react-bootstrap";

const Factures = () =>{

    const {numero} = useParams();
    const [facture, setFacture] = useState([]);
    const {total} = useParams();
    const composant = useRef();
    /*Fonction qui affiche la facture*/
    useEffect(()=>{Facture.Factures(setFacture,numero)},[])
    /*Fonction pour imprimer la facture*/
    const Imprimer = useReactToPrint({
        content: () => composant.current,
        documentTitle: 'Facture',
    })
    /********************************/
    return(
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
                        <div class="container-fluid"> 
                            <div class="row">
                                <div class="col-sm-3"></div>
                                <div class=" col-sm-6">
                                    <div ref={composant} class="card card-success card-tabs">
                                        <div class="card-body">
                                            <div class="tab-content" id="custom-tabs-one-tabContent">
                                                <div class="card-body p-3">
                                                    <div class="table-responsive">
                                                        <h2 class="text-center my-3 border py-2"><b>Facture N° {numero}</b></h2>
                                                        <table class="table table-default table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Plats</th>
                                                                    <th>Prix</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {facture.map((plat => (
                                                                    <tr key={plat.id}>
                                                                        <td>{plat.nomPlat}</td>
                                                                        <td>{plat.prixPlat} XAF</td>
                                                                    </tr>
                                                                )))}
                                                            </tbody>
                                                        </table><br/>
                                                        <table class="table table-default table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Compléments</th>
                                                                    <th>Prix</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {facture.map((plat => (
                                                                    <tr key={plat.id}>
                                                                        <td>{plat.nomComplement}</td>
                                                                        <td>{plat.prixComplement} XAF</td>
                                                                    </tr>
                                                                )))}
                                                            </tbody>
                                                        </table><br/>
                                                        <table class="table table-default table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Boissons</th>
                                                                    <th>Prix</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {facture.map((plat => (
                                                                    <tr key={plat.id}>
                                                                        <td>{plat.nomBoisson}</td>
                                                                        <td>{plat.prixBoisson} XAF</td>
                                                                    </tr>
                                                                )))}
                                                            </tbody>
                                                        </table><br/>
                                                        <h2><b>Total : </b>{total} XAF</h2><br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="primary" onClick={Imprimer} var><i class="bi bi-printer-fill"></i> <b>Imprimer</b></Button>
                                </div>
                                <div class="col-sm-3"></div>
                            </div> 
                        </div>
                    </div>
                </main> 
                <footer class="app-footer"> 
                    <strong>
                        Copyright &copy; 2023-2024&nbsp;Maison Verte.
                    </strong>
                </footer> 
            </div> 
            <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
        </section>
    )
}
export default Factures;