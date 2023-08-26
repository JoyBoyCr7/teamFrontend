import { Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { farmsAndProductsLoader } from '../loaders';


const Home = () => {
    const { farms, products } = useLoaderData(farmsAndProductsLoader());

    console.log(farms);

    return (
        <div className=''>
            <h1>Products</h1>
            <div className='grid-container'>
            
                {products.map((product, index) => (
                    <div key={product._id} className='card'>
                        <Link to={`product/${product._id}`}>
                            <h1>{product.productname}</h1>
                        </Link>
                        <img src={product.image} alt={product.name} />
                        <h2> Price: <span> ${product.price}</span></h2>
                        <h3>Description: <span> {product.description}</span> </h3>
                    </div>
                ))}
            </div>
            
            <h2>Farms</h2>
            <div className='grid-container'>
                {farms.map((farm, index) => (
                    <div key={farm._id} className='card'>
                        <Link to={`farm/${farm._id}`}>
                            <h1>{farm.farmname}</h1>
                        </Link>
                        <img src={farm.image} alt={farm.name} />
                        <h2>{farm.address}</h2>
                        <h2>{farm.city}, {farm.state}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
