import React from "react";

class AddComponent extends React.Component {
    state ={
        title : '',
        salary : '',
    }

    handlechangeJob = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    handlechangeSalary = (event) =>{
        this.setState({
            salary: event.target.value
        })
    }

    handlesubmit = (event) =>{
    event.preventDefault()
    if(this.props.title || !this.props.salary){
        alert('Missing required Params')
        return;
    }
    console.log("Check Data input...",this.state)
    this.props.addNewJob({
        id:Math.floor(Math.random() * 1001),
        title:this.state.title,
        salary:this.state.salary
    })
        
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
           <>
            <form>
                <label >Job's title</label><br/>
                <input 
                type="text" 
                value={this.state.title}
                    onChange={(event)=>this.handlechangeJob(event)}
                /><br/>
                <label >Salary</label><br/>
                <input 
                type="text" 
                value={this.state.salary}
                onChange={(event)=> this.handlechangeSalary(event)} 
                /><br/>
                <input 
                type="submit" 
                value="Submit"
                onClick={(event) => this.handlesubmit(event)} 
                />
            </form>
           </> 
        )
    }

}

export default AddComponent;