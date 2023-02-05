import { useState, useEffect } from 'react';
import Alerta from './Alerta';
import Swal from 'sweetalert2';


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  // Agregar State para leer y reescribir datos del Formulario
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ alta, setAlta ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  // State para generar una alerta de error
  const [ error, setError ] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    } 
  }, [paciente]);
  
  // Generar un id al objeto de pacientes
  function generarId () {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    
    return random + fecha;
  }

  // Funcion de eventos que ocurren luego del submit
  function handleSubmit(e) {
    e.preventDefault();
    
    // Validacion del Formulario
    if([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true);

      setTimeout(() => {
        setError().remove();
      }, 3000);
      return;
    } 
    
      setError(false);
    
    // Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas
    }

    if(paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map (pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({});

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Actualizado Correctamente!',
        showConfirmButton: false,
        timer: 800
      })

    } else {
      // Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registrado Correctamente!',
        showConfirmButton: false,
        timer: 800
      })

    }

    // Reiniciar el Form luego de insertar un registro
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w2/5 mx-5">

      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-cyan-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" 
        onSubmit={handleSubmit}
      >

        { error && <Alerta>Todos los campos son obligatorios</Alerta> }

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombre">Nombre Mascota</label>

          <input 
            type="text"
            placeholder="Nombre de la Mascota" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>

          <input 
            type="text"
            placeholder="Nombre del Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>

          <input 
            type="email"
            placeholder="Email Contacto Propietario" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>

          <input 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="alta"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>

          <textarea 
            name="" 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los Sintomas"
            cols="30" 
            rows="3"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input 
          type="submit" 
          className="bg-cyan-600 w-full p-3 rounded text-white font-bold uppercase hover:bg-cyan-700 cursor-pointer transition-all"
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}  
        />
      </form>
    </div>
  )
}
export default Formulario;

