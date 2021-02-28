import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useState } from 'react'

const Home = () => {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError(' ')

        try{
            await logout()
            
            history.push('/login')
        }catch{
            setError('Failed to log out')
        }
    }

    return (
        <div>
            <button onClick={handleLogout}>Çıkış Yap</button>
            <Link style={{textDecoration: 'none' }} to='DarkChat'><div className='sphereDiv'><h2>DARK CHAT</h2></div></Link>
            <Link style={{textDecoration: 'none'}} to='GaciRating'><div className='sphereDiv'><h2>GACI RATING</h2></div></Link>
        </div>
    )
}

export default Home
