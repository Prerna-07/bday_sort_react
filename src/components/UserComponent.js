import React from 'react';
import UserService from '../service/UseService';
import Sortbydate from '../sortdata/Sortbydate';
import Sortdata from '../sortdata/Sortdata';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})

        });
    }
   
    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            
                            <td> Name</td>
                            <td> dob</td>
                         
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     
                                     <td> {user.name}</td>   
                                     <td> {user.dob}</td>   
                                       
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                <p>Sort by name</p>
                <Sortdata></Sortdata>
                <p >Sort by age</p>
                <Sortbydate></Sortbydate>
                
            </div>
            

        )
    }
}

export default UserComponent