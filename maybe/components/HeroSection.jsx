import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-[#75000d]">
        Events & communication
      </h1>
      <p className="mt-10 text-lg text-center text-white max-w-4xl">
        Plus qu'une simple agence événementielle,
        H.VISION est une source d'idées originales et de
        prestations de qualité. Notre équipe met à votre
        service son expérience et ses idées novatrices afin
        de faire vivre à votre public une expérience
        exceptionnelle et impactant. Faites confiance à
        notre savoir-faire pour faire passer votre
        message, remodeler votre image de marque, ou tout simplement éblouir vos invités.
      </p>
      <div className="flex justify-center my-10">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="py-3 px-4 mx-3 rounded-md border text-[#75000d] border-[#75000d] hover:bg-[#75000d] hover:text-white transition-colors duration-[1500ms] cursor-pointer"
        >
          Nous Contacter
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-red-400 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
