import React from "react";

export default function Individual(props) {
    // let buildItemObj = {}
    // let cpuItemObj = {}
    // let gpuItemObj = {}
    // for(let i of props.data.mainList){
    //     if(i._id === props.currentIndividual){
    //         buildItemObj = i
    //     }
    // }
    // for (let item of props.data.cpuItem) {
    //     if (item._id === mainCpuId) {
    //         cpuItemObj = item
    //         break;
    //     }
    // }
    // for (let item of props.data.gpuItem) {
    //     if (item._id === mainGpuId) {
    //         gpuItemObj = item
    //         break;
    //     }
    // }
    return(
    <React.Fragment>
        <nav className="announcement ft-6 notice-color text-center">
          Submit your custom build and stand a chance to win our 2022 give away (end
          1st June)
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="index.html">
              <img src="/images/pc-tower.png" style={{ width: "80px" }} />
            </a>
            <a className="navbar-brand" href="#">
              PC-together
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    CPU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    GPU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Mother Board
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    RAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Submit New Build
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div>
            <div className="row">
                <div className="col-3">
                    <p className="display-6">Parts Used</p>
                    <div></div>
                    
                </div>
                <div className="col-9">

                </div>
            </div>
        </div>
    </React.Fragment>
)
}
