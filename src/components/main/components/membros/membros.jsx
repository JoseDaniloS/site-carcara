import { useState } from "react";
import {
  Infraestrutura,
  FrontEnd,
  GestoresDeProjeto,
  Designer,
  BackEnd,
  Requisitos,
  Docentes,
} from "./members";

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

function Alunos() {
  return (
    <div className="max-w-[1170px] max-md:w-[90vw] flex flex-col items-center justify-center gap-16">
      <div className="max-w-[770px] flex text-center items-center flex-col gap-5">
        <h1 id="membros" className="w-[100px] border-b-2 border-[#F08B38] text-[12px] font-semibold">MEMBROS</h1>
        
        <h1 className="text-[52px] max-md:text-[40px] text-[#F08B38] font-bold">
          Alunos em Ação
        </h1>
        <p className="text-[16px] text-[#00000099]">
          Futuros talentos que progrediram para o desenvolvimento da
          universidade, adquirindo experiência prática enquanto apoiam suas
          atividades.
        </p>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Gestores de Projeto</h1>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Analista de Requisitos</h1>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {Requisitos.map((aluno, index) => (
            <div
              key={index}
              className="w-[259px] h-[120px] rounded-[8px] p-[16px] gap-[8px] border border-[#0000001A] flex items-center justify-center"
            > 
              <img src={aluno.Imagem} alt="" className="w-[88px] h-[88px] object-cover object-center rounded-full"/>
              <hr className="border border-[#0000001A] h-full" />
              {aluno.Nome}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Front End</h1>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {FrontEnd.map((aluno, index) => (
            <div
              key={index}
              className="w-[259px] h-[120px] rounded-[8px] p-[16px] gap-[8px] border border-[#0000001A] flex items-center justify-center"
            > 
              <img src={aluno.Imagem} alt="" className="w-[88px] h-[88px] object-cover object-center rounded-full"/>
              <hr className="border border-[#0000001A] h-full" />
              {aluno.Nome}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Back End</h1>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {BackEnd.map((aluno, index) => (
            <div
              key={index}
              className="w-[259px] h-[120px] rounded-[8px] p-[16px] gap-[8px] border border-[#0000001A] flex items-center justify-center"
            > 
              <img src={aluno.Imagem} alt="" className="w-[88px] h-[88px] object-cover object-center rounded-full"/>
              <hr className="border border-[#0000001A] h-full" />
              {aluno.Nome}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Designer</h1>
      </div>
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Infraestrutura</h1>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {Infraestrutura.map((aluno, index) => (
            <div
              key={index}
              className="w-[259px] h-[120px] rounded-[8px] p-[16px] gap-[8px] border border-[#0000001A] flex items-center justify-center"
            > 
              <img src={aluno.Imagem} alt="" className="w-[88px] h-[88px] object-cover object-center rounded-full"/>
              <hr className="border border-[#0000001A] h-full" />
              {aluno.Nome}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Membros() {
  return (
    <section className="w-full flex flex-col justify-center items-center space-y-16 py-8">
      <Professores />
      
      <Alunos />
    </section>
  );
}

export default Membros;
