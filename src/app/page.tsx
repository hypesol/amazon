"use client"
import React, { useEffect, useState } from "react";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
function PageHome() {
  const [coupons, setCoupons] = useState([]);

    useEffect(() => {
    // fetch('/data/coupons//all_coupons.json')
    fetch('/data/coupons//tomtop.json')
      .then((response) => {
        // console.log('Response:', response); // Log the response object
        return response.json();
      })
      .then((data) => {
        // console.log('Parsed JSON Data:', data); // Log the parsed JSON data
        setCoupons(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="nc-PageHome relative overflow-hidden">
       <SectionHero2 />
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          {/* <SectionGridMoreExplore /> */}
          <SectionGridMoreExplore data={coupons} />

        </div>
      </div>
    </div>
  );
}

export default PageHome;
