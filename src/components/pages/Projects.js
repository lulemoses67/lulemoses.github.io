import { connect } from "react-redux"; 

const Projects = (props) => {

    return ( 
        <>
            <section id="projects" className="reveal fade-in">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="row row-content">
                        {props.projects.map(project => {
                        return(
                            <div className="col-12 col-lg-6" key={project.id}>
                                <div className="gap-fix  box-shadow-dark">
                                    <br/>
                                    <h2>{project.title}<span className="tag-detail">{project.category}</span></h2>
                                    <p><small className="text-primary">{project.duration}</small></p>
                                    <p>{project.about}</p> 
                                    <ul className="icons">
                                        {project.progLang.map(value => {
                                            return (
                                                <li key={Math.random()}><i className={value}></i></li>
                                            );
                                        })}
                                    </ul>
                                    <div className="btn-group-rt">
                                        {project.sourceCode && <a href="sourceCode" className="btn-detail"><i className="fab fa-github"></i> Source code</a>}
                                        {project.link && <a href="link" className="btn-primary"><i className="fa fa-link"></i> Link</a>}
                                        {project.preview && <a href="preview}" className="btn-primary"><i className="fa fa-eye"></i> preview</a>}
                                        {project.pen && <a href="pen" className="btn-detail"><i className="fa fa-pen"></i> codepen</a>}
                                    </div>
                                    <br/>
                                </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
            </section>
        </>
     );
}
 
const mapStateToProps = (state) => {
    return {
      projects: state.user.projects
    }
  }

export default connect(mapStateToProps)(Projects);