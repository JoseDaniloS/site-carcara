import { Discentes, Servidores, Docentes } from "./members";

function Membros() {
  return (
    <section className="w-full text-center space-y-16">
      <h1 className="text-[30px] font-bold">Membros</h1>
      <div className="flex justify-around flex-wrap gap-10">
        {/* Discentes */}
        <div className="flex flex-col gap-5 w-full max-w-sm">
          <h2 className="text-[22px] font-semibold">Discentes</h2>
          <table className="min-w-full text-[19px] border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="p-2">Nome</th>
                <th scope="col" className="p-2">Função</th>
              </tr>
            </thead>
            <tbody>
              {Discentes.map((membro, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{membro.Nome}</td>
                  <td className="border border-gray-300 p-2">{membro.Funcao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Servidores */}
        <div className="flex flex-col gap-5 w-full max-w-sm">
          <h2 className="text-[22px] font-semibold">Servidores</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="p-2">Nome</th>
                <th scope="col" className="p-2">Função</th>
              </tr>
            </thead>
            <tbody>
              {Servidores.map((membro, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{membro.Nome}</td>
                  <td className="border border-gray-300 p-2">{membro.Funcao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Docentes */}
        <div className="flex flex-col gap-5 w-full max-w-sm">
          <h2 className="text-[22px] font-semibold">Docentes</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th scope="col" className="p-2">Nome</th>
                <th scope="col" className="p-2">Função</th>
              </tr>
            </thead>
            <tbody>
              {Docentes.map((membro, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{membro.Nome}</td>
                  <td className="border border-gray-300 p-2">{membro.Funcao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Membros;
