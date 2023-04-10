import React from "react"
import logo from "/vite.svg"
import { Link } from "react-router-dom"
import CountUp from "../components/CountUp"
import OnScroll from "../components/OnScroll"
import MouseMove from "../components/MouseMove"

const InQ = () => {
  return (
    <div className="flex flex-col relative">
      <div className=" relative">
        <img
          className="team-photo1 hidden md:block opacity-90 w-[50%] absolute top-0 right-0 z-10"
          src="/team1.jpg"
          alt="Team photo"
        />
      </div>
      {/* ------ Nav -------- */}
      <div className="nav border-b-2 z-30 absolute">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
          />
          <Link to="/">InQ Dev</Link>
        </div>
        <div>
          <a
            className="button1"
            href="#">
            Contact
          </a>
        </div>
      </div>
      {/* ------ Hero -------- */}
      <div className=" w-full justify-center relative bg-secondary">
        <div className="section-container">
          <h1 className="text-4xl font-bold text-white xl:w-3/5 md:w-4/5 mt-[200px] z-30">
            Helping local startups turn their ideas into reality
          </h1>
          <p className="text-white py-4 xl:w-3/5 md:w-4/5 z-30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quos.
            Fuga culpa nihil sed quia sit accusamus voluptatem ad! Deserunt
            excepturi amet odio. Voluptatem laborum eos id, quae autem esse.
          </p>
          <a
            href="#"
            className="button1 self-center z-30 mb-[150px]">
            Learn more
          </a>
        </div>

        <div className="relative z-20">
          <div className="absolute -top-[600px] -left-[10px] animate-floaty blob bg-secondary_light h-[300px] w-[300px]"></div>
          <div className="absolute -top-[350px] right-[100px] animate-floaty blob bg-secondary_light h-[200px] w-[200px]"></div>
          <div className="absolute -top-[100px] right-[200px] animate-floaty blob bg-secondary_light h-[300px] w-[300px]"></div>
        </div>
      </div>
      <div className="relative z-10">
        <svg
          className="fill-secondary absolute z-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,320L40,277.3C80,235,160,149,240,106.7C320,64,400,64,480,85.3C560,107,640,149,720,160C800,171,880,149,960,154.7C1040,160,1120,192,1200,170.7C1280,149,1360,75,1400,37.3L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </div>
      <div className="md:hidden h-[70vw] relative overflow-hidden">
        <img
          className="w-full absolute top-0 left-0"
          src="/team1.jpg"
          alt="Team photo"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white absolute bottom-0"
          viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,32L26.7,37.3C53.3,43,107,53,160,90.7C213.3,128,267,192,320,186.7C373.3,181,427,107,480,90.7C533.3,75,587,117,640,133.3C693.3,149,747,139,800,133.3C853.3,128,907,128,960,154.7C1013.3,181,1067,235,1120,229.3C1173.3,224,1227,160,1280,138.7C1333.3,117,1387,139,1413,149.3L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
      </div>
      {/* ------ Services -------- */}
      <div className="section-container flex-row gap-6 z-30 mt-20">
        <div className="flex flex-col gap-6 self-start">
          <p className="bg-primary p-3 rounded-lg text-white font-semibold text-lg w-max">
            Our Services
          </p>
          <h2 className="heading2 text-3xl mb-10 font-bold">
            We Are Providing Digital Services
          </h2>
          <div className="card1 bg-white w-full flex flex-col p-6 rounded-2xl group relative shadow-lg transition-all overflow-hidden z-0 hover:bg-gradient-to-r hover:from-primary hover:to-primary_light hover:scale-[1.01] hover:shadow-2xl">
            <img
              className="h-20 z-20"
              src={logo}
              alt="Logo"
            />
            <h2 className="heading2 group-hover:text-white z-20">
              Strategy & Research
            </h2>
            <p className="group-hover:text-white z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reiciendis temporibus perspiciatis! Ipsam, totam minus aperiam
              similique praesentium voluptates reprehenderit sint saepe. Optio,
              sit doloremque.
            </p>
            <div className="w-[300px] h-[300px] rounded-full z-10 bg-orange-200 absolute -bottom-32 -right-32 translate-x-1/2 translate-y-1/2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700">
              <div className="w-[200px] h-[200px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-300 absolute">
                <div className="w-[100px] h-[100px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-400 absolute"></div>
              </div>
            </div>
          </div>
          <div className="card1 bg-white w-full flex flex-col p-6 rounded-2xl group relative shadow-lg transition-all overflow-hidden z-0 hover:bg-gradient-to-r hover:from-primary hover:to-primary_light hover:scale-[1.01] hover:shadow-2xl">
            <img
              className="h-20 z-20"
              src={logo}
              alt="Logo"
            />
            <h2 className="heading2 group-hover:text-white z-20">
              Strategy & Research
            </h2>
            <p className="group-hover:text-white z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reiciendis temporibus perspiciatis! Ipsam, totam minus aperiam
              similique praesentium voluptates reprehenderit sint saepe. Optio,
              sit doloremque.
            </p>
            <div className="w-[300px] h-[300px] rounded-full z-10 bg-orange-200 absolute -bottom-32 -right-32 translate-x-1/2 translate-y-1/2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700">
              <div className="w-[200px] h-[200px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-300 absolute">
                <div className="w-[100px] h-[100px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-400 absolute"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 self-start">
          <div className="card1 bg-white w-full flex flex-col p-6 rounded-2xl group relative shadow-lg transition-all overflow-hidden z-0 hover:bg-gradient-to-r hover:from-primary hover:to-primary_light hover:scale-[1.01] hover:shadow-2xl">
            <img
              className="h-20 z-20"
              src={logo}
              alt="Logo"
            />
            <h2 className="heading2 group-hover:text-white z-20">
              Strategy & Research
            </h2>
            <p className="group-hover:text-white z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reiciendis temporibus perspiciatis! Ipsam, totam minus aperiam
              similique praesentium voluptates reprehenderit sint saepe. Optio,
              sit doloremque.
            </p>
            <div className="w-[300px] h-[300px] rounded-full z-10 bg-orange-200 absolute -bottom-32 -right-32 translate-x-1/2 translate-y-1/2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700">
              <div className="w-[200px] h-[200px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-300 absolute">
                <div className="w-[100px] h-[100px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-400 absolute"></div>
              </div>
            </div>
          </div>
          <div className="card1 bg-white w-full flex flex-col p-6 rounded-2xl group relative shadow-lg transition-all overflow-hidden z-0 hover:bg-gradient-to-r hover:from-primary hover:to-primary_light hover:scale-[1.01] hover:shadow-2xl">
            <img
              className="h-20 z-20"
              src={logo}
              alt="Logo"
            />
            <h2 className="heading2 group-hover:text-white z-20">
              Strategy & Research
            </h2>
            <p className="group-hover:text-white z-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              reiciendis temporibus perspiciatis! Ipsam, totam minus aperiam
              similique praesentium voluptates reprehenderit sint saepe. Optio,
              sit doloremque.
            </p>
            <div className="w-[300px] h-[300px] rounded-full z-10 bg-orange-200 absolute -bottom-32 -right-32 translate-x-1/2 translate-y-1/2 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-700">
              <div className="w-[200px] h-[200px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-300 absolute">
                <div className="w-[100px] h-[100px] rounded-full z-10 translate-x-[50px] translate-y-[50px] bg-orange-400 absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="flex">
          <div className="flex items-center gap-2 my-2">
            <OnScroll
              animation="roll_in1"
              div={
                <div className="bg-primary_light rounded-full relative">
                  <div className="alex"></div>
                  <div className="absolute -top-20 z-40 w-20 h-20 bg-purple-300">
                    hello
                  </div>
                </div>
              }
            />
            <OnScroll
              animation="fade_in"
              div={
                <div className="bg-primary_light overflow-hidden rounded-2xl">
                  <p className="w-[250px] p-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam repudiandae, alias quae ratione, vel aspernatur cumque
                  </p>
                </div>
              }
            />
          </div>
          <div className="flex items-center gap-2 my-2">
            <OnScroll
              animation="roll_in1"
              div={
                <div className="bg-primary_light rounded-full overflow-hidden relative">
                  <div className="alex"></div>
                  <div className="absolute -top-20 z-40 w-20 h-20"></div>
                </div>
              }
            />
            <OnScroll
              animation="fade_in"
              div={
                <div className="bg-primary_light overflow-hidden rounded-2xl">
                  <p className="w-[250px] p-4 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam repudiandae, alias quae ratione, vel aspernatur cumque
                  </p>
                </div>
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-2 my-2">
          <OnScroll
            className="bg-orange-100"
            animation="roll_in3"
            div={
              <div className="bg-primary_light rounded-full overflow-hidden relative">
                <div className="alex"></div>
                <div className="absolute -top-40 z-40 w-20 h-20"></div>
              </div>
            }
          />
          <OnScroll
            className="bg-orange-100"
            animation="fade_in"
            div={
              <div className="bg-primary_light overflow-hidden rounded-2xl">
                <p className="w-[450px] p-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  repudiandae, alias quae ratione, vel aspernatur cumque
                  voluptates, labore expedita quia necessitatibus. Voluptas
                  fugit unde voluptatem natus iure aliquid similique illo?
                </p>
              </div>
            }
          />
        </div>
        <OnScroll
          className="bg-orange-100"
          animation="roll_in2"
          div={<CountUp num={99} />}
        />
        <OnScroll
          className="bg-orange-100"
          animation="roll_in3"
          div={<CountUp num={99} />}
        />
        <OnScroll div={<CountUp num={99} />} />
      </div>
      {/* ------ Contact Form -------- */}
      {/* <div className="section-container flex-row z-10">
        <div className="w-1/3">
          <img
            src={logo}
            alt="Logo"
          />
          <h2>Free 30min Consultation</h2>
          <p>
            Have a new project in mind? Schedule a 30 minute discovery call and
            we will at the very least give you some great advice.
          </p>
        </div>
        <div>
          <h1>Schedule a discovery call</h1>
          <form>
            <input9
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              name=""
              placeholder="Email"
            />
          </form>
        </div>
      </div> */}
      <MouseMove />
      <div className="h-[200px] bg-slate-300"></div>
    </div>
  )
}

export default InQ
