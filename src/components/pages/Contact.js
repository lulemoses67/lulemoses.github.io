import { useState } from "react";
import Breadcrumb from '../partials/BreadCrumb';

const ContactUs = () => {
    const [isFormOpen, setForm] = useState(true);
    const [fullname, setFullname] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isFailded, setIsFailed] = useState(false);
    // const { error, isPending, data: feedbacks } = useFetch('http://localhost:8000/feedbacks');
    const handleSubmit = (e) => {
        e.preventDefault();
        const feedback = { fullname, email, message };
        setIsSending(true);
        fetch('http://localhost:8000/feedbacks', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(feedback)
        }).then(res => {
            if (res.ok) {
                console.log('new feedback added');
                setIsSending(false);
                setForm(false);
                setIsFailed(false);
                setIsSent(true);
            } else {
                throw new Error('Something went wrong');
            }
        }).catch(err => {
            // auto catches network / connection error
            setIsFailed(err.message);
            setIsSending(false);
          });
          
    }

    return ( 
        <>
            <Breadcrumb title="Contact us"/>
            <section className="reveal active fade-in">
                <div className="container">
                    <h3 className="section-title">Get in touch</h3>
                    <div className="row row-content">
                        <div className="col-12">
                            <h2>Send Your Feedback</h2>
                            {isSent && <div className="btn-group">
                            <p className="text-success"> <i className="fas fa-500px"></i> Sent</p>
                            </div>}
                            {isFormOpen && <form onSubmit={handleSubmit}>
                                <div className="form-element">
                                    <label htmlFor="fullname">Full name</label>
                                    <input type="text" name="fullname" id="fullname" placeholder="Full name" required onChange={(e) => setFullname(e.target.value)}  />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-element">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="details" id="message" cols="30" rows="10" placeholder="Your message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                                {isFailded && <p className="text-danger">
                                    <b>Maybe Bad Network {isFailded}. Try again</b>
                                </p>}
                                <div className="btn-group-rt">
                                    {!isSending && <button type="submit" className="btn-primary"><i className="fa fa-angles-right"></i> Send</button>}
                                    {isSending && <button type="submit" className="btn-warning">Sending</button>}
                                </div>
                            </form>}
                        </div>
                        <div className="col-12">
                            <div>
                                <h2>Get in Touch</h2>
                                <p>P.o.Box 2223 Kampala</p>
                                <p>call us <b>+256 75610009</b></p>
                                <p>Github <b>github.com/hulstrap</b></p>
                                <p>Email <b>info@hulstrap.com</b></p>
                                <p>Learn <b>youtube.com/hulstrap</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default ContactUs;