import './App.css'
import React from 'react'

function App() {
  return (
    <div className='container'>
      <div className='left'>
        <div className='image-mobile'>
          <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
        </div>
      </div>

      <div className='right'> 
        <div className='box-form'> 
          <img className='logo-insta' src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="Instagram Image"/>
          <div className='login-form'>
            <input type="text" placeholder='Telefone, nome de usuário ou email' />
          </div>
          <div className='password-form'>
            <input type="password" placeholder='Senha'/>
          </div>
            <button type="submit"> <a href="/mainpage">Entrar</a> </button>
            <p className='divisor'>OU</p>  
            <span className='login-facebook'>Entrar com o facebook</span>
            <a href="#" className='redirect-password'>Esqueceu sua senha?</a>
        </div>
          <div 
            className='box-registration'>Não tem uma conta?<a href="/register">Cadastre-se!</a> 
          </div>
      </div>

        <div className='footer'> 
            <ul className="links">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <a href="#">Meta</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Carreiras</a>
              </li>
              <li>
                <a href="#">Ajuda</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Principais Contas</a>
              </li>
              <li>
                <a href="#">Hashtags</a>
              </li>
              <li>
                <a href="#">Localizações</a>
              </li>
              <li>
                <a href="#">Música</a>
              </li>
            </ul>

            <span className="texto-footer">
                Português (Brasil)          Português (Brasil)
            ©   2022 Instagram from Meta
            </span>
        </div>
    </div>
  )
}

export default App
