import Nav from "../../../Nav";
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Config from "../../../../classes/Config";

const Complements = () =>{

    /*PLATS*/
    /*Variables reletifs aux champs du plat*/
    /*Variable récupérant les valeurs des champs*/
    const [formData, setFormData] = useState({
        nom:"",
        quantite:"",
        prix:"",
    })
    /*Variable pour rediriger*/
    const navigate = useNavigate();
    /*Gestion du remplissage des champs*/
    const handleInputChange =(event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }
    /*Gestion du choix de l'image*/
    const [img, setImg] = useState(null);
    const getSelectImg = (event) => {
        const file = event.target.files[0];
        if(file){
            setImg(file);
        }
    };
    /*Fonction d'ajout d'un complement*/
    const Ajouter = () => {
        if(formData.nom !== "" && formData.categorie !== "" && formData.prix !== "" && img !== ""){
            const files = img;
            const donnee = new FormData();
            donnee.append('file', files);
            donnee.append('nom', formData.nom);
            donnee.append('quantite', formData.quantite);
            donnee.append('prix', formData.prix);
            axios.post(Config.url+Config.port8082+"/API/Complements/newComplements", donnee, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }).then(res => setImg(URL.createObjectURL(files))).catch(err => alert(err));
            navigate("/aliments")
        }
        else{
            validate();
        }
    }
     /*Vérifier que tous les champs sont remplis*/
     const validate = () =>{
        const error = {};
        if(!formData.nom){
            alert("Le nom est obligatoire.")
        }

        if(!formData.quantite){
            alert("La quntitée est obligatoire.")
        }

        if(!formData.prix){
            alert("Le prix de téléphone est obligatoire.")
        }

        if(!formData.image){
            alert("L'image est obligatoire.")
        }
        return error;
    }
    /********************************************/

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
                                            <h3 class="card-title">Ajout d'un nouveau complément</h3>
                                        </div>
                                        <div class="card-body">
                                        <form method="Post">
                                                <div class="row">
                                                    <div class="col-sm-1"></div>
                                                    <div class="col-sm-5">
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
                                                            <label>Quantité</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="number"
                                                                    name="quantite"
                                                                    placeholder="Entrer le nombre"
                                                                    value={formData.quantite}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-5">
                                                        <div class="form-group">
                                                            <label>prix</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="number"
                                                                    name="prix"
                                                                    placeholder="Entrer le prix"
                                                                    value={formData.prix}
                                                                    onChange={handleInputChange}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <label>Image</label>
                                                            <Form.Group>
                                                                <Form.Control
                                                                    type="file"
                                                                    name="image"
                                                                    placeholder="Choisir une image"
                                                                    id="imageInput"
                                                                    accept="image/*"
                                                                    onChange={getSelectImg}
                                                                >
                                                                </Form.Control>
                                                            </Form.Group><br/>
                                                            <div class="card-body"><button type="button" class="btn btn-primary mb-2" onClick={Ajouter}>Ajouter</button> <a href="/personnels"><button type="button" class="btn btn-danger mb-2">Annuler</button></a></div>
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
                        Copyright &copy; 2023-2024&nbsp;GourmetTime.
                    </strong>
                </footer> 
            </div> 
            <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
        </section>
    )
}
export default Complements;