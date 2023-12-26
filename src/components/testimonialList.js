import PropTypes from "prop-types"

const TestimonialList = ({ testimonial }) => {
    return ( 
        <div className="testimonial">
            <div className="shadow"></div>
            <span className="top border"></span>
            <h1 style={{ color: "white" }} > { testimonial.title } </h1>
            <p style={{ color: "white" }}> { testimonial.body } </p>
            <span className="bottom border"></span>
        </div>
     );
}

export default TestimonialList;