import { Route , Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const PrivateRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component /> : <Redirect to="/login" />
            }}
        ></Route>
    )
}

export default PrivateRoute
