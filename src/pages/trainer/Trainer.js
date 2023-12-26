import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTrainer } from "../../redux/trainersSlice";
import TrainerList from "../../components/trainerList";

const Trainer = () => {
  const dispatch = useDispatch()
  const { isLoading, trainers } = useSelector(state => state.trainers)

  useEffect(() => {
    dispatch(allTrainer())
  },[dispatch])

    return ( 
        <section className="trainer_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Our Gym Trainers
              </h2>
            </div>
            <div className="row">
          
            { isLoading ? <div> Loading... </div> : null }
            { trainers && trainers.length > 0 ? trainers.map((trainer) => (
              
                  <TrainerList  trainer= { trainer } number={Math.floor(Math.random() * 3)} key={trainer.id} /> 
              
            )):"Ooops thre's no data yet"  }    
              
            </div>
          </div>
        </section>
     );
}
 
export default Trainer;