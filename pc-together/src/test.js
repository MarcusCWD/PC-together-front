<div className="col-3" style={{ backgroundColor: "#f0f2f5" }}>
{/* CPU */}
<div>
  <img
    src={props.individualList.cpuItem[0].image}
    className="image-individual-part"
    alt="cpu"
  />
  <p>{props.individualList.cpuItem[0].product_name}</p>
</div>
{/* GPU */}
<div>
  <img
    src={props.individualList.gpuItem[0].image}
    className="image-individual-part"
    alt="gpu"
  />
  <p>{props.individualList.gpuItem[0].product_name}</p>
</div>
{/* MOBO */}
<div>
  <img
    src={props.individualList.moboItem[0].image}
    className="image-individual-part"
    alt="motherboard"
  />
  <p>{props.individualList.moboItem[0].product_name}</p>
</div>
{/* RAM */}
<div>
  <img
    src={props.individualList.ramItem[0].image}
    className="image-individual-part"
    alt="RAM"
  />
  <p>{props.individualList.ramItem[0].product_name}</p>
</div>
</div>