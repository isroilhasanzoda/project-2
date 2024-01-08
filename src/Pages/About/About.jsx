import React from "react";

const About = () => {
  return (
    <div className="mt-[9%] ml-[12%] mb-[7%]">
      <div>
        <h1 className="text-3xl font-bold"> Корзина</h1>
        <div className="flex  flex-col mt-14 justify-center items-center">
          <img
            className="w-[150px]"
            src="https://avatars.mds.yandex.net/i?id=779090b2c1aea0ebcacbaf1a6163e50d8521e68a-4560311-images-thumbs&n=13"
            alt="empty"
          />
          <h3 className="text-3xl font-bold">Внутри пока нет товаров</h3>
          <p>Перейдите в раздел с товарами, чтобы оставить заявку</p>
          <button
            type="button"
            class="btn btn-warning flex px-3 py-3 items-center justify-center w-[220px] mt-3"
          >
            Перейти в раздел
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
