import { Alert, Button, FormGroup, FormLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Preparatoria = () => {
    const [values, setValues] = useState({
        nombre: '',
        dependencia_financiamiento: '',
        ciudad: '',
        estado: '',
        promedio_general: '',
        año_egreso: ''
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
            const response = await axios.post('http://localhost:4090/preparatoria', values);
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/domicilio');
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
                    <FormGroup>
                        <TextField
                            type="text"
                            id="nombre"
                            name="nombre"
                            label="Nombre preparatoria de egreso"
                            value={values.nombre}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>¿qué dependencia económica tiene la preparatoria?</FormLabel>
                        <Select
                            id="dependencia_financiamiento"
                            name="dependencia_financiamiento"
                            value={values.dependencia_financiamiento}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="federal">Federal</MenuItem>
                            <MenuItem value="estatal">Estatal</MenuItem>
                            <MenuItem value="privada">Privada</MenuItem>
                        </Select>
                    </FormGroup>
                    <TextField
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        label="ciudad"
                        helperText="de que ciudad es la preparatoria"
                        value={values.ciudad}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="text"
                        id="estado"
                        name="estado"
                        label="estado"
                        helperText="de que estado es la preparatoria"
                        value={values.estado}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="number"
                        id="promedio_general"
                        name="promedio_general"
                        label="promedio general"
                        value={values.promedio_general}
                        onChange={handleChange}
                        required
                    />
                    <FormGroup>
                        <FormLabel>Año de egreso</FormLabel>
                        <TextField
                            type="date"
                            id="año_egreso"
                            name="año_egreso"
                            value={values.año_egreso}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <Button type="submit" variant='contained'>siguiente</Button><br />
                </FormGroup>
            </form>
        </div>
    )
}

export default Preparatoria
