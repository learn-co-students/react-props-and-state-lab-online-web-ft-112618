import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (val) => {
    this.setState({
      filters: {
        type: val
      }
    })
  }

  onFindPetsClick = () => {
    let queryType = '?type=' + this.state.filters.type
    queryType === '?type=all' ? queryType = '' : null
    fetch('/api/pets' + queryType).then(resp => resp.json()).then(json => this.setState({
      pets: json
    }))
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet => (pet.id === id ? {...pet, isAdopted: true } : pet))
    this.setState({
      pets: pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
