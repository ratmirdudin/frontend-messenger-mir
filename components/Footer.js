import React from 'react';
import Container from "./Container";
import {useRouter} from "next/router";

const Footer = () => {
  const router = useRouter()

  return (
    <footer className="bg-yellow-400 flex flex-grow-0 flex-shrink-0 basis-auto">

      <Container className="flex items-center mx-auto">
        <div className="text-xs mx-auto">
          <span>2023г. Является интеллектуальной собственностью. </span>
          <span onClick={() => router.push("/")}
                className="text-cyan-800 cursor-pointer hover:text-cyan-600 transform transition ease-out">
            Написать разработчику
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;