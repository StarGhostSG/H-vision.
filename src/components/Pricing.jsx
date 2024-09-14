import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const Materiels = [
  {
    title: "Audio",
    features: [
      "Console de mixage soundcreft si expression 3",
      "Console de mixage Montarbo MX 20",
      "Console de Mixage Mackie FX12",
      "Console de Mixage Dynacord cms 1000",
      "Retour de scène FBT verve 115",
      "Retour de scène verve 112",
      "dB technologie LVX 115",
      "dB technologie Sub 18 H",
      "dB technologie Vio 210",
      "dB technologie Vio 318",
      "Perche Micro grand modèle K&M",
      "Perche micro petit modèle K&M",
      "Parc Micro divers en usage et marque",
      "Cabage et accessoires",
      "Stand guitare",
      "Stand Clavier",
      "Pupitre pour musiciens",
      "Pupitre pour speech",
      "Micro HF Shure",
      "Micro serre-tête HF"
    ]
  },
  {
    title: "Lumière",
    features: [
      "Structure Métallique 300",
      "Embase pour structure",
      "Scène Mobile",
      "Par à led 56 RGBW",
      "Beam Hi-llit 230 /280",
      "Wach à led",
      "Projecteur découpe led",
      "Console MA pour Lumiere",
      "Sunlight",
      "Sunstripe",
      "Machine à fumée",
      "Machine à bruyère",
      "Écran à led P3"
    ]
  },
  {
    title: "Technique",
    features: [
      "Régie vidéo",
      "Écran plasma 50 pouce",
      "Câblage et accessoires vidéo",
      "Armoire électrique 125 A",
      "Armoire électrique 63 A",
      "Armoire électrique 32A",
      "Câblage électrique haute tension",
      "Pouf blanc",
      "Table base",
      "Table pour buffet",
      "Bar",
      "Table de Ping-pong",
      "Baby-foots",
      "X- Box",
      "Wii",
      "Jeux de carte",
      "Dominos",
      "Karaoke"
    ]
  }
];

const Modal = ({ isOpen, closeModal, option }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-[#121212] p-8 rounded-xl border border-red-700 text-white leading-[10px]" >
        <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {option.features.map((feature, index) => (
            <div key={index} className="flex items-center py-2">
              <CheckCircle2 className="text-white" />
              <span className="ml-2">{feature}</span>
            </div>
          ))}
        </div>
        <button className="mt-4 inline-flex justify-center items-center w-full h-12 p-5 tracking-tight text-xl hover:bg-white border border-white rounded-lg transition duration-200" onClick={closeModal}>
          Fermer
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [openOption, setOpenOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleOption = (option) => {
    if (openOption === option) {
      setOpenOption(null); 
    } else {
      setOpenOption(option); 
    }
  };

  const openModal = (option) => {
    setOpenOption(option);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20 bg-[#121212] text-white">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-[#75000d]">
        Matériels
      </h2>
      <div className="flex flex-wrap justify-center">
        {Materiels.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2 flex">
            <div className="p-10 border border-red-700 rounded-xl bg-[#121212] text-white flex-grow">
              <p className="text-4xl mb-8 text-center">
                {option.title}
              </p>
              <div className={`space-y-2 ${option.title === "Lumière" ? 'leading-[40px]' : ''}`}>
                {option.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center py-2">
                    <CheckCircle2 className="text-white" />
                    <span className="ml-2">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openModal(option)}
                className={`inline-flex justify-center items-center   w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-white border border-white rounded-lg transition duration-200 ${option.title === "Technique" ? 'mt-50' : ''}`}
                style={{ borderColor: '#FF0000' }}>
                Voir Plus
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} option={openOption} />
    </div>
  );
};

export default Pricing;
