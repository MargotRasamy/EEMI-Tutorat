import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Input from '../../2-molecules/input/input.js';
import axios from 'axios';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple.js';
import './login.scss';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            jwt: localStorage.getItem('token') || null,
            foods: [],
        }
    }

    // Recuperation de la valeur des champs de connexion
    onChange = (e) => {
        const element = e.target.name;
        this.setState({
            [element]: e.target.value
        });
    }

    // On requête le token pour le déposer dans le localStorage PUIS changer le state (changement de state peut-être à enlever plus tard)
    getJwt = async (newUserToValidate) => {
      const { data } = await axios.post(`http://localhost:4000/login`, newUserToValidate);
      localStorage.setItem('token', data.token);
      this.props.setLoggin(data.token)
      //this.setState({jwt: data.token})

      // Si la connexion est reussie, rediriger vers le site (dashboard)
      this.props.history.push("/");
    };

    // getFoods = async (e) => {
    //   e.preventDefault()
    //   try {
    //     const { data } = await axios.get(`http://localhost:4000/foods`);

    //     this.setState({foods: data})
    //   } catch (err) {
    //     console.log(err)
    //   }
    // };

    // Soumission du formulaire de connexion
    onSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Connexion form submitted. Email is: ${this.state.email}`);

        // Creation d'un nouvelle validation d'utilisateur
        const newUserToValidate = {
          email: this.state.email,
          password: this.state.password
        };
        // On va chercher le token
        this.getJwt(newUserToValidate)

        // Reinitialisation de l'etat et des valeurs des champs
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        const {jwt, foods} = this.state;
        return (
            <div className="login">
                <h2>Connexion</h2>
                <section>
                  {/* <button onClick={(e) => this.getFoods(e)}>
                    Tester le token
                  </button> */}
                  <ul>
                    {foods.map((food, i) => (
                      <li>{food.description}</li>
                    ))}
                  </ul>
              </section>
                {(!jwt) 
                ? 
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <Input 
                    type="text"
                    placeholder="Entrez votre email"
                    forId="email-input"
                    name="email"
                    label="Email"
                    value={this.state.email}
                    onChange={(e) => this.onChange(e)}/>

                    <Input 
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    forId="password-input"
                    name="password"
                    label="Mot de passe"
                    value={this.state.password}
                    onChange={(e) => this.onChange(e)}/>
                 
                    <ButtonYellow innerText="Se connecter" type="submit"/>

                    <p>Pas encore de compte ? <LinkTextPurple To="/register" innerText="Inscrivez-vous ici."/></p>
                </form>
                :
                null
                }
            </div>
        )
    }
}

const getProps = state => {
  return {
    isLoggedIn : state.isLoggedIn,
  }
}
// to SET to the store as dispatch
const setProps = dispatch => {
  return {
    setLoggin: token => {
      // login c'est le payload, voir STORE.
      dispatch({type: "LOGGIN", login: token});
    },
  }
};  
export default connect(getProps, setProps)(Login);

/*
function Opp() {
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);

  const getJwt = async (e) => {
    e.preventDefault()
    console.log('hola que tal')
    const { data } = await axios.get(`/jwt`);
    localStorage.setItem('token', data.token);
    console.log("DATA",data)
    setJwt(data.token);
  };
  const getFoods = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get(`/foods`);
      setFoods(data);
    } catch (err) {
    }
  };
  console.log(jwt)
  return (
    <>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={(e) => getJwt(e)}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={(e) => getFoods(e)}>
          Get Foods
        </button>
        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>
        {/* {fetchError && (
          <p style={{ color: 'red' }}>{fetchError}</p>
        )}
      </section>
    </>
  );
}
*/
/*
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'JWT fefege...'
        }

        // Envoi du nouvel utilisateur a la base de donnees (requete
        axios.post('http://localhost:4000/login', newUserToValidate, {headers: headers}) // On envoie newUser dans le body
            .then(res => {
                console.log("res", res)
                
                if(res.status === 200) {
                    this.props.history.push("/");
                }
            }
            );
        */
        /*
        axios.interceptors.request.use(
          config => {
            const { origin } = new URL(config.url);
            const allowedOrigins = [apiUrl];
            const token = localStorage.getItem('token');    

            if (allowedOrigins.includes(origin)) {
              config.headers.authorization = `Bearer ${token}`;
            }
            this.props.history.push('/');
            return config;
          },
          error => {
            return Promise.reject(error);
          }
        );

      /*
      fetch('http://localhost:4000/login', {
          method: 'POST',
          body: JSON.stringify(newUserToValidate),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            console.log(res)
            this.props.history.push('/');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
        */