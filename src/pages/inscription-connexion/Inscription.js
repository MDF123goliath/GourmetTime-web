import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Style.css"
import Form from 'react-bootstrap/Form';
import Admin from '../../classes/Admin';

const Inscription =() =>{
    /*Variable récupérant les valeurs des champs*/
    const [formData, setFormData] = useState({
        nom:"",
        email:"",
        password:"",
        autorite:""
    })

    /*Variable de confirmation du mot de passe*/
    const [passwordConfirm, setPasswordConfirm] = useState();

   /*Gestion du remplissage des champs*/
    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormData({
        ...formData,
        [name]:value,
        })
    }

    /*Fonction gérant le champ de confirmation du mot de passe*/
    const handleChangeConfirm =(event) => {
        setPasswordConfirm(event.target.value)
    }

    /*Fonction vérifiant les conditions*/
    const validate = () =>{
        const error = {};
        if(!formData.nom){
            alert("Le nom est obligatoire.")
        }
        if(!formData.email){
            alert("L'email est obligatoire.")
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            alert("Email non conforme (example@gmail.com)");
        }
        if(!formData.password){
            alert("Le mot de passe est obligatoire.")
        }else if(formData.password.length < 8){
            alert("le mot de passe doit avoir au moins 8 caractères.")
        }
        if(!passwordConfirm){
            alert("Confirmer le mot de passe")
        }else if(passwordConfirm !== formData.password){
            alert("le mot de passe en confirmation n'est pas le même que celui entré plus haut.")
        }
        return error;
    }

    /*Variable pour rediriger*/
    const navigate = useNavigate();
    /*Fonction d'inscription côté front end*/
    const inscription = async (e) => {
        if(formData.nom !== "" && formData.email !== "" && formData.password !== "" && passwordConfirm !== "" && passwordConfirm === formData.password){
            try{
                const token = localStorage.getItem('token');
                await Admin.inscription(formData, token);
                setFormData({
                    nom:'',
                    email:'',
                    password:'',
                    autorite:''
                })
                alert("Inscription résuusie");
                navigate("/accueil")
            }catch(error){
                alert("Une erreur est survenue, inscription échouée!")
            }
        }
        else{
            validate();
        }
    }

    return(
        <section class="hold-transition login-page">
            <div class="login-box">
                <div class="login-logo"><h1>Maison verte</h1></div> 
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Créer votre compte</p>
                        <form>
                            <div class="input-group mb-3">
                                <Form.Group>
                                    <Form.Control
                                        class="form-control"
                                        type="text"
                                        name="nom"
                                        placeholder="Entrer votre nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group><br/>
                                <div class="input-group-text"> <span class="bi bi-person"></span> </div>
                            </div>
                            <div class="input-group mb-3"> 
                                <Form.Group>
                                    <Form.Control
                                        class="form-control"
                                        type="email"
                                        name="email"
                                        placeholder="Entrer votre email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group><br/>
                                <div class="input-group-text"> <span class="bi bi-envelope"></span> </div>
                            </div>
                            <div class="input-group mb-3"> 
                                <Form.Group>
                                    <Form.Control
                                        class="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Entrer votre mot de passe"
                                        value={formData.password}
                                        onChange={handleChange}
                                    >
                                    </Form.Control>
                                </Form.Group><br/>
                                <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div>
                            </div> 
                            <div class="input-group mb-3"> 
                                <Form.Group>
                                    <Form.Control
                                        class="form-control"
                                        type="password"
                                        name="passwordConfirm"
                                        placeholder="Confirmer votre mot de passe"
                                        value={passwordConfirm}
                                        onChange={handleChangeConfirm}
                                    >
                                    </Form.Control>
                                </Form.Group><br/>
                                <div class="input-group-text"> <span class="bi bi-lock-fill"></span> </div>
                            </div> 
                            <div class="input-group mb-3"> 
                                <Form.Group>
                                    <Form.Control
                                        class="form-control"
                                        type="text"
                                        name="autorite"
                                        value={formData.autorite = "ADMIN"}
                                    >
                                    </Form.Control>
                                </Form.Group><br/>
                                <div class="input-group-text"> <span class="bi bi-bag-dash-fill"></span> </div>
                            </div>
                            <div class="row">
                                <div class="col-3"></div>
                                <div class="col-6">
                                    <div class="d-grid gap-2"> <button type="button" onClick={() =>{inscription()}} class="btn btn-primary">Sign up</button> </div>
                                </div>
                                <div class="col-3"></div>
                            </div>
                        </form>
                        <p class="mb-0">
                            <Link to={"/"}>Se connecter</Link>
                        </p>
                    </div>
                </div>
            </div> 
            <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
        </section>
    )
}
export default Inscription;