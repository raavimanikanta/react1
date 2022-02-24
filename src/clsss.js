import React,{Component} from "react"


class Classcomp extends Component{
        state={
          divcont:true,
        }
  
       clicked=()=>{
         this.setState({
           divcont:!this.state.divcont,
         })
       }
 
      render(){
      return (
        
          <div>
              <div className="btndiv2">
              <button className="btn2" onClick={this.clicked}>To see styling in class component</button>
              </div>
        {
           this.state.divcont ? <div className="fun2">
           <h2>This is created using class component </h2> 
           <p className="para2">This is done using external Css</p>
           <p style={{color:"white"}}>This is done by using inline  css</p>
           </div> : null
        }

          </div>
        
     )
  }
}
export default Classcomp