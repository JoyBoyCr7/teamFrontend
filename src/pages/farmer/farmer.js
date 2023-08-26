import { Link, useLoaderData, Form, redirect } from 'react-router-dom';
import { farmerLoader } from '../../loaders';
// import axios from 'axios'

const FarmerHome = () => {
    const { fFarms, fProducts }  = useLoaderData(farmerLoader())
    console.log(fFarms.farmername)
   console.log(fFarms)


    return (
        <div className="">
    <div className="form-column">
        <h1>Welcome to {fFarms.farmname} {fFarms.farmername}</h1>
        
        <Form action='/create/farm' method='POST'>
            <h2 className="form-heading">Create a Farm</h2>
            <input className="form-input" type='text' name='farmname' placeholder='Farm Name'/>
            <input className="form-input"  type='text' name='image' placeholder='Farm Logo'/>
            <input className="form-input" type='text' name='address' placeholder='Address'/>
            <input className="form-input" type='text' name='city' placeholder='City'/>
            <input className="form-input" type='text' name='state' placeholder='State'/>
            <input className="form-input" type='text' name='zip' placeholder='Zip'/>
            <input className="form-submit" type='submit' value='Create Farm'/>
        </Form>
    </div>

    <div className="form-column">
        <Form className="form-container" action='/create/product' method='POST'>
            <h2 className="form-heading">Create a Product</h2>
            <input className="form-input" type='text' name='productname' placeholder='Product Name'/>
            <input className="form-input" type='text' name='image' placeholder='Product Image'/>
            <input className="form-input" type='number' name='price' placeholder='Product Price'/>
            <input className="form-input" type='text' name='description' placeholder='Product Description'/>
            <input className="form-submit" type='submit' value='Create Product'/>
        </Form>
    </div>



        <h1>List of da Product$</h1>
            {fProducts.map((product, index) => (
                <div key={product._id} className='productname'>
                    <Link to={`product/${product._id}`}>
                        <h1>{product.productname}</h1>
                    </Link>
                    <img src={product.image} alt={product.name} />
                    <h2>${product.price}</h2>
                    <h3>Description: {product.description}</h3>
                </div>
            ))}
            <h1>Welcome to the FarmLand$</h1>
        {fFarms.map((farm, index) => (
                <div key={farm._id} className='farmname'>
                    <Link to={`farm/${farm._id}`}>
                        <h1>{farm.farmname}</h1>
                    </Link>
                    <img src={farm.image} alt={farm.name} />
                    <h2>{farm.address}</h2>
                    <h2>{farm.city}, {farm.state}</h2>
                    
                </div>
            ))}
        </div>
    );
};
export default FarmerHome;