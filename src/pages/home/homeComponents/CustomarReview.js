import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const BestSelling = () => {
  const reviews = [
    {
      _id: 1,
      name: "Nayim Hossen",
      profetion: "Computer Enginieer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-1.jpg",
    },
    {
      _id: 2,
      name: "D. Janifa",
      profetion: "Designer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-2.jpg",
    },
    {
      _id: 3,
      name: "David nio",
      profetion: "Web developer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-3.jpg",
    },
    {
      _id: 4,
      name: "Warner Smit",
      profetion: "Softwer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-1.jpg",
    },
    {
      _id: 5,
      name: "Shoriful Islam",
      profetion: "Graphic",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-3.jpg",
    },
    {
      _id: 6,
      name: "Oliven",
      profetion: "Designer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-2.jpg",
    },
    {
      _id: 7,
      name: "Daisy Apa",
      profetion: "Ui/ux",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-3.jpg",
    },
    {
      _id: 8,
      name: "Alden Mia",
      profetion: "Developer",
      comment:
        "Sed ut perspiciatis unde omnis istese us error sit voluptatem accusa oloque laudantium totam aperiam eaqupsa quae ab illo inventore veritatis quasc architecto beatae vitae dicta suntey plicabo enim ipsam volupt",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/thumb-1.jpg",
    },
  ];

  return (
    <section className="bg-slate-100">
      <div className="py-16 container mx-auto px-5 sm:px-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-sm max-w-[591px] mx-auto text-slate-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum dolorem
          </p>
        </div>
        <Slide
          slidesToScroll={1}
          slidesToShow={2}
          indicators={false}
          arrows={false}
          autoplay={true}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: -300,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {reviews.map((review) => (
            <div key={review._id} className="mx-3">
              <div className="flex justify-start gap-3 items-center mb-3">
                <div>
                  <img
                    src={review.img}
                    alt="profile"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{review.name}</h4>
                  <p className="text-[#ff4545] font-bold text-sm ">
                    {review.profetion}
                  </p>
                </div>
              </div>
              <div className="px-10 py-10 bg-white rounded-md">
                <p className="text-sm text-slate-500 font-bold">
                  {review.comment}
                </p>
                <div className="mt-5 flex justify-between">
                  <div className="text-[gold]">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                  </div>
                  <i class="ri-chat-quote-fill text-[#ff4545] text-3xl"></i>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};

export default BestSelling;
