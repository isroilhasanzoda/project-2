import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './App.css';

import "../../App.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { axiosRequest } from "../../utils/axiosRequest";
import { useNavigate, Link } from "react-router-dom";
import { saveToken } from "../../utils/token";
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      userName: event.target["email"].value,
      password: event.target["password"].value,
    };
    console.log(user);
    try {
      const { data } = await axios.post(
        "http://65.108.148.136:8085/Account/login",
        user
      );
      console.log(data.data);
      saveToken(data.data);
      navigate("/Admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" bg-no-repeat">
      <div className=" flex justify-center pt-[30px] items-end ">
        <div className=" mt-[130px] flex">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              // dur
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper relative left-[405px] mt-[25px] rounded-[20px] "
          >
            `{" "}
            {/* <SwiperSlide>
              <img className="w-[20%]" src="src/assets/images/Снимок экрана 2023-11-27 163218.png" alt="" />  
          </SwiperSlide>
        <SwiperSlide>            <img className=" " src="src/assets/images/Снимок экрана 2023-11-27 162610.png" alt="" />  </SwiperSlide>
        <SwiperSlide>    <img className=" " src="src/assets/images/Снимок экрана 2023-11-27 162804.png" alt="" /></SwiperSlide>
        <SwiperSlid`e>  <img className="src/assets/images/Снимок экрана 2023-11-27 162946.png" alt="" /></SwiperSlide> */}
          </Swiper>
          <div>
            <img src="" alt="" />
            <img src="src/assets/images/frames.svg" alt="" />
          </div>
          <div>
            <div
              className="  bg-[url(https://avatars.mds.yandex.net/i?id=e084d7e0a7ceeb6076eca0f17a5ed641f42f22b5-10996738-images-thumbs&n=13)] bg-no-repeat border-[1px] p-[30px]"
              // sx={{
              //   marginTop: 8,
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              // }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <div className=" flex justify-center">
                  <img src="src/assets/images/LOGO.png" alt="" />
                </div>
                <div className=" mt-1  flex justify-center">
                  <input
                    margin="normal"
                    className="hover:border-[blue] rounded-md w-[280px] p-[10px] border-[1px] "
                    required
                    // fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    placeholder="Телефон, имя пользователья или эл.почта"
                  />
                </div>
                <div className=" flex justify-center mt-[10px]">
                  <input
                    className=" hover:border-[blue] rounded-md w-[280px] p-[10px] border-[1px] "
                    margin="normal"
                    required
                    // fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="Пароль"
                  />
                </div>
                {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
                <div className="  p-[6px] border-[1px] bg-white w-[270px] ml-[28px] text-[blue]  border-[blue] mt-[20px] flex justify-center rounded-[10px]">
                  <button className=" cursor-pointer " type="submit">
                    Войти
                  </button>
                </div>
                <div className=" p-[10px] flex justify-center">
                  <img src="src/assets/images/separator.png" alt="" />
                </div>
                <div className=" p-[10px] flex justify-center">
                  <img
                    src="src/assets/images/continue with google.png"
                    alt=""
                  />
                </div>
                <div className=" flex justify-center p-[10px]">
                  <p>Забыли пароль ?</p>
                </div>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      У вас ещё нет аккаунта?
                      <Link to={"registration"}>
                        <span className=" text-blue-600">
                          Зарегистрироваться
                        </span>
                      </Link>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <div className=" p-[20px] flex justify-center">
              Установите приложение.
            </div>
            <div className=" flex justify-center">
              <img src="src/assets/images/links.png" alt="" />
            </div>
          </div>
        </div>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </div>
    </div>
  );

}
