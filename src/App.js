import { Container } from 'react-bootstrap';
import styles from './App.module.css'
import NavBar from './components/NavBar';
import {Route,Switch} from 'react-router-dom'
import SignUpForm from './pages/auth/SignUpForm';
import "./api/axiosDefaults"; 

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home page</h1> }/>
          <Route exact path="/signin" render={() => <SignUpForm/> }/>
          <Route exact path="/signup" render={() => <h1>Sign up</h1> }/>
          <Route render={() => <p>Page Not Found!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;