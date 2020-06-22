import React from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import { Button, Container } from 'react-bootstrap'




export default class Register extends React.Component {


    state = {

        form: {
            firstName: "",
            lastName: "",
            Username: "",
            email: "",
            password: ""
        },
        formErrorMessage: {
            firstName: "",
            lastName: "",
            Username: "",
            email: "",
            password: ""
        },
        formValidity: {
            firstName: false,
            lastName: false,
            Username: false,
            email: false,
            password: false,
            buttonActive: false
        }

    }


    handleSubmit = (e) => {
        return;
    }

    handleChange = event => {
        let { name, value } = event.target;
        this.setState({ form: { ...this.state.form, [name]: value } })

        this.validateField(name, value)

    };

    validateField = (name, value) => {
        let message = "";
        switch (name) {
            case 'email':
                let regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
                if (!regex.test(value)) { message = "Email not valid" }
                break
            case 'password':
                if (value.length < 5)
                { message = "Password must be at least 5 letters long" }
                break
            case 'firstName':
                let regex2 = new RegExp(/^[a-zA-z]{2,}$/)
                if (!regex2.test(value)) {
                    message = "First name cannot contain digits or special characters"
                }
                if (value.length == 0) {
                    message = "Name cannot be empty"
                }
                break;
            case 'lastName':
                let regex3 = new RegExp(/^[a-zA-z]{2,}$/)
                if (!regex3.test(value)) {
                    message = " Last name cannot contain digits or special characters"
                }
                break;
            case 'Username':
                let regex4 = new RegExp(/^[a-zA-Z][a-zA-Z0-9]{3,8}$/)
                if(!regex4.test(value))
                    {
                        message = "Username must start with a character and shouldn't contain special character"

                    }
                
                
                break;

            default:
                break
        }
        let formErrorMessageObj = this.state.formErrorMessage;
        formErrorMessageObj[name] = message;
        this.setState({ formErrorMessage: formErrorMessageObj })

        let formValidityObj = this.state.formValidity;
        let validity = message === "" ? true : false
        formValidityObj[name] = validity;



        formValidityObj.buttonActive = (formValidityObj.email && formValidityObj.password && formValidityObj.firstName && formValidityObj.lastName && formValidityObj.Username);


        this.setState(
            {
                formValidity: formValidityObj
            },
            _ => {
                console.log(
                    this.state
                )
            }
        )

    }


    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form
                            style={{ border: "1px solid ", padding: "12px", borderColor: 'gray' }}>
                            <div className="form-group ">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" onChange={this.handleChange} name="firstName" className="form-control " placeholder="first name" />
                                <span className="text-danger">{this.state.formErrorMessage.firstName}</span>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" onChange={this.handleChange} className="form-control " name="lastName" placeholder="last name" />
                                <span className="text-danger">{this.state.formErrorMessage.lastName}</span>

                            </div>



                            <div className="form-group"><label htmlFor="Email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.formErrorMessage.email}</span>
                            </div>

                            <div className="form-group"><label htmlFor="Username">Username</label>
                                <input type="text" name="Username" className="form-control" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.formErrorMessage.Username}</span>
                            </div>

                            <div className="form-group"><label htmlFor="password" >Password</label>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.formErrorMessage.password}</span>

                            </div>

                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} disabled={!this.state.formValidity.buttonActive}>Register</button>


                        </form>



                    </div>


                </div>



            </React.Fragment>


        )


    }


}