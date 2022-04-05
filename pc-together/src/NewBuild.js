import React from "react";
export default function NewBuild(props) {
  return (
    <React.Fragment>
      <nav className="announcement ft-6 notice-color text-center">
        Submit your custom build and stand a chance to win our 2022 give away
        (end 1st June)
      </nav>
      <nav className=" navbar-light bg-light">
        <div className="container-fluid">
          <a href="index.html">
            <img src="/images/pc-tower.png" style={{ width: "80px" }} />
          </a>
          <a className="navbar-brand" href="index.html">
            PC-together
          </a>
        </div>
      </nav>
      <div className="row">
        <div className="col-5" style={{ backgroundColor: "grey" }}>
          {/* CPU dropdown list */}
          <div>
            <label>CPU Select:</label>
            <select
              value={props.trackCpu} //state trackCpu
              name="trackCpu" // trackCpu
              onChange={props.updateFormField} // update state, {trackCpu : 'ryzen 5 5600x'}
            >
              <option></option>
              {props.renderCpu()}
            </select>
          </div>
          {/* GPU dropdown list */}
          <div>
            <label>GPU Select:</label>
            <select
              value={props.trackGpu}
              name="trackGpu"
              onChange={props.updateFormField}
            >
              <option></option>
              {props.renderGpu()}
            </select>
          </div>
          {/* MOBO dropdown list */}
          <div>
            <label>Mobo Select:</label>
            <select
              value={props.trackMobo}
              name="trackMobo"
              onChange={props.updateFormField}
            >
              <option></option>
              {props.renderMobo()}
            </select>
          </div>
          {/* RAM dropdown list */}
          <div>
            <label>RAM Select:</label>
            <select
              value={props.trackRam}
              name="trackRam"
              onChange={props.updateFormField}
            >
              <option></option>
              {props.renderRam()}
            </select>
          </div>
        </div>
        {/* Fill in listing name, user email, build img link, build ease, description of build */}
        <div className="col-7" style={{ backgroundColor: "orange" }}>
          <div>
            <label>Build's Name:</label>
            <input
              type="text"
              value={props.buildName}
              name="buildName"
              onChange={props.updateFormField}
            />
          </div>
          <div>
            <label>Build's Image URL:</label>
            <input
              type="text"
              value={props.buildURL}
              name="buildURL"
              onChange={props.updateFormField}
            />
          </div>
          <div>
            <label>Submitter's User Email</label>
            <input
              type="text"
              value={props.buildEmail}
              name="buildEmail"
              onChange={props.updateFormField}
            />
          </div>
          <div>
            <label>Build Ease Rating</label>
            <select
              value={props.buildRate}
              name="buildRate"
              onChange={props.updateFormField}
            >
              <option></option>
              <option value={5.0}>5.0</option>
              <option value={4.5}>4.5</option>
              <option value={4.0}>4.0</option>
              <option value={3.5}>3.5</option>
              <option value={3.0}>3.0</option>
              <option value={2.5}>2.5</option>
              <option value={2.0}>2.0</option>
              <option value={1.5}>1.5</option>
              <option value={1.0}>1.0</option>
              <option value={0.5}>0.5</option>
              <option value={0.0}>0.0</option>
            </select>
          </div>
          <div>
            <label>Build description</label>
            <input
              type="text"
              value={props.buildDescription}
              name="buildDescription"
              onChange={props.updateFormField}
            />
          </div>
          <button type="button" className="btn btn-primary p-3" onClick={props.submitBuild}>
              Search and Filter
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
