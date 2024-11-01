import Projeto from "./components/projeto/projeto";
import Membros from "./components/membros/membros";
import Contato from "./components/contato/contato";
import TextoProjeto from "./components/projeto/texto_projeto"

function Main() {
  return (
    <main className="flex flex-col font-montserrat">
      <Projeto/>
      <TextoProjeto />
      <Membros />
      <Contato />
    </main>
  );
}

export default Main;
