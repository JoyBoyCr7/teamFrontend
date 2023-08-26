import { useLoaderData, Form } from 'react-router-dom'
import deleteProductAction from '../actions'


const Product = () => {
    const product = useLoaderData()
    const id =  product._id

        return (
            
            <div className='card'>
                            
                <h1>{product.productname}</h1>
                <img src={product.image}/>
                <h5>{product.description}</h5>  
                </div>
        )
}

export default Product