import React, { useState } from 'react';
import Container from '../components/layer/Container';

const Home = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeClick = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((selected) => selected !== size);
      }
      return [...prevSelectedSizes, size];
    });
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div>
      <Container className={'my-2'}>
        <div className="main flex justify-between gap-x-10 mx-2">
          <div className="pic w-1/2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam ipsum ex iure odit nihil consequatur soluta. Illo provident debitis, itaque aspernatur culpa aliquam consequuntur, aliquid obcaecati, voluptates quibusdam ducimus!</p>
          </div>
          <div className="name w-1/2 pl-10">
            <h1 className='text-2xl md:text-4xl font-semibold'>Name</h1>
            <div className="price pt-5">
              <h4 className='text-sm pt-1'>Price</h4>
              <h3 className='text-xl md:text-2xl font-medium py-1 text-gray-500'>585 ৳</h3>
            </div>
            <div className="size&help pt-3">
              <div className="size">
                <h2 className='font-semibold text-lg md:text-xl'>Size</h2>
                <ul className='flex flex-wrap gap-5 py-2'>
                  {sizes.map((size) => (
                    <li
                      key={size}
                      className={`w-1/3 p-2 text-center font-bold cursor-pointer rounded-full ${
                        selectedSizes.includes(size) ? 'bg-emerald-500' : 'bg-gray-200'
                      }`}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className="help">
                <p>Help</p>
              </div> */}
            </div>
            <div className="addtocart pt-5">
            <div className="up md:flex  justify-between pb-2">
                <div className="quantity-control flex justify-evenly items-center gap-x-4 border border-black text-center py-2 font-semibold bg-transparent md:w-72">
                  <button className='text-2xl' onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button className='text-2xl' onClick={increaseQuantity}>+</button>
                </div>
                <p className='border border-black text-center mt-2 md:mt-0 py-2 font-semibold bg-transparent md:w-72'>Add to Cart</p>
              </div>
              <p className='border text-center py-2 font-semibold bg-black text-white'>Buy now</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
