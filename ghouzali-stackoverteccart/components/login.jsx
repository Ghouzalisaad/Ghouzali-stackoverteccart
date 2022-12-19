import axios from 'axios'
import React, { useState } from "react";

export const Login = (props) => {const [matricule, setMatricule] = useState('');
    const [mot_de_passe, setmot_de_passe] = useState('');

    const onConnect = async () => { const url = 'https://server.joeleprof.com/auth/login';
        const body = { "matricule": matricule, "password": mot_de_passe
        }
        const { data } = await axios.post(url, body);

        console.log(data)
    }

    const handleSubmit = (e) => { e.preventDefault();

        console.log(matricule);
    }

    return (
        <div className="container-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>

                <input 
                 value={matricule}
                 onChange={(e) => setMatricule(e.target.value)} 
                 placeholder="Matricule"
                 type="text" 
                 name="matricule" 
                 id="matricule"/>

                <br />
                
                <input 
                value={mot_de_passe} 
                onChange={(e) => setmot_de_passe(e.target.value)} 
                placeholder="Mot de passe" 
                type="password" 
                name="Mot de passe" 
                id="Mot de passe" />

                <br />
                <button onClick={onConnect} type="Login">Connexion</button>
                <button className="link-btn" onClick={() => props.onFormSwitch('singin')}>Forgot password ? or sing in .</button>
            </form>

        </div>
    )
}

export default Login