import React from 'react'
import axios from 'axios'
import './style.css'
import ReadBuild from './ReadBuild'


const BASE_URL= "https://3000-marcuscwd-pctogether-ttdq0bbnux0.ws-us38.gitpod.io/" 
// "https://pc-together.herokuapp.com/"

class App extends React.Component {
  // begin state
  state = {
      'loaded': false,
      'buildList': []
  }
  // end state

  updateFormField=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async componentDidMount() {
      let buildRequest = axios.get(BASE_URL + "build");
      let buildResponse = await buildRequest;
      this.setState({
          'buildList': buildResponse.data,
          'loaded': true
      })
  }
  render() {
    if (this.state.loaded) {
        return this.renderMain();
    } else {
        return (
            <React.Fragment>
                Loading, please wait...
            </React.Fragment>
        )
    }
}

//function renderMain
    renderMain(){
        return(
        <React.Fragment>
            <nav className="announcement ft-6 notice-color text-center">
                Submit your custom build and stand a chance to win our 2022 give away (end 1st June)
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a href="index.html">
                    <img src="/images/pc-tower.png" style={{width: "80px"}}/>
                </a>
                <a className="navbar-brand" href="#">PC-together</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">CPU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">GPU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Mother Board</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">RAM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Submit New Build</a>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
            <div className="row">
                {/* filter col */}
                <div className="col-3">

                </div>

                {/* main card listings */}
                <div className="col-9 row">
                        <ReadBuild
                        data = {this.state.buildList}
        
                        /> 
                </div>
            </div>

            
        </React.Fragment>
           
        )
    }
}
export default App;