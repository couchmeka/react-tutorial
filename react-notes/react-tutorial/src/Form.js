import React, {Component} from 'react'

class Form extends Component {

    //constructors initialize when form is created
    //we set the initial state of our form and save it to the state
    constructor(props){
        super(props); //inheriting props from component.

        //set the initial state of the Form
        this.initalState = {
            name:'',
            job: ''
        };

        //set our initial state to state.
        this.state = this.initalState;
    }

    handleChange = event => {
        //get name and value out of target (element that changed)
        const{name, value} = event.target;
        this.setState ({
            [name]: value
        })
    }


     onFormSubmit = (event) => {

    //standard for onSubmits
    event.preventDefault();

//set the current state of our form to the handle submit
     this.props.addCharacter(this.state);

     //clear inputs by setting form to initial state
     this.setState(this.initalState);

    }

    render(){
      //hook in data from state 
      const { name, job } = this.state;
        return(
            <form onSubmit={this.onFormSubmit}>
            <label for="name">Name: </label><br/>
            <input type="text" id="name" name="name" value={name} onChange={this.handleChange}/><br/>
            <label for="job">Job: </label><br/>
            <input type="text" id="job" name="job" value = {job} onChange={this.handleChange}/><br/>
            <button type="submit">
                Submit
            </button>
        </form> 
        )
    }
}

export default Form 