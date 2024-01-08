import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
//mui
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";

import { useDispatch, useSelector } from "react-redux";
import { getCategory, getCategoryById , getProduct } from "../api/todos/todos";


const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

    const data = useSelector((store) => store.home.posts);
    const data1 = useSelector((store) => store.home.postsId);
    console.log(data1);
    
    const [idd, setIdd] = useState(null)
    
  const dispatch = useDispatch();
  // const userId = getToken().sid;
  // console.log(userId);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getCategoryById(idd));
  }, [dispatch,idd]);
  return (
    <div>
      <div className="mt-0 m-0  relative ">
        <div className="flex gap-2 mt-[-34px]  items-center pt-0 justify-center fixed z-40 shadow-md w-[100%] pb-0 bg-[white] left-0 right-0  ">
          <div className="  ">
            <Link to={"/"}>
              <img
                className="w-[210px] h-[170px] "
                src="src/assets/ONLINE.png"
                alt=""
              />
              {/* <svg
                width="148"
                height="42"
                viewBox="0 0 148 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1707 10.2237H18.6865L11.3539 28.2268H16.0496L21.4111 14.3236L26.7814 28.2268H31.4683L24.1707 10.2237Z"
                  fill="#FFB500"
                ></path>
                <path
                  d="M19.4487 41.4641H19.3961C16.6365 41.1925 13.9821 40.3427 11.5729 39.0549C6.95605 36.5231 3.30286 32.2479 1.71719 26.79C0.105229 21.3497 0.876165 15.7604 3.40799 11.1698C4.6958 8.78692 6.46545 6.64932 8.59429 4.941L8.64685 4.91472C11.827 2.30405 15.7254 0.569441 19.9481 0.0262819C19.9744 0.0262819 20.097 0 20.1233 0L21.9105 4.34528C21.8579 4.34528 21.7352 4.37156 21.709 4.37156C17.9331 4.59933 14.4552 6.0098 11.6517 8.27004C11.5992 8.32261 11.5554 8.34889 11.5028 8.39269C11.424 8.44525 11.3802 8.48906 11.3013 8.5679H11.275C11.2488 8.59418 11.2488 8.59418 11.2225 8.62047C9.6368 9.93456 8.31394 11.529 7.35027 13.3162C5.36161 16.9168 4.76589 21.2883 6.03618 25.5373C7.28019 29.8124 10.1362 33.1327 13.7368 35.1214C15.6466 36.1639 17.7579 36.8122 19.9656 37.0049C24.7577 37.3992 29.2781 35.866 32.7561 33.0276C32.9313 32.8787 33.0803 32.7297 33.2555 32.6071L35.0164 36.9524C30.7237 40.2464 25.2395 41.981 19.4487 41.4641Z"
                  fill="#FFB500"
                ></path>
                <path
                  d="M64.4523 7.75187H61.0006V27.9189H64.4523V7.75187ZM69.2444 11.7993C70.4884 11.7993 71.4082 10.8794 71.4082 9.61789C71.4082 8.37388 70.4884 7.45401 69.2444 7.45401C67.9741 7.45401 67.0104 8.37388 67.0104 9.61789C67.0104 10.8882 67.9565 11.7993 69.2444 11.7993ZM70.9352 13.5164H67.4572V27.9189H70.9352V13.5164ZM81.2902 10.31C81.9122 10.31 82.6832 10.4852 83.603 10.8794L84.6981 8.17238C83.4103 7.52409 82.1137 7.19995 80.8259 7.19995C77.4005 7.19995 75.0877 9.2149 75.0877 12.833V13.5076H72.8012V16.4337H75.0877V27.9101H78.5394V16.4337H83.0336V13.5076H78.5394V12.9382C78.5306 11.2298 79.5031 10.31 81.2902 10.31Z"
                  fill="#222222"
                ></path>
                <path
                  d="M54.8156 20.7176C54.8156 21.9616 54.4214 22.9779 53.6241 23.8452C52.8269 24.6862 51.5917 25.1154 50.3477 25.1154C49.1036 25.1154 48.0874 24.6949 47.2902 23.8452C46.5193 23.0041 46.125 21.9616 46.125 20.7176C46.125 19.4736 46.5193 18.4311 47.2902 17.6163C48.0874 16.749 49.1036 16.3285 50.3477 16.3285C51.5917 16.3285 52.8269 16.749 53.6241 17.6163C54.4214 18.4574 54.8156 19.4736 54.8156 20.7176ZM54.7367 14.8567C53.4489 13.7354 51.8808 13.1659 50.041 13.1659C48.0086 13.1659 46.0462 13.8843 44.7058 15.3035C43.3391 16.6965 42.6733 18.5099 42.6733 20.6388C42.6733 22.8026 43.3479 24.6336 44.7058 26.0791C46.0462 27.5421 47.9823 28.2605 50.041 28.2605C51.9246 28.2605 53.3175 27.7174 54.7367 26.5697V27.9101H58.0132V13.5164H54.7367V14.8567Z"
                  fill="#222222"
                ></path>
                <path
                  d="M93.9055 28.243C95.3686 28.243 96.5863 27.8225 97.5324 26.999C98.4523 26.1755 98.9254 25.1593 98.9254 23.9678C98.9254 22.4259 98.1282 21.2345 96.5162 20.3935C96.122 20.1657 95.4737 19.8941 94.6502 19.5524L93.0382 18.8078C92.2673 18.4311 91.8731 17.8354 91.8731 17.0732C91.8731 16.1008 92.6177 15.286 93.9844 15.286C95.2547 15.286 96.2446 15.8292 96.963 16.9505L98.5487 15.5313C97.7077 14.0683 95.938 13.2711 94.1246 13.2711C92.7842 13.2711 91.6628 13.6478 90.8481 14.3662C90.0071 15.1108 89.6041 16.057 89.6041 17.1958C89.6041 18.6589 90.3224 19.8065 91.7417 20.5774C92.0658 20.7789 92.6353 21.0505 93.5026 21.4009C94.3961 21.7776 94.9393 22.0492 95.2372 22.1982C96.1307 22.7238 96.5775 23.337 96.5775 24.108C96.5775 25.2031 95.5613 26.1667 93.9931 26.1667C92.6791 26.1667 91.365 25.3958 90.5415 23.8802L88.728 25.1242C89.8056 27.2005 91.7942 28.243 93.9055 28.243ZM103.691 27.9189V19.9992C103.691 18.7114 104.068 17.6426 104.786 16.8191C105.531 15.9781 106.503 15.5488 107.695 15.5488C109.876 15.5488 111.374 17.1345 111.374 19.9905V27.9101H113.731V19.3159C113.731 17.3798 113.205 15.9168 112.119 14.8918C111.024 13.8493 109.71 13.3499 108.142 13.3499C106.205 13.3499 104.488 14.1734 103.621 15.4612V7.83948H101.335V27.9013H103.691V27.9189ZM115.877 20.814C115.877 22.899 116.569 24.6862 117.989 26.1317C119.381 27.5509 121.169 28.2693 123.306 28.2693C125.47 28.2693 127.231 27.5509 128.641 26.1317C130.034 24.6949 130.726 22.899 130.726 20.814C130.726 18.7552 130.008 16.9856 128.615 15.5488C127.196 14.1121 125.461 13.385 123.297 13.385C121.16 13.385 119.373 14.1033 117.98 15.5488C116.578 16.9943 115.877 18.7552 115.877 20.814ZM128.344 20.814C128.344 22.277 127.871 23.521 126.881 24.5635C125.908 25.5798 124.717 26.0791 123.306 26.0791C121.913 26.0791 120.722 25.5798 119.732 24.5635C118.759 23.521 118.269 22.277 118.269 20.814C118.269 19.3772 118.768 18.1595 119.732 17.1345C120.722 16.092 121.913 15.5488 123.306 15.5488C124.725 15.5488 125.917 16.092 126.881 17.1345C127.879 18.1595 128.344 19.3772 128.344 20.814ZM140.416 13.3937C138.278 13.3937 136.57 14.2347 135.247 15.8993V13.7441H132.89V33.7622H135.247V25.8338C136.535 27.4458 138.226 28.2693 140.337 28.2693C142.396 28.2693 144.086 27.5509 145.427 26.1317C146.793 24.6687 147.486 22.899 147.486 20.8403C147.486 18.7815 146.793 17.0119 145.427 15.5488C144.095 14.1121 142.431 13.3937 140.416 13.3937ZM140.144 26.0791C138.629 26.0791 137.411 25.606 136.517 24.5898C135.597 23.5473 135.151 22.3033 135.151 20.814C135.151 19.351 135.597 18.1069 136.517 17.0907C137.437 16.0745 138.629 15.5488 140.144 15.5488C141.633 15.5488 142.825 16.0745 143.745 17.0907C144.665 18.1069 145.138 19.351 145.138 20.814C145.138 22.3033 144.691 23.5473 143.745 24.5898C142.825 25.5885 141.633 26.0791 140.144 26.0791Z"
                  fill="#222222"
                ></path>
              </svg> */}
            </Link>
          </div>

          {/* <button className="">Каталог товаров</button> */}
          <div>
            <button
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              className="bg-[#ffbe1f] flex items-center gap-1 hover:bg-[#e9c363d1] px-[12px] mr-3 rounded-lg mt-1  py-2"
            >
              <svg
                class="md:-mr-0.75"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              Каталог товаров
            </button>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box
                sx={{
                  p: 1,
                  backgroundColor: "white",
                  marginTop: "20px",
                  width: "1513px",
                  height: "550px",
                  boxShadow: "10px 10px 900px 50px ",
                  position: "relative",
                  zIndex: "3",

                  // boxShadow: "gray",
                  // boxShadow: "10px 10px 50px 1px",
                  // borderBottom:"1px solid black"
                }}
              >
                <div className="flex ml-[13%]">
                  <div className="w-[450px] p-3 relative pt-[10px] overflow-y-auto h-[65vh] bg-gray-100">
                    {data.map((e) => {
                      return (
                        <div className="flex w-[40%]" key={e.id}>
                          <p
                            onClick={() => setIdd(e.id)}
                            className="hover:bg-[white] hover:text-[#FFBE1F] overflow-auto cursor-pointer flex"
                          >
                            {e.categoryName}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-3 ml-9 gap-3">
                    {data1?.subCategories?.map((elem) => {
                      return (
                        <div className="" key={elem?.id}>
                          <p className="font-bold">{elem?.subCategoryName}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Box>
            </Popper>
          </div>

          <input
            type="search"
            className=" p-2 border-[3px] w-[35%] rounded-md"
            placeholder="название товара или артикул"
          />
          <div className="flex items-end gap-3">
            <div className=" flex flex-col items-center">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M20 10.1818C20 15.5271 14.3556 20.2309 12.5491 21.5996C12.2212 21.8479 11.7788 21.8479 11.4509 21.5996C9.6444 20.2309 4 15.5271 4 10.1818C4 8.01186 4.84285 5.93079 6.34315 4.3964C7.84344 2.86201 9.87827 2 12 2C14.1217 2 16.1566 2.86201 17.6569 4.3964C19.1571 5.93079 20 8.01186 20 10.1818Z"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#222222"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <p className="text-[#808589] hover:text-[#ffbe1f]">Душанбе</p>
            </div>
            <Link to="Login">
              <div className=" flex flex-col items-center">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0703 21V19C20.0703 17.9391 19.6489 16.9217 18.8987 16.1716C18.1486 15.4214 17.1312 15 16.0703 15H8.07031C7.00945 15 5.99203 15.4214 5.24189 16.1716C4.49174 16.9217 4.07031 17.9391 4.07031 19V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.0703 11C14.2795 11 16.0703 9.20914 16.0703 7C16.0703 4.79086 14.2795 3 12.0703 3C9.86117 3 8.07031 4.79086 8.07031 7C8.07031 9.20914 9.86117 11 12.0703 11Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="text-[#808589] hover:text-[#ffbe1f]">Войти</p>
              </div>
            </Link>

            <Link to="/about">
              <div className=" flex flex-col items-center">
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
                </svg>
                <p className="text-[#808589] hover:text-[#ffbe1f]">Корзина</p>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/">
          <h1>jjj1</h1>
        </Link>
      </div>
      <Outlet />
      <div className=" bg-[#222222]">
        <div className="flex text-white justify-around pt-24 p-3 gap-4">
          <div>
            <p className="text-[#9ba1a7]">Телефоны справочной службы</p>
            <h3 className="hover:text-[#ffbe1f] font-bold pt-4">900</h3>
            <h3 className="hover:text-[#ffbe1f] pt-4 font-bold">
              +992 48-888-1111
            </h3>
            <h3 className="hover:text-[#ffbe1f] pt-4 font-bold">
              @onlineShop
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <p className="hover:text-[#ffbe1f] font-bold">Каталог товаров</p>
            <p className="hover:text-[#ffbe1f] font-bold">Смартфоны</p>
            <p className="hover:text-[#ffbe1f] font-bold">Телевизоры</p>
          </div>
          <div>
            <p className="hover:text-[#ffbe1f] font-bold pb-4">
              Стиральные машины
            </p>
            <p className="hover:text-[#ffbe1f] font-bold ">Кондиционеры</p>
          </div>
          <div>
            <p className="text-[#9ba1a7]">Мы в соцмедиа</p>
            <div className="flex items-center">
              <img className="w-[50px]" src="src/assets/q1.png" alt="" />
              <img className="w-[50px]" src="src/assets/q1.png" alt="" />
              <img className="w-[50px]" src="src/assets/q1.png" alt="" />
            </div>
          </div>
        </div>
        <hr className="ml-[7%] mr-[7%]" />
        <div className="flex justify-around mt-14">
          <p className="text-[#9ba1a7]  ">
            © 2023 ОАО «Online Shop». г. Душанбе
          </p>
          <p className="hover:text-[#ffbe1f] font-bold text-white">
            support@onlineshop.tj
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
