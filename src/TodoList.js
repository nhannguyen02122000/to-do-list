import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="Remind anything?"
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Do it! </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList