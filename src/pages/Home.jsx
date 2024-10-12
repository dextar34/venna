import React, { useState } from "react";
import Container from "../components/layer/Container";
import cn from "../lib/cn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  // Initialize an empty array for selected data
  const [selectedData, setSelectedData] = useState([]);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showError, setShowError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const data = [
    {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      id: 1,
      pic1: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      pic2: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      pic3: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      pic4: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      pic5: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      alt: "",
      price: 224,
      quantity: 99,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
      name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      id: 2,
      pic1: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      pic2: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      pic3: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      pic4: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      pic5: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      alt: "",
      price: 499,
      quantity: 0,
      description:
        "1. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology...",
    },
    {
      name: "Opna Women's Short Sleeve Moisture",
      id: 3,
      pic1: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      pic2: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      pic3: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      pic4: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      pic5: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      alt: "",
      price: 799,
      quantity: 0,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock...",
    },
  ];

  // State for active data (default to the first item in the demo array)
  const [activeData, setActiveData] = useState(data[0]);
  // State to manage the main image (defaults to pic1 of activeData)
  const [mainPic, setMainPic] = useState(activeData.pic1);

  const handleItemClick = (data) => {
    setActiveData(data); // Set the clicked item as the active one
    setMainPic(data.pic1); // Set the main image to pic1 of the clicked item
    setSelectedData([data]); // Store clicked item in the empty array
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll back to the top
  };

  const handleSizeClick = (size) => {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size); // Deselect if already selected
      } else {
        return [...prevSelectedSizes, size]; // Select the size
      }
    });
    setShowError(false); // Hide error if a size is selected
  };

  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      setShowError(true); // Show error if no size is selected
    } else {
      setShowError(false); // Proceed with add to cart logic
      // Add your "Add to Cart" logic here
      console.log("Added to cart:", selectedSizes);
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-20 md:mt-32">
      <Container className={"my-2"}>
        <div className="content">
          <div className="main flex flex-col md:flex-row justify-between gap-x-10 mx-2">
            <div className="picTo md:w-1/2 ">
              <div className="mainPic w-[325px] h-[400px] md:w-[400px] md:h-[500px] overflow-hidden ">
                {/* Main image dynamically set */}
                <img
                  src={mainPic} // Display the main image dynamically
                  alt=""
                  className="w-full h-full object-contain py-2 flex items-center justify-center rounded-2xl"
                />
              </div>

              {/* Thumbnails */}
              <div className="thumbnail w-[325px] md:w-[400px] flex justify-between">
                {/* Thumbnail 1 */}
                <div
                  className="subPic w-16 h-16 my-5"
                  onClick={() => setMainPic(activeData.pic1)} // Update main image on click
                >
                  <img
                    src={activeData.pic1}
                    alt=""
                    className="w-full h-full object-cover py-2 flex items-center justify-center"
                  />
                </div>

                {/* Thumbnail 2 */}
                <div
                  className="subPic w-16 h-16  my-5"
                  onClick={() => setMainPic(activeData.pic2)} // Update main image on click
                >
                  <img
                    src={activeData.pic2}
                    alt=""
                    className="w-full h-full object-contain py-2 flex items-center justify-center"
                  />
                </div>

                {/* Thumbnail 3 */}
                <div
                  className="subPic w-16 h-16  my-5"
                  onClick={() => setMainPic(activeData.pic3)} // Update main image on click
                >
                  <img
                    src={activeData.pic3}
                    alt=""
                    className="w-full h-full object-contain py-2 flex items-center justify-center"
                  />
                </div>

                {/* Thumbnail 4 */}
                <div
                  className="subPic w-16 h-16  my-5"
                  onClick={() => setMainPic(activeData.pic4)} // Update main image on click
                >
                  <img
                    src={activeData.pic4}
                    alt=""
                    className="w-full h-full object-contain py-2 flex items-center justify-center"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="name md:w-1/2 px-2 md:pl-10">
              <div>
                <h1 className="text-2xl md:text-4xl md:mr-6 font-semibold">
                  {activeData.name}
                </h1>
                <div className="price pt-5">
                  <h4 className="text-sm pt-1">Price</h4>
                  <h3 className="text-xl md:text-4xl font-medium py-1 text-gray-500">
                    {activeData.price} <span>৳</span>
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
                            className={`w-1/3 p-2 text-center font-bold cursor-pointer rounded-full ${
                              selectedSizes.includes(size)
                                ? "bg-black text-white"
                                : "bg-gray-200"
                            }`}
                            onClick={() => handleSizeClick(size)}
                            role="button"
                            tabIndex={0} // Allow keyboard navigation
                            onKeyPress={(e) =>
                              e.key === "Enter" && handleSizeClick(size)
                            } // Handle keyboard activation
                          >
                            {size}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Error message */}
                  {showError && selectedSizes.length === 0 && (
                    <p className="text-red-500 mt-2">
                      Please select a size before adding to cart.
                    </p>
                  )}
                  <div className="addtocart pt-5 md:mr-6">
                    <div className="up  flex flex-col md:flex-row justify-between gap-x-2 pb-2">
                      <div className="quantity-control flex justify-evenly items-center gap-x-4 border border-black text-center py-2 font-semibold bg-transparent md:w-72">
                        <button className="text-2xl" onClick={decreaseQuantity}>
                          -
                        </button>
                        <span>{quantity}</span>
                        <button className="text-2xl" onClick={increaseQuantity}>
                          +
                        </button>
                      </div>
                      <button
                        className={`border border-black text-center mt-2 md:mt-0 py-2 font-semibold bg-transparent w-auto md:w-72 ${
                          selectedSizes.length === 0 ? "opacity-50" : ""
                        }`}
                        
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <button
                      className="rounded-lg w-full text-center py-4 font-semibold bg-black text-white text-base md:text-2xl"
                      onClick={handleAddToCart}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description py-5 mx-3 text-base">
            <h1 className={cn("font-semibold py-4", "md:text-2xl")}>
              Description
            </h1>
            <p
              className={cn(
                "text-justify leading-7 text-gray-500",
                "text-lg",
                "h-20"
              )}
            >
              {activeData.description}
            </p>
          </div>
        </div>
      </Container>

      {/* Carousel */}
      <div className="suggested-items pt-10 pb-20">
        <Container className={"mx-7 md:mx-auto"}>
          <h1 className="font-semibold text-3xl pb-5">You may also like</h1>
          <Slider {...settings}>
            {data.map((item, i) => (
              <div
                key={i}
                className="text-center px-2 cursor-pointer "
                onClick={() => handleItemClick(item)} // Update selected product
              >
                <img
                  src={item.pic1}
                  alt=""
                  className="w-full h-40 object-contain"
                />
                <h2 className="py-2 w-20 md:w-auto  ">{item.name}</h2>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default Home;
