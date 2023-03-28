import React from 'react';
import Container from "./Container";
import {useRouter} from "next/router";

const Header = () => {

  const router = useRouter()

  return (
    <header className="flex py-1.5 md:py-2 bg-yellow-400 shadow-md ">

      <Container className="flex items-center justify-between mx-auto xl:px-0 px-2">
        {/*left logo*/}
        <div onClick={() => router.push("/")} className="cursor-pointer flex h-min font-medium text-sm md:text-base">
          <span
            className="select-none px-2 border-2 rounded-l-full border-lime-700 text-lime-900">
            Мессенджер
          </span>
          <span
            className="select-none px-2 border-2 rounded-r-full border-lime-700 text-lime-900 bg-amber-300">
            МИР
          </span>
        </div>

        {/*middle search*/}
        {/*<div className="flex items-center">*/}
        {/*  <input type="text" placeholder="Введи ваш запрос" className="px-1.5 rounded-full w-50 outline-none"/>*/}
        {/*  <PaperAirplaneIcon className="inline-flex cursor-pointer h-7 text-cyan-900"/>*/}
        {/*</div>*/}

        {/*right auth*/}
        {/*<div className="flex gap-1 h-min">*/}
          {/*<Button title="Логин" handleClick={() => console.log("test knopki")}/>*/}
          {/*<Button outline={false} title="Войти" handleClick={() => console.log("test knopki 2")}/>*/}
          {/*<Button outline={true} title="Регистрация" handleClick={() => console.log("test knopki 2")}/>*/}
        {/*</div>*/}
      </Container>
    </header>
  );
};

export default Header;