import Format from "../Layout/format";
//components
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import React, { useContext } from "react";
import DataUser from "../context/dataContext";

export default function Home() {
  return (
    <Format>
      <Section1></Section1>
      <Section2></Section2>
    </Format>
  );
}
