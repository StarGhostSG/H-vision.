import React from "react";
import img1 from "../assets/profile-pictures/img1.jpg";
import img2 from "../assets/profile-pictures/img2.jpg";
import img3 from "../assets/profile-pictures/img3.jpg";
import img4 from "../assets/profile-pictures/img4.jpg";
import img5 from "../assets/profile-pictures/img5.jpg";
import img6 from "../assets/profile-pictures/img6.jpg";
import img7 from "../assets/profile-pictures/img7.jpg";
import img8 from "../assets/profile-pictures/img8.jpg";
import img9 from "../assets/profile-pictures/img9.jpg";
import img10 from "../assets/profile-pictures/img10.jpg";
import img11 from "../assets/ilg/img11.jpg";
import img12 from "../assets/ilg/img12.jpg";
import img13 from "../assets/ilg/img13.jpg";
import img14 from "../assets/ilg/img14.jpg";
import img15 from "../assets/ilg/img15.jpg";
import img16 from "../assets/ilg/img16.jpg";
import img17 from "../assets/ilg/img17.jpg";
import img18 from "../assets/ilg/img18.jpg";
import img19 from "../assets/ilg/img19.jpg";
import img20 from "../assets/ilg/img20.jpg";
import img21 from "../assets/ilg/img21.jpg";
import img22 from "../assets/ilg/img22.jpg";
import img23 from "../assets/ilg/img23.jpg";
import img24 from "../assets/ilg/img24.jpg";
import img25 from "../assets/ilg/img25.jpg";
import img26 from "../assets/ilg/img26.jpg";
import img27 from "../assets/ilg/img27.jpg";
import img28 from "../assets/ilg/img28.jpg";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-[#75000d]">
        Clients
      </h2>

      <div className="flex flex-wrap justify-center">
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((imgSrc, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 px-4 py-2">
            <div className="bg-black rounded-md p-6 text-md border border-red-700 font-thin">
              <img className="w-full h-full object-cover rounded-md" style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }} src={imgSrc} alt={`image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t-4 border-red-700 my-10 w-full" />

      <div className="flex flex-wrap justify-center">
        {[img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28].map((imgSrc, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/5 px-4 py-2">
            <div className="bg-black rounded-md p-6 text-md border border-red-700 font-thin">
              <img className="w-full h-full object-cover rounded-md" style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }} src={imgSrc} alt={`image ${index + 11}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;