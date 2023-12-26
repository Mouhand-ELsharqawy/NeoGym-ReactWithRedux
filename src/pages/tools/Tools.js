import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allTools } from "../../redux/toolsSlice"
import ToolList from "../../components/toolList"


const Tools = () => {
  const dispatch = useDispatch()
    const { isLoading, tools } = useSelector(state => state.tools)

    useEffect(() => {
        dispatch(allTools())
    },[dispatch])
    return ( 
        <section className="trainer_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Our Gym Tools
        </h2>
      </div>
      <div className="row">
       
      { isLoading ? <div> Loading... </div> : null }

        { tools && tools.length > 0 ? tools.map((tool) => (
          
            <ToolList tool={tool} number={Math.floor(Math.random() * 3)} key={tool.id} /> 
          
        )): "Ooops there's no data yet" }
        
      </div>
    </div>
  </section>
     );
}
 
export default Tools;