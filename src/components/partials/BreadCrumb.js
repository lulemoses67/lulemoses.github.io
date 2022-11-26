import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    return ( 
        <>
            <section>
                <div className="container">
                    <div className="row-content">
                        <h2>{props.title}</h2>
                        <ul className="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>{props.title}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Breadcrumb;