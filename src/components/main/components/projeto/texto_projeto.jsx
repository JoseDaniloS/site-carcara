import Mascote from "./images/mascote_background_carcara.png";

function TextoProjeto() {
 
  return (
    <section className="w-full h-full max-md:h-auto pb-[250px] flex justify-around max-md:justify-center bg-[#030212] relative">
      <div className="w-[40vw] max-lg:w-[90vw]">
      <h1 id="projeto" className="w-[100px] text-center border-b-2 border-[#F08B38] text-[12px] text-white font-semibold">SOBRE NÓS</h1>
        <h1
          className="text-[52px] max-md:text-[40px] text-[#FFFFFFCC] "
        >
          Infraestrutura e<br />
          <span className="text-[#F08B38]">Desenvolvimento</span>
        </h1>
        <span className="text-[#FFFFFFCC] text-[18px] font-normal">
          É um projeto iniciante que tem como objetivo melhorar a parte da
          infraestrutura de TI do Campus Pau dos Ferros, que envolve a análise,
          o planejamento e a execução de ações que visam aprimorar a qualidade,
          a segurança e a eficiência dos recursos tecnológicos disponíveis no
          campus.
          <br />
          <br />
          Essas iniciativas incluem a modernização dos sistemas de rede,
          assegurando maior velocidade e confiabilidade na conexão; a
          atualização de hardware e software utilizados por alunos, professores
          e equipe administrativa; e a implementação de medidas de segurança
          cibernética para proteger dados e garantir a integridade dos processos
          institucionais. Além disso, é essencial garantir a adequação da
          infraestrutura para suportar a crescente demanda por ferramentas e
          ambientes digitais, alinhando o campus com as melhores práticas
          tecnológicas do setor educacional.
          <br />
          <br />
          Esses esforços visam não apenas aprimorar o suporte às atividades
          acadêmicas e administrativas, mas também criar um ambiente propício ao
          desenvolvimento de projetos de pesquisa, inovação e extensão,
          fortalecendo a posição do campus como um polo de excelência
          tecnológica e educacional na região.
        </span>
      </div>
      <div className="">
        <img className=" absolute right-[10px]" src={Mascote} alt="" />
      </div>
    </section>
  );
}

export default TextoProjeto;
