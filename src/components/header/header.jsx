import { useState } from "react";
import Logo from "./images/Logo_Carcara.png";
import Menu from "./images/menu.png";

function Header() {
  const [topico, setTopico] = useState("");
  const [show, setShow] = useState(false);

  const menuItems = [
    { name: "Projeto", href: "projeto" },
    { name: "Atividade", href: "atividade" },
    { name: "Membros", href: "membros" },
    { name: "Contato", href: "contato" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full p-3 flex justify-center border-b border-[#F08B3833]">
      <div className="w-[1169px] flex justify-between items-center">
        <div className="h-full">
          <img src={Logo} alt="Logo" className="w-[230px]" />
        </div>
        <img
          src={Menu}
          alt="Menu"
          className="w-[60px] cursor-pointer hidden max-md:block"
          onClick={() => setShow(true)}
        />
        <ul className="flex gap-[10px] text-[24px] text-[#FFFFFFB2] max-md:hidden">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`py-[8px] px-[24px] rounded-[4px] flex items-center`}
            >
              <a
                href={item.href}
                className="hover:text-white transition-colors duration-500"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                  setTopico(item.name.toLowerCase());
                }}
                aria-current={
                  topico === item.name.toLowerCase() ? "page" : undefined
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {show && (
          <div
            style={{ backdropFilter: "blur(10px)" }}
            className="absolute top-0 left-0 w-full bg-black h-screen bg-opacity-70 flex flex-col items-center justify-center"
            onClick={() => setShow(false)}
          >
            <ul className="text-[24px] text-[#FFFFFFB2] space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-500"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setTopico(item.name.toLowerCase());
                      setShow(false); // Fechar o menu após clicar
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
