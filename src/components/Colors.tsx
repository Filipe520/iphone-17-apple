import { useState } from "react";
import { IoIosPhonePortrait } from "react-icons/io";

export default function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      img: "/iphone-blue.jpg",
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      img: "/iphone-silver.jpg",
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      img: "/iphone-orange.jpg",
      colorClass: "bg-orange-500",
    },
  ];

  const modals = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB ou 1TB",
      battery: "33h de vídeos",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "128GB, 256GB ou 512GB",
      battery: "29h de vídeos",
      weight: "199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <section id={"colors"} className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Escolha sua cor
          </h2>
          <p className="text-xl text-gray-400">
            Quatro acabamentos em titânio lindos
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectedColor)?.img}
                alt="iphone 17"
                className="max-w-full max-h-[600px] mx-auto"
              />
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="backdrop-blur-md px-8 py-4 rounded-full bg-black/40 inline-block">
                <h3 className="text-2xl font-semibold">
                  {colors.find((color) => color.id === selectedColor)?.name}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          {colors.map((color) => (
            <button
              key={color.id}
              className={`relative transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedColor(color.id)}
            >
              <div
                className={`size-10 rounded-full border ${color.colorClass} ${selectedColor === color.id ? "border-white" : "border-gray-600"}`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid gap-8 mt-20 grid-cols-2">
          {modals.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800"
            >
              <div className="text-4xl mb-4">
                <IoIosPhonePortrait />
              </div>
              <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>

              <ul className="text-gray-300 space-y-2">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-8 hover:scale-105 shadow-md shadow-blue-500/50 cursor-pointer">
            Compre agora á partir de R$ 9.299,00
          </button>
          <p>Ou em até 12x de R$ 994,92 sem juros</p>
        </div>
      </div>
    </section>
  );
}
