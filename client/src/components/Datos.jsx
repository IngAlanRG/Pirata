import TextField from '@mui/material/TextField';
import { Alert, Button, FormGroup } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DomicilioForm = () => {
    const [values, setValues] = useState({
        incapacidad: '',
        afrodecendiente: '',
        beca: '',
        indigena: '',
        dialecto: '',
        localidad: '',
        oportunidades: '',
        cohabitacion: ''
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };



    const handleSubmit = async e => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post('http://localhost:4090/Datos_aspirante', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/padres');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Ocurrió un error en el servidor');
            }
        }
    };
    return (
        <div>
            {error && <Alert color="error" severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup>
                    <TextField
                        type="text"
                        id="incapacidad"
                        name="incapacidad"
                        label="ingresa si padeces de alguna incapacidad"
                        helperText="visual, auditiva, motora, en caso contrario solo coloque no cuento con discapacidad"
                        value={values.incapacidad}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="afrodecendiente"
                        name="afrodecendiente"
                        label="¿proviene  de una zona afrodescendiente?"
                        helperText="si/no"
                        value={values.afrodecendiente}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="beca"
                        name="beca"
                        label="¿cuenta con beca?"
                        helperText="si/no ¿cual?"
                        value={values.beca}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="indigena"
                        name="indigena"
                        label="indígena?"
                        helperText="si/no, Especifique"
                        value={values.indigena}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="dialecto"
                        name="dialecto"
                        label="dialecto"
                        helperText="¿sabe algún dialecto si/no especifique?"
                        value={values.dialecto}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="localidad"
                        name="localidad"
                        label="localidad"
                        helperText="¿su localidad es urbana, rural, urbana marginada?"
                        value={values.localidad}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="oportunidades"
                        name="oportunidades"
                        label="¿cuenta con programa oportunidades?"
                        helperText="si/no"
                        value={values.oportunidades}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="cohabitacion"
                        name="cohabitacion"
                        label="roomie"
                        helperText="¿con quien vives actualmente?"
                        value={values.cohabitacion}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />
                </FormGroup>

                <Button type="submit" variant='contained'>Siguiente</Button>
            </form>
        </div>
    );
};

export default DomicilioForm;
