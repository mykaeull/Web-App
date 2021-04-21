import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json' 
    }
})

export function SaveToken(token) {
    localStorage.setItem('user', JSON.stringify(token))
}

export function ClearToken() {
    localStorage.clear()
}

export function RegisterUser({ name, email, password }) {
    const req = {
        name: name,
        email: email,
        password: password
    }

    const data = api.post('auth/register', req)
        .then(res => {
            console.log('Register sucess!')
            console.log(res.data)
            return res.data
        })
        .catch(err => {
            console.log('Register error!')
            console.log(err.response)
        })

    return data
}

export function LoginUser({ email, password }) {
    const req = {
        email: email,
        password: password
    }

    const data = api.post('auth/authenticate', req)
        .then(res => {
            console.log('Login sucess!')
            console.log(res.data)
            SaveToken(res.data)
            return res.data
        })
        .catch(err => {
            console.log('Login error!')
            SaveToken({ token: '' })
            console.log(err.response)
        })

    return data
}

export function LoginValidation() {
    const userStr = localStorage.getItem('user')

    const userObj = JSON.parse(userStr)

    const token = userObj.token

    const data = api.get('projects', { headers: { 'Authorization': `Bearer ${token}` }})
        .then(res => {
            console.log('Authotization sucess!')
            return res.data
        })
        .catch(err => {
            console.log('Authorization invalid!')
            console.log(err.response)
        })

    return data
}

export function isAuthenticated() {

    if (localStorage.getItem('user')) {
        const userStr = localStorage.getItem('user')

        const userObj = JSON.parse(userStr)

        if (userObj.token === '') {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}