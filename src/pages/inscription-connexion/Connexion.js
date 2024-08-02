import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Style.css"
import Admin from '../../classes/Admin';
import Form from 'react-bootstrap/Form';

const FormulaireConnexion = () => {

    const [error, setError] = useState('')
    /*Variable récupérant les valeurs des champs*/
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

   /*Gestion du remplissage des champs*/
    const handleChange =(event) => {
        const {name, value} = event.target;
        setFormData({
        ...formData,
        [name]:value,
        })
    }

    /*Fonction vérifiant les conditions*/
    const validate = () =>{
        const error = {};
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
        return error;
    }

    /*Variable pour rediriger*/
    const navigate = useNavigate();
    const [cmd, setCMD] = useState([]);
    /*Fonction de connexion côté front end*/
    const connexion = (e) => {
        if(formData.email !== "" && formData.password !== "" ){
            try {
                Admin.login(setCMD,formData.email)
                alert(cmd.nom)
                if(setCMD !== null){
                    navigate('/accueil')
                }
            } catch (error) {
                console.log(error)
                setError(error.message)
                setTimeout(()=>{
                    setError('');
                }, 5000);
            }
        }
        else{
            validate();
        }
    }

    return(
        <section class="hold-transition login-page">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css" integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q=" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/styles/overlayscrollbars.min.css" integrity="sha256-dSokZseQNT08wYEWiz5iLI8QPlKxG+TswNRD8k35cpg=" crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.min.css" integrity="sha256-Qsx5lrStHZyR9REqhUF8iQt73X06c8LGIUPzpOhwRrI=" crossorigin="anonymous"></link>
            <div class="login-box">
                <div class="login-logo"><h1>Maison verte</h1></div> 
                <div class="card">
                    <div class="card-body login-card-body">
                        <p class="login-box-msg">Sign in to start your session</p>
                        {error && <p className="error-message">{error}</p>}
                        <form>
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
                            <div class="row">
                                <div class="col-3"></div>
                                <div class="col-6">
                                    <div class="d-grid gap-2"> <button onClick={connexion} type="submit" class="btn btn-primary">Sign In</button> </div>
                                </div>
                                <div class="col-3"></div>
                            </div>
                        </form>
                        <p class="mb-0">
                            <Link to={"/inscription"}>S'inscrire</Link>
                        </p>
                    </div>
                </div>
            </div> 
            <script src="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.3.0/browser/overlayscrollbars.browser.es6.min.js" integrity="sha256-H2VM7BKda+v2Z4+DRy69uknwxjyDRhszjXFhsL4gD3w=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha256-whL0tQWoY1Ku1iskqPFvmZ+CHsvmRWx/PIoEvIeWh4I=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha256-YMa+wAM6QkVyz999odX7lPRxkoYAan8suedu4k2Zur8=" crossorigin="anonymous"></script>
            <script src="../../../dist/js/adminlte.js"></script>
        </section>
    );
}
export default FormulaireConnexion;