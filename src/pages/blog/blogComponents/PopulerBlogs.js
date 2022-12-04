import { Link } from "react-router-dom";

function PopulerBlogs() {
  return (
    <div className="bg-white shadow-md mt-3 p-7 mb-3 border-2">
      <h2 className="text-2xl font-bold border-b-2 py-1 mb-5">Latest Posts</h2>

      <div class="flex mb-3 gap-2 ">
        <div className="w-[40%]">
          <Link to="#">
            <img
              src="https://doccure-react.dreamguystech.com/template-cardiology/bfba16d11144684109611cad71cb8d61.jpg"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="60%">
          <Link to="#" className="font-semibold hover:text-[#ff4545]">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>

      <div class="flex mb-3 gap-2">
        <div className="w-[40%]">
          <Link to="#">
            <img
              src="https://doccure-react.dreamguystech.com/template-cardiology/a769de527ffab07cfe278f8c4b460acf.jpg"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="60%">
          <Link to="#" className="font-semibold hover:text-[#ff4545]">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>

      <div class="flex mb-3 gap-2">
        <div className="w-[40%]">
          <Link to="#">
            <img
              src="https://doccure-react.dreamguystech.com/template-cardiology/e78810f4a5064e9293966958108c67e8.jpg"
              className="h-20"
              alt=""
            />
          </Link>
        </div>
        <div className="60%">
          <Link to="#" className="font-semibold hover:text-[#ff4545]">
            The wonder full New movie is released today
          </Link>
          <br />
          <sapn className="text-sm">2 jun 2022</sapn>
        </div>
      </div>
    </div>
  );
}

export default PopulerBlogs;
