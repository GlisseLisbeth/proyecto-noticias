import React, { Component } from 'react';
import logo from '../logo.svg';
class Noticia extends Component {
 
  render() {
    const {
      title,
      description,
      urlToImage,
      url
    } = this.props.noticia;
    return (
      <div className="card" style={{maxWidth: '18em'}}>
        {
        (urlToImage===null) ? <img className="card-img-top" src={logo} alt="logo"/> : <img className="card-img-top" src={urlToImage} alt={title}/>}
        <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a 
            href={url}
            className="btn btn-primary btn-lg active"> 
            Ver noticia</a>
        </div>
      </div>
    );
  }
}

export default Noticia;