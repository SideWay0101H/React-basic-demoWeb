import React from 'react';
import './Demo.scss'
/*
return block
Props la input dau vao vd truyen 1 hay 9 
 */
// Cach nay dung class component
class ChildComponent extends React.Component {
    //key:value
    state = {
        showJob: false
    }
   handleShowHide = () =>{
    this.setState({
        showJob: !this.state.showJob
    })
   }
   handleOnClickDelete = (job)=> {
    console.log('handleOnClickDelete',job)
    this.props.deleteJob(job)
   }
    render(){
        let {arrJobs} =this.props  
        let {showJob} = this.state
        // let show = showJob === true ? 'showjob: true' : 'showJob: false' 
        // console.log(show)
        return (
            <> 
                {showJob === false ?
                    <div>
                         <button  className='btn-show'
                         onClick={()=>this.handleShowHide()}>
                         Show List
                         </button>
                    </div> 
                    :
                <>
                <div className='list-jobs'>
                    {
                        arrJobs.map((item,index) => {
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary} 
                                    <></> <span onClick={ () => this.handleOnClickDelete(item) }>x</span>
                                </div>
                            )
                        })
                    }
                </div>
                 <div>
                        <button className='btn-hide' 
                        onClick={()=>this.handleShowHide()}>Hide List</button>
                 </div>
                </>
                }
            </>
        )
    }
}

// Cach dung arrow function props :function component co huu ich voi hook : con hook la gi chua hoc toi
// const ChildComponent = (props) =>{
//     let {name, age, address, arrJobs} =props  
//         return (
//             <> 
//                 <div className='list-jobs'>
//                     {
//                         arrJobs.map((item,index) => {
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
export default ChildComponent;