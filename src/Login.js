import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import firebase from './initializers/firebase';
//import Avatar from '@material-ui/core/Avatar';


export default class Login extends Component{
constructor(props) {
    super();
    this.Login = this.Login.bind(this);

    this.state ={
      userloggedIn: false
    };
}

componentDidMount(){
firebase.auth().onAuthStateChanged((user)=>{
console.log(user);
if(user){
 this.setState({
     userloggedIn:true
 })   //Hay inicio de seccion
}else{
    //No Hay inicio Sesion
    }
  })
}
Login(){
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

    firebase.auth().signInWithPopup(provider).then(result=>{
       let token = result.credential.accessToken;
    }).catch(err=>{
       console.log(err);
    })
}
logInButton(){
    if(this.state.userLoggedIn) return(
   <p>Cerrar sesion</p>
    );


    return (<Button variant="contained" onClick={this.Login}>
    INICIAR SESSION CON GOOGLE
    </Button>);
}

render(){
    return(
        <div>
        {this.logInButton()}
        </div>
    );
  }
}
