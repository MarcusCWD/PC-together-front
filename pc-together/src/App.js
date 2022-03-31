import React from 'react'
import axios from 'axios'
import './style.css'
import RenderMain from './RenderMain'
import Individual from './Individual'

const BASE_URL= "https://3000-marcuscwd-pctogether-ttdq0bbnux0.ws-us38.gitpod.io/" 
// "https://pc-together.herokuapp.com/"

class App extends React.Component {
  // begin state
  state = {
      'loaded': false,
      'buildList': [],
      'pageTracker': "main",
      'currentIndividual': ""
  }
  // end state

  updateFormField=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changePage=(page)=>{
    this.setState({
      pageTracker: page
    })
  }
  currentIndividual=(buildId)=>{
    this.setState({
        currentIndividual: buildId
    })
  }

  async componentDidMount() {
      let buildRequest = axios.get(BASE_URL + "build");
      let buildResponse = await buildRequest;
      this.setState({
          'buildList': buildResponse.data,
          'loaded': true,
          'pageTracker': "main"
      })
  }
  initialMain(){
    if(this.state.loaded===true & this.state.pageTracker==="main"){
        return(<RenderMain data = {this.state.buildList} changePage={this.changePage} currentIndividual={this.currentIndividual}/>)
    }
  }
  render() {
      return(
        <React.Fragment>
            {
                this.initialMain()
            }            
            {
                this.state.pageTracker==="individual" ? 
                <Individual
                    data = {this.state.data}
                    changePage={this.changePage}
                    currentIndividual={this.currentIndividual}
                /> :     
                    
                        <React.Fragment>
                            Loading, please wait...
                        </React.Fragment>
                    
                
            }
        </React.Fragment>

      )

}


}
export default App;