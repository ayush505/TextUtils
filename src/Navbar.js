import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const removeclass=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-secondary');
  }

 const changeColor=(cls)=>{
   removeclass();
   document.body.classList.add('bg-'+cls);
 }


  return (
    <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   

       
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
         
        </li>
        {/* <Link className="nav-link active" aria-current="page" to="/About">{props.about}</Link> */}
        
    
      </ul>

      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group me-2" role="group" aria-label="First group">
    <button onClick={e => changeColor('danger')}  type="button" className="btn btn-danger">1</button>
   
    <button onClick={e => changeColor('secondary')}  type="button" className="btn btn-secondary">2</button>

    <button onClick={e => changeColor('info')} type="button" className="btn btn-info">3</button>
    <button onClick={e => changeColor('warning')} type="button" className="btn btn-warning">4</button>
  </div>
</div>
      <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} `}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
</div>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  );
}

Navbar.propTypes={ title: PropTypes.string,
                    about: PropTypes.string}

