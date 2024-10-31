import Logo from "../../images/logo.jpg"

function header() {
  return (
    <header className="w-full p-3 px-16 bg-[#A69A85] flex">
      <div className="w-[50vw] h-full">
        <img src={Logo} alt=""  className="w-[230px]"/>
      </div>
      <div className="w-[50vw] h-full flex items-center justify-end">
        <nav>
          <ul className="flex gap-10 justify-end text-[24px] text-[#0D0D0D] font-bold">
            <li>
              <a href="projeto" className="hover:text-white">Projeto</a>
            </li>
            <li>
              <a href="#atividade" className="hover:text-white">Atividade</a>
            </li>
            <li>
              <a href="#membros" className="hover:text-white">Membros</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default header;
