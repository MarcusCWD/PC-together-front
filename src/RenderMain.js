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
            <a className="navbar-brand" href="index.html">
              PC-Together
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={props.newBuild}
                  >
                    Submit New Build
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* filter button in md screen size */}
        <div className="d-flex justify-content-around">
          <a
            type="button"
            className="button1 p-3 mt-3 show-when-sm text-light"
            onClick={props.filterScreen}
          >
            Filter
          </a>
        </div>

        <div className="row">
          {/* filter col */}
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-3 remove-when-sm p-4 filter-bg"
          style={{minHeight:"1000px"}}>
            <div className="fs-4">Filter</div>
            <hr className="hr-color"></hr>
            <div className="filter-bg p-3">
              <label className="form-label">Price Range</label>
              {/* price from 500-999 */}
              <div className="form-check">
                <input
                  type="radio"
                  value={500}
                  name="priceRadio"
                  checked={props.priceRadio === "500"}
                  onClick={props.updateFormFieldRadio}
                  id="price500"
                  className="form-check-input"
                />
                <label className="form-check-label" for="price500">
                  500-999
                </label>
              </div>
              {/* price from 1000-1499 */}
              <div className="form-check">
                <input
                  type="radio"
                  value={1000}
                  name="priceRadio"
                  checked={props.priceRadio === "1000"}
                  onClick={props.updateFormFieldRadio}
                  id="price1000"
                  className="form-check-input"
                />
                <label className="form-check-label" for="price1000">
                  1000-1499
                </label>
              </div>
              {/* price from 1500-1999 */}
              <div className="form-check">
                <input
                  type="radio"
                  value={1500}
                  name="priceRadio"
                  checked={props.priceRadio === "1500"}
                  onClick={props.updateFormFieldRadio}
                  id="price1500"
                  className="form-check-input"
                />
                <label className="form-check-label" for="price1500">
                  1500-1999
                </label>
              </div>
              {/* price from 2000 onwards */}
              <div className="form-check">
                <input
                  type="radio"
                  value={2000}
                  name="priceRadio"
                  checked={props.priceRadio === "2000"}
                  onClick={props.updateFormFieldRadio}
                  id="price2000"
                  className="form-check-input"
                />
                <label className="form-check-label" for="price2000">
                  2000 above
                </label>
              </div>
            </div>
            {/* CPU TYPE */}
            <div className="p-3">
              <div className="form-label">CPU type</div>
              <input
                className="form-check-input m-1"
                type="checkbox"
                name="cpu"
                value="amd"
                checked={props.cpuFilterArr.includes("amd")}
                onChange={props.updateCpu}
              />
              AMD
              <input
                className="form-check-input m-1"
                type="checkbox"
                name="cpu"
                value="intel"
                checked={props.cpuFilterArr.includes("intel")}
                onChange={props.updateCpu}
              />
              Intel
            </div>
            {/* GPU TYPE */}
            <div className="p-3">
              <div className="form-label">GPU type</div>
              <input
                className="form-check-input m-1"
                type="checkbox"
                name="gpu"
                value="nvidia"
                checked={props.gpuFilterArr.includes("nvidia")}
                onChange={props.updateGpu}
              />
              Nvidia
              <input
                className="form-check-input m-1"
                type="checkbox"
                name="gpu"
                value="amd"
                checked={props.gpuFilterArr.includes("amd")}
                onChange={props.updateGpu}
              />
              AMD
            </div>

            <a
              type="button"
              className="button1 p-3 m-3 text-light"
              onClick={props.updateSearch}
            >
              Filter and Search
            </a>
            <a
              type="button"
              className="button2 p-3 m-3 text-light"
              href="index.html"
            >
              Reset Filter
            </a>
          </div>

          {/* main card listings */}
          <div className="col-12 col-sm-8 col-md-8 col-lg-8 col-xl-9 ">
            <div className="row g-2 custom-sizing p-2">
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
