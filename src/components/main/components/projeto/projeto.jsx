
import Imagem from "../../../../images/pessoas.avif"

function Projeto() {

  return (
    <>
      <h1 id="projeto" className="text-[32px] font-bold text-center">
        Projeto
      </h1>
      <div className="flex  max-md:flex-col items-center justify-evenly w-full">
        <section className="w-[40vw] flex max-md:w-[90vw]">
          <span className="text-[20px] text-justify">
            <h1 className="font-semibold text-[18px]">
              Carcará: Atuando na Infraestrutura de Tecnologia da Informação do
              Campus Pau dos Ferros
            </h1>
            <br />
            É um projeto iniciante que tem como objetivo melhorar a parte da infraestrutura de TI do
            Campus Pau dos Ferros, que envolve a análise, o planejamento e a execução
            de ações que visam aprimorar a qualidade, a segurança e a eficiência
            dos recursos tecnológicos disponíveis no campus.
            <br />
            <br />
            Essas iniciativas incluem a modernização dos sistemas de rede,
            assegurando maior velocidade e confiabilidade na conexão; a
            atualização de hardware e software utilizados por alunos,
            professores e equipe administrativa; e a implementação de medidas de
            segurança cibernética para proteger dados e garantir a integridade
            dos processos institucionais. Além disso, é essencial garantir a
            adequação da infraestrutura para suportar a crescente demanda por
            ferramentas e ambientes digitais, alinhando o campus com as melhores
            práticas tecnológicas do setor educacional.
            <br />
            <br /> Esses esforços visam não apenas aprimorar o suporte às
            atividades acadêmicas e administrativas, mas também criar um
            ambiente propício ao desenvolvimento de projetos de pesquisa,
            inovação e extensão, fortalecendo a posição do campus como um polo
            de excelência tecnológica e educacional na região.
          </span>
        </section>
        <section className="w-[40vw] flex justify-center max-md:w-[90vw]">
            <div>
                <img src={Imagem} alt=""  className="h-[640px] rounded-[10px]"/>
            </div>
        </section>
      </div>
    </>
  );
}

export default Projeto;
