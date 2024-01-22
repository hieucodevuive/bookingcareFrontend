import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
           id:'',
           email: '',
           password: '',
           firstName: '',
           lastName: '',
           address:'',
        }
    }

    componentDidMount() {
        let user = this.props.currentUser;
        if(user && !_.isEmpty(user)){
            this.setState({
                id: user.id,
                email: user.email,
                password: 'hashpassword',
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }


    toggle = () => {
        this.props.toggleModalEditUser()
    }
    
    handleOnchangeInput = (e, id) => {
        let copyState = {...this.state}
        copyState[id] = e.target.value;
        this.setState({
            ...copyState,
        },() => {console.log('Check state:', this.state);
        })
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName','address']
        for(let i = 0; i < arrInput.length; i++) {
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if(isValid) {
            //Call aip edit create modal
            this.props.editUser(this.state)
        }
    }

    render() {
        console.log("Props:",this.props.currentUser)
        return (
            <div className="users-container">
                <Modal 
                    show={this.props.isOpen} 
                    size="lg"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title >Edit user</Modal.Title>
                        <button className="btn" onClick={()=>this.toggle()}><i className="fas fa-times"></i></button>
                    </Modal.Header>
                    <Modal.Body>
                       <div className="container">
                       <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                                <Form.Control
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    type="email"
                                    onChange={(e) => this.handleOnchangeInput(e, "email")}
                                    value={this.state.email}
                                    disabled
                                />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                                <Form.Control
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="basic-addon1"
                                    type="password"
                                    onChange={(e) => this.handleOnchangeInput(e, "password")}
                                    value={this.state.password}
                                    disabled
                                />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>First and last name</InputGroup.Text>
                            <Form.Control 
                                aria-label="First name" 
                                onChange={(e) => this.handleOnchangeInput(e, "firstName")}
                                value={this.state.firstName}
                                />
                            <Form.Control 
                                aria-label="Last name"
                                onChange={(e) => this.handleOnchangeInput(e, "lastName")}
                                value={this.state.lastName} 
                                />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                                <Form.Control
                                    placeholder="Address"
                                    aria-label="Address"
                                    aria-describedby="basic-addon1"
                                    type="text"
                                    onChange={(e) => this.handleOnchangeInput(e, "address")}
                                    value={this.state.address}
                                />
                        </InputGroup>
                       </div>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary px-3" onClick={() => this.toggle()}>
                            Close
                        </Button>
                        <Button 
                            variant="primary px-3" 
                            onClick={() => this.handleSaveUser()}
                        >
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
