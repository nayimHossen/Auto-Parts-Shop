function MainGoals() {
  const categories = [
    {
      _id: 1,
      title: "Trusted & Faster Service",
      description:
        "Quis autem vel eum iure reprehende quinea voluptate velit esse molestiae consequatur vel illum dolore.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/icon-1.png",
    },
    {
      _id: 2,
      title: "Universal Parts",
      description:
        "Quis autem vel eum iure reprehende quinea voluptate velit esse molestiae consequatur vel illum dolore.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/icon-2.png",
    },
    {
      _id: 3,
      title: "Brake Discs",
      description:
        "Quis autem vel eum iure reprehende quinea voluptate velit esse molestiae consequatur vel illum dolore.",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/icon-3.png",
    },
  ];
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container mx-auto px-5 sm:px-10 py-10 sm:py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Our Main Goals</h1>
          <p className="text-sm max-w-[591px] mx-auto text-slate-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum dolorem
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((categorie) => (
            <div key={categorie._id} className="bg-white shadow-sm p-5">
              <div className="flex flex-col justify-center items-center py-10 px-5">
                <img
                  src={categorie.img}
                  className="w-[100px] bg-[#ff4545] p-3 mb-5 rounded-full"
                  alt="product"
                />
                <h4 className="font-bold text-xl text-center hover:text-[#ff4545] hover:cursor-pointer duration-500">
                  {categorie.title}
                </h4>
                <p className="text-sm text-slate-500 font-bold text-center py-5">
                  {categorie.description}
                </p>
                <button className="text-white bg-[#ff4545] rounded-full font-bold px-3 py-1 mt-2">
                  SHOP NOW <i className="ri-arrow-right-line ml-3"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainGoals;
