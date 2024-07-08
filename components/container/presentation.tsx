"use client"
import React from "react";
import InfoContact from "./info-contact";
export default function Presentation() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  React.useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <section>
      <div className="mx-auto px-4 py-2 gap-2 text-white overflow-hidden md:px-2 md:flex justify-center items-center">
        <div className="flex-none space-y-5 max-w-xl">
          <h1 className="text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl mr-auto lg:text-6xl font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1">
            Hermann Christian RAZAFINDRANAIVO
          </h1>
          <p>
            Developper web having 3 years experiences in dynamique web building!
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
          <InfoContact />
          </div>
        </div>
      </div>
    </section>
  );
}
