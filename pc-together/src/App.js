import React from "react";
import axios from "axios";
import "./style.css";
import RenderMain from "./RenderMain";
import Individual from "./Individual";
import NewBuild from "./NewBuild";
import EditBuild from "./EditBuild";

const BASE_URL =
  "https://3000-marcuscwd-pctogether-ttdq0bbnux0.ws-us38.gitpod.io";
// "https://pc-together.herokuapp.com/"

class App extends React.Component {
  // begin state
  state = {
    loaded: false,
    buildList: [],
    pageTracker: "main",
    individualList: [],
    cpuFilterArr: [],
    gpuFilterArr: [],
    priceRadio: [],
    newParts: [],
    trackCpu: "",
    trackGpu: "",
    trackMobo: "",
    trackRam: "",
    buildName: "",
    buildEmail: "",
    buildURL: "",
    buildRate: "",
    buildDescription: "",
    commentComment:"",
    commentEmail:"",
    commentName:"",
    creatorEmail:""
  };
  // end state

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateFormFieldRadio = (e) => {
    if (this.state.priceRadio !== e.target.value) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    } else {
      this.setState({
        [e.target.name]: [],
      });
    }
  };
  changePage = (page) => {
    this.setState({
      pageTracker: page,
    });
  };
  currentIndividual = async (buildId) => {
    let individualRequest = axios.get(
      BASE_URL + "/" + buildId + "/individualbuild"
    );
    let individualResponse = await individualRequest;
    this.setState({
      individualList: individualResponse.data,
      pageTracker: "individual",
    });
  };
  updateSearch = async () => {
    let queryString = {
      params: {
        cpu_brand_name: this.state.cpuFilterArr,
        gpu_brand_name: this.state.gpuFilterArr,
        price_search: this.state.priceRadio,
      },
    };
    let searchRequest = axios.get(BASE_URL + "/filter", queryString);
    let searchResponse = await searchRequest;
    this.setState({
      buildList: searchResponse.data,
    });
  };
  updateCpu = (e) => {
    if (this.state.cpuFilterArr.includes(e.target.value)) {
      let indexToRemove = this.state.cpuFilterArr.findIndex(
        (cpu) => cpu === e.target.value
      );
      let clone = [
        ...this.state.cpuFilterArr.slice(0, indexToRemove),
        ...this.state.cpuFilterArr.slice(indexToRemove + 1),
      ];
      this.setState({
        cpuFilterArr: clone,
      });
    } else {
      this.setState({
        cpuFilterArr: [...this.state.cpuFilterArr, e.target.value],
      });
    }
  };
  updateGpu = (e) => {
    if (this.state.gpuFilterArr.includes(e.target.value)) {
      let indexToRemove = this.state.gpuFilterArr.findIndex(
        (gpu) => gpu === e.target.value
      );
      let clone = [
        ...this.state.gpuFilterArr.slice(0, indexToRemove),
        ...this.state.gpuFilterArr.slice(indexToRemove + 1),
      ];
      this.setState({
        gpuFilterArr: clone,
      });
    } else {
      this.setState({
        gpuFilterArr: [...this.state.gpuFilterArr, e.target.value],
      });
    }
  };
  newBuild = async () => {
    let partRequest = axios.get(BASE_URL + "/newbuild");
    let partResponse = await partRequest;
    this.setState({
      pageTracker: "newbuild",
      newParts: partResponse.data,
    });
  };
  renderCpu = () => {
    let cpuOptions = this.state.newParts.cpuItem.map(function (eachCpu) {
      return <option value={eachCpu._id}>{eachCpu.product_name}</option>;
    });
    return cpuOptions;
  };
  renderGpu = () => {
    let gpuOptions = this.state.newParts.gpuItem.map(function (eachGpu) {
      return <option value={eachGpu._id}>{eachGpu.product_name}</option>;
    });
    return gpuOptions;
  };
  renderMobo = () => {
    let moboOptions = this.state.newParts.moboItem.map(function (eachMobo) {
      return <option value={eachMobo._id}>{eachMobo.product_name}</option>;
    });
    return moboOptions;
  };
  renderRam = () => {
    let ramOptions = this.state.newParts.ramItem.map(function (eachRam) {
      return <option value={eachRam._id}>{eachRam.product_name}</option>;
    });
    return ramOptions;
  };
  submitBuild = async () => {
    let submitBuildResponse = await axios.post(BASE_URL + "/newbuild", {
      name: this.state.buildName,
      build_ease: this.state.buildRate ,
      image: this.state.buildURL,
      description: this.state.buildDescription,
      email: this.state.buildEmail,
            
      cpu: this.state.trackCpu, 
      gpu: this.state.trackGpu,
      mobo: this.state.trackMobo,
      ram: this.state.trackRam
  })
  let buildRequest = axios.get(BASE_URL + "/build");
  let buildResponse = await buildRequest;
  this.setState({
    buildList: buildResponse.data,
    pageTracker: "main",
  });
}

  submitComment = async ()=> {
    let locationId = this.state.individualList.mainList[0]._id
    let submitComment = await axios.post(BASE_URL + "/" + locationId +"/comment" , {
      name: this.state.commentName,
      comment: this.state.commentComment ,
      email: this.state.commentEmail,
    })
    let individualRequest = axios.get(
      BASE_URL + "/" + locationId + "/individualbuild"
    );
    let individualResponse = await individualRequest;
    this.setState({
      individualList: individualResponse.data,
      commentName: "",
      commentComment:"",
      commentEmail:""
    });
  };
  submitEditEmail = async()=>{
    console.log("is submiteditemail hapenenig?")
    let locationId = this.state.individualList.mainList[0]._id
    let email = this.state.creatorEmail
    let emailResponse= await axios.get(BASE_URL + "/" + locationId + "/" + email +"/email");
    let emailData = emailResponse.data
    if (emailData.email_check == true){
      let partRequest = axios.get(BASE_URL + "/newbuild");
      let partResponse = await partRequest;
      this.setState({
        pageTracker: "edit",
        newParts: partResponse.data,
        buildName: this.state.individualList.mainList[0].name,
        buildURL: this.state.individualList.mainList[0].image,
        buildRate: this.state.individualList.mainList[0].build_ease,
        buildDescription: this.state.individualList.mainList[0].description,
        trackCpu: this.state.individualList.mainList[0].parts.cpu_id,
        trackGpu: this.state.individualList.mainList[0].parts.gpu_id,
        trackMobo: this.state.individualList.mainList[0].parts.mobo_id,
        trackRam: this.state.individualList.mainList[0].parts.ram_id,

      });
    }
  }
  editBuild = async()=>{
    let locationId = this.state.individualList.mainList[0]._id
    console.log(locationId)
    console.log(BASE_URL + "/" + locationId +"/edit")
    let editBuild = await axios.put(BASE_URL + "/" + locationId +"/edit" , {
      name: this.state.buildName,
      build_ease: this.state.buildRate ,
      image: this.state.buildURL,
      description: this.state.buildDescription,
            
      cpu: this.state.trackCpu, 
      gpu: this.state.trackGpu,
      mobo: this.state.trackMobo,
      ram: this.state.trackRam
    })
    let buildRequest = axios.get(BASE_URL + "/build");
    let buildResponse = await buildRequest;
    this.setState({
      buildList: buildResponse.data,
      pageTracker: "main",
    });
  }

  async componentDidMount() {
    console.log("COMPONENETDIDMOUNT")
    let buildRequest = axios.get(BASE_URL + "/build");
    let buildResponse = await buildRequest;
    this.setState({
      buildList: buildResponse.data,
      loaded: true,
      pageTracker: "main",
    });
  }
  initialMain() {
    if (this.state.loaded === true && this.state.pageTracker === "main") {
      return (
        <RenderMain
          data={this.state.buildList}
          currentIndividual={this.currentIndividual}
          updateCpu={this.updateCpu}
          updateGpu={this.updateGpu}
          cpuFilterArr={this.state.cpuFilterArr}
          gpuFilterArr={this.state.gpuFilterArr}
          updateSearch={this.updateSearch}
          priceRadio={this.state.priceRadio}
          updateFormField={this.updateFormField}
          updateFormFieldRadio={this.updateFormFieldRadio}
          newBuild={this.newBuild}
        />
      );
    } else if (this.state.pageTracker === "individual") {
      return (
        <Individual
          individualList={this.state.individualList}
          newBuild={this.newBuild}
          submitComment={this.submitComment}
          commentEmail={this.state.commentEmail}
          commentComment={this.state.commentComment}
          commentName={this.state.commentName}
          updateFormField={this.updateFormField}
          submitEditEmail={this.submitEditEmail}
          creatorEmail={this.state.creatorEmail}
          />
      );
      
    } else if (this.state.pageTracker === "newbuild") {
      return (
        <NewBuild
          renderCpu={this.renderCpu}
          renderGpu={this.renderGpu}
          renderMobo={this.renderMobo}
          renderRam={this.renderRam}
          updateFormField={this.updateFormField}
          trackCpu={this.state.trackCpu}
          trackGpu={this.state.trackGpu}
          trackMobo={this.state.trackMobo}
          trackRam={this.state.trackRam}
          buildName={this.state.buildName}
          buildEmail={this.state.buildEmail}
          buildURL={this.state.buildURL}
          buildRate={this.state.buildRate}
          buildDescription={this.state.buildDescription}
          submitBuild={this.submitBuild}
        />
      );
    }
    else if (this.state.pageTracker === "edit"){
      return(
        <EditBuild
        
        renderCpu={this.renderCpu}
        renderGpu={this.renderGpu}
        renderMobo={this.renderMobo}
        renderRam={this.renderRam}
        updateFormField={this.updateFormField}
        trackCpu={this.state.trackCpu}
        trackGpu={this.state.trackGpu}
        trackMobo={this.state.trackMobo}
        trackRam={this.state.trackRam}
        buildName={this.state.buildName}
        buildURL={this.state.buildURL}
        buildRate={this.state.buildRate}
        buildDescription={this.state.buildDescription}
        editBuild={this.editBuild}
        />
      ) 
    }
    else {
      <React.Fragment>Loading, please wait...</React.Fragment>;
    }
  }
  render() {
    return <React.Fragment>{this.initialMain()}</React.Fragment>;
  }
}
export default App;
