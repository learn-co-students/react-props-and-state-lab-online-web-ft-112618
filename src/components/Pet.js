import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdopted: this.props.pet.isAdopted
    }
  }

  onClick = () => {
    this.setState({
      isAdopted: true
    })
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? "\u2642" : "\u2640"}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

          <button className={this.state.isAdopted ? "ui disabled button" : "ui primary button"} onClick={this.state.isAdopted ? null : this.onClick}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
