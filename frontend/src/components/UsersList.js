import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    usersList() {
        return this.state.users.map(function(currentUser, i){
            return <UserCard user={currentUser} key={i} />;
        })
    }
    render() {
        return (
            <div>
                <h3>Users List</h3>
                <h3>Hello {process.env.REACT_APP_NOT_SECRET_CODE}</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Message</th>
                  
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const UserCard = props => (
    <tr>
        <td >{props.user.firstname}</td>
        <td >{props.user.lastname}</td>
        <td >{props.user.email}</td>
        <td > <Link to={`message?from=${process.env.REACT_APP_MAIL_USER}&to=${props.user.email}`} ><button className="btn btn-success">Contact</button></Link></td>
    </tr>
)