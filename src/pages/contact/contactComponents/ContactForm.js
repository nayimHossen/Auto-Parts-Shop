import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <section
      id="contact"
      className="container mx-auto px-5 py-20 sm:px-7 md:px-10"
    >
      <div className="md:flex gap-5">
        <div className="w-full md:w-[40%] mb-5 md:mb-0">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-3 items-center justify-start">
                <span className="bg-[#ff4545] px-2 py-1 text-white text-2xl text-center">
                  <i className="ri-map-pin-user-fill"></i>
                </span>
                <p className="font-bold pb-1 text-2xl">Main Address</p>
              </div>
              <ul className="font-bold">
                <li>205 Main Street, 5th Floor D - </li>
                <li>Block, New York</li>
              </ul>
            </div>

            <div>
              <div className="flex gap-3 items-center justify-start">
                <span className="bg-[#ff4545] px-2 py-1 text-white text-2xl text-center">
                  <i className="ri-mail-line"></i>
                </span>
                <p className="font-bold pb-1 text-2xl">Email Address</p>
              </div>
              <ul className="font-bold">
                <li>support@example.com</li>
                <li>chakta@example.com</li>
              </ul>
            </div>

            <div>
              <div className="flex gap-3 items-center justify-start">
                <span className="bg-[#ff4545] px-2 py-1 text-white text-2xl text-center">
                  <i className="ri-phone-line"></i>
                </span>
                <p className="font-bold text-2xl pb-1">Phone Number</p>
              </div>
              <ul className="text-base font-bold">
                <li>+010 (345) 78967</li>
                <li>+012 (345) 78967</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[60%]">
          <form onSubmit={handleSubmit} className=" shadow-md p-5">
            <input
              type="text"
              placeholder="Your Name"
              className="input text-xs sm:text-sm text-[#9e9e9e] rounded-none input-bordered input-md w-[49%] mb-5 mr-[2%]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input text-xs sm:text-sm text-[#9e9e9e] rounded-none  input-bordered input-md w-[49%] mb-5"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input text-xs sm:text-sm text-[#9e9e9e] rounded-none  input-bordered input-md w-full mb-5 mr-[2%]"
            />

            <textarea
              className="textarea text-xs sm:text-sm text-[#9e9e9e] rounded-none  textarea-bordered w-full border-1 h-[100px]"
              placeholder="Please Type Your Massage"
            ></textarea>
            <input
              type="submit"
              value="SEND MESSAGE"
              className="btn bg-[#ff4545] hover:bg-[#222] text-white font-bold w-full max-w-xs mt-2"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
