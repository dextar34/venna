import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "../components/layer/Container";
import cn from "../lib/cn";

const Cart = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [subTotal] = useState(400); // Assuming subTotal is constant for now
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [total, setTotal] = useState(subTotal);
  
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Strip non-numeric characters
    setPhone(value.slice(0, 11)); // Limit phone number to 11 digits
  };

  const handleDivisionChange = (e) => {
    const divisionId = e.target.value;
    setSelectedDivision(divisionId);
    setSelectedDistrict(""); // Reset district when division changes
    setDeliveryCharge(0); // Reset delivery charge when division changes

    if (divisionId) {
      // Only set delivery charge when division is selected
      const division = divisions.find(div => div._id === divisionId);
      if (division === "Dhaka" && division.division === "Dhaka") {
        setDeliveryCharge(70);
      } else {
        setDeliveryCharge(140);
      }
    }
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);

    // Update delivery charge based on selected division and district
    if (selectedDivision && districtId) {
      const district = districts.find(district => district._id === districtId);
      if (district) {
        if (district.district == "Dhaka") {
          setDeliveryCharge(70);
        } else {
          setDeliveryCharge(140);
        }
      }
    }
  };

  // Update total whenever deliveryCharge changes
  useEffect(() => {
    setTotal(subTotal + deliveryCharge);
  }, [deliveryCharge]);

  // Fetch divisions from bdapis.com
  useEffect(() => {
    axios.get("https://bdapis.com/api/v1.2/divisions")
      .then((response) => setDivisions(response.data.data))
      .catch((error) => console.error("Error fetching divisions:", error));
  }, []);

  // Fetch districts based on selected division
  useEffect(() => {
    if (selectedDivision) {
      axios.get(`https://bdapis.com/api/v1.2/division/${selectedDivision}`)
        .then((response) => setDistricts(response.data.data))
        .catch((error) => console.error("Error fetching districts:", error));
    } else {
      setDistricts([]); // Clear districts when no division is selected
    }
  }, [selectedDivision]);

  return (
    <div className="mt-28 mx-4">
      <Container>
        <div className="main">
          <div className={cn("form")}>
            <h1 className={cn("font-bold text-2xl text-gray-600 mb-10", "md:text-4xl")}>
              Place order
            </h1>
            <div className={cn("details")}>
              <div className="yourDetails">
                <h1 className={cn("text-xl font-semibold text-gray-500 pb-2", "md:text-2xl md:pt-10")}>
                  Your details
                </h1>
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" Name*" // Placeholder for user input
                />
                <div className={cn("flex items-center py-3 bg-white")}>
                  <span className="ml-2">+88</span>
                  <input
                    className={cn("focus:outline-none")}
                    type="text"
                    value={phone}
                    onChange={handleChange}
                    placeholder="  Enter your number*" // Placeholder for user input
                  />
                </div>
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="email"
                  placeholder="Email (optional)"
                />
              </div>
              <div className="yourAddress">
                <h1 className={cn("text-xl font-semibold text-gray-500 p-2", "md:text-2xl md:pt-10")}>
                  Your address
                </h1>
                <input
                  className={cn("focus:outline-none w-full py-3 my-2")}
                  type="text"
                  placeholder="House no, street, direction*"
                />

                {/* Division Dropdown */}
                <div className="my-2">
                  <label>Division: </label>
                  <select
                    value={selectedDivision}
                    onChange={handleDivisionChange}
                  >
                    <option value="">Select Division</option>
                    {divisions.length > 0 && divisions.map((division) => (
                      <option key={division._id} value={division._id}>
                        {division.division}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District Dropdown */}
                <div className="my-2">
                  <label>District: </label>
                  <select
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    disabled={!selectedDivision}
                  >
                    <option value="">Select District</option>
                    {districts.length > 0 && districts.map((district) => (
                      <option key={district._id} value={district._id}>
                        {district.district}
                      </option>
                    ))}
                  </select>
                </div>
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
              <button disabled={!name || phone.length !== 11 || !selectedDivision || !selectedDistrict}>
                Confirm Order
              </button>
            </div>
          </div>
          <div className={cn("productList")}></div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
