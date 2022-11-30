import React from "react";
import { useForm } from "react-hook-form";

const HeroBanner = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const { category, keyword, location } = data;
    console.log(category, keyword, location);
    reset({
      category: "",
      location: "",
      keyword: "",
    });
  };

  return (
    <section>
      <div
        className="hero min-h-[515px] sm:min-h-[615px]"
        style={{
          backgroundImage: `url("https://klbtheme.com/chakta/wp-content/uploads/2021/01/hero-2_1.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-25 bg-slate-900"></div>
        <div className="text-center text-neutral-content ">
          <div>
            <div className="hidden sm:block text-white mx-auto max-w-3xl">
              <h1 className="mb-1 text-5xl md:text-7xl lg:text-[85px] font-[1500]">
                Find Auto Parts
              </h1>
              <p className="text-sm md:text-xl font-bold">
                More than 25038 parts available in our stocks
              </p>
            </div>

            <div className="shadow-lg z-10 p-7 border bg-white w-full mt-5 px-5 sm:px-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid lg:grid-cols-4 gap-4"
              >
                {/*........keyword type input........*/}
                <select
                  required
                  defaultValue=""
                  className="input min-w-[280px] h-16 rounded-none border-l-4 border-[#ff4545] bg-slate-100 text-slate-500 font-bold"
                  {...register("location")}
                >
                  <option value="" disabled>
                    Location
                  </option>

                  <option></option>
                </select>
                {/*........select location input........*/}
                <select
                  required
                  defaultValue=""
                  className="input w-full h-16 rounded-none border-l-4 border-[#ff4545] bg-slate-100 text-slate-500 font-bold"
                  {...register("location")}
                >
                  <option value="" disabled>
                    Location
                  </option>

                  <option></option>
                </select>

                {/*.......select category input.......*/}
                <select
                  required
                  defaultValue=""
                  className="input w-full h-16 rounded-none border-l-4 border-[#ff4545] bg-slate-100 text-slate-500 font-bold"
                  {...register("category")}
                >
                  <option value="" disabled>
                    Category
                  </option>
                </select>
                {/*........search button..........*/}
                <button
                  type="submit"
                  className="btn rounded-none w-full h-16 duration-400 bg-[#ff4545] hover:bg-black py-3 text-white cursor-pointer font-bold"
                >
                  Find Auto Parts <i class="ri-arrow-right-line ml-5"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
