import './App.css';
import Home from './components/pages/Home'
import DarkChat from './components/pages/DarkChat'
import GaciRating from './components/pages/GaciRating'
import Footer from './components/Footer'
import LogIn from './components/pages/LogIn'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path='/' exact component={Home}/>
            <PrivateRoute path='/darkchat' component={DarkChat}/>
            <PrivateRoute path='/gacirating' component={GaciRating}/>
            <Route path='/login' component={LogIn}/>
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
