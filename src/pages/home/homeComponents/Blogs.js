function FeatureProduct() {
  const Blogs = [
    {
      _id: 1,
      date: "9 jul 2022",
      description: "On the other hand we provide denounce with righteous",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3-370x360.jpg",
    },
    {
      _id: 2,
      date: "01 Jan 2022",
      description: "The Problem With Typefaces on the Web",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-4-370x360.jpg",
    },
    {
      _id: 3,
      date: "10 oct 2021",
      description: "But I must explain to you how all this mistaken idea",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-1-370x360.jpg",
    },
  ];
  return (
    <section className="container mx-auto px-5 sm:px-10 py-10 sm:py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Latest News & Blog</h1>
        <p className="text-sm max-w-[591px] mx-auto text-slate-400">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur vel illum dolorem
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blogs.map((categorie) => (
          <div
            key={categorie._id}
            style={{
              backgroundImage: `url(${categorie.img})`,
            }}
            className="flex gap-5 justify-center h-80 items-center shadow-md py-10 sm:py-12 bg-no-repeat bg-cover"
          >
            <div className="p-3 hover:cursor-pointer mt-10 bg-opacity-90 bg-slate-900 h-full">
              <div className="text-[gold]">
                <h4 className="text-xl mb-1">{categorie.date}</h4>
              </div>

              <p className="text-white text-xl sm:text-xl hover:text-[#ff4545] duration-500 font-bold max-w-md">
                {categorie.description}
              </p>
              <button className="text-white bg-[#ff4545] rounded-full font-bold px-3 py-1 mt-2">
                Read More <i class="ri-arrow-right-line ml-3"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureProduct;
