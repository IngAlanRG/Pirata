import { Alert, Button, FormGroup, FormLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Aspirant = () => {
    const [values, setValues] = useState({
        apellido_paterno: '',
        apellido_materno: '',
        nombres: '',
        sexo: '',
        fecha_nacimiento: '',
        curp: '',
        nacionalidad: '',
        estado_civil: '',
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
            const response = await axios.post('http://localhost:4090/aspirante', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/carreraS');
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
            <form onSubmit={handleSubmit}>
                <FormGroup sx={{
                    marginTop: "5%",
                    marginRight: "20%",
                    marginLeft: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <TextField
                        type="text"
                        id="apellido_paterno"
                        name="apellido_paterno"
                        label="Apellido paterno"
                        value={values.apellido_paterno}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        id="apellido_materno"
                        name="apellido_materno"
                        label="apellido materno"
                        value={values.apellido_materno}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        id="nombres"
                        name="nombres"
                        label="Ingresa tus nombres"
                        value={values.nombres}
                        onChange={handleChange}
                        required
                    />
                    <FormGroup>
                        <FormLabel>Sexo</FormLabel>
                        <Select
                            id="sexo"
                            name="sexo"
                            value={values.sexo}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="M">Masculino</MenuItem>
                            <MenuItem value="F">Femenino</MenuItem>
                        </Select>
                    </FormGroup>
                    <TextField
                        type="date"
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        value={values.fecha_nacimiento}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        id="curp"
                        name="curp"
                        maxRows={18}
                        minRows={18}
                        label="curp"
                        value={values.curp}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        id="nacionalidad"
                        name="nacionalidad"
                        label="Nacionalidad"
                        value={values.nacionalidad}
                        onChange={handleChange}
                        required
                    />
                    <FormGroup>
                        <FormLabel>Estado civil</FormLabel>
                        <Select
                            id="estado_civil"
                            name="estado_civil"
                            value={values.estado_civil}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="soltero">soltero</MenuItem>
                            <MenuItem value="casado">casado</MenuItem>
                            <MenuItem value="viudo">viudo</MenuItem>
                            <MenuItem value="union libre">union libre</MenuItem>
                            <MenuItem value="divorciado">divorciado</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button type="submit" variant='contained'>siguiente</Button><br />
                </FormGroup>
            </form>
        </div>
    );
};

export default Aspirant;