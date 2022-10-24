import Footer from "@components/organisms/Footer";
import Header from "@components/organisms/Header";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";

import { navigation } from "./consts";

const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const { asPath, pathname } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const { slug } = useRouter().query;

  useEffect(() => {
    const changeHeader = () => {
      if (window.scrollY !== 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", changeHeader);

    return () => window.removeEventListener("scroll", changeHeader);
  }, [isScrolled]);
  if (pathname !== "/404") {
    return (
      <>
        <Header
          items={navigation}
          isLight={
            asPath === "/blog" ||
            asPath === `/blog/category/${slug}` ||
            isScrolled
          }
        />
        {children}
        <Footer />
      </>
    );
  }
  // if 404

  return <div>{children}</div>;
};

export default MainLayout;
