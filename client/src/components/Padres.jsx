import TextField from '@mui/material/TextField';
import { Alert, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DomicilioForm = () => {
    const [values, setValues] = useState({
        apellido_paterno: '',
        apellido_materno: '',
        nombre: '',
        progenitor: 'padre',
        vive: '',
        nivel_estudios: '',
        ocupacion: '',
        telefono_emergencia: '',
        telefono_trabajo: '',
        lugar_trabajo: ''
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
            const response = await axios.post('http://localhost:4090/padres', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/madres');
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
                Padre
            </Typography>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <FormGroup>
                    <TextField
                        type="text"
                        id="apellido_paterno"
                        name="apellido_paterno"
                        label="apellido paterno padre"
                        value={values.apellido_paterno}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="apellido_materno"
                        name="apellido_materno"
                        label="apellido materno padre"
                        value={values.apellido_materno}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="text"
                        id="nombre"
                        name="nombre"
                        label="nombres"
                        value={values.nombre}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <FormControl required>
                        <InputLabel id="vive-label">¿Se encuentra con vida?</InputLabel>
                        <Select
                            labelId="vive-label"
                            id="vive"
                            name="vive"
                            value={values.vive}
                            onChange={handleChange}
                        >
                            <MenuItem value="si">Sí</MenuItem>
                            <MenuItem value="no">No</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="nivel-estudios-label">Nivel de estudios tiene el padre</InputLabel>
                        <Select
                            labelId="nivel-estudios-label"
                            id="nivel_estudios"
                            name="nivel_estudios"
                            value={values.nivel_estudios}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: "7px"
                            }}
                        >
                            <MenuItem value="">Seleccione un nivel de estudios</MenuItem>
                            <MenuItem value="primaria">Primaria</MenuItem>
                            <MenuItem value="secundaria">Secundaria</MenuItem>
                            <MenuItem value="preparatoria">Preparatoria</MenuItem>
                            <MenuItem value="universidad">Universidad</MenuItem>
                            <MenuItem value="posgrado">Posgrado</MenuItem>
                            <MenuItem value="Doctorado">Doctorado</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type="text"
                        id="ocupacion"
                        name="ocupacion"
                        label="¿A que se dedica el padre? "
                        value={values.ocupacion}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="telefono_emergencia"
                        name="telefono_emergencia"
                        label="ingresa el numero telefónico de tu papa o mama por cualquier emergencia"
                        value={values.telefono_emergencia}
                        onChange={handleChange}
                        required
                        sx={{
                            margin: "7px"
                        }}
                    />

                    <TextField
                        type="number"
                        id="telefono_trabajo"
                        name="telefono_trabajo"
                        label="numero telefónico del padre"
                        value={values.telefono_trabajo}
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
