import {connect } from "react-redux";
import AutoTyping, { BlinkCursor } from 'react-auto-typing';

const Hero = (props) => {
    return(
        <section className="hero d-flex reveal active fade-in">
            <div className="container">
                <h2 className="text-primary">Hi , am <span className="user-name">Moses Lule</span></h2>
                <p>
                    <AutoTyping
                        active // <boolean>
                        textRef='A Front-end developer' // <string>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor
                    active // <boolean>
                    blinkSpeed={500} // <number>
                    />
                </p>
                <h4>Get in Touch</h4>
                <ul className="social-media">
                    <li><a href={`mailto:` + props.contact.email}><i className="fa fa-envelope"></i></a></li>
                    <li><a href={props.contact.linkedin} target="blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href={props.contact.github} target="blank"><i className="fab fa-github"></i></a></li>
                    <li><a href={props.contact.instagram}target="blank" ><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </section>
    );
}
const mapStateToProps = (state) => {
    return {
        contact : state.user.contact
        }
    }
export default connect(mapStateToProps)(Hero);