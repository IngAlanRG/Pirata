import { useEffect, useState } from 'react';
import axios from 'axios';
import ObtenerDatosAspiranteTabla from './ObtenerDatosAspiranteTabla';

const App = () => {
    const [datosAspirante, setDatosAspirante] = useState(null);

    useEffect(() => {
        const fetchDatosAspirante = async () => {
            try {
                const response = await axios.get('http://localhost:4090/obtenerAspirante');
                setDatosAspirante(response.data);
            } catch (error) {
                console.error('Error al obtener los datos del aspirante:', error);
            }
        };

        fetchDatosAspirante();
    }, []);

    return (
        <div>
            {datosAspirante ? (
                <ObtenerDatosAspiranteTabla datosAspirante={datosAspirante} />
            ) : (
                <p>Cargando datos del aspirante...</p>
            )}
        </div>
    );
};

export default App;
