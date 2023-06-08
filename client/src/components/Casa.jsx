import TextField from '@mui/material/TextField';
import { Alert, Button, FormGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DomicilioForm = () => {
    const [values, setValues] = useState({
        tipo_casa: '',
        numero_cuartos: '',
        numero_habitantes: ''
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
            const response = await axios.post('http://localhost:4090/casa', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/mostrar');
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
                Ingresa los datos de tu hogar
            </Typography>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup>
                    <TextField
                        type="text"
                        id="tipo_casa"
                        name="tipo_casa"
                        label="¿Qué tipo de casa es?"
                        helperText="propia,rentada,prestada, especifique"
                        value={values.tipo_casa}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="numero_cuartos"
                        name="numero_cuartos"
                        label="Cuantos cuartos contiene la casa"
                        value={values.numero_cuartos}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="numero_habitantes"
                        name="numero_habitantes"
                        label="cuantos habitantes hay en la casa"
                        value={values.numero_habitantes}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <Button type="submit" variant='contained'>Finalizar</Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default DomicilioForm;
