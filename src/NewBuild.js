import React from "react";
export default function NewBuild(props) {
  return (
    <React.Fragment>
      <div style={{ overflowX: "hidden", backgroundColor: "#F8F9FA" }}>
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
              PC-Together
            </a>
          </div>
        </nav>

        <div
          className="display-6 text-center text-light"
          style={{ backgroundColor: "#E26723", height: "80px" }}
        >
          Submit Build Form
        </div>
        <div className="row">
          <div className="col-5">
            <div>
              {/* CPU dropdown list */}
              <div className="p-2">
                <label className="drop-down-label-width">CPU Select:</label>
                <select
                  value={props.trackCpu} //state trackCpu
                  name="trackCpu" // trackCpu
                  onChange={props.updateFormField} // update state, {trackCpu : 'ryzen 5 5600x'}
                  className="drop-down-width"
                >
                  <option></option>
                  {props.renderCpu()}
                </select>
              </div>
              {/* GPU dropdown list */}
              <div className="p-2">
                <label className="drop-down-label-width">GPU Select:</label>
                <select
                  value={props.trackGpu}
                  name="trackGpu"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                >
                  <option></option>
                  {props.renderGpu()}
                </select>
              </div>
              {/* MOBO dropdown list */}
              <div className="p-2">
                <label className="drop-down-label-width">Mobo Select:</label>
                <select
                  value={props.trackMobo}
                  name="trackMobo"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                >
                  <option></option>
                  {props.renderMobo()}
                </select>
              </div>
              {/* RAM dropdown list */}
              <div className="p-2">
                <label className="drop-down-label-width">RAM Select:</label>
                <select
                  value={props.trackRam}
                  name="trackRam"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                >
                  <option></option>
                  {props.renderRam()}
                </select>
              </div>
            </div>
            {/* Fill in listing name, user email, build img link, build ease, description of build */}
            <div className="pt-5">
              <div className="p-2">
                <label className="drop-down-label-width">Build's Name:</label>
                <input
                  type="text"
                  value={props.buildName}
                  name="buildName"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                />
                <div className="valid-input-red">{props.validBuildName}</div>
              </div>
              <div className="p-2">
                <label className="drop-down-label-width">
                  Build's Image URL:
                </label>
                <input
                  type="text"
                  value={props.buildURL}
                  name="buildURL"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                />
                <div className="valid-input-red">{props.validBuildURL}</div>
              </div>
              <div className="p-2">
                <label className="drop-down-label-width">
                  Submitter's User Email
                </label>
                <input
                  type="text"
                  value={props.buildEmail}
                  name="buildEmail"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                />
                <div className="valid-input-red">{props.validBuildEmail}</div>
              </div>
              <div className="p-2">
                <label className="drop-down-label-width">
                  Build Ease Rating
                </label>
                <select
                  value={props.buildRate}
                  name="buildRate"
                  onChange={props.updateFormField}
                  className="drop-down-width"
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
              <div className="p-2">
                <label className="drop-down-label-width">
                  Build description
                </label>
                <textarea
                  value={props.buildDescription}
                  name="buildDescription"
                  onChange={props.updateFormField}
                  className="drop-down-width"
                  rows="4"
                />
                <div className="valid-input-red">
                  {props.validBuildDescription}
                </div>
              </div>
              <a
                type="button"
                className="button1 p-3 m-3 text-light"
                onClick={props.submitBuild}
              >
                Submit
              </a>
            </div>
          </div>
          <div className="col-7 remove-when-md">
            <div
              className="image-individual-img "
              style={{
                backgroundImage: `url(https://cdna.pcpartpicker.com/static/forever/images/userbuild/391126.dde9dde75fd64610782a70ad0fcbea06.1600.jpg)`,
                borderRadius: "5px",
                height:"800px"
              }}
            ></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
