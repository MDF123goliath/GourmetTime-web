import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Nav from "../../../Nav";
import Fournisseur from "../../../../classes/Fournisseur";

const AjouterFournisseur = () =>{


    /*FOURNISSEUR*/
    /*Vérifier que tous les champs sont remplis*/
    const validate = () =>{
        const error = {};
        if(!formData.name){
            alert("Le nom est obligatoire.")
        }

        if(!formData.agence){
            alert("L'agence est obligatoire.")
        }

        if(!formData.telephone){
            alert("Le numéro de téléphone est obligatoire.")
        }

        if(!formData.addressmail){
            alert("L'email est obligatoire.")
        }else if(!/\S+@\S+\.\S+/.test(formData.addressmail)){
            alert("Email non conforme (example@gmail.com)");
        }

        return error;
    }
    /*Variable récupérant les valeurs des champq*/
    const [formData, setFormData] = useState({
        name:"",
        agence:"",
        addressmail:"",
        telephone:"",
        actif:"",
    })
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
    /*Fonction pour l'ajout d'un nouveau fournisseur*/
    const AjouterFournisseur = async (e) =>{
        formData.actif = true;
        if(formData.name !== "" && formData.agence !== "" && formData.addressmail !== "" && formData.telephone !== ""){
            Fournisseur.Ajout(formData);
            navigate("/fournisseurs")
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
                                            <h3 class="card-title"><strong>Ajout d'un nouveau fournisseur</strong></h3>
                                        </div>
                                        <div class="card-body">
                                            <form onSubmit={AjouterFournisseur}>
                                                <div class="row">
                                                    <div class="col-sm-1"></div>
                                                    <div class="col-sm-5">
                                                        <div class="form-group">
                                                            <label>Nom</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Entrer le nom"
                                                                    value={formData.name}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <label>Email</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="email"
                                                                    name="addressmail"
                                                                    placeholder="Entrer l'email"
                                                                    value={formData.addressmail}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-5">
                                                        <div class="form-group">
                                                            <label>Agence</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="agence"
                                                                    placeholder="Entrer l'agence"
                                                                    value={formData.agence}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <label>Numéro de téléphone</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="text"
                                                                    name="telephone"
                                                                    placeholder="Entrer le numéro de téléphone"
                                                                    value={formData.telephone}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <div class="card-body"><button type="button" class="btn btn-primary mb-2" onClick={AjouterFournisseur}>Ajouter</button> <a href="/personnels"><button type="button" class="btn btn-danger mb-2">Annuler</button></a></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-1"></div>
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
export default AjouterFournisseur;