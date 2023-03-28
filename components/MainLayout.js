import React from 'react';
import Header from "./Header";
import Container from "./Container";
import Sidebar from "./Sidebar";
import {useRouter} from "next/router";

const MainLayout = ({children}) => {
  const router = useRouter()

  // useEffect(() => {
  //   console.log(router.pathname)
  //
  //   if (router.pathname === "/im") {
  //     console.log("нужен слушатель")
  //   }
  // }, [router.pathname])

  const handleWheel = (event) => {
    if (router.pathname === "/im") {
      // console.log(event.deltaY)
    }
  }

  return (
    <div onWheel={handleWheel}>
      <Header/>
      <Container className="flex mt-0 md:mt-3 mx-auto overflow-hidden">
        <Sidebar/>
        {children}
      </Container>
      {/*<Footer/>*/}
    </div>
  );
};

export default MainLayout;