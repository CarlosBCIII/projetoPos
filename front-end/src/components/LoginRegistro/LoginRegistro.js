
import React from "react";
import "./LoginRegistro.scss"

export default function LoginRegistro() {

    return (
        <div className='wrapper'>
            <div className='form-box login'>
                <form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='E-mail do usuário' />
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='Senha do usuário' />
                    </div>
                    <div className='remember-forgot'>
                        <label><input type='checkbox' placeholder='Senha do usuário' /> Lembrar</label>
                        <a href='#'>Esqueceu a senha?</a>
                    </div>
                    <button type='submit'>Entrar</button>
                    <div>
                        <p><a href='#'>Cadastrar</a></p>
                    </div>


                </form>
            </div>
        </div>
    )
}

//export default LoginRegistro

