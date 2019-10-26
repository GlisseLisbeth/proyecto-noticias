import React, { Component } from "react";

class Categoria extends Component {
  render() {
    const {categoria} = this.props;
    return (
          <option 
          >{categoria}</option>
    );
  }
}

export default Categoria;
