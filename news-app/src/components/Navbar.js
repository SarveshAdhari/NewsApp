import React, { useState } from 'react'
import { useNavigate,Link }  from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {

  const [ inp, setInp ] = useState("");
  const navigate = useNavigate();

  function Search(e){
    e.preventDefault();
    if(inp===""){
      alert("Please Enter A Valid Query String")
    }
    else{
      navigate(`/news/query?q=${inp}`)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className='nav-news'>News</span>
          <span className='nav-app'>App</span>
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">General</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Sports">Sports</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Technology">Technology</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Science">Science</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Health">Health</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/news?cat=Business">Business</Link>
          </li>
          </ul>
          <form className="d-flex" role="search">
            <input 
            className="form-control me-2 search" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            onInput={e => {setInp(e.target.value)}}/>
              <button 
              className="btn search" 
              type="button"
              onClick={e => Search(e)}>
                Search
              </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
