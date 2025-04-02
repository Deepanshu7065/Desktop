import { Box, Grid, Card, CardMedia, CardContent, Typography, Container, Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { GetRepairDataPrice, GetRepairDataPriceById } from '../AllGetApi';
import { imageUrl } from '../ApiEndPoint';
import { Delete, Edit } from '@mui/icons-material';
import { DeleteRepairPriceData, UpdateRepairPrice } from '../AllPostApi';
import backImage from '../assets/pngtree-icc-cricket-world-match-background-image_13943187.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import { useEffect, useState } from 'react';
import { RepairPriceTypes } from '../AllTypes';

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
    const { user } = useSelector((state: RootState) => state.CustomerUser)

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
                backgroundImage: `url(${backImage})`,
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
                                {user?.userType === "Admin" && (
                                    <span style={{
                                        position: "absolute",
                                        top: 10,
                                        right: 3,
                                        zIndex: 2,
                                        color: "red",
                                        cursor: "pointer"
                                    }}>
                                        <EditRepairData data={service} />
                                        <Delete onClick={() => handleDelete(service._id || "")} />
                                    </span>
                                )}
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


interface RepaitUpdateType {
    repair_name: String;
    price: Number;
    description: String,
    image: File | null
}

const EditRepairData = ({ data }: { data: RepairPriceTypes }) => {
    const [open, setOpen] = useState(false);
    const { data: repData, refetch } = GetRepairDataPriceById({ id: data?._id || "" })
    const [updateData, setUpdateData] = useState<RepaitUpdateType>({
        repair_name: "",
        price: 0,
        description: "",
        image: null
    })
    const { mutateAsync } = UpdateRepairPrice()

    useEffect(() => {
        if (repData) {
            setUpdateData({
                repair_name: repData.repair_name,
                price: repData.price,
                description: repData.description,
                image: null
            })
        }
    }, [data])

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setUpdateData({
                ...updateData,
                image: event.target.files[0]
            })
        }
    }


    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("repair_name", String(updateData.repair_name) || "");
            formData.append("price", String(updateData.price));
            formData.append("description", String(updateData.description) || "");
            if (updateData.image) {
                formData.append("image", updateData.image);
            }
            const res: any = await mutateAsync({
                id: data?._id || "",
                data: formData
            })
            if (res.status === 200) {
                setOpen(false)
                refetch()
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Edit sx={{
                color: "blue"
            }}
                onClick={() => setOpen(true)}
            />
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                <DialogTitle>
                    Edit Repair Price
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Repair Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updateData.repair_name}
                        onChange={(e) => setUpdateData({ ...updateData, repair_name: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        value={updateData.price}
                        onChange={(e) => setUpdateData({ ...updateData, price: Number(e.target.value) })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={updateData.description}
                        onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Image"
                        type="file"
                        fullWidth
                        variant="standard"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleImageChange(e)}
                    />
                    <Button onClick={handleUpdate} >Submit</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}