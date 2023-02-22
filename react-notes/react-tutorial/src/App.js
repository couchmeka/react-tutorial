import React , { Component } from 'react';

import Table from './Table'
import Form from './Form'

//components can also be functional
//{} evaluate javascript code
function Welcome(props){

    return <h1>Welcome,{props.name}</h1>
}


class App extends Component {

    //set initial state of component
state = {
    characters: [{
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      
    }]
}

//create simple function to remove character
removeCharacter =(index) =>{
    const { characters } = this.state

    //we can use set state to update the state.
    this.setState({
        //remove character at passed in index
        //a new list excluding that character
        characters: characters.filter((_, i) => {
return i !== index

        })
    })
}

//A method is a function thats a part of a class. Create function add method

// addCharacter = (name_, job) => {
    
//     this.characters.push ({name: name_,})
//     this.setState({
//     characters: this.characters 
//    }) 
// }

//we handle the submit here. The characters are in here. NOTE ON SYNTAX passing a character to addCharacter using the ... spread operater to unpack characters array
addCharacter = character => {
    this.setState({characters:[...this.state.characters, character]})
}

//you always render a function in a component

    render() {
    
      return (
        <div className="container"> 
        <Welcome name="Meka"/>
        <Table 
        characterData={this.state.characters} removeCharacter={this.removeCharacter}
         />
       <Form addCharacter = {this.addCharacter}/>
        </div>
      )
     }
    }


    export default App