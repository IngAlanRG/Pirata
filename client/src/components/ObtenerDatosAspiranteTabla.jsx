import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const ObtenerDatosAspiranteTabla = ({ datosAspirante }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Campo</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(datosAspirante).map(([campo, valor]) => (
                        <TableRow key={campo}>
                            <TableCell>{campo}</TableCell>
                            <TableCell>{valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ObtenerDatosAspiranteTabla;
