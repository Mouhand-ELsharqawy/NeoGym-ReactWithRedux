import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTrainee } from "../../redux/traineeSlice";
import TraineeList from "../../components/traineeList";

const Trainee = () => {
    const dispatch = useDispatch()
    const { isLoading,trainee } = useSelector(state => state.trainee)

    useEffect(() => {
        dispatch(allTrainee())
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

                { trainee && trainee.length > 0 ? trainee.map((trainee) => (
                    
                        <TraineeList trainee= { trainee } number= { Math.floor(Math.random() * 3) } key={trainee.id} />
                    
                )): " Oooops there's no data yet" }    
              
            </div>
          </div>
        </section>
     );
}
 
export default Trainee
