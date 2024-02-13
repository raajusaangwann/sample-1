import React from "react";
class LifeCycleComponent extends React.Component{
    el= document.createElement("section");

    componentDidMount(){
        setTimeout(()=>{
            this.setState({data:"test data updated"})
        },3000);
        //this.test();      
    }
    
    state={data:"test update"}
    componentDidUpdate(){
        alert('lifecycle method is called')
        // setTimeout(()=>{
        //     this.setState({data:"testt data updated"})
        // },3000);

    }
    test(){
        document.querySelector("#test").append(this.el);
    }
    render(){
        //this.test();
        return(
            <div id="test" className="text-center">
              
              {this.state.data}
            </div>
        )
    }
}

export default LifeCycleComponent