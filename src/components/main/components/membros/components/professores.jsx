import { useState } from "react";
import { Docentes } from "./members";

function Professores() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1169px] max-md:w-[90vw] flex flex-col items-center justify-center gap-16">
      <div className="max-w-[870px] flex text-center items-center flex-col gap-5">
        <h1 className="text-[52px] max-md:text-[40px] text-[#F08B38] font-bold">
          Coordenadores
        </h1>
        <p className="text-[16px] max-w-[700px] text-[#00000099]">
          Profissionais especialistas que orientam e fortalecem a instituição,
          garantindo a excelência acadêmica e administrativa.
        </p>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        {Docentes.map((docente, index) => (
          <div
            key={index}
            className={`w-[259px] h-[298px] rounded-[5px]  shadow-md flex flex-col p-4 justify-end transition-transform duration-300 ${
              hoveredIndex === index ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundImage: `url(${docente.Imagem})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p className="text-white font-extrabold text-[18px]">
              {docente.Nome}
            </p>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Professores;
