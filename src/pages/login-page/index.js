import { useState } from 'react';
import './index.css';

function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <div class="caixa-login">
            {/* Titulo da tela de login */}
            <div class="titulo-login">
                <p>{email}</p>
                <h1>Login</h1>
            </div>

            {/* Grupo do e-mail */}
            <div class="grupo">
                <label for="email">E-mail</label> <br/>
                <input id="email" type="text" value={email} onChage={(e) => setEmail(e.target.value)} placeholder="exemplo@exemplo.com" />
            </div>

            {/* Grupo do senha */}
            <div class="grupo">
                <label for="senha">Senha</label> <br />
                <input id="senha" type="password" />
            </div>

            {/* Link para recuperar a senha */}
            <div class="esqueci-minha-senha">
                <a href="#">Esqueci minha senha</a>
            </div>

            <button id="btn-entrar">Entrar</button>

                
        </div>
    )
}

export default Login;