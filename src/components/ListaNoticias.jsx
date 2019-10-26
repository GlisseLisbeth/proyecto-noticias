import React, { Component } from 'react';
import Noticia from './Noticia'

class ListaNoticias extends Component {
  render() {
    const {listaNoticias} = this.props;
    return (
      <div className="card-columns text-center">
         {listaNoticias.map((noticia, index)=>{
              return (
                <Noticia 
                  key={index}
                  noticia={noticia} 
                />
              )
            })}
      </div>
    );
  }
}

export default ListaNoticias;