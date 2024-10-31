function Atividade() {
    return (
      <section
        id="atividade"
        className="w-full px-[130px] mx-auto flex flex-col max-md:px-6 max-md:items-center max-md:w-[90vw] text-justify"
      >
        <h2 className="text-[32px] font-bold text-center mb-8">Atividades</h2>
        <ol className="space-y-10 list-decimal">
          <li>
            <h3 className="text-xl font-semibold">Melhorias na Infraestrutura de Rede</h3>
            <p className="text-[20px]">
              Ampliação da capacidade e velocidade da rede para oferecer uma conexão mais estável e rápida, beneficiando alunos, professores e equipe administrativa.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Atualização de Equipamentos e Softwares</h3>
            <p className="text-[20px]">
              Renovação de hardware e atualização de softwares utilizados em laboratórios, melhorando o desempenho e a segurança.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Segurança Cibernética</h3>
            <p className="text-[20px]">
              Implementação de medidas de proteção, como firewalls e autenticação em duas etapas, para garantir a segurança dos dados institucionais e pessoais.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Treinamentos e Workshops</h3>
            <p className="text-[20px]">
              Capacitação de alunos e professores para o uso eficiente das novas ferramentas tecnológicas, promovendo uma cultura de segurança digital.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Suporte Técnico e Manutenção</h3>
            <p className="text-[20px]">
              Estabelecimento de uma equipe dedicada para manutenção e suporte contínuos, prevenindo falhas e garantindo a qualidade dos recursos tecnológicos.
            </p>
          </li>
        </ol>
      </section>
    );
  }
  
  export default Atividade;
  