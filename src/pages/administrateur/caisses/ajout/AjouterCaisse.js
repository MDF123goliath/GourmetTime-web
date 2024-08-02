import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Nav from "../../../Nav";
import Caisse from "../../../../classes/Caisse";

const AjouterCaisse = () =>{

    /*CAISSES*/
    /*Variable récupérant les valeurs des champs*/
    const [formData, setFormData] = useState({
        nom:"",
        etat: false,
    })
    /*Vérifier que tous les champs sont remplis*/
    const validate = () =>{
        const error = {};
        if(!formData.nom){
            alert("Le nom est obligatoire.")
        }
        return error;
    }
    /*Gestion du remplissage des champs*/
    const handleInputChange =(event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    /*Variable pour rediriger*/
    const navigate = useNavigate();
    /*Fonction pour l'ajout d'une nouvelle caisse*/
    const newCaisse = async (e) =>{
        if(formData.nom !== "" ){
            Caisse.Ajouter(formData);
            navigate("/caisses")
        }
        else{
            validate();
        }
    }
    /*******************************************************/

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
                        <div class="container-fluid"> 
                            <div class="row">
                                <div class="col-md-2"></div>
                                <div class="col-md-8">
                                    <div class="card card-success">
                                        <div class="card-header">
                                            <h3 class="card-title">Ajout d'une nouvelle caisse</h3>
                                        </div>
                                        <div class="card-body">
                                            <form onSubmit={newCaisse}>
                                                <div class="row">
                                                    <div class="col-sm-4"></div>
                                                    <div class="col-sm-4">
                                                        <div class="form-group">
                                                            <label>Nom</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="nom"
                                                                    placeholder="Entrer le nom"
                                                                    value={formData.nom}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <div class="form-group">
                                                                <div class="card-body"><button type="button" class="btn btn-primary mb-2" onClick={newCaisse}>Ajouter</button> <a href="/caisses"><button type="button" class="btn btn-danger mb-2">Annuler</button></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4"></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2"></div>
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
export default AjouterCaisse;