import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../Store'
import { RepairAddPrice } from '../AllPostApi'
import repairPriceImage from '../assets/pngtree-icc-cricket-world-match-background-image_13943187.jpg'

const RepairPriceForm = () => {
    const { user } = useSelector((state: RootState) => state.CustomerUser)
    const { mutateAsync } = RepairAddPrice()
    const [repairPrice, setRepairPrice] = React.useState({
        repair_name: "",
        price: 0,
        description: "",
        image: "" as any,
        user: ""
    })
    const handleClose = () => {
        setRepairPrice({
            repair_name: "",
            price: 0,
            description: "",
            image: "" as any,
            user: user?._id
        })
    }

    useEffect(() => {
        setRepairPrice({
            ...repairPrice,
            user: user._id
        })
    }, [user])

    const handleRepairPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRepairPrice({
            ...repairPrice,
            [name]: name === "price" ? Number(value) : value
        });
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setRepairPrice({
                ...repairPrice,
                image: event.target.files[0]
            })
        }
    }

    const handleSubmit = async () => {

        console.log(repairPrice)
        const formData = new FormData();
        formData.append("repair_name", repairPrice.repair_name);
        formData.append("price", String(repairPrice.price));
        formData.append("description", repairPrice.description);
        if (repairPrice.image) {
            formData.append("image", repairPrice.image);
        }
        try {
            const res: any = await mutateAsync({ data: formData })
            if (res.status === 200) {
                handleClose()
            }
        } catch (error: any) {
            console.log(error)
        }
    }


    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${repairPriceImage})`,
                backgroundSize: "cover",
                zIndex: 1
            }}>

            </Box>
            <Box sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                zIndex: 2
            }}>
                <Typography sx={{
                    fontSize: "1.5rem", fontWeight: "bold",
                    mb: 2, textAlign: "center", fontFamily: "monospace",
                    color: "white"
                }}>
                    Add Repair Price
                </Typography>
                <Box component={Paper} sx={{

                    bgcolor: "white",
                    p: 4,
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px"
                }}>
                    <Typography>
                        Add Repair Price
                    </Typography>
                    <Stack>
                        <TextField
                            fullWidth
                            name="repair_name"
                            label="Repair Name"
                            value={repairPrice.repair_name}
                            onChange={handleRepairPriceChange}
                            sx={{ mt: 2 }}
                            size={"small"}
                        />
                        <TextField
                            fullWidth
                            name="price"
                            label="Price"
                            value={repairPrice.price}
                            onChange={handleRepairPriceChange}
                            sx={{ mt: 2 }}
                            size={"small"}
                        />
                        <TextField
                            fullWidth
                            name="description"
                            label="Description"
                            value={repairPrice.description}
                            onChange={handleRepairPriceChange}
                            sx={{ mt: 2 }}
                            size={"small"}
                        />
                        <input
                            name="image"
                            accept="image/*"
                            title='image'
                            type="file"
                            onChange={handleImageChange}
                            style={{ marginTop: 12 }}
                        />
                    </Stack>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
                        submit
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}


export default RepairPriceForm