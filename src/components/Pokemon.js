import React from 'react'

class Pokemon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      userInput: ''
    }
  }

  toggleEdit() {

  }

  handleChange(event) {
    
  }

  render() {
    return (
      <div>
        Pokemon.js
      </div>
    )
  }
}

export default Pokemon;