import React, { useState } from 'react'
import { RegisterUser } from '../../utils'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Register() {

    //const [click, setClick] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const history = useHistory()

    //const [teste, setTeste] = useState(null)

    const getData = async (data) => {
        const response = await RegisterUser(data)
        if (response === undefined) {
            console.log('Registration failed')
        } else {
            history.push('/')
        }
    }

    return (
        <div className="container-register">
            <h2 >Nome</h2>
            <input type="text" onChange={(e) => {
                setData({...data, name: e.target.value})
            }} />
            <h2 >Email</h2>
            <input type="text" onChange={(e) => {
                setData({...data, email: e.target.value})
            }} />
            <h2 >Senha</h2>
            <input style={{marginBottom: "30px"}} type="password" onChange={(e) => {
                setData({...data, password: e.target.value})
            }} />
            <button style={{marginBottom: "30px"}} onClick={(e) => {
                e.preventDefault()
                getData(data)
            }}>Registrar</button>
        </div>
    )
}

export default Register