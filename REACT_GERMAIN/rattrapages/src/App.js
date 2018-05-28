import React, { Component } from 'react';
import logo from './logo.svg';
import LoginPage from './components/LoginPage';
import Form from "./components/Form";
import Admin from "./components/Admin";
import User from "./components/User";
import UserInput from "./components/UserInput";

import './App.css';
import axios from "axios";

import {
  chat_post_messages_to_channel
} from "./chat/actions";

class App extends Component {

state = {
    lastname: "",
    firstname: "",
    email: "",
    msg:"",
    channel: "",
    user_valid: false ,
    admin_valid: false,
  }

  _onClick_valid_username() {
    this.setState({
      admin_valid: true
    });
  }

  _onChange_lastname(e) {
    this.setState({
      lastname: e.target.value
    });

  }

  _onChange_firstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  _onChange_email(e) {
    this.setState({
      email: e.target.value
    });
  }

  _onChange_message(e){
    this.setState({
      msg: e.target.value
    });
  }

  _onChange_valid_admin() {
      if ((this.state.lastname === "admin")&&(this.state.firstname === "admin")){    
          this.setState({
          admin_valid: true,
          });
      }
  }

  _onClick_valid_user() {
    if (this.state.email === "admin"){    
          this.setState({
          user_valid: true
          });
        }
      else
        this.setState({
          user_valid: false
          });
  }
  _onClick_valid() {
    if(this.state.lastname === "admin"){
      this.setState({
      admin_valid: true
      });
    }

    this.setState({
      user_valid: true
      });
  }
  _onClick_deconnexion() {
    this.setState({
      lastname: "",
      firstname: "",
      email: "",
      user_valid: false
    });
  }
  _onClick_valid_message() {
    this._post_channel_message(this.state.channel)
      .then(() => {
        this.setState({
          msg: "",
        });
      })
  }
    _post_channel_message(channel) {
    return axios
    .post(
      `http://localhost:9000/api/margot/messages/${channel}`,
      {
        firstName: this.state.firstName,
        description: this.state.description
      }

    )
    .then(function (response) {
      console.log("_post_channel_message ", response);
      return {
        error: response.status !== 200,
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _fetch_channel_messages(channel) {
    return axios
    .get(`http://localhost:9000/api/margot/message/${channel}`)
    .then(function (response) {
      console.log("_fetch_channel_messages ", response);
      return {
        error: response.status !== 200,
        description: response.data
      };
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  _createUser(){
    return axios
    .post(
      `http://localhost:9000/api/margot/user`,
      {
        email: this.state.email,
        lastName: this.state.lastname,
        firstName: this.state.firstname,
      }
      )
      .then(function (response) {
        console.log("_createUserApi ", response);
        return {
          error: response.status !==200,
        };
      })
      .catch(function (error) {
        console.log(error);
     });
  }

  _createMessage(){
    return axios
    .post(
      `http://localhost:9000/api/margot/message`,
      {
        description: this.state.msg,
        firstName: this.state.firstname,
      }
      )
      .then(function (response) {
        console.log("_createMessageApi ", response);
        return {
          error: response.status !==200,
        };
      })
      .catch(function (error) {
        console.log(error);
     });
  }


  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Messagerie</h1>
        <img src={logo} className="App-logo" alt="logo" />       
        </header>
        { 
          !this.state.user_valid ?
           <div>
              <div 
              className="TitleLoding"
              >
                Loding Page :
              </div>
              <Form
              lastname={this.state.lastname}
              firstname={this.state.firstname}
              email={this.state.email}
              AdminValid={this.state.admin_valid}
              onChangeLastName={this._onChange_lastname.bind(this)}
              onChangeFirstName={this._onChange_firstname.bind(this)}
              onChangeEmail={this._onChange_email.bind(this)}
              onChangeValidAdmin={this._onChange_valid_admin.bind(this)}
              onClickValidUser={this._onClick_valid_user.bind(this)}
              onClickValid={this._onClick_valid.bind(this)}
              />
              <button onClick={() => {
                  this._createUser(this.state.text)
                }}
            >
              AjouterUtilisateur
            </button>
            </div>
        :
          <div>{
            this.state.admin_valid ?
            <span>
              <Admin/> 
            </span>
          :
            <div>
              <User
              onChangeMessage={this._onChange_message.bind(this)}
              onClickDeconnexion={this._onClick_deconnexion.bind(this)}
              />
              <button style ={{
                position: "absolute",
                top:350,
                right: 700,
              }}
              onClick={() => {
                  this._createMessage(this.state.text)
                }}
            >
              Envoyer Message
            </button>
            </div>
          }
          </div>
        }
      </div>

    );
  }
}

export default App;
