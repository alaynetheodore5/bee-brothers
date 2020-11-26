import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const ContactForm = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    const CreateContact = e => {
        e.preventDefault();
        const contactItem = {name, email, phone, subject, message};
        axios.post("http://localhost:8000/api/contact", contactItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    
    
    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreateContact}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                    {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: "" }
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
                            {errors.email ? <p className="text-danger">{errors.email.properties.message}</p>: "" }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="text" className="form-control" onChange={e => setPhone(e.target.value)}/>
                            {errors.phone ? <p className="text-danger">{errors.phone.properties.message}</p>: "" }
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Write a short description:</label>
                    <textarea className="form-control" onChange={e => setEmail(e.target.value)}></textarea>
                    {errors.email ? <p className="text-danger">{errors.email.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" className="form-control" onChange={e => setSubject(e.target.value)} value={subject}/>
                    {errors.subject ? <p className="text-danger">{errors.subject.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea className="form-control" onChange={e => setMessage(e.target.value)}></textarea>
                    {errors.message ? <p className="text-danger">{errors.message.properties.message}</p>: "" }
                </div>
                <input type="submit" className="btn btn-dark  addbtn" value="Send Now" />
            </form>
        </div>

    )
}

export default ContactForm;