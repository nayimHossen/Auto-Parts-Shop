import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

function OurTeam() {
  const teamMembers = [
    {
      _id: 1,
      name: "Hamid Rahaman",
      designation: "CEO",
      img: "https://klbtheme.com/chakta/wp-content/uploads/2021/01/team-1.jpg",
    },
    {
      _id: 2,
      name: "Ibrahim Halder",
      designation: "CTO",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 3,
      name: "Rasel Mahamud",
      designation: "Director",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/7.jpg",
    },
    {
      _id: 4,
      name: "Nayim Hossen",
      designation: "Product Manager",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg",
    },
  ];
  return (
    <section className="bg-[#F9FCFF] py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Team Members</h1>
          <p className="text-sm max-w-[591px] mx-auto text-slate-400">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
            quam nihil molestiae consequatur vel illum dolorem
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <div className="card rounded-none lg:max-w-lg border bg-base-100 shadow-sm hover:shadow-xl">
              <figure className="px-5 pt-5">
                <img
                  src={member.img}
                  alt="Shoes"
                  className="rounded-full h-[200px] w-[200px]"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-xl">{member.name}</h2>
                <p className="font-bold text-[#ff4545]">{member.designation}</p>
                {/* social icon link start */}
                <div>
                  <ul className="flex gap-5 justify-center items-center">
                    <li>
                      <Link to="#">
                        <div className="bg-[#ff4545] text-white p-2 rounded-full cursor-pointer hover:bg-white border-[#ff4545] border hover:text-[#ff4545]">
                          <GrFacebookOption />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="bg-[#ff4545] text-white p-2 rounded-full cursor-pointer hover:bg-white border-[#ff4545] border hover:text-[#ff4545]">
                          <AiOutlineTwitter />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="bg-[#ff4545] text-white p-2 rounded-full cursor-pointer hover:bg-white border-[#ff4545] border hover:text-[#ff4545]">
                          <FiInstagram />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* social icon link end */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
