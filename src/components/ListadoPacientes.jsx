import Paciente from "./Paciente";

function ListadoPacientes ({ pacientes, setPaciente }) {
  return (
    <div className="md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus {""}
            <span className="text-cyan-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl text-center mt-5 mb-10">
            Puedes agregar pacientes {""}
            <span className="text-cyan-600 font-bold">y se listaran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
