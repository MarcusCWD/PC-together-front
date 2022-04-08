import React from "react";
export default function Filter(props) {
  return (
    <React.Fragment>
      <div className="p-4 filter-bg">
        <a
          onClick={props.mainPage}
          href="#"
          className="nostyle"
        >
            <i class="fas fa-light fa-magnifying-glass"></i>
        </a>
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
              id="price1500"
              className="form-check-input"
            />
            <label className="form-check-label" for="price2000">
              2000
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

        <button
          type="button"
          className="btn btn-primary p-3"
          onClick={props.updateSearchFilter}
        >
          Search and Filter
        </button>
      </div>
    </React.Fragment>
  );
}
