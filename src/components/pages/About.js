import {connect } from "react-redux";

const About = (props) => {
    return ( 
        <>
            <section id="about" className="reveal fade-in">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="row-content box-shadow-light">
                        <div className="gap-fix">
                            <p><q>{props.aboutme}</q></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
const mapStateToProps = (state) => {
    return {
        aboutme: state.user.aboutme
    }
  }

export default connect(mapStateToProps)(About);