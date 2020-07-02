import React, { Component } from 'react'
// import './App.css'
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import SearchBar from './SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentSearch: '',
      filteredItems: [],
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    }
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      // filteredItems,
      items: [...filteredItems],
    }, ()=> {
      this.research()
      console.log("filter item 44: ", this.state.filteredItems)

    })
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        filteredItems: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  search = e=>{
    const temp = e.target.value;
    const filteredItems = this.state.items.filter(item=>{
      return (item.text.includes(temp));
    })
    this.setState({
      filteredItems,
      currentSearch: temp
    })
  }

  research = e=>{
    const temp =this.state.currentSearch;
    const filteredItems = this.state.items.filter(item=>{
      return (item.text.includes(temp));
    })
    this.setState({
      filteredItems,
      currentSearch: temp
    })
  }
  render() {
    const {filteredItems} = this.state
    console.log("filter 55: ",filteredItems)
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <SearchBar search={this.search} />
        <TodoItems entries={this.state.filteredItems} deleteItem={this.deleteItem} research={this.research}/>

      </div>
    )
  }
}

export default App