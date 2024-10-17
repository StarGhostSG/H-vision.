import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import img1 from "../assets/img1.jpg"; // Remplacez par les vraies images
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 p-8">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-[#75000d] mb-6">
        Événements & Communication
      </h1>
      <p className="mt-4 text-lg text-center text-white max-w-4xl px-4">
        Plus qu'une simple agence événementielle, H.VISION est une source d'idées originales et de prestations de qualité.
        Notre équipe met à votre service son expérience et ses idées novatrices afin de faire vivre à votre public une 
        expérience exceptionnelle et impactante. Faites confiance à notre savoir-faire pour faire passer votre message, 
        remodeler votre image de marque, ou tout simplement éblouir vos invités.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center my-10">
        <Link
          to="ContactUs"
          spy={true}
          smooth={true}
          duration={500}
          className="py-3 px-4 mx-3 rounded-md border text-[#75000d] border-[#75000d] hover:bg-[#75000d] hover:text-white transition-colors duration-[1500ms] cursor-pointer"
        >
          Nous Contacter
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-10 space-x-0 lg:space-x-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 shadow-sm shadow-red-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex justify-between w-full mt-8">
        <div className="text-white text-left max-w-md px-4">
          <h2 className="text-2xl mb-4">Pourquoi choisir H.VISION ?</h2>
          <p className="mb-4">
            H.VISION est dédiée à créer des moments mémorables. Nous nous engageons à vous fournir des services personnalisés qui 
            répondent à vos besoins. Notre équipe passionnée est là pour transformer vos idées en réalité.
          </p>
        </div>

        <div className="text-white text-right max-w-md px-4">
          <h3 className="text-xl mb-4">Nos Engagements :</h3>
          <ul className="list-disc list-inside mb-6">
            <li>✅ Écoute et compréhension de vos besoins</li>
            <li>✅ Créativité et originalité dans chaque projet</li>
            <li>✅ Respect des délais et des budgets</li>
            <li>✅ Suivi personnalisé tout au long de l'événement</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-full max-w-6xl">
        <img src={img1} alt="Image 1" className="w-32 h-32 rounded-full shadow-lg object-cover" />
        <img src={img2} alt="Image 2" className="w-32 h-32 rounded-full shadow-lg object-cover" />
        <img src={img3} alt="Image 3" className="w-32 h-32 rounded-full shadow-lg object-cover" />
        <img src={img4} alt="Image 4" className="w-32 h-32 rounded-full shadow-lg object-cover" />
        <img src={img5} alt="Image 5" className="w-32 h-32 rounded-full shadow-lg object-cover" />
      </div>

      <div className="mt-10 text-white text-center max-w-3xl px-4">
        <h2 className="text-2xl mb-4">Ce que nos clients disent :</h2>
        <p className="mb-4">
          "Un service impeccable, une équipe professionnelle et des résultats au-delà de nos attentes." - Client Satisfait
        </p>
        <p className="mb-4">
          "H.VISION a vraiment transformé notre événement en une expérience mémorable. Nous ne pouvons pas les remercier 
          assez !" - Autre Client Satisfait
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
