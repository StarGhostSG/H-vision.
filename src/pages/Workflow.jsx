import React from "react";
import codeImg from "../assets/code.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide text-[#75000d]">
        Equipes
      </h2><br /><br /><br />
      <div className="relative p-2 w-full lg:w-1/2 mx-auto" style={{ height: '600px' }}>
        <div className="absolute top-0 left-0 w-48 h-48 rounded-full overflow-hidden">
          <img src={img1} alt="Feriel Harfouchi" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-white text-center font-bold">
            Feriel Harfouchi
            <br />
            Chef de projet
          </div>
        </div>
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden">
          <img src={img5} alt="Lotfi Harfouchi" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-white text-center font-bold">
            Maouchi Adlene
            <br />
            Agent Commercial
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full overflow-hidden">
          <img src={img4} alt="Nawel Akeb" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-white text-center font-bold">
            Nawel Akeb
            <br />
            Chef de Projet
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full overflow-hidden">
          <img src={img2} alt="Med Rafik Harfouchi" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-white text-center font-bold">
            Med Rafik Harfouchi
            <br />
            Régisseur
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden">
          <img src={img3} alt="Maouchi Adlene" className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 py-2 text-white text-center font-bold">
            Lotfi Harfouchi
            <br />
            Manager & Ingénieur son
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
