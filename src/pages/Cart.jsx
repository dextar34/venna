import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../components/layer/Container";
import cn from "../lib/cn";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cart = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subTotal] = useState(400); // Assuming subTotal is constant for now
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [total, setTotal] = useState(subTotal);

  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Strip non-numeric characters
    setPhone(value.slice(0, 11)); // Limit phone number to 11 digits
  };

  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setSelectedDivision(divisionId);
    setSelectedDistrict(""); // Reset district when division changes
    setDeliveryCharge(0); // Default to 0 initially
  };

  const handleDistrictChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // Get the selected option element
    const districtId = e.target.value; // Get the selected district ID from the dropdown
    setSelectedDistrict(districtId); // Update the state with the selected district

    // Check if the selected option's text is "Dhaka"
    if (selectedOption.text === "Dhaka") {
      setDeliveryCharge(70); // Set delivery charge to 70 for Dhaka district
    } else {
      setDeliveryCharge(140); // Set delivery charge to 140 for other districts
    }
  };

  const handleSubmit = () => {
    if (!name || !phone || !address || !selectedDivision || !selectedDistrict) {
      setErrorMessage("Please fill out all the required fields.");
    } else {
      setErrorMessage(""); // Clear the error message if everything is valid
      // Proceed with the order confirmation process here
    }
  };

  useEffect(() => {
    setTotal(subTotal + deliveryCharge);
  }, [deliveryCharge, subTotal]);

  useEffect(() => {
    axios
      .get("https://bdapis.com/api/v1.2/divisions")
      .then((response) => setDivisions(response.data.data))
      .catch((error) => console.error("Error fetching divisions:", error));
  }, []);

  useEffect(() => {
    if (selectedDivision) {
      axios
        .get(`https://bdapis.com/api/v1.2/division/${selectedDivision}`)
        .then((response) => setDistricts(response.data.data))
        .catch((error) => console.error("Error fetching districts:", error));
    } else {
      setDistricts([]); // Clear districts when no division is selected
    }
  }, [selectedDivision]);

  return (
    <div className="mt-28 mx-4">
      <Container>
        <div className="tittle">
          <h1
            className={cn(
              "font-bold text-2xl text-gray-600 mb-10",
              "md:text-4xl"
            )}
          >
            Place order
          </h1>
        </div>
        <div
          className={cn(
            "main",
            "flex flex-col-reverse gap-x-32 gap-y-5",
            "md:flex-row  items-center"
          )}
        >
          <div className={cn("form", "md:w-[2600px]")}>
            <div className={cn("details")}>
              <div className="yourDetails">
                <h1
                  className={cn(
                    "text-xl font-semibold text-gray-500 pb-2",
                    "md:text-2xl md:pt-10"
                  )}
                >
                  Your details
                </h1>
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" Name*"
                />
                {errorMessage && !name && (
                  <p className="text-red-500">Name is required</p>
                )}

                <div className={cn("flex items-center py-3 bg-white")}>
                  <span className="ml-2">+88</span>
                  <input
                    className={cn("focus:outline-none")}
                    type="text"
                    value={phone}
                    onChange={handleChange}
                    placeholder="  Enter your number*"
                  />
                </div>
                {errorMessage && phone.length !== 11 && (
                  <p className="text-red-500">Valid phone number is required</p>
                )}
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="email"
                  placeholder="Email (optional)"
                />
              </div>
              <div className="yourAddress">
                <h1
                  className={cn(
                    "text-xl font-semibold text-gray-500 p-2",
                    "md:text-2xl md:pt-10"
                  )}
                >
                  Your address
                </h1>
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="text"
                  placeholder="House no, street, direction*"
                />
                {errorMessage && !address && (
                  <p className="text-red-500">Address is required</p>
                )}

                {/* Division Dropdown */}
                <div className="my-2">
                  <label>Division: </label>
                  <select
                    value={selectedDivision}
                    onChange={handleDivisionChange}
                  >
                    <option value="">Select Division</option>
                    {divisions.length > 0 &&
                      divisions.map((division) => (
                        <option key={division._id} value={division._id}>
                          {division.division}
                        </option>
                      ))}
                  </select>
                </div>
                {errorMessage && !selectedDivision && (
                  <p className="text-red-500">Division is required</p>
                )}

                {/* District Dropdown */}
                <div className="my-2" id="district">
                  <label>District: </label>
                  <select
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    disabled={!selectedDivision}
                  >
                    <option value="">Select District</option>
                    {districts.length > 0 &&
                      districts.map((district) => (
                        <option key={district._id} value={district._id}>
                          {district.district}
                        </option>
                      ))}
                  </select>
                </div>
                {errorMessage && !selectedDistrict && (
                  <p className="text-red-500">District is required</p>
                )}
              </div>
            </div>

            <div className="deliveryInfo w-80 border border-gray-900 p-2 my-5">
              <div className="flex justify-between py-1">
                <h4>Sub Total</h4>
                <h3>{subTotal}৳</h3>
              </div>
              <div className="flex justify-between py-1 border-dashed border-b-2 border-black">
                <h4>Delivery charge </h4>
                <h3>{deliveryCharge}৳</h3>
              </div>
              <div className="flex justify-between pt-4 pb-2">
                <h4>Total </h4>
                <h3>{total}৳</h3>
              </div>
            </div>

            <div className="confirmOrder w-80 bg-black text-white text-center py-3 rounded-xl my-3">
              <button onClick={handleSubmit}>Confirm Order</button>
            </div>
          </div>
          <div
            className={cn("productList bg-white py-10 px-4 my-1 rounded-lg ")}
          >
            <div
              className={cn("up flex justify-between items-center gap-2 pb-5 border-b border-black")}
            >
              <div
                className={cn(
                  "img w-[150px] min-w-[150px] md:w-48  aspect-[119/148]  object-cover border border-black"
                )}
              ></div>
              <div className={cn("itemInfo flex flex-col justify-between gap-28")}>
                <div
                  className={cn("name&Price flex justify-between items-center gap-5")}
                >
                  <p className="font-semibold text-center w-24 mt-2">
                    Thanaka face pack-140g lor
                  </p>
                  <p className="font-medium text-gray-600">800৳</p>
                </div>
                <div
                  className={cn(
                    "cart&Delete  flex justify-between items-center gap-5 mx-5"
                  )}
                >
                  <p>cart</p>
                  <div className="icon h-full">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            </div>
            <div className="down">
            <Link className={cn(" flex items-center pt-4 gap-2")} to={'/'}>
              <FaPlus />
              <p className="md:hover:ml-2 transition-all duration-500">Add More Items</p>
            </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
