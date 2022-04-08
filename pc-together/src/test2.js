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