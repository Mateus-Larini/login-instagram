import './App.css'
import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from "axios";

  function App() {

  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  
  function getUser(){
    const user = {
      email: emailUser,
      password: passwordUser,
    }
    
    Axios.post("http://localhost:3000/login", {
      email: user.email,
      password: user.password
    }).then( response => console.log(response))
  }

  const schema = yup.object({
    email: yup.string().required("Preencha esse campo.").min(6, "O email deve conter no mínimo 6 caracteres",),
    password: yup.string().required("Preencha esse campo").min(6, "A senha deve conter no mínimo 6 caracteres")
  }).required();

  const { register, handleSubmit, formState:{ errors }} = useForm({
    resolver: yupResolver(schema)
  })

  const newUser = (user) => console.log(user)
            
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

          {/* Formulário */}
            <form onSubmit={handleSubmit(newUser)} className="form">
              <div className='login-form'>
                <input type="text" name="email" placeholder='Digite seu e-mail' {...register("email")} autoFocus onChange={e => setEmailUser(e.target.value)}/>
                <p className='errorEmail'> {errors.email?.message}</p>
              </div>
              
              <div className='password-form'>
                <input type="password" name="password" placeholder='Senha' {...register("password")} onChange={e => setPasswordUser(e.target.value)}/>
                <p className='errorPassword'> {errors.password?.message}</p>
              </div>
              <button onClick={getUser}> Entrar </button>
            </form> 
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
