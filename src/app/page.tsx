"use client"
import React, { useEffect, useState } from "react";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";

function PageHome() {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const baseUrl = "https://hypesol.github.io/amazon"; // Ensure correct path
    fetch(`${baseUrl}/data/coupons/all_coupons.json`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => setCoupons(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />
      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore data={coupons} />
        </div>
      </div>
    </div>
  );
}

export default PageHome;
