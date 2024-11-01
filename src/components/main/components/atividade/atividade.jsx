import { cardsInformativos } from "./components/cardsInformativo";

function Atividade() {
  const Card = ({ card }) => {
    return (
      <div className="w-[368px] max-md:w-[90vw] h-[204px] border border-[#0000001A] shadow-md flex flex-col items-center justify-evenly rounded overflow-hidden px-5">
        <div className="flex w-full justify-start gap-10 items-center">
          <img src={card.imagem} alt="" className="w-[32px] h-[32px]"/>
          <p className="text-[18px] font-medium text-[#030212]">{card.titulo}</p>
        </div>
        <hr className="h-[2px] w-full" />
        <div className="">
          <p className="text-start">{card.texto}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      className="w-screen h-full py-[100px] bg-white flex justify-center items-center text-center"
    >
      <div className="max-w-[1170px] max-md:w-[90vw] flex flex-col items-center gap-[100px]">
        <div className="max-w-[718px] flex flex-col gap-5">
          <div>
            <h1
              id="atividade"
              className="text-[52px] max-md:text-[40px] font-medium leading-[63.39px] text-[#00000099] font-montserrat"
            >
              Fortalecendo a<br /> Universidade com{" "}
              <span className="text-[#F08B38]">Carcará</span>
            </h1>
          </div>
          <div>
            <span className="text-[18px] font-montserrat leading-[19.5px] text-[#00000099] text-justify">
              Fortalecendo a conectividade e segurança da Universidade, o
              projeto "Carcará" visa modernizar a infraestrutura tecnológica com
              foco na estabilidade e velocidade da rede.
            </span>
          </div>
        </div>

        <div className="flex flex-wrap max-md:w-[90vw] gap-[32px] justify-center items-center">
          {cardsInformativos.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atividade;
