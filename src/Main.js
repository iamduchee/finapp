import React, {Component} from 'react';
class Main extends Component {
	state={
 		username:'',
 		password:'',
 	}
 	handleChange =(e) =>{
 		this.setState({[e.target.name]
            : e.target.value
 		})
 	}
 	handleSubmit =(e) =>{
 		e.preventDefault();
 		if (this.state.Username !== '' && this.state.password !== '') {
 			console.log(this.state)
 		}
   }
 render () {
 	return (
    <div className="Dee">
    <p>{this.props.name}</p> 
    <form onSubmit ={this.handleSubmit}>
    <label>Username:</label><br/>
    <input type="text" name="username" onChange={this.handleChange}></input><br/>
    <label>password:</label><br/>
    <input type="password" name="username" onChange={this.HandleChange}></input><br/><br/>
    <input type="submit" value="Submit"></input>
    </form>
    </div>
 		)
 }
}
export default Main;