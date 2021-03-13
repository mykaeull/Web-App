import React, { useState, useEffect } from 'react'
import { LoginUser, LoginValidation } from '../../utils'
import { useHistory } from 'react-router-dom'
import './styles.css'

function Login() {

    //const [click, setClick] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const history = useHistory()

    const [teste, setTeste] = useState(null)

    const getData = async (data) => {
        const response = await LoginUser(data)
        const validation = await LoginValidation(response == undefined ? '' : response.token)
        if (validation == undefined) {
            console.log('User not found')
        } else if (validation.ok) {
            history.push('/home')
        }
        console.log('aquii')
    }

    return (
        <div className="container-register">
            <h2 >Email</h2>
            <input type="text" onChange={(e) => {
                setData({...data, email: e.target.value})
            }} />
            <h2 >Password</h2>
            <input style={{marginBottom: "30px"}} type="password" onChange={(e) => {
                setData({...data, password: e.target.value})
            }} />
            <button style={{marginBottom: "30px"}} onClick={(e) => {
                //e.preventDefault()
                getData(data)
            }}>Entrar</button>
        </div>
    )
}

export default Login