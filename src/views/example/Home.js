import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/goHaNoi.JPG";
import logo2 from "../../assets/images/thanhhuy.JPEG";
import logo3 from "../../assets/images/duytoan.JPG";
import logo4 from "../../assets/images/hoangphuc.JPEG";
import "./Home.scss";
import { connect } from "react-redux";
class Home extends React.Component {
    componentDidMount(){
        // setTimeout(() =>{
        // this.props.history.push('/todo')
        // },3000)
    }
    handleDeleteUser = (user) => {
        console.log(">> Check User Delete ",user)
        this.props.deleteUserRedux(user)
    }
    handleAddCreateUser = () =>{
        this.props.addNewRedux()
    }
    //HOC: Higher Order Component
    render() {
        console.log('>>> Check props dataRedux: ',this.props.dataRedux)
        let listUsers = this.props.dataRedux
            return (
                    <>
                        <div>Hello Everyone Homepage demo website learn Frontend begineer SideWay</div>
                        <div className="Logo">
                            <img src={logo} />
                            <img src={logo2} />
                            <img src={logo3} />
                            <img src={logo4} />
                        </div>
                        <div>
                            {listUsers && listUsers.length > 0 &&
                            
                            listUsers.map((item,index) =>{
                                return(
                                    <div className="list-user" key={item.id}>
                                        {index + 1} -{item.name}  
                                        {/* &nbsp;<span onClick={() => this.handleDeleteUser(item)}>x</span> */}
                                        <button onClick={() => this.handleDeleteUser(item)}>Delete</button>
                                    </div>
                                  )
                                })
                            }
                        </div>
                        <div className="btn-add">
                            <button onClick={() => this.handleAddCreateUser()}>Add New</button>
                        </div>
                    </>
                )
            }
}

// export default withRouter(Home);

const  mapStatetoProps = (state) =>{
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER',payload: userDelete}),
        // can thiep vao redux
        addNewRedux: () => dispatch({ type: 'CREATE_USER'}),
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(Color(Home));