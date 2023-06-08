import TextField from '@mui/material/TextField';
import { Alert, Button, FormGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DomicilioForm = () => {
    const [values, setValues] = useState({
        calle: '',
        numero_interior: '',
        numero_exterior: '',
        estado: '',
        municipio: '',
        codigo_postal: '',
        colonia_o_localidad: '',
        numero_telefonico: ''
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
            const response = await axios.post('http://localhost:4090/domicilio', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/datos');
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

            <Typography variant="h1" gutterBottom component="h2" textAlign="center" fontSize="3em" marginTop="3%" marginBottom="3%" padding="0">
                Ingresa los datos de tu domicilio
            </Typography>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup>
                    <TextField
                        type="text"
                        id="calle"
                        name="calle"
                        label="Ingresa tu calle"
                        helperText="Ingresa un correo válido"
                        value={values.calle}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="numero_interior"
                        name="numero_interior"
                        label="numero interior"
                        value={values.numero_interior}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="numero_exterior"
                        name="numero_exterior"
                        label="Numero exterior"
                        value={values.numero_exterior}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="estado"
                        name="estado"
                        label="Estado"
                        value={values.estado}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="municipio"
                        name="municipio"
                        label="Municipio"
                        value={values.municipio}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="codigo_postal"
                        name="codigo_postal"
                        label="código postal"
                        value={values.codigo_postal}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="colonia_o_localidad"
                        name="colonia_o_localidad"
                        label="colonia o localidad"
                        value={values.colonia_o_localidad}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="numero_telefonico"
                        name="numero_telefonico"
                        label="numero telefonico"
                        value={values.numero_telefonico}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <Button type="submit" variant='contained'>Siguiente</Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default DomicilioForm;
