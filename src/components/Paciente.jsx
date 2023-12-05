function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("Acción irreversible ¿Eliminar usuario?");

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className="m-5 bg-white shadow-md py-10 px-5 rounded-md">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-cyan-600 hover:bg-cyan-700 text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-md"
                    onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente