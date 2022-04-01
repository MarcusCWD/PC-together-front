import React from "react";

export default function Individual(props) {
  return(
    <React.Fragment>
      <div style={{overflowX: "hidden"}}>
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
            {/* parts used and image */}
            <div className="row m-3">
              <div className="col-3" style={{ backgroundColor: "grey" }}>
                {/* CPU */} 
                <div >
                  <img src={props.individualList.cpuItem[0].image} className="image-individual-part" alt="cpu"/>
                  <p>{props.individualList.cpuItem[0].product_name}</p>
                </div>
                {/* GPU */}
                <div>
                  <img src={props.individualList.gpuItem[0].image} className="image-individual-part" alt="gpu"/>
                  <p>{props.individualList.gpuItem[0].product_name}</p>
                </div>
                {/* MOBO */}
                <div>
                  <img src={props.individualList.moboItem[0].image} className="image-individual-part" alt="motherboard"/>
                  <p>{props.individualList.moboItem[0].product_name}</p>
                </div>    
                {/* RAM */}
                <div>
                  <img src={props.individualList.ramItem[0].image} className="image-individual-part" alt="RAM"/>
                  <p>{props.individualList.ramItem[0].product_name}</p>
                </div>                              
              </div>
              {/* image of the build */}
              <div className="col-9">
                <img src={props.individualList.mainList[0].image} className="img-fluid" alt="PC build"/>
              </div>
            </div>
          </div>

        </div>
        
    </React.Fragment>
  )
}