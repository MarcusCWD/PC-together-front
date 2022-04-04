import React from "react";
import ReadBuild from "./ReadBuild";

export default function RenderMain(props) {
  return (
    <React.Fragment>
      <div style={{ overflowX: "hidden" }}>
        <nav className="announcement ft-6 notice-color text-center">
          Submit your custom build and stand a chance to win our 2022 give away
          (end 1st June)
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <div className="row">
          {/* filter col */}
          <div className="col-3 p-4 filter-bg">
            <div className="fs-4">Filter</div>
            <hr className="hr-color"></hr>
            <div className="filter-bg p-3">
              <label className="form-label">
                Price Range
              </label>
              {/* price from 500-999 */}
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  500-999 
                </label>
              </div>
              {/* price from 1000-1799 */}
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  1000-1799
                </label>
              </div>
              {/* price from 1800-2499 */}
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  1800-2499
                </label>
              </div>
              {/* price from 2500 onwards */}
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  2500 onwards
                </label>
              </div>
            </div>
            {/* CPU TYPE */}
            <div className="p-3">
              <div className="form-label">CPU type</div>
              <input className="form-check-input" type="checkbox" name="cpu" value="amd"
                  checked={props.cpuFilterArr.includes("amd")}
                  onChange={props.updateCpu}/>AMD
              <input className="form-check-input" type="checkbox" name="cpu" value="intel"
                  checked={props.cpuFilterArr.includes("intel")}
                  onChange={props.updateCpu}/>Intel
            </div>
            {/* GPU TYPE */}
            <div className="p-3">
              <div className="form-label">GPU type</div>
              <input className="form-check-input" type="checkbox" name="gpu" value="nvidia"
                  checked={props.gpuFilterArr.includes("nvidia")}
                  onChange={props.updateGpu}/>Nvidia
              <input className="form-check-input" type="checkbox" name="gpu" value="amd"
                  checked={props.gpuFilterArr.includes("amd")}
                  onChange={props.updateGpu}/>AMD
            </div>
    
            <button type="button" className="btn btn-primary p-3" onClick={props.updateSearch}>
              Search and Filter
            </button>
          </div>

          {/* main card listings */}
          <div className="col-9">
            <div className="row">
              <ReadBuild
              data={props.data}
              currentIndividual={props.currentIndividual}
            />
            </div>
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
