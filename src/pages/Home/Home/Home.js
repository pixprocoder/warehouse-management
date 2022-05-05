import React from "react";
import "./Home.css";
import StokeItems from "../StokeItems/StokeItems";
import Banner from "../../Banner/Banner";
import OutClient from "../../OurClient/OutClient";
import WhatNew from "../../WhatNew/WhatNew";

const Home = () => {
  return (
    <div>
      <Banner />
      <StokeItems />
      <WhatNew />
      <OutClient />
    </div>
  );
};

export default Home;
