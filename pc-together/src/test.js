{/* <div className="row"> */}
<div className="display-6 text-center" style={{ backgroundColor: "#E26723", height:"80px" }}>Edit Build</div>
{/* <div className="col-3"></div> */}
<div style={{ backgroundColor:"#F8F9FA", width:"100%" }}>
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
        <option value={props.current_idCpu}>{props.currentProduct_nameCpu}</option>
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
         <option value={props.current_idGpu}>{props.currentProduct_nameGpu}</option>
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
        <option value={props.current_idMobo}>{props.currentProduct_nameMobo}</option>
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
         <option value={props.current_idRam}>{props.currentProduct_nameRam}</option>
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
    </div>
    <div className="p-2">
      <label className="drop-down-label-width">Build Ease Rating</label>
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
      <label className="drop-down-label-width">Build description</label>
      <textarea
        value={props.buildDescription}
        name="buildDescription"
        onChange={props.updateFormField}
        className="drop-down-width"
        rows="4"
      />
    </div>
    <button
      type="button"
      className="btn btn-primary p-3 m-3"
      onClick={props.editBuild}
    >
      Submit Edited Build
    </button>
  </div>
</div>