import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <section className="hero d-flex text-center reveal active fade-in">
            <div className="container">
                <p className="title text-detail">SORRY THAT PAGE NOT FOUND</p>
                <div className="btn-group">
                    <Link to="/" className="btn-primary">Go Back Home</Link>
                </div>
            </div>
        </section>
     );
}
 
export default NotFound;