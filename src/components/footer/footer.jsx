import LogoCarcara from "../header/images/Logo_Carcara.png";

function footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030212] w-full text-[#FFFFFFB2] flex flex-col pt-6">
      <div className="flex justify-around items-center gap-10 pb-6 max-md:px-5">
        <div>
          <img src={LogoCarcara} alt="" className="w-[250px]" />
        </div>
        <div className="flex gap-32 max-md:gap-10">
          <div>
            <h1 className="text-[14px] py-2 font-bold font-montserrat">
              Navegação
            </h1>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li className="hover:text-white transition-colors duration-500">
                <a
                  href="#projeto"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("projeto");
                  }}
                >
                  Projeto
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-500">
                <a
                  href="#atividade"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("atividade");
                  }}
                >
                  Atividade
                </a>
              </li>
              <li className="hover:text-white transition-colors duration-500">
                <a
                  href="#membros"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("membros");
                  }}
                >
                  Membros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1
              id="contato"
              className="text-[14px] py-2 font-bold font-montserrat"
            >
              Contato
            </h1>
            <ul className="flex flex-col gap-2 text-[14px]">
              <li className="hover:text-white transition-colors duration-500">
                <a href="#">Instagram</a>
              </li>
              <li className="hover:text-white transition-colors duration-500">
                <a href="#">Linkedin</a>
              </li>
              <li className="hover:text-white transition-colors duration-500">
                <a href="#">Gmail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#F08B3866] flex justify-center">
        <p className="text-sm flex p-3 border-[#F08B3866]">
          &copy; 2024 Projeto Carcará. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default footer;
