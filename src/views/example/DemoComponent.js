import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
/*
return block

 */
class DemoComponent extends React.Component {
    //key:value
    state = {
        arrJobs: [
            { id: "dev01a", title: "Developers", salary: "700"},
            { id: "tes02b", title: "Testers", salary: "600"},
            { id: "pm03c", title: "Project Managers", salary: "1100"}
        ]
    }
    addNewJob = (job) =>{
        console.log('Check Job from Parent:',job)
        // let currentJob = this.state.arrJobs
        // currentJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs,job]
            // arrJobs: currentJob
        })
   }
   deleteJob = (job) => {
    let currentJob = this.state.arrJobs
    currentJob =currentJob.filter(item => item.id !== job.id) 
    this.setState({
            arrJobs: currentJob
        })
    
   }
   componentDidUpdate(prevProps, prevState) {
    console.log('run didUpdate ','prev state',prevState,'current state',this.state)
   }
   componentDidMount(){
    console.log('>>> run component Did Mount ')

   }

    render(){
        console.log('>>> call render:',this.state)
        return (
            <> 
            <AddComponent
            addNewJob={this.addNewJob}
            />
            
            <ChildComponent 
            arrJobs={this.state.arrJobs}
            deleteJob={this.deleteJob}
            />
            </>
            
        )
    }
}

export default DemoComponent;