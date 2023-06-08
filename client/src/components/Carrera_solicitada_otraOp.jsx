import { Alert, Button, FormGroup, FormLabel, MenuItem, Select, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Carrera = () => {
    const [values, setValues] = useState({
        opcion: '',
        carrera: '',
        turno: ''
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
            const response = await axios.post('http://localhost:4090/carrera_solicitada', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/preparatoria');
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
                Ingresa otra opción de la carrera solicitada
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormGroup sx={{
                    marginTop: "5%",
                    marginRight: "20%",
                    marginLeft: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <FormGroup>
                        <FormLabel>Opcion</FormLabel>
                        <Select
                            id="opcion"
                            name="opcion"
                            value={values.opcion}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="1">opción 1</MenuItem>
                            <MenuItem value="2">opción 2</MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Carrera</FormLabel>
                        <Select
                            id="carrera"
                            name="carrera"
                            value={values.carrera}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="Ingenieria en Sistemas Computacionales">Ingeniería en Sistemas Computacionales</MenuItem>
                            <MenuItem value="Ingenieria Industrial">Ingeniería Industrial</MenuItem>
                            <MenuItem value="Ingenieria en Informatica">Ingeniería en Informática</MenuItem>
                            <MenuItem value="Ingenieria Electromecanica">Ingeniería Electromecánica</MenuItem>
                            <MenuItem value="Ingenieria Electronica">Ingenieria Electrónica</MenuItem>
                            <MenuItem value="Ingenieria Administracion">Ingenieria Administración </MenuItem>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Turno</FormLabel>
                        <Select
                            id="turno"
                            name="turno"
                            value={values.turno}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="matutino">Matutino</MenuItem>
                            <MenuItem value="vespertino">Vespertino</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button type="submit" variant='contained'>siguiente</Button><br />
                </FormGroup>
            </form>
        </div>
    )
}

export default Carrera
