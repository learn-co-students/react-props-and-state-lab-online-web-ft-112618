import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let onAdoptPet = this.props.onAdoptPet
    console.log(this.props.pets[0])
    return <div className="ui cards">{this.props.pets.map(function(pet, idx) {
        return <div><Pet key={idx} pet={pet} onAdoptPet={onAdoptPet}/></div>
      })}</div>
  }
}

export default PetBrowser
