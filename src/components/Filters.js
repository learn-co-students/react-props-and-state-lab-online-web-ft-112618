import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'all'
    }
  }

  handleChange = (e) => {
    this.setState({
      type: e.target.value
    })
    this.props.onChangeType(this.state.type)
  }

  // handleSubmit = (e) => {
  //   this.prop.
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.state.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
