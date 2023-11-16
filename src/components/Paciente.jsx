function Paciente({paciente}) {

    const {nombre,propietario,email,fecha,sintomas} = paciente;

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
        </div>
    )
}

export default Paciente