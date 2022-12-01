function ExclusiveProducts() {
  const products = [
    {
      _id: 1,
      name: "Titanium Wheel Cover",
      price: 203,
      off: "-20%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-1.jpg",
    },
    {
      _id: 2,
      name: "Heater Control Valve",
      price: 210,
      off: "-10%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-2.jpg",
    },
    {
      _id: 3,
      name: "DOE Replica Wheels",
      price: 454,
      off: "-30%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-3.jpg",
    },
    {
      _id: 4,
      name: "Spherical Roller Bearing",
      price: 745,
      off: "-17%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-4.jpg",
    },
    {
      _id: 5,
      name: "Spherical Roller Bearing",
      price: 745,
      off: "-17%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-5.jpg",
    },
    {
      _id: 6,
      name: "Spherical Roller Bearing",
      price: 745,
      off: "-17%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-8.jpg",
    },
    {
      _id: 7,
      name: "Spherical Roller Bearing",
      price: 745,
      off: "-17%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-7.jpg",
    },
    {
      _id: 8,
      name: "Spherical Roller Bearing",
      price: 745,
      off: "-17%",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-4.jpg",
    },
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-5 sm:px-10 py-10 sm:py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Exclusive Products</h1>
          <p className="text-sm max-w-[591px] mx-auto text-slate-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum dolorem
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <div key={product._id} className="justify-center items-center">
              <div className="bg-[#f7f7f7] shadow-sm relative hover:cursor-pointer">
                <img src={product.img} alt="product" />
                <span className="badge bg-[#ff4545] text-white absolute top-2 left-2">
                  {product.off}
                </span>
              </div>
              <div className="mt-2 flex gap-2 justify-between items-start">
                <div>
                  <p className="font-bold text-xl hover:text-[#ff4545] break-words hover:cursor-pointer duration-500">
                    {product.name}
                  </p>
                  <p className="font-bold mb-3 text-[#ff4545] hover:cursor-pointer duration-500">
                    {product.price}$
                  </p>
                </div>
                <div className="bg-[#fff4f4] hover:bg-[#ff4545] hover:text-white rounded-full text-[#575757] px-2 duration-300 hover:cursor-pointer py-1 border">
                  <i className="ri-shopping-cart-2-line"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-5">
          <button className="btn border-2 rounded-full font-bold text-base">
            View More Products<i className="ri-arrow-right-line ml-5"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExclusiveProducts;
