import {connect} from "react-redux";

const Services = (props) => {
    return (
        <section id="services" className="reveal fade-in">
            <div className="container">
                <h2 className="section-title">Services</h2>
                <div className="grid-container row-content">
                {props.services.map(service => {
                    return(
                        <div className="gap-fix box-shadow-light" key={service.id}>
                            <br/>
                            <h3>{service.title} <i className={'fa-solid ' + service.icon + '  text-warning'}></i></h3>
                            <p>{service.body}</p>
                            <br/>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    );
}
const mapStateToProps = (state) => {
    return {
      services: state.user.services
    }
  }

export default connect(mapStateToProps)(Services);