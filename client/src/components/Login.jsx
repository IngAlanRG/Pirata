import { Button, FormGroup } from '@mui/material';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegistroForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    useEffect(() => {
        const checkSession = async () => {
            try {
                const response = await axios.get('http://localhost:4090/login', { withCredentials: true });
                const { loggedIn } = response.data;
                if (loggedIn) {
                    navigate('/metodo_admision');
                }
            } catch (error) {
                console.log(error);
            }
        };
        checkSession();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post('http://localhost:4090/login', values, { withCredentials: true });
            console.log(response.data);
            // eslint-disable-next-line react/prop-types
            navigate('/metodo_admision');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormGroup sx={{
                    marginTop: "5%",
                    marginRight: "20%",
                    marginLeft: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <AccountCircleIcon sx={{
                        width: "20%",
                        height: "auto",
                        display: "flex",
                        alignItems: "center",
                        margin: "0 auto"
                    }} />
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        label="correo Electrónico"
                        helperText="Ingresa tu correo electrónico"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        label="contraseña"
                        helperText="escribe correctamente tu contraseña"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" variant='contained'>Iniciar</Button>
                </FormGroup>
            </form>
            <FormGroup sx={{
                marginBottom: "5%",
                marginRight: "20%",
                marginLeft: "20%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Link to="/create" variant="body2" style={{
                    marginTop: "5%",
                    margin: "0 auto",
                    color: "blue"
                }}>
                    {'Crear una cuenta'}
                </Link>
            </FormGroup>
        </div>
    );
};

export default RegistroForm;