import {connect } from "react-redux";

const Skills = (props) => {
    return ( 
        <>
            <section id="skills" className="reveal fade-in">
                <div className="container">
                    <h2 className="section-title">Skills</h2>
                    <div className="row row-content">
                        <div className="col-6 row">
                            <div className="col-10"><p className="tab bg-primary text-white">Basics</p></div>
                            {props.skills.basics.map(value => {
                                return (
                                    <div className="col-7" key={Math.random()}><p className="tab">{value}</p></div>
                                );
                            })}
                        </div>
                        <div className="col-6 row justify-right text-right">
                            <div className="col-10"><p className="tab bg-primary text-white">Styles</p></div>
                            {props.skills.design.map(value => {
                                return (
                                    <div className="col-7" key={Math.random()}><p className="tab">{value}</p></div>
                                );
                            })}
                        </div>
                        <div className="col-6 row">
                            <div className="col-9"><p className="tab bg-primary text-white">Databases</p></div>
                            {props.skills.databases.map(value => {
                                return (
                                    <div className="col-7" key={Math.random()}><p className="tab">{value}</p></div>
                                );
                            })}
                        </div>
                        <div className="col-6 row justify-right text-right">
                            <div className="col-9"><p className="tab bg-primary text-white">Back-end</p></div>
                            {props.skills.backend.map(value => {
                                return (
                                    <div className="col-7" key={Math.random()}><p className="tab">{value}</p></div>
                                );
                            })}
                        </div>
                        <div className="col-12 row text-center">
                            {props.skills.others.map(value => {
                                return (
                                    <div className="col-xs-6 col-md-3 col-2" key={Math.random()}><p className="tab bg-detail text-white">{value}</p></div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
const mapStateToProps = (state) => {
    return {
        skills: state.user.skills
    }
  }

export default connect(mapStateToProps)(Skills);