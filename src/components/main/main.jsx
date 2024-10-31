import Projeto from "./components/projeto/projeto";
import Atividade from "./components/atividade/atividade";
import Membros from "./components/membros/membros";
import Contato from "./components/contato/contato";

function Main() {
  return (
    <main className="flex flex-col space-y-12">
      <Projeto />
      <Atividade />
      <Membros />
      <Contato />
    </main>
  );
}

export default Main;
