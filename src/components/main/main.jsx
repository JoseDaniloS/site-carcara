import Projeto from "./components/projeto/projeto";
import Membros from "./components/membros/membros";
import TextoProjeto from "./components/projeto/texto_projeto"
import Atividade from "./components/atividade/atividade";

function Main() {
  return (
    <main className="flex flex-col font-sans">
      <Projeto/>
      <TextoProjeto />
      <Atividade />
      <Membros />
    </main>
  );
}

export default Main;
