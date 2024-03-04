import React, { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameInitial, setNameInitial] = useState(true);
  const [emailInitial, setEmailInitial] = useState(true);

  const [errors, setErrors] = useState([]);
  const disableButton = !formData.name.trim() || !formData.email.trim();

  const validateForm = () => {
    const newErrors = [];

    if (!formData.name.trim()) {
      newErrors.push("Name is required");
    }

    if (!formData.email.trim()) {
      newErrors.push("Email is required");
    } else if (!validateEmail(formData.email)) {
      newErrors.push("Invalid email format");
    }

    setErrors(newErrors);

    return newErrors.length === 0;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "phone") {
      setNameInitial(false);
    }
    if (id === "email") {
      setEmailInitial(false);
    }
    setFormData({ ...formData, [id]: value });

    // Update errors state directly when the user starts typing
    validateForm();
  };
  // useEffect(() => {
  //   if (
  //     (formData.email === "" && !emailInitial) ||
  //     (formData.name === "" && !nameInitial)
  //   ) {
  //     validateForm();
  //   }
  // }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform your form submission logic here
      console.log("Form submitted successfully");
    }
    console.log(errors);
  };

  return (
    <div className="lg:pt-10">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mt-0 mt-4">
          <div className="flex flex-col md:flex-row gap-1 items-center ">
            <div className="flex flex-row gap-5 items-center">
              <label
                htmlFor="name"
                className="text-white md:text-lg text-md font-bold items-center"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`border rounded-2xl w-full md:w-[20vw]  py-2 px-3 text-black ${
                  errors.includes("Name is required")
                    ? "border-red-500 bg-red-200"
                    : ""
                }`}
              />
            </div>

            <div
              style={{
                display: errors.includes("Name is required") ? "block" : "none",
              }}
            >
              <p className="text-red-500">Name is required</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row gap-1 items-center ">
            <div className="flex flex-row gap-5 items-center ">
              <label
                htmlFor="email"
                className="block text-white md:text-lg text-md font-bold"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`border rounded-2xl w-full md:w-[20vw] py-2 px-3 text-black ${
                  errors.includes("Invalid email format") ||
                  errors.includes("Email is required")
                    ? "border-red-500 bg-red-100"
                    : ""
                } text-black`}
              />
            </div>

            <div
              style={{
                display:
                  errors.includes("Invalid email format") ||
                  errors.includes("Email is required")
                    ? "block"
                    : "none",
              }}
            >
              <p className="text-red-500">
                {errors.includes("Invalid email format") &&
                  "Invalid email format"}
                {errors.includes("Email is required") && "Email is required"}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-white md:text-lg text-md font-bold mb-2"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={`border rounded w-full py-2 px-3 h-[100px] text-black ${
              errors.includes("Message is required")
                ? "border-red-500 bg-red-100"
                : ""
            }`}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className={`bg-[#eb0028] text-white py-2 px-8 rounded ${
              disableButton ? "cursor-not-allowed opacity-60 " : "font-bold"
            }
            `}
            onClick={handleSubmit}
            disabled={disableButton}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
