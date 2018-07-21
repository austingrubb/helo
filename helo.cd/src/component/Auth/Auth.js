import React, {Component} from 'react';
import { connect } from 'react-redux';
import { login, register } from '../../ducks/reducer';



export class Auth extends Component {
    constructor(){
        super()
        
        this.state = {
            user: '',
            password: '',
        }


    }
    
    handleChange = (key, value) =>{
        console.log(value)
        this.setState({[key]:value})
      }
    render(){  
        return(
            <div>
                <input name="Login" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                <input name="Register" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
               <button>Login</button>
               <button>Register</button>
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
      login: storeState.login,
    }
  }

const mapDispatchToProps = {
    register,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(login, register)

