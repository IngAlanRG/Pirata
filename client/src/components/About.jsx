import { Box, Typography } from "@mui/material"
import img1 from "../assets/img/books.jpg"
import { styled } from "@mui/system";
// import GoogleMaps from "./GoogleMaps";
const ResponsiveBox = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const ResponsiveTypography = styled(Typography)({
    fontSize: "3rem",
    textAlign: "center",
    marginTop: "2%",
    marginBottom: "5%"
});
const About = () => {
    return (
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <ResponsiveBox>
                    <ResponsiveTypography variant="h1" component="h2">
                        Bienvenido.!
                    </ResponsiveTypography>
                </ResponsiveBox>
                <Box sx={{
                    // width: "60%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>
                    <Box >
                        <Typography
                            variant="body1"
                            textAlign="justify"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                minHeight: "50vh", // Utiliza porcentaje de la altura del viewport
                                maxHeight: "75vh", // Utiliza porcentaje de la altura del viewport
                                background: "#2E86C1",
                                color: "#fff",
                                padding: "10%"
                            }}>
                            Bienvenido/a a la página web oficial de la TESCHA (Tecnológico de Estudios Superiores de chalco), una institución educativa de vanguardia ubicada en el Estado de México. Nuestro compromiso es brindar educación superior de calidad y formar profesionales altamente capacitados en diversas áreas del conocimiento.
                        </Typography>
                    </Box>
                    <Box sx={{
                        flex: "1 1 30%", // Ajusta el tamaño de la imagen
                        display: "flex",
                        justifyContent: "flex-end",
                        // backgroundColor: "rgba(0, 0, 0, 0.33)" // Utiliza rgba para establecer el canal alfa (opacidad) del color de fondo
                    }}>
                        <div style={{
                            width: "40%",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}>
                            <img
                                src={img1}
                                alt="Imagen"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />
                        </div>
                    </Box>
                </Box>
                <Box sx={{
                    // width: "60%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>
                    <Box >
                        <Typography
                            variant="body1"
                            textAlign="justify"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                minHeight: "50vh", // Utiliza porcentaje de la altura del viewport
                                maxHeight: "75vh", // Utiliza porcentaje de la altura del viewport
                                background: "#F39C12",
                                color: "#fff",
                                padding: "10%"
                            }}>
                            En este sitio web, encontrarás información completa y actualizada sobre nuestra institución, así como los servicios y programas académicos que ofrecemos. Somos una institución de educación superior que busca promover la excelencia académica, la innovación y el desarrollo integral de nuestros estudiantes.
                        </Typography>
                    </Box>
                    <Box sx={{
                        flex: "1 1 30%", // Ajusta el tamaño de la imagen
                        display: "flex",
                        justifyContent: "flex-start",
                        // backgroundColor: "rgba(0, 0, 0, 0.33)" // Utiliza rgba para establecer el canal alfa (opacidad) del color de fondo
                    }}>
                        <div style={{
                            width: "40%",
                            display: "flex",
                            justifyContent: "flex-start"
                        }}>
                            <img
                                src={img1}
                                alt="Imagen"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />
                        </div>
                    </Box>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                }}>
                    <Typography
                        variant="body1"
                        textAlign="justify"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            minHeight: "50vh", // Utiliza porcentaje de la altura del viewport
                            maxHeight: "75vh", // Utiliza porcentaje de la altura del viewport
                            background: "#C0392B",
                            color: "#fff",
                            padding: "10%"
                        }}>
                        ¡Esperamos que encuentres toda la información que necesitas y que consideres a la TESCHA como tu opción educativa para alcanzar tus metas académicas y profesionales.
                    </Typography>
                </Box>
                {/* <div>
                    <GoogleMaps />
                </div> */}
            </Box>
        </div>
    )
}

export default About
