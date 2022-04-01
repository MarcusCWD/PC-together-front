import React from "react";
import axios from "axios";
import "./style.css";
import RenderMain from "./RenderMain";
import Individual from "./Individual";

const BASE_URL =
  "https://3001-marcuscwd-pctogether-ttdq0bbnux0.ws-us38.gitpod.io";
// "https://pc-together.herokuapp.com/"

class App extends React.Component {
  // begin state
  state = {
    loaded: false,
    buildList: [],
    pageTracker: "main",
    individualList: []
  };
  // end state

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  changePage = (page) => {
    this.setState({
      pageTracker: page,
    });
  };
  currentIndividual = async (buildId) => {
    let individualRequest = axios.get(BASE_URL + '/' + buildId + '/individualbuild');
    let individualResponse = await individualRequest;
    this.setState({
      individualList: individualResponse.data,
      pageTracker: "individual"
    });
  };

  async componentDidMount() {
    let buildRequest = axios.get(BASE_URL + "/build");
    let buildResponse = await buildRequest;
    this.setState({
      buildList: buildResponse.data,
      loaded: true,
      pageTracker: "main",
    });
  }
  initialMain() {
    if ((this.state.loaded === true) && (this.state.pageTracker === "main")) {
      return (
        <RenderMain
          data={this.state.buildList}
          currentIndividual={this.currentIndividual}
        />
      );
    }
    if (this.state.pageTracker === "individual") {
      return(
        <Individual
          individualList={this.state.individualList}
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
