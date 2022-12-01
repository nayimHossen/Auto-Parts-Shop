function FeatureProduct() {
  const categories = [
    {
      _id: 1,
      title: "25% BIG OFFER",
      description: "Modern Auto Wheel Up To 25% Offer",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-1.jpg",
    },
    {
      _id: 2,
      title: "FLASH SALE (15%)",
      description: "BMW i880s Model Best Remote Control Car",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-2.jpg",
    },
    {
      _id: 3,
      title: "NEW ARRIVAL",
      description: "Hobbypark 5x10x4mm Ball Bearings RC Car",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-3.jpg",
    },
    {
      _id: 4,
      title: "30% BIG OFFER",
      description: "OEM ODM Customized High Precision CNC",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/of-bg-4.jpg",
    },
  ];
  return (
    <section className="container mx-auto px-5 sm:px-10 py-10 sm:py-16">
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        {categories.map((categorie) => (
          <div
            key={categorie._id}
            style={{
              backgroundImage: `url(${categorie.img})`,
            }}
            className="flex gap-5 justify-center items-center bg-white shadow-sm py-10 sm:py-12 bg-no-repeat bg-cover"
          >
            <div className="p-3 hover:cursor-pointer">
              <div className="text-[gold]">
                <h4 className="text-xl mb-1">{categorie.title}</h4>
              </div>

              <p className="text-white text-xl sm:text-2xl font-bold max-w-md">
                {categorie.description}
              </p>
              <button className="text-white bg-[#ff4545] rounded-full font-bold px-3 py-1 mt-2">
                SHOP NOW <i className="ri-arrow-right-line ml-3"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureProduct;
