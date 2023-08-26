import { Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { farmsAndProductsLoader } from '../loaders';


const Home = () => {
    const { farms, products }  = useLoaderData(farmsAndProductsLoader())



    console.log(farms)
    return (
        <div className='proname'>
        <h2>Products</h2>
        <div className='home-container'>
            {products.map((product, index) => (
        
                <div key={product._id} className='card'>
                    <Link to={`product/${product._id}`}>
                        <h1>{product.productname}</h1>
                    </Link>
                    <img src={product.image} alt={product.name} />
                    <h2>${product.price}</h2>
                    <h3>Description: {product.description}</h3>
                </div>
            ))}
        </div>
            
        {farms.map((farm, index) => (
                <div key={farm._id} className='farmname'>
                    <Link to={`farm/${farm._id}`}>
                        <h1>{farm.farmname}</h1>
                    </Link>
                    <img src={farm.image} alt={farm.name} />
                    <h2>{farm.address}</h2>
                    <h2>{farm.city} ,{farm.state}</h2>
                    
                </div>
            ))}
        </div>
    );
};
export default Home;