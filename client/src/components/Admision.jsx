import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, FormGroup, FormLabel, MenuItem, Select } from '@mui/material';

const Admision = () => {
    const [values, setValues] = useState({
        modalidad: '',
        periodo: '',
    });
    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(values);
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4090/metodo_admision', values);
            console.log(response.data);
            navigate('/aspirant');
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
        <div className="container__global__form">
            {error && <Alert color="error" severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
                <div className="input__form__textFile">
                    <FormGroup>
                        <FormLabel>Selecciona la modalidad a tu caso</FormLabel>
                        <Select
                            id="modalidad"
                            name="modalidad"
                            value={values.modalidad}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="ceneval">Ceneval</MenuItem>
                            <MenuItem value="intermedio">Intermedio</MenuItem>
                            <MenuItem value="promedio">Promedio mayor a 9.5</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>
                        </Select>
                    </FormGroup>
                </div>

                <div className="input__form__textFile">
                    <FormGroup>
                        <FormLabel>Selecciona el periodo de acuerdo a tu caso</FormLabel>
                        <Select
                            id="periodo"
                            name="periodo"
                            displayEmpty
                            value={values.periodo}
                            onChange={handleChange}
                            required
                            sx={{
                                margin: '15px',
                                marginLeft: '0',
                            }}
                        >
                            <MenuItem value="1">1 consta del mes de a el mes de</MenuItem>
                            <MenuItem value="2">2 consta del mes de a el mes de</MenuItem>
                        </Select>
                    </FormGroup>
                </div>
                <div style={{ display: 'block' }}>
                    <Button type="submit" variant="contained">Siguiente</Button>
                </div>
            </form>
        </div>
    );
};

export default Admision;
