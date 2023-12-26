import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTestimonials } from "../redux/testmonialsSlice";
import TestimonialList from "../components/testimonialList";

const Testimonial = () => {
    const { isLoading, testimonial } = useSelector(state => state.testmonials);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allTestimonials());
    },[dispatch])

    return ( 
        <>
            { isLoading && <div> Loading.... </div> }

            { testimonial && testimonial.length> 0? testimonial.map((test) => (
                <div key={test.id}>
                    <TestimonialList testimonial = { test } />
                </div>
            )): "Ooooops there's no data yet" }
        </>
     );
}
 
export default Testimonial;