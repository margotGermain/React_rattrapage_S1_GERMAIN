importer MuiThemeProvider depuis 'material-ui / styles / MuiThemeProvider'; 
importer AppBar depuis 'material-ui / AppBar'; 
importer RaisedButton à partir de 'material-ui / RaisedButton'; 
importer TextField à partir de 'material-ui / TextField'; 
class Login extends Composant { 
constructor (accessoires) { 
  super (props); 
  this.state = { 
  nom d'utilisateur: '', 
  mot de passe: '' 
  } 
} 
render () { 
    return ( 
      <div> 
        <MuiThemeProvider> 
          <div> 
          <AppBar 
             title = "Login" 
           /> 
           <TextField 
             hintText = "Entrez votre nom d'utilisateur"

             onChange = {(événement, newValue) => this.setState ({nom d' utilisateur: nouvelleValeur})} 
             /> 
           <br/> 
             <TextField 
               type = "mot de passe" 
               hintText = "Entrez votre mot de passe" 
               floatingLabelText = "Mot de passe" 
               onChange = {( event, newValue) => this.setState ({mot de passe: nouvelleValeur})} 
               /> 
             <br/> 
             <RaisedButton label = "Envoyer" primary = {true} style = {style} onClick = {(event) => this. handleClick (événement)} /> 
         </ div> 
         </ MuiThemeProvider> 
      </ div> 
    );
  } 
} 
const style = { 
margin: 15, 
};
export par défaut Login;