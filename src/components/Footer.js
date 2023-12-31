import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <>
         <section className= "info_section layout_padding2">
            <div className= "container">
            <div className= "info_items">
                <Link to= "#">
                <div className= "item ">
                    <div className= "img-box box-1">
                    <img src="" alt="" loading="lazy" />
                    </div>
                    <div className= "detail-box">
                    <p>
                        Location
                    </p>
                    </div>
                </div>
                </Link>
                <Link to= "#">
                <div className= "item ">
                    <div className= "img-box box-2">
                    <img src="" alt="" loading="lazy"/>
                    </div>
                    <div className= "detail-box">
                    <p>
                        +02 1234567890
                    </p>
                    </div>
                </div>
                </Link>
                <Link to= "#">
                <div className= "item ">
                    <div className= "img-box box-3">
                    <img src="" alt="" loading="lazy"/>
                    </div>
                    <div className= "detail-box">
                    <p>
                        demo@gmail.com
                    </p>
                    </div>
                </div>
                </Link>
            </div>
            </div>
        </section>
      </>
     );
}
 
export default Footer;