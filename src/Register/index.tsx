import './index.css';
import React from 'react'


export const Register = () => {
    return (
       <div className='box-register'>
            <div className='image-insta'>
                <img className='logo-insta' src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="Instagram Image"></img>
            </div> 
            <form method='POST'>
                <h2 className='text-form'>
                   Cadastre-se para ver fotos e vídeos dos seus amigos.
                </h2>
                <div>
                    <input className='username' type="text" placeholder='Numero do celular ou email' autoFocus required />
                </div>
                <div>
                    <input className='username' type="text" placeholder='Nome completo' required/>
                </div>
                <div>
                    <input className='username' type="text" placeholder='Nome de usuaŕio' minLength={5} required/>
                </div>
                <div>
                    <input className='username' type="password" placeholder='Digite sua senha' minLength={5} required/>
                </div>
                <p className='subtext-form'>
                    As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram.
                </p>
                <button type='submit' className='button'> Cadastre-se </button>
            </form>
       </div>
    )
} 