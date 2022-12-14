import './index.css';
import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from "axios";

    export const Register = () => {
    const [ emailUser, setEmailUser] = useState('')
    const [ passwordUser, setPasswordUser ] = useState('')
  
    const schema = yup.object({
        email: yup.string().required("Preencha esse campo.").min(6, "O email deve conter no mínimo 6 caracteres",),
        password: yup.string().required("Preencha esse campo").min(6, "A senha deve conter no mínimo 6 caracteres")
    });

    const { register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    function createUser(){
        const newUser = {
            email: emailUser,
            password: passwordUser
        } 
        
        Axios.post("http://localhost:3000/register", {
            email: newUser.email,
            password: newUser.password
        })
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }
    
    const newUser = (user) => console.log(user) 
    return (
       <div className='box-register'>
            <div className='image-insta'>
                <img className='logo-insta' src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png" alt="Instagram Image"></img>
            </div> 
            <form onSubmit={handleSubmit(newUser)}>
                <h2 className='text-form'>
                   Cadastre-se para ver fotos e vídeos dos seus amigos.
                </h2>
                <div>
                    <input className='username' name="email" type="text" {...register("email")} required placeholder='Email' onChange={e => setEmailUser(e.target.value)} autoFocus/>
                    <p className='errorEmail'> {errors.email?.message}</p>
                </div>
                <div>
                    <input className='password' name="password" type="password" {...register("password")} required placeholder='Digite sua senha' onChange={e => setPasswordUser(e.target.value)} />
                    <p className='errorPassword'> {errors.password?.message}</p>
                </div>
                <p className='subtext-form'>
                    As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram.
                </p>
                <button type='submit' className='button' onClick={createUser}> Cadastrar</button>
            </form>
       </div>
    )
}

export default Register