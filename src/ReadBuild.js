import React from "react";

export default function ReadBuild(props) {
  let arrStore = [];
  for (let build of props.data.mainList) {
    let mainCpuId = build.parts.cpu_id;
    let mainGpuId = build.parts.gpu_id;
    let cpuItemObj = {};
    let gpuItemObj = {};
    for (let item of props.data.cpuItem) {
      if (item._id === mainCpuId) {
        cpuItemObj = item;
        break;
      }
    }
    for (let item of props.data.gpuItem) {
      if (item._id === mainGpuId) {
        gpuItemObj = item;
        break;
      }
    }
    arrStore.push(
      <React.Fragment>
        <div className="col-md-5 col-lg-4 col-xl-3">
          <a href="#"
            className=" card p-0 mb-2 mx-auto mx-md-0 nostyle"
            onClick={() => {
              props.currentIndividual(build._id);
            }}
          >
            <div
              className="card-img-top image"
              style={{ backgroundImage: `url(${build.image})` }}
            ></div>
            <div className="card-body">
              <h6 className="card-title fixed-height-card "> 
                {build.name}
              </h6>
              <p className="card-text">USD${parseFloat(build.price)}</p>
              <p className="card-text font-card m-0 fixed-height-card">
                {cpuItemObj.product_name}
              </p>
              <p className="card-text font-card fixed-height-card">{gpuItemObj.product_name}</p>
              <hr></hr>
              <div className="d-flex justify-content-between">
                <div>
                  <img
                    src="/images/arrow-up.png"
                    className="upvote-image-size"
                    alt="upvote"
                  />
                  <p className="upvote-font-size d-inline px-1">
                    {build.votes}
                  </p>
                </div>
                <div>
                  <img
                    src="/images/tools.png"
                    className="upvote-image-size"
                    alt="build ease"
                  />
                  <p className="upvote-font-size d-inline px-1">
                    {build.build_ease}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
  return arrStore;
}
