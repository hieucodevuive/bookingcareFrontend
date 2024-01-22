import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUser, deleteUser, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import {emitter} from '../../utils/emitter';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
           arrUsers: [],
           isOpenModalUser: false,
           isOpenModalEditUser: false,
           userEdit: {},
        }
    }

    async componentDidMount() {
        await this.getAllUsers();
    }

    getAllUsers = async() => {
        let response = await getAllUsers('ALL');
        if(response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
            
        }
    }

    toggleModalUser = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    };

    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
            userEdit: user,
        })
    };

    toggleModalEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    };

    createNewUser = async(data) => {
        try {
            let res = await createNewUser(data);
            if(res && res.errCode !== 0) {
                alert(res.errMessage);
            } else {
                await this.getAllUsers();
                this.setState({
                    isOpenModalUser: false,
                })
                emitter.emit("EVENT_CLEAR_MODAL_DATA")
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleDeleteUser = async(id) => {
        try {
            let res = await deleteUser(id);
            if(res && res.errCode !== 0) {
                alert(res.errMessage);
            } else {
                await this.getAllUsers();
                this.setState({
                    isOpenModalUser: false,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    doEditUser = async(user) => {
        try {
            let res = await editUserService(user)
            if(res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false,
                })
                await this.getAllUsers();
            } else {
                alert(res.errMessage);
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container">
                <ModalUser 
                    toggleModalUser={this.toggleModalUser}
                    isOpen={this.state.isOpenModalUser}
                    createNewUser={this.createNewUser}
                />
                { this.state.isOpenModalEditUser &&
                <ModalEditUser 
                    isOpen={this.state.isOpenModalEditUser}
                    toggleModalEditUser={this.toggleModalEditUser}
                    currentUser={this.state.userEdit}
                    editUser = {this.doEditUser}
                />
                }
                <div className='title text-center'>Manage users with me</div>
                <div className='mx-1'>
                    <button 
                        className="btn btn-primary px-3"
                        onClick={()=> this.toggleModalUser()}
                    ><i className="fas fa-plus"></i> Add New User</button>
                </div>
                <div className="user-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arrUsers && arrUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>
                                            <a href="#" >
                                                <button  className='btn btn-primary px-3' onClick={()=>this.handleEditUser(user)}>Edit</button>
                                            </a>
                                            <span> </span>
                                            <a href="#" >
                                                <button className='btn btn-danger px-3' onClick={()=>this.handleDeleteUser(user.id)}>Delete</button>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
