import React from "react";
export default function Individual(props) {
  let commentArr = [];
  function comments() {
    for (let comment of props.individualList.commentList) {
      commentArr.push(
        <div className="card mb-4">
          <div className="card-body">
            <p>{comment.comment}</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img
                  src="/images/user.png"
                  alt="avatar"
                  width="25"
                  height="25"
                />
                <p className="small mb-0 ms-2">{comment.name}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return commentArr;
  }
  return (
    <React.Fragment>
      <div style={{ overflowX: "hidden", margin: "0px", padding: "0px" }}>
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
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={props.newBuild}
                  >
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
          {/* name of the build */}
          <div
            className="d-flex justify-content-center text-white"
            style={{ backgroundColor: "#E26723", height: "120px" }}
          >
            <div className="display-6 text-center" style={{ width: "600px" }}>
              {props.individualList.mainList[0].name}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            {/* image of the build */}
            <div className="col-8">
              <div
                className="image-individual-img"
                style={{
                  backgroundImage: `url(${props.individualList.mainList[0].image})`,
                }}
              ></div>
            </div>
            {/* upvote, description*/}
            <div className="col-4">
              {/* description */}
              <div
                className="p-3 masked-overflow"
                style={{ height: "450px", overflow: "auto" }}
              >
                <div className="fs-5">Description</div>
                <div>{props.individualList.mainList[0].description}</div>
              </div>
              {/* upvote and build ease */}
              <div className="row d-flex pt-4">
                <div className="col-4">
                  <img
                    src="/images/arrow-up.png"
                    style={{ height: "50px" }}
                    alt="upvote"
                  />
                  <p className="fs-6 d-inline px-1 fw-bold">
                    {props.individualList.mainList[0].votes}
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    Like what you see? Upvote here!
                  </p>
                </div>
                <div className="col-4">
                  <img
                    src="/images/tools.png"
                    style={{ height: "50px" }}
                    alt="build ease"
                  />
                  <p className="fs-6 d-inline px-1 fw-bold">
                    {props.individualList.mainList[0].build_ease}
                  </p>
                  <p style={{ fontSize: "15px" }}>User build ease</p>
                </div>
              </div>
            </div>
          </div>
          {/* Parts used */}
          <div style={{ backgroundColor: "#F8F9FA" }}>
            <div className="display-6 py-3 mx-3 d-line d-flex">
              Parts and prices
            </div>
            <div className="fs-5 fw-bold m-3 d-line d-flex">
              Bundled cost: USD {props.individualList.mainList[0].price}
            </div>
            <div className="row mx-2 pt-5">
              {/* CPU */}
              <div className="col-3">
                <div className="col ">
                  <img
                    src={props.individualList.cpuItem[0].image}
                    className="image-individual-part"
                    alt="cpu"
                  />
                  <p>{props.individualList.cpuItem[0].product_name}</p>
                  <p>USD {props.individualList.cpuItem[0].price}</p>
                </div>
              </div>
              {/* GPU */}
              <div className="col-3">
                <div className="col ">
                  <img
                    src={props.individualList.gpuItem[0].image}
                    className="image-individual-part"
                    alt="gpu"
                  />
                  <p>{props.individualList.gpuItem[0].product_name}</p>
                  <p>USD {props.individualList.gpuItem[0].price}</p>
                </div>
              </div>
              {/* MOBO */}
              <div className="col-3">
                <div className="col ">
                  <img
                    src={props.individualList.moboItem[0].image}
                    className="image-individual-part"
                    alt="motherboard"
                  />
                  <p>{props.individualList.moboItem[0].product_name}</p>
                  <p>USD {props.individualList.moboItem[0].price}</p>
                </div>
              </div>
              {/* ram */}
              <div className="col-3">
                <div className="col ">
                  <img
                    src={props.individualList.ramItem[0].image}
                    className="image-individual-part"
                    alt="ram"
                  />
                  <p>{props.individualList.ramItem[0].product_name}</p>
                  <p>USD {props.individualList.ramItem[0].price}</p>
                </div>
              </div>
            </div>
          </div>
          {/* comments */}
          <div
            className="row d-flex justify-content-center"
            style={{ backgroundColor: "#E26723" }}
          >
            <div className="col-10 py-5">
              <div
                className="card shadow-0 border"
                style={{ backgroundColor: "#f0f2f5" }}
              >
                <div className="display-6 m-3">Community comments</div>
                {comments()}
                <div className="card-body p-4">
                  <div className="display-6 p-1">Comments? </div>
                  <div className="form-outline">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name here..."
                      value={props.commentName}
                      name="commentName"
                      onChange={props.updateFormField}
                    />
                    <div className="py-2"></div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email..."
                      value={props.commentEmail}
                      name="commentEmail"
                      onChange={props.updateFormField}
                    />
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="enter comment..."
                      value={props.commentComment}
                      name="commentComment"
                      onChange={props.updateFormField}
                    />
                    <button
                      type="button"
                      className="btn btn-primary p-3 mt-3"
                      onClick={props.submitComment}
                    >
                      Submit comment
                    </button>
                  </div>
                </div>
              </div>
              <div className="edit-part">
                Need to edit listing? Enter Valid creator's email here.
                <input
                  type="text"
                  className="form-control "
                  placeholder="enter email..."
                  value={props.creatorEmail}
                  name="creatorEmail"
                  onChange={props.updateFormField}
                />
                <button
                  type="button"
                  className="btn btn-primary p-1 mt-3"
                  onClick={props.submitEditEmail}
                >
                  Edit Build
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
