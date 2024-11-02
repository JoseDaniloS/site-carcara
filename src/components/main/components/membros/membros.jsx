import { useState } from "react";
import {
  Infraestrutura,
  FrontEnd,
  GestoresDeProjeto,
  Designer,
  BackEnd,
  Requisitos,
} from "./components/members";

import Professores from "./components/professores";
import ArrayAlunos from "./components/alunos";
import ArrowLeft from "./anterior.png";
import ArrowRight from "./posterior.png";

function Alunos() {
  const itensPorPagina = 4;

  // Estado para controlar o índice atual de cada grupo de alunos
  const [indicesAtuais, setIndicesAtuais] = useState({
    gestores: 0,
    requisitos: 0,
    frontend: 0,
    backend: 0,
    designer: 0,
    infraestrutura: 0,
  });

  const obterItensAtuais = (grupo, indiceAtual) => {
    return grupo.slice(indiceAtual, indiceAtual + itensPorPagina);
  };

  const Proximo = (grupo, grupoKey) => {
    const indiceAtual = indicesAtuais[grupoKey];
    if (indiceAtual + itensPorPagina < grupo.length) {
      setIndicesAtuais((prev) => ({
        ...prev,
        [grupoKey]: indiceAtual + itensPorPagina,
      }));
    }
  };

  const Anterior = (grupo, grupoKey) => {
    const indiceAtual = indicesAtuais[grupoKey];
    if (indiceAtual - itensPorPagina >= 0) {
      setIndicesAtuais((prev) => ({
        ...prev,
        [grupoKey]: indiceAtual - itensPorPagina,
      }));
    }
  };

  return (
    <div className="max-w-[1170px] overflow-hidden max-md:w-[90vw] flex flex-col items-center justify-center gap-16">
      <div className="max-w-[770px] flex text-center items-center flex-col gap-5">
        <h1
          id="membros"
          className="w-[100px] border-b-2 border-[#F08B38] text-[12px] font-semibold"
        >
          MEMBROS
        </h1>

        <h1 className="text-[52px] max-md:text-[40px] text-[#F08B38] font-bold">
          Alunos em Ação
        </h1>
        <p className="text-[16px] text-[#00000099]">
          Futuros talentos que progrediram para o desenvolvimento da
          universidade, adquirindo experiência prática enquanto apoiam suas
          atividades.
        </p>
      </div>

      {/* Gestores de Projeto */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <h1 className="text-[24px] font-medium">Gestores de Projeto</h1>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {GestoresDeProjeto.map((aluno, index) => (
            <ArrayAlunos key={index} Imagem={aluno.Imagem} Nome={aluno.Nome} />
          ))}
        </div>
      </div>

      {/* Analista de Requisitos */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <div className="w-full flex justify-between">
          <p className="text-[24px] font-medium">Analistas de Requisitos</p>
          <div className="flex gap-5">
            <button onClick={() => Anterior(Requisitos, "requisitos")}>
              <img src={ArrowLeft} className="w-[30px]" alt="Anterior" />
            </button>
            <button onClick={() => Proximo(Requisitos, "requisitos")}>
              <img src={ArrowRight} className="w-[25px]" alt="Próximo" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {obterItensAtuais(Requisitos, indicesAtuais.requisitos).map(
            (aluno, index) => (
              <ArrayAlunos
                key={index}
                Imagem={aluno.Imagem}
                Nome={aluno.Nome}
              />
            )
          )}
        </div>
      </div>

      {/* Front-End */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <div className="w-full flex justify-between">
          <p className="text-[24px] font-medium">Front-End</p>
          <div className="flex gap-5">
            <button onClick={() => Anterior(FrontEnd, "frontend")}>
              <img src={ArrowLeft} className="w-[30px]" alt="Anterior" />
            </button>
            <button onClick={() => Proximo(FrontEnd, "frontend")}>
              <img src={ArrowRight} className="w-[25px]" alt="Próximo" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {obterItensAtuais(FrontEnd, indicesAtuais.frontend).map(
            (aluno, index) => (
              <ArrayAlunos
                key={index}
                Imagem={aluno.Imagem}
                Nome={aluno.Nome}
              />
            )
          )}
        </div>
      </div>

      {/* Back-End */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <div className="w-full flex justify-between">
          <p className="text-[24px] font-medium">Back-End</p>
          <div className="flex gap-5">
            <button onClick={() => Anterior(BackEnd, "backend")}>
              <img src={ArrowLeft} className="w-[30px]" alt="Anterior" />
            </button>
            <button onClick={() => Proximo(BackEnd, "backend")}>
              <img src={ArrowRight} className="w-[25px]" alt="Próximo" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {obterItensAtuais(BackEnd, indicesAtuais.backend).map(
            (aluno, index) => (
              <ArrayAlunos
                key={index}
                Imagem={aluno.Imagem}
                Nome={aluno.Nome}
              />
            )
          )}
        </div>
      </div>

      {/* Designer */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <div className="w-full flex justify-between">
          <p className="text-[24px] font-medium">Designer</p>
          <div className="flex gap-5">
            <button onClick={() => Anterior(Designer, "designer")}>
              <img src={ArrowLeft} className="w-[30px]" alt="Anterior" />
            </button>
            <button onClick={() => Proximo(Designer, "designer")}>
              <img src={ArrowRight} className="w-[25px]" alt="Próximo" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {obterItensAtuais(Designer, indicesAtuais.designer).map(
            (aluno, index) => (
              <ArrayAlunos
                key={index}
                Imagem={aluno.Imagem}
                Nome={aluno.Nome}
              />
            )
          )}
        </div>
      </div>

      {/* Infraestrutura */}
      <div className="w-full space-y-5 flex flex-col max-md:items-center">
        <div className="w-full flex justify-between">
          <p className="text-[24px] font-medium">Infraestrutura</p>
          <div className="flex gap-5">
            <button onClick={() => Anterior(Infraestrutura, "infraestrutura")}>
              <img src={ArrowLeft} className="w-[30px]" alt="Anterior" />
            </button>
            <button onClick={() => Proximo(Infraestrutura, "infraestrutura")}>
              <img src={ArrowRight} className="w-[25px]" alt="Próximo" />
            </button>
          </div>
        </div>
        <div className="w-full flex gap-10 flex-wrap max-md:justify-center">
          {obterItensAtuais(Infraestrutura, indicesAtuais.infraestrutura).map(
            (aluno, index) => (
              <ArrayAlunos
                key={index}
                Imagem={aluno.Imagem}
                Nome={aluno.Nome}
              />
            )
          )}
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
