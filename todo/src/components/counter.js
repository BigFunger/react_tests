import React, { Component } from 'react';
import uuid from 'uuid';
import { store } from '../store';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              { categoryOptions }
            </select>
          </div>
          < br />
          <input type="submit" value="Submit" />
          < br />
        </form>
      </div>
    );
  }
}

export default AddProject;
