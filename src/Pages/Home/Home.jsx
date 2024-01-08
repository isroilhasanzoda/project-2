import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode } from "swiper/modules";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { getCategory,  getProduct } from "../../api/todos/todos";

// import { data } from 'autoprefixer';
const PostImagesApi = "http://65.108.148.136:8072/images"; 

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.home.product);

      const data = useSelector((store) => store.home.posts);



  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <div>
        <p>HOME</p>

        <div className=" mb-[30px] mt-[5%] sticky z-0">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="m-[auto] "
                alt="main banner"
                src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1696573347630.png"
                decoding="async"
                data-nimg="intrinsic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="m-[auto] "
                src="https://s3.eu-central-1.amazonaws.com/alifcore.storage/media/images/settings/41/banner-1696483363655.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-[6%] ml-[13%] ">
        <p className="text-2xl font-bold">Популярные категории</p>
        <div className="grid grid-cols-4 mt-[90px] gap-6">
          {data.map((e) => {
            return (
              <div className="flex w-[40%]" key={e.id}>
                <p
                  onClick={() => setIdd(e.id)}
                  className="hover:bg-[white] hover:text-[#FFBE1F] overflow-auto cursor-pointer flex"
                >
                  {e.categoryName}
                </p>
                <img
                  src={`${import.meta.env.VITE_APP_FILES_URL}${
                    e.categoryImage
                  }`}
                  alt=""
                />
              </div>
            );
          })}
        </div>

       
      </div>
      <div className="mt-[60px] ">
        <Swiper
          slidesPerView={5}
          spaceBetween={140}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
          
        ></Swiper>
      </div>
      <div className="flex flex-col mt-[6%] ml-[13%] mb-[7%]">
        <p className="text-2xl font-bold ">Самые горячие скидки 🔥</p>
        <div className="flex mt-24 gap-14">
          {/* {product.map((e) => {
            
            return (
              <div className="p-[10px] w-[220px] " key={e.productId}>
                <img
                  src="https://avatars.mds.yandex.net/i?id=7f15547cea6d1c0bf96f86a8444be3ad66cfa170-3612059-images-thumbs&n=13"
                  alt=""
                />
                <button className="bg-[red] rounded-md px-2 py-1  text-white mb-4">
                  -36%
                </button>
                <p className="font-bold">{e.price}c</p>
                <p className="text-[silver]">880 c x 24month</p>
                <div className="flex gap-3">
                  <h1 className="">{e.productName}</h1>
                  <p className="">{e.color}</p>
                </div>
                <button class="btn btn-warning flex px-3 py-2 items-center justify-center w-[150px] mt-3 bg-[#ffbe1f] rounded-[6px]">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545"
                      stroke="#222222"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>{" "}
                  В корзину
                </button>

              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
