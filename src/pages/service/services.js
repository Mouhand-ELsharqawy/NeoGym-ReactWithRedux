import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allServices } from "../../redux/serviceSlice";
import ServiceList from "../../components/serviceList";


const Service = () => {
  const dispatch = useDispatch()
  const { isLoading, services } = useSelector(state => state.services)

  useEffect(() => {
    dispatch(allServices())
  },[dispatch])
    return ( 
        
  <section className="us_section layout_padding">
  <div className="container">
    <div className="heading_container">
      <h2>
        Why Choose Us
      </h2>
    </div>

    <div className="us_container ">
      <div className="row">
        
      { isLoading ? <div> Loading... </div> : null }
        { services && services.length > 0 ? services.map((service) => (
          
              <ServiceList service={service} number={Math.floor(Math.random()*4)} key={service.id} />
         
        )): "Oooops there's no data yet" }
        
      </div>
    </div>
  </div>
</section>
     );
}
 
export default Service;