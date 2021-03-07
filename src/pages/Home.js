import React from "react";
import Header from "../components/Header";
import {
  AiFillStar,
  AiFillPlayCircle,
  AiOutlinePlus,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import session1 from "../assets/images/session/images-1.jpg";
import session2 from "../assets/images/session/images-2.jpg";
import session3 from "../assets/images/session/images-3.jpg";
import session4 from "../assets/images/session/images-4.jpg";
import session5 from "../assets/images/session/images-5.jpeg";

import actor1 from "../assets/images/actors/actor-1.jpg";
import actor2 from "../assets/images/actors/actor-2.jpg";
import actor3 from "../assets/images/actors/actor-3.jpg";
import actor4 from "../assets/images/actors/actor-4.jpg";
import actor5 from "../assets/images/actors/actor-5.jpg";
import actor6 from "../assets/images/actors/actor-6.jpg";
import actor7 from "../assets/images/actors/actor-7.jpg";
import actor8 from "../assets/images/actors/actor-8.jpg";
import actor9 from "../assets/images/actors/actor-9.jpg";
import actor10 from "../assets/images/actors/actor-10.jpg";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="container-fluid">
        <div className="overlay"></div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 left pt-3 text-white">
            <i className="start">
              <AiFillStar />
            </i>
            <label>8.8</label>
            <h2>Stranger Things</h2>
            <p className="mt-4">
              Stranger Things is an American science fiction horror
              mystery-thriller streaming television series created by the Duffer
              Brothers and released on Netflix.
            </p>
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide className="session">
                <img src={session1} />
                <div className="overlay2">
                  <i>
                    <AiFillPlayCircle className="text-white" />
                  </i>
                  Session 1
                </div>
              </SwiperSlide>
              <SwiperSlide className="session ml-0">
                <img src={session2} />
                <div className="overlay2">
                  <i>
                    <AiFillPlayCircle className="text-white" />
                  </i>
                  Session 2
                </div>
              </SwiperSlide>
              <SwiperSlide className="session ml-0">
                <img src={session3} />
                <div className="overlay2">
                  <i>
                    <AiFillPlayCircle className="text-white" />
                  </i>
                  Session 3
                </div>
              </SwiperSlide>
              <SwiperSlide className="session ml-0">
                <img src={session4} />
                <div className="overlay2">
                  <i>
                    <AiFillPlayCircle className="text-white" />
                  </i>
                  Session 4
                </div>
              </SwiperSlide>
              <SwiperSlide className="session ml-0">
                <img src={session5} />
                <div className="overlay2">
                  <i>
                    <AiFillPlayCircle className="text-white" />
                  </i>
                  Session 5
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="buttons d-flex mt-5">
              <button className="btn watch">
                Watch Now
                <i className="video ml-3">
                  <AiFillPlayCircle className="text-white" />
                </i>
              </button>
              <button className="btn favourite ml-5">
                <i className="plus mr-3">
                  <AiOutlinePlus />
                </i>
                My Favourites
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 right text-white">
            <h2>Actors</h2>
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  slidesPerView: 4,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide className="actor">
                <img src={actor1} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor2} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor3} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor4} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor5} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor6} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor7} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor8} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor9} />
              </SwiperSlide>
              <SwiperSlide className="actor">
                <img src={actor10} />
              </SwiperSlide>
            </Swiper>
            <h4 className="mt-5">Millie Boddy Brown</h4>
            <p className="mt-4">
              Millie Bobby Brown (born 19 February 2004) is an English actress
              and producer. At the age of twelve, she gained notability for her
              role as Eleven in the first season of Netflix science fiction
              series Stranger Things (2016–present),which has been renewed for
              four seasons.{" "}
            </p>
            <div className="social">
              <i className="">
                <FaFacebookF />
              </i>
              <i className="ml-4">
                <FaInstagram />
              </i>
              <i className="ml-4">
                <AiFillYoutube />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
