import { useEffect } from 'react'
import { removeCatálogoElement } from '../functions'



export const Contato = () => {



    useEffect(() => {
        removeCatálogoElement()
    }, [])
    return (
        <main id='Contato' >
            <div id='Contato-texts'>
                <h4>Fale conosco</h4>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <form id='Contato-Form' >
                <div id='Contato-form-name'>
                    <legend>Nome</legend>
                    <div>
                        <input placeholder='Nome' type='email' />
                        <input placeholder='Sobrenome' type='email' />
                    </div>
                </div>
                <fieldset id='Contato-form-email' >
                    <legend>Email</legend>
                    <input type='email' ></input>
                </fieldset>
                <fieldset id='Contato-form-subject' >
                    <legend>Assunto</legend>
                    <input type='text'></input>
                </fieldset>
                <fieldset id='Contato-form-message' >
                    <legend>Mensagem</legend>
                    <textarea type='text' ></textarea>
                </fieldset>
                <button>Enviar</button>
            </form>
        </main>
    )
}