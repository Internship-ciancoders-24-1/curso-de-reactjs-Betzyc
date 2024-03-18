import React from "react";
import "./styles/BadgeNew.css";
//import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badges from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
    state ={
        form:{
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,//Mantener el estado actual
                [e.target.name]: e.target.value,//Actualizar el estado
            },
        });
    }

  render() {
    return <React.Fragment>
        <div className="BadgeNew__hero">
            <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
            <div className="row">
                <div className="col-6">
                <Badges 
                    firsName={this.state.form.firstName || 'First Name'} 
                    lastName={this.state.form.lastName || 'Last Name'}
                    avatar="https://www.gravatar.com/avatar?d=identicon"
                    jobTitle={this.state.form.jobTitle || 'Job Title'}
                    twitter={this.state.form.email|| 'twitter'}/>
                </div>

                <div className="col-6">
                    <BadgeForm onChange={this.handleChange} 
                    formValues={this.state.form}/>
                </div>

            </div>
        </div>

    </React.Fragment>;
  }
}

export default BadgeNew;