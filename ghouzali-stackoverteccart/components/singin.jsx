import React, { useState } from "react";
import InputT from './InputT';
import axios from "axios";

export const Singin = (props) => { const [matricule, setMatricule] = useState('');
    const [matriculeEmpty, setMatriculeEmpty] = useState(false);
    const [Name, setName] = useState('');
    const [NameBlank, setNameEmpty] = useState('');
    const [mot_de_passe, setmot_de_passe] = useState('');
    const [mot_de_passeEmpty, setmot_de_passeEmpty] = useState('');

    const validateinputT = () => { let isinputTEmpty = false ; 
      setMatriculeEmpty(false);
      setNameEmpty(false);
      setmot_de_passeEmpty(false);

      if (Name === '') {setNameEmpty(true);
        isinputTEmpty = true;
      }

      if (matricule === '') { setMatriculeEmpty(true);
        isinputTEmpty = true;
      }

      if (password === '') { setmot_de_passeEmpty(true);
        isinputTEmpty = true;
      }

      return isinputTEmpty
    }

    const onSingin = async () => { const url = 'https://server.joeleprof.com/auth/register';
        const body = {"matricule" : matricule , "FullName" : Name , "password" : mot_de_passe
        }
        const { data } = await axios.post(url,body)
        console.log(data)
    }

    const handleSubmit = (e) => { e.preventDefault();
        if(validateinputT()){
          return 
        }

        setName('');
        setMatricule('');
        setmot_de_passe('');

        console.log(matricule);
    }

    return (
        <div className="container-form">
            <h2>Inscription</h2>
        <form className="singin-form" onSubmit={handleSubmit}>
            <inputT
            placeHolder = {'FullName'}
            text = {Name}
            isblank = {NameBlank}
            setText = {setName} />
            <br />

            <inputT
            placeHolder = {'Matricule'}
            text = {matricule}
            isblank = {matriculeEmpty} 
            setText = {setMatricule} />
            <br />

            <inputT
            placeHolder = {'Mot de passe'}
            text = {mot_de_passe}
            isblank = {mot_de_passeEmpty}
            setText = {setmot_de_passe} />
            <br />

            <button onClick={onSingin} type="sing in">Sing in</button><br />
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>have you already account?</button>
    </div>
    )
}

export default Singin

