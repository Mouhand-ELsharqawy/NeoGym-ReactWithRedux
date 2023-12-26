
import { useDispatch, useSelector } from 'react-redux';
import GoalList from '../../components/goalList';
import { useEffect } from 'react';
import { allGoal } from '../../redux/goolsSlice';

const Goal = () => {
  const { isLoading, goals } = useSelector(state => state.goals)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(allGoal())
  },[dispatch])

    return ( 
        <section className="trainer_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Our Gym concerns
            </h2>
          </div>
          <div className="row">
            { isLoading ? <div> Loading... </div> : null }

            { goals && goals.length > 0 ? goals.map((goal) => (
              
                  <GoalList goal={ goal } number={ Math.floor(Math.random() * 3) } key={goal.id} />
            
            )): "Ooops there's no data yet" }
            
            
          </div>
        </div>
      </section>
     );
}
 
export default Goal;