import { Link } from "react-router-dom";

const Header = () => {
    return ( 
      <div className="hero_area">
        <header className ="header_section">
        <div className ="container-fluid">
          <nav className ="navbar navbar-expand-lg custom_nav-container ">
            <Link className ="navbar-brand" to="/">
              <span>
                Neogym
              </span>
            </Link>
            <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
  
            <div className ="collapse navbar-collapse" id="navbarSupportedContent">
              <div className ="navwork">
                <ul className ="navbar-nav">
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/">Home </Link>
                  </li>
                  <li className ="nav-item ">
                    <Link className ="nav-link" to="/service"> Why us </Link>
                  </li>
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/trainer"> trainers</Link>
                  </li> 
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/tool"> tools</Link>
                  </li> 
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/goals"> Goal </Link>
                  </li> 
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/testimonial"> testimonials</Link>
                  </li>
                  <li className ="nav-item">
                    <Link className ="nav-link" to="/contact"> Contact Us</Link>
                  </li>
                </ul>
                <div className ="user_option">
                  <form className ="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className ="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </div>
          </nav>
        </div>
       </header>
       <section className=" slider_section position-relative">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="col-lg-10 col-md-11 mx-auto">
                <div className="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div className="">
                      <Link to="/contact">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          </section>
       </div>
     );
}
 
export default Header;