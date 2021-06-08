



export const Contato =  () => {
    return ( 
        <main id='Contato' >
            <div >
                   <h4>Fale conosco</h4>
                   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
             <form>
                <fieldset>
                    <legend>Nome</legend>
                    <input placeholder='Nome' type='email'/>
                    <input placeholder='Sobrenome' type='email'/>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input type='emaiol' ></input>
                </fieldset>
                <fieldset>
                    <legend>Assunto</legend>
                    <input type='text'></input>
                </fieldset>
                <fieldset>
                    <legend>Mensagem</legend>
                    <input type='text' ></input>
                </fieldset>
             </form>
        </main>  
    )
}