import { useState, useEffect } from "react";
import Nav from "../../Nav";
import Config from "../../../classes/Config";
import axios from "axios";

const Parametres = () =>{

    /*CATEGORIES*/
    /*Variable des catégories */
    const [categorie, setCategorie] = useState([]);
    const [categorie2, setCategorie2] = useState([]);
    /*Fonction d'ajout d'une catégorie*/
    const [typeplat, settypeplat] = useState([]);
    /**/
    const handleInputChange =(event) => {
        const {name, value} = event.target;
        settypeplat({
            ...typeplat,
            [name]:value,
        })
    }
    /*Fonction affichant les catégories de plats */
    useEffect( () => {
        const fetchCategorie = async () =>{
            try {

                const respose = await fetch(Config.url+Config.port8082+"/API/Plats/lire");
                const data = await respose.json();
                setCategorie(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 

        fetchCategorie();
    }, []);
    /*Fonction pour ajouter un type de plat*/
    const AddPlatTypePlats = async () =>{
        let baliseNom = document.getElementById("type")
        let type = baliseNom.value
        try {
            alert(type);
            axios.post(Config.url+Config.port8081+`/public/typePlats/${type}`);
        } catch (error) {
            alert("Une erreur est survenue")
        }
    }
    /*Fonction affichant les catégories de boissons */
    useEffect( () => {
        const fetchCategorie = async () =>{
            try {

                const respose = await fetch(Config.url+Config.port8082+"/API/Boissons/lire");
                const data = await respose.json();
                setCategorie2(data);
            } catch (error) {
                alert("Une erreur est survenue (vérifiez votre réseau)")
            }
        } 
        fetchCategorie();
    }, []);
    /*Fonction pour ajouter un type de plat*/
    const AddPlatTypeBoissons = async () =>{
        let baliseNom = document.getElementById("boissons")
        let type = baliseNom.value
        try {
            alert(type);
            axios.post(Config.url+Config.port8081+`/public/typeBoissons/${type}`);
        } catch (error) {
            alert("Une erreur est survenue")
        }
    }
    /***********************************/

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
                                <h1 class="h1"><b>Paramètres</b></h1>
                            </div>
                            <div class="col-md-4"></div>
                        </div><br/>
                        <div class="container-fluid"> 
                            <div class="row">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-8">
                                            <div class="card card-success">
                                                <div class="card-header">
                                                    <h3 class="card-title"><strong>Modifier vos informations personnelles</strong></h3>
                                                </div> 
                                                <div class="card-body p-5">
                                                    <div class="form-group">
                                                        <label>Nom : <strong>MANDENG</strong></label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" placeholder="Nom"/>
                                                            <button class="btn btn-success"><i class="bi bi-pencil"></i></button>
                                                        </div><br/>
                                                        <label>Email : <strong>MDF@gmail.com</strong></label>
                                                        <div class="input-group">
                                                            <input type="email" class="form-control" placeholder="Email@gmail.com"/>
                                                            <button class="btn btn-success"><i class="bi bi-pencil"></i></button>
                                                        </div><br/>
                                                        <label>Mot de passe : <strong><i class="bi bi-eye-fill"></i></strong></label>
                                                        <div class="input-group">
                                                            <input type="passowrd" class="form-control" placeholder="Mot de passe"/>
                                                            <button class="btn btn-success"><i class="bi bi-pencil"></i></button>
                                                        </div><br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2"></div>
                                    </div>
                                </form>
                            </div><br/>
                            <div class="row">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-8">
                                            <div class="card card-success">
                                                <div class="card-header">
                                                    <h3 class="card-title"><strong>Ajouter une catégorie de plat</strong></h3>
                                                </div> 
                                                <div class="card-body p-5">
                                                    <div class="form-group">
                                                        <strong>Catégories : </strong>
                                                        {categorie.map((categories) => (
                                                            <label key={categories.id}>{categories}/ </label>
                                                        ))}
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="type" placeholder="Nom"/>
                                                            <button class="btn btn-primary" value={typeplat} onChange={handleInputChange} id="type" onClick={() => {AddPlatTypePlats()}}><i class="bi bi-plus"></i></button>
                                                        </div><br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2"></div>
                                    </div>
                                </form>
                            </div><br/>
                            <div class="row">
                                <form>
                                    <div class="row">
                                        <div class="col-sm-2"></div>
                                        <div class="col-sm-8">
                                            <div class="card card-success">
                                                <div class="card-header">
                                                    <h3 class="card-title"><strong>Ajouter une catégorie de boisson</strong></h3>
                                                </div> 
                                                <div class="card-body p-5">
                                                    <div class="form-group">
                                                        <strong>Catégories : </strong>
                                                        {categorie2.map((categories) => (
                                                            <label key={categories.id}>{categories}/ </label>
                                                        ))}
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="boissons" placeholder="Nom"/>
                                                            <button class="btn btn-primary" value={typeplat} onChange={handleInputChange} id="type" onClick={() => {AddPlatTypeBoissons()}}><i class="bi bi-plus"></i></button>
                                                        </div><br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2"></div>
                                    </div>
                                </form>
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
export default Parametres;