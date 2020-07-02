import React, { Component } from 'react'

class SearchBar extends Component {
  changeSearch = e => console.log(e.target.value)
  render() {
    return (
      <div className="todoListMain">
        <div className="header">

            <input placeholder="Search..." onChange={this.props.search}/>
          
        </div>
      </div>
    )
  }
}

export default SearchBar