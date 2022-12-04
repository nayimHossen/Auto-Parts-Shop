import React from "react";
import PageBannerTitle from "../../components/PageTitle/PageBannerTitle";
import Categories from "./blogComponents/Categories";
import PopulerBlogs from "./blogComponents/PopulerBlogs";
import Search from "./blogComponents/Search";
import Tags from "./blogComponents/Tages";

const BlogPage = () => {
  const blogs = [
    {
      _id: 1,
      date: "9 jul 2022",
      title: "Mirage Deep Dive Under anding Timin Response",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-2.jpg",
    },
    {
      _id: 2,
      date: "01 Jan 2022",
      title: "The Problem With Typefaces on the Web",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-4.jpg",
    },
    {
      _id: 3,
      date: "10 oct 2021",
      title: "The Problem With Typefaces on the Web",
      description:
        "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-3.jpg",
    },
  ];

  return (
    <section>
      <PageBannerTitle title="Our Populer Blog" link="Blog" />
      <div className="md:flex gap-7 container mx-auto px-5 sm:px-10 py-10 sm:py-20">
        <div className="md:w-[30%]">
          <Search />
          <Categories />
          <PopulerBlogs />
          <Tags />
        </div>

        <div className="md:w-[70%]">
          {blogs.map((blog) => (
            <div className="flex justify-end items-center p-7 border-2 mb-7">
              <div>
                <div>
                  <img src={blog.img} alt="blog-img" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold pt-5">
                    {blog.title}
                  </h2>
                  <p className="py-5">{blog.description}</p>
                  <button className="text-white bg-[#ff4545] px-6 py-3 rounded-full font-bold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
