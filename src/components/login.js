import React from 'react'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import { Button, Container } from 'react-bootstrap'




export default class Login extends React.Component {


    state = {

        form: {
            email: "",
            password: ""
        },
        formErrorMessage: {
            email: "",
            password: ""
        },
        formValidity: {
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

            default:
                break
        }
        let formErrorMessageObj = this.state.formErrorMessage;
        formErrorMessageObj[name] = message;
        this.setState({ formErrorMessage: formErrorMessageObj })

        let formValidityObj = this.state.formValidity;
        let validity = message === "" ? true : false
        formValidityObj[name] = validity;



        formValidityObj.buttonActive = (formValidityObj.email && formValidityObj.password);


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
                            style={{ border: "1px solid ", padding: "8px", borderColor: 'gray' }}>

                            <div className="form-group"><label htmlFor="Email">Email</label>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.formErrorMessage.email}</span>
                            </div>
                            <div className="form-group"><label htmlFor="password" >Password</label>
                                <input type="password" name="password" className="form-control" onChange={this.handleChange} />
                                <span className="text-danger">{this.state.formErrorMessage.password}</span>

                            </div>

                            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" disabled={!this.state.formValidity.buttonActive}>Login</button>


                        </form>




                    </div>


                </div>



            </React.Fragment>


        )


    }


}