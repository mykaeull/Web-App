import React, { useState, useEffect } from 'react'
import { LoginUser, LoginValidation, ClearToken } from '../../utils'
import { useHistory, Link } from 'react-router-dom'
import './styles.css'

function Login() {

    useEffect(() => {
        ClearToken()
    }, [])
    
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const history = useHistory()

    //const [teste, setTeste] = useState(null)

    const getData = async (data) => {
        await LoginUser(data)
        //const validation = await LoginValidation(response == undefined ? '' : response.token)
        const validation = await LoginValidation()
        if (validation === undefined) {
            console.log('User not found')
        } else if (validation.ok) {
            history.push('/home')
        }
    }

    return (
        <div className="container-register">
            <h2 >Email</h2>
            <input type="text" onChange={(e) => {
                setData({...data, email: e.target.value})
            }} />
            <h2 >Senha</h2>
            <input style={{marginBottom: "20px"}} type="password" onChange={(e) => {
                setData({...data, password: e.target.value})
            }} />
            <Link to="/register">
                <h5 style={{margin: "0"}}>Registrar</h5>
            </Link>
            <button style={{marginBottom: "30px", marginTop: "20px"}} onClick={(e) => {
                //e.preventDefault()
                getData(data)
            }}>Entrar</button>
        </div>
    )
}

export default Login