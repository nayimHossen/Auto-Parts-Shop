function PopulareCategory() {
  const categories = [
    {
      _id: 1,
      title: "Tire Parts",
      description: "But must explain to you how all this mistaken idea denoue.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-14.jpg",
    },
    {
      _id: 2,
      title: "Universal Parts",
      description: "But must explain to you how all this mistaken idea denoue.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-17.jpg",
    },
    {
      _id: 3,
      title: "Brake Discs",
      description: "But must explain to you how all this mistaken idea denoue.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-15.jpg",
    },
    {
      _id: 4,
      title: "Suspension Systems",
      description: "But must explain to you how all this mistaken idea denoue.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/products-16.jpg",
    },
  ];
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container mx-auto px-5 sm:px-10 py-10 sm:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Popular Categories</h1>
          <p className="text-sm max-w-[591px] mx-auto text-slate-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum dolorem
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((categorie) => (
            <div
              key={categorie._id}
              className="md:flex gap-5 justify-center items-center bg-white shadow-sm p-5"
            >
              <div>
                <img src={categorie.img} className="w-[420px]" alt="product" />
              </div>
              <div>
                <div className="text-[gold]">
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                </div>
                <h4 className="font-bold text-2xl mb-3 hover:text-[#ff4545] hover:cursor-pointer duration-500">
                  {categorie.title}
                </h4>
                <p className="text-sm text-slate-500 font-bold">
                  {categorie.description}
                </p>
                <button className="text-white bg-[#ff4545] rounded-full font-bold px-3 py-1 mt-2">
                  SHOP NOW <i class="ri-arrow-right-line ml-3"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopulareCategory;
