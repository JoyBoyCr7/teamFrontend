import { useLoaderData, Form , Link} from 'react-router-dom'
import { deleteFarmAction } from '../actions'
import { farmLoader } from '../loaders'


const Farm = () => {
    const farm = useLoaderData(farmLoader)
    console.log(farm) 

        return (
            
            <div className='card'>
                
                <h1>{farm.farmname}</h1>

                <img src={farm.image} alt={farm.farmname} />

                <h3>{farm.address}</h3>
                <h3>{farm.city}</h3>
                <h3>{farm.state}</h3>
        </div>


    )}

export default Farm;