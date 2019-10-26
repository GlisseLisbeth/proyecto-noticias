import React, { Component } from "react";
import Categoria from "./Categoria";

class Formulario extends Component {
  state = {
      selected: ''
  }

  handleChange = (e) => {
    this.setState({selected: e.target.value});
  }  

  static getDerivedStateFromProps(props, state) {
    return {
      selected: state.selected
    };
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.selected !== nextState.state)?nextProps.consultarNoticia(nextState.selected):null;
  }

  render() {
    const { categoriaNoticias, selected } = this.props;
   
    return (
      <form>
        <div className="form-row justify-content-center">
          <div className="form-group col-md-4">
            <select 
              id="id-categoria"
              className="form-control"
              onChange={this.handleChange}
              value={selected}
              >
              {categoriaNoticias.map((categoria, index) => {
                return <Categoria key={index} categoria={categoria} />;
              })}
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
