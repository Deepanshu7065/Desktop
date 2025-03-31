import { Box, Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import { GetRepairDataPrice } from '../AllGetApi';
import { imageUrl } from '../ApiEndPoint';
import { Delete } from '@mui/icons-material';
import { DeleteRepairPriceData } from '../AllPostApi';

// Sample data for services
// const services = [
//     {
//         title: "Handle Repair",
//         price: "₹1200",
//         image: "/src/assets/handle.webp",
//         description: "Expert handle repair to restore strength, balance, and durability."
//     },
//     {
//         title: "Band",
//         price: "₹150",
//         image: "/src/assets/Band.webp",
//         description: "High-quality band repair to reinforce your bat and prevent further damage."
//     },
//     {
//         title: "Weight Loss",
//         price: "₹300",
//         image: "/src/assets/weight.webp",
//         description: "Reduce excess weight for improved bat speed and better shot control."
//     },
//     {
//         title: "Full Refurbishment",
//         price: "₹250",
//         image: "/src/assets/refurbishment.webp",
//         description: "Complete refurbishment to bring your bat back to its peak condition."
//     },
//     {
//         title: "Oil & Knocking",
//         price: "₹800",
//         image: "/src/assets/oil.webp",
//         description: "Proper oiling and knocking to enhance bat longevity and performance."
//     },
//     {
//         title: "Cracking",
//         price: "₹250",
//         image: "/src/assets/Crack.webp",
//         description: "Professional crack repair to restore bat structure and extend lifespan."
//     },
//     {
//         title: "Toe Repair",
//         price: "₹250",
//         image: "/src/assets/toeguard.webp",
//         description: "Toe repair to protect against moisture damage and enhance durability."
//     },
// ];

const RepairDetails = () => {
    const { data: services } = GetRepairDataPrice()
    const { mutateAsync } = DeleteRepairPriceData()

    const handleDelete = async (id: string) => {
        try {
            const response = await mutateAsync({ id })
            return response
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box sx={{
            width: "100%",
            bgcolor: "white",
            borderRadius: "10px",
            display: "flex",
            height: "100%",
        }}>
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundImage: "url(/src/assets/pngtree-icc-cricket-world-match-background-image_13943187.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(3px)",
                zIndex: 1,
            }}>
            </Box>
            <Container maxWidth="xl" sx={{
                zIndex: 1
            }}>
                <Box sx={{
                    textAlign: "center",
                    mt: 6,
                    width: "100%",
                    height: "20vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                    position: "relative",

                }}>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography variant="h4"
                            fontWeight="bold" color="white"
                            sx={{
                                textTransform: "uppercase",
                                fontSize: "2.5rem",
                                fontFamily: "'Dancing Script', cursive",
                                color: "#ffcc00",
                                mt: 3
                            }}
                        >
                            Cricket Bat Repair Services
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: "1.2rem",
                            color: "white",
                            mt: 2,
                            fontFamily: "'monospace', sans-serif"
                        }}>
                            Choose from our professional repair services to keep your bat in top condition.
                        </Typography>
                    </Box>

                </Box>

                <Grid container spacing={4} mb={4} mt={2}>
                    {services?.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                                borderRadius: 2,
                                boxShadow: 3,
                                transition: "transform 0.3s",
                                "&:hover": { transform: "scale(1.05)" },
                                bgcolor: "grey.400",
                                height: "440px",
                            }}>
                                <span style={{
                                    position: "absolute",
                                    top: 10,
                                    right: 3,
                                    zIndex: 2,
                                    color: "red",
                                    cursor: "pointer"
                                }}>
                                    <Delete onClick={() => handleDelete(service._id || "")} />
                                </span>
                                <CardMedia
                                    component="img"
                                    height="300px"
                                    image={imageUrl + service.image}
                                    alt={imageUrl + service.image}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{
                                            textTransform: "uppercase",
                                            fontSize: "1.2rem",
                                            fontFamily: "'monospace', cursive",
                                        }}
                                    >{service.repair_name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: "0.8rem",
                                            color: "black",
                                            letterSpacing: "0px",
                                            fontFamily: "'monospace', cursive",
                                        }}
                                    >{service.description}</Typography>
                                    <Typography variant="h6" sx={{
                                        color: "green",
                                        fontWeight: "bold",
                                        fontFamily: "'monospace', cursive",
                                    }} >{service.price}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </Box>

    );
}

export default RepairDetails;
