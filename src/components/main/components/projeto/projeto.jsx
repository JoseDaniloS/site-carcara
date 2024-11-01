import Fundo from "./images/fundo.jpeg";
import Header from "../../../header/header";
import ArrowBottom from "./images/arrow-bottom.png"


function Projeto() {
  return (
    <section
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(3, 2, 18, 0.5) 0%, rgba(3, 2, 18, 1) 100%),
          linear-gradient(to bottom, rgba(3, 2, 18, 1) 0%, rgba(3, 2, 18, 0) 20%),
          linear-gradient(to top, rgba(3, 2, 18, 1) 0%, rgba(3, 2, 18, 0) 30%),
          url(${Fundo})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-screen h-screen  flex flex-col"
    >
      <Header />

      <div className="flex-grow flex flex-col space-y-32 justify-center items-center">
        <div className="w-full max-w-[569px] max-md:w-[90vw] text-center">
          <h1 className="text-[72px] max-md:text-[40px] text-white font-extrabold">
            Conhecimento que <span className="text-[#F08B38]">Voa Alto</span>
          </h1>
          <p className="mt-4 text-[18px] text-[#FFFFFF] font-medium">
            Uma equipe formada por alunos que, unidos, transforma ideias em
            serviços para a própria universidade, trazendo inovação e dedicação
            com o espírito do nordeste
          </p>
        </div>

        <img src={ArrowBottom} alt=""  className="w-[52px]"/>
      </div>
    </section>
  );
}

export default Projeto;
