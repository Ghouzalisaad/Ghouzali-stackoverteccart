import PropTypes from 'prop-types';

const InputT = ({txt , settxt , HolderPlace , isEmpty }) => {
    return (
        <>
        <input 
        className="singin-form"
        type= 'text'
        value= {txt}
        HolderPlace={HolderPlace}
        onChange = {(e) => settxt(e.target.value)} />
        {isEmpty && 
        <div className="error"> <h1>* Attention, Tout les champs sont obligatoires</h1></div>
        }
        </>
    )

}

Headers.propTypes = { txt : PropTypes.string, settxt : PropTypes.func, HolderPlace : PropTypes.string, isEmpty : PropTypes.bool
}

Headers.defaultprop = { isEmpty : false, HolderPlace : 'Empty'
}


export default InputT