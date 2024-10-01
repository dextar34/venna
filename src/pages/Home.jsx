import React, { useState } from "react";
import Container from "../components/layer/Container";
import cn from "../lib/cn";

const Home = () => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

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
      <Container className={"my-2"}>
        <div className="main flex flex-col md:flex-row justify-between gap-x-10 mx-2">
          <div className="pic md:w-1/2 ">
            <div className="mainPic w-[325px] h-[400px] md:w-[450px] md:h-[500px] border-black border "></div>
            <div className="thumbnail w-[325px]  md:w-[450px]  flex  justify-between">
            <div className="subPic w-16 h-16  border border-black my-5"></div>
            <div className="subPic w-16 h-16 border border-black my-5"></div>
            <div className="subPic w-16 h-16 border border-black my-5"></div>
            <div className="subPic w-16 h-16 border border-black my-5"></div>
            </div>
          </div>
          <div className="name md:w-1/2 px-2 md:pl-10">
            <h1 className="text-2xl md:text-4xl font-semibold">Name</h1>
            <div className="price pt-5">
              <h4 className="text-sm pt-1">Price</h4>
              <h3 className="text-xl md:text-2xl font-medium py-1 text-gray-500">
                585 ৳
              </h3>
            </div>
            <div className="size addToCart py-3 flex flex-col justify-between gap-x-2 md:block">
              <div className="size&help pt-3">
                <div className="size">
                  <h2 className="font-semibold text-lg md:text-xl">Size</h2>
                  <ul className="flex flex-wrap gap-5 py-2">
                    {sizes.map((size) => (
                      <li
                        key={size}
                        className={`w-1/3 p-2 text-center font-bold cursor-pointer rounded-full  ${
                          selectedSizes.includes(size)
                            ? "bg-black text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="addtocart pt-5">
                <div className="up md:flex  justify-between pb-2">
                  <div className="quantity-control flex justify-evenly items-center gap-x-4 border border-black text-center py-2 font-semibold bg-transparent md:w-72">
                    <button className="text-2xl" onClick={decreaseQuantity}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button className="text-2xl" onClick={increaseQuantity}>
                      +
                    </button>
                  </div>
                  <p className="border border-black text-center mt-2 md:mt-0 py-2 font-semibold bg-transparent md:w-72">
                    Add to Cart
                  </p>
                </div>
                <p className="rounded-lg text-center py-4 font-semibold bg-black text-white text-base md:text-2xl ">
                  Buy now
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="description py-5 mx-3 text-base">
          <h1 className={cn(
            ' font-semibold py-4', // in small devices
            'md:text-2xl ' // in large devices
          )}>
            Description
            </h1>
            <p className={cn(
              'text-justify leading-7 text-gray-500',
              ' text-lg'
            )}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam expedita eum architecto at ut debitis omnis vel fuga est non sunt reiciendis, minus possimus maiores corrupti natus facere nesciunt cumque ab. Aperiam sapiente quasi ipsam quod harum libero cum itaque quaerat iste, consectetur earum illo repellat, animi ex consequuntur corporis explicabo porro! Labore perferendis at sapiente excepturi, aliquam rem nesciunt quibusdam illo? Nobis nemo incidunt dolorem maxime labore, unde illo eos reprehenderit veritatis, rerum voluptatem consequatur saepe quibusdam rem? Corporis cum dolorem nostrum reiciendis rem nisi assumenda tenetur aliquam doloremque labore odio ipsum, praesentium quisquam maiores nemo id sapiente veniam, ratione accusamus culpa ipsa dolores atque eos qui. Aperiam, quibusdam quas. Blanditiis molestiae dignissimos maxime dicta totam laborum dolorum fuga. Doloremque, quo. Ipsum ipsa porro ratione. Perferendis animi nulla aliquam beatae harum perspiciatis, qui quisquam at nostrum officiis velit, iure cum fugiat voluptatem totam illum placeat ducimus rerum aliquid? Necessitatibus, maiores, placeat minus, fugiat officia impedit veritatis ad laborum autem harum officiis exercitationem? Quo voluptate corporis soluta inventore voluptatem animi, quisquam voluptatibus nihil aut accusamus quam, distinctio eligendi ipsa quis pariatur, repudiandae fuga natus. Natus minus nam ut hic recusandae laboriosam nihil sapiente, autem reprehenderit rerum quidem. Distinctio, sint.
              </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
