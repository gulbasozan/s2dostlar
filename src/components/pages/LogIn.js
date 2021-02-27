import { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


const LogIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch{
            setError("Failed to Login")
        }

        setLoading(false)
    }

    return (
        <div className='container'>
            {error && <alert>{error}</alert>}
            <form onSubmit={handleSubmit}>
                <label >Kod Adı:
                <input id='email' type='text' placeholder='Disiplinin olmadığı yerde' ref={emailRef} required/></label>
                <label >Şifre:
                <input id='password' type='password' placeholder='kan ve gözyaşı vardır.' ref={passwordRef} required/></label>
                <input type='submit' className='submit' value='Giriş Yap'/>
            </form>
            
        </div>
    )
}

export default LogIn
