import { Box, Paper, Typography, TextField, Button, Grid, IconButton, Dialog, DialogContent, useMediaQuery, Stack, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Footer } from '../User/AddUser';
import { UploadRepairDetails } from '../AllPostApi';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import { LazyImage } from '../App';
import { GetRepairDataPrice, GetRepairDataPriceById } from '../AllGetApi';


const imagesData = [
    { src: '/src/assets/BatRepairHd.webp', text: 'Secure & Easy Bat Repair' },
    { src: '/src/assets/HomeDel.webp', text: 'Pick up & Delivery Service' },
    { src: '/src/assets/CustomerHome.webp', text: 'Delvery to Your Home ' },
    { src: '/src/assets/Quality.webp', text: '100% Quality Bat Repair' },
    { src: '/src/assets/VanDel.webp', text: 'Services and repair at your doorstep' }
];

const RepairUploadBat = () => {
    const mobile = useMediaQuery("(max-width:600px)")
    const { user } = useSelector((state: RootState) => state.CustomerUser)
    const { data: repair_type_data } = GetRepairDataPrice()
    const [selectedRepair, setSelectedRepair] = useState<string[]>([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { data: repair_price_dataId } = GetRepairDataPriceById({
        id: selectedRepair.join(","),
    });
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        product_name: '',
        createdBy: user?._id,
        phone: '',
        details: '',
        address: '',
        fullAddress: '',
        landmark: '',
        state: '',
        city: '',
        pincode: '',
        repair_type: "",
    });

    useEffect(() => {
        setFormData({ ...formData, createdBy: user?._id })
    }, [user])

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % imagesData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleImageUpload = (event: any) => {
        const files = Array.from(event.target.files);
        setImages([...images, ...files] as any);
    };

    const handleRepairChange = (event: SelectChangeEvent<string[]>) => {
        const value = event.target.value as string[];
        setSelectedRepair(value.filter((id) => id));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const handleImageClick = (image: React.SetStateAction<null>) => {
        setSelectedImage(image);
    };

    const handleImageDelete = (index: React.SetStateAction<number>) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const { mutateAsync } = UploadRepairDetails()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const savedData = new FormData();
        try {
            for (let i = 0; i < images.length; i++) {
                savedData.append('images', images[i]);
            }
            selectedRepair.forEach((id) => {
                savedData.append("repair_type", id);
            });
            savedData.append('product_name', formData.details);
            savedData.append('createdBy', formData.createdBy);
            savedData.append('phone', formData.phone);
            savedData.append('details', formData.details);
            savedData.append('address', formData.address);
            savedData.append('fullAddress', formData.fullAddress);
            savedData.append('landmark', formData.landmark);
            savedData.append('state', formData.state);
            savedData.append('city', formData.city);
            savedData.append('pincode', formData.pincode);


            const res: any = await mutateAsync({ data: savedData })

            if (res.status === 201) {
                setFormData({
                    product_name: '',
                    createdBy: user?._id,
                    phone: '',
                    details: '',
                    address: '',
                    fullAddress: '',
                    landmark: '',
                    state: '',
                    city: '',
                    pincode: '',
                    repair_type: "",
                });
                setSelectedRepair([]);
                setImages([]);
                setSelectedImage(null);
                setOpenSnackbar(true)

            }

        } catch (error) {
            console.log(error)

        }
    }

    const handleDelete = (_id: string) => {
        setSelectedRepair(selectedRepair.filter((id) => id !== _id));
    }

    return (
        <Box sx={{
            width: "100%",
            height: { xs: "auto", sm: "98vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(/src/assets/pngtree-icc-cricket-world-match-background-image_13943187.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                zIndex: 0,
            },
            mt: { xs: 8, sm: 0 }
        }}>
            <Paper
                elevation={3} sx={{
                    width: { xs: "100%", sm: "80%" },
                    p: { xs: 2, sm: 2 },
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    position: "relative",
                    zIndex: 1,
                    maxHeight: { xs: "100%", sm: "100%" },

                }}>
                <Box sx={{ display: { xs: "column", sm: "flex" }, gap: 4 }}>
                    {mobile && (
                        <Box sx={{
                            flex: 1,
                            bgcolor: '#f2f2f2',
                            borderRadius: 2,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            height: '200px',
                        }}>
                            <Box sx={{ position: 'sticky', width: '100%', height: '100%', overflow: 'hidden' }}>
                                {imagesData.map((img, index) => (
                                    <Box key={index} sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: `${(index - currentSlide) * 100}%`,
                                        transition: 'left 0.5s ease-in-out',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <LazyImage
                                            src={img.src}
                                            alt={`Slide ${index}`}
                                            style={{
                                                width: '90%',
                                                height: '100%',
                                                borderRadius: '10px',
                                                objectFit: 'cover'
                                            }} />
                                    </Box>
                                ))}
                            </Box>
                            <Typography
                                color="primary"
                                fontFamily={"Pacifico, cursive"}
                                gutterBottom sx={{ mt: 2 }}>
                                {imagesData[currentSlide].text}
                            </Typography>
                        </Box>
                    )}
                    {/* Form Section */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h5"
                            mb={2}
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "monospace, cursive",
                                fontSize: { xs: "1rem", sm: "1.5rem" },
                                mt: { xs: 2, sm: 0 }
                            }}
                        >Upload Your Bat for Repair</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid
                                    item xs={12}
                                >
                                    <TextField
                                        fullWidth
                                        label="Bat Name"
                                        name="batName"
                                        onChange={handleChange}
                                        size="small"
                                        required
                                    /></Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        size="small"
                                        required
                                        onChange={handleChange}
                                    /></Grid>
                                <Grid
                                    item xs={12}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="repair-select-label">Repair Type</InputLabel>
                                        <Select
                                            labelId="repair-select-label"
                                            id="repair-select"
                                            name="repair_type"
                                            label="Repair Type"
                                            multiple
                                            value={selectedRepair}
                                            onChange={(event) => handleRepairChange(event)}
                                            renderValue={(selected) =>
                                                repair_type_data
                                                    ?.filter((item) => item._id && selected.includes(item._id || ""))
                                                    .map((item) => item.repair_name)
                                                    .join(", ")
                                            }
                                        >
                                            {repair_type_data?.map((item) => (
                                                <MenuItem key={item._id} value={item._id}>
                                                    {item.repair_name + " || " + `(${item.price})`}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid
                                    item xs={12}>
                                    <TextField fullWidth
                                        multiline rows={3}
                                        label="Details in your Problem"
                                        name="details"
                                        size="small"
                                        required
                                        onChange={handleChange}
                                    /></Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        size="small"
                                        required
                                        name="address"
                                        onChange={handleChange}
                                    /></Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Full Address"
                                        name="fullAddress"
                                        size="small"
                                        required
                                        onChange={handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Landmark"
                                        name="landmark"
                                        size="small"
                                        required
                                        onChange={handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="State"
                                        name="state"
                                        size="small"
                                        required
                                        onChange={handleChange}
                                    /></Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        required
                                        label="City"
                                        name="city"
                                        onChange={handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Pincode"
                                        name="pincode"
                                        size="small"
                                        required
                                        onChange={handleChange} />
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{
                                        display: "flex",
                                        gap: 2,
                                        flexWrap: "wrap",
                                        alignItems: "center"
                                    }}>
                                        <input
                                            type="file"
                                            multiple accept="image/*"
                                            disabled={images.length >= 5}
                                            onChange={handleImageUpload}
                                        />
                                        <Typography sx={{ color: "red", fontSize: "10px" }}>Only Maximum 5 Images Allowed</Typography>
                                    </div>
                                </Grid>

                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="small"
                                            sx={{
                                                height: "30px",
                                            }}
                                            color="primary">Submit</Button>
                                        {mobile && <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                                            {images.map((image, index) => (
                                                <Box key={index} sx={{ position: "relative" }}>
                                                    <LazyImage
                                                        src={URL.createObjectURL(image)}
                                                        alt={`Upload Preview ${index}`}
                                                        style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
                                                        onClick={() => handleImageClick(image)}
                                                    />
                                                    <IconButton
                                                        onClick={() => handleImageDelete(index)}
                                                        sx={{ position: "absolute", top: 0, right: 0, bgcolor: "rgba(255,255,255,0.7)" }}>
                                                        <DeleteIcon fontSize="small" sx={{
                                                            fontSize: "0.8rem"
                                                        }} color="error" />
                                                    </IconButton>
                                                </Box>
                                            ))}
                                        </Box>}
                                    </Stack>
                                </Grid>
                            </Grid>
                            {!mobile && <Box sx={{ mt: 0, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
                                {images.map((image, index) => (
                                    <Box key={index} sx={{ position: "relative" }}>
                                        <LazyImage
                                            src={URL.createObjectURL(image)}
                                            alt={`Upload Preview ${index}`}
                                            style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover", cursor: "pointer" }}
                                            onClick={() => handleImageClick(image)}
                                        />
                                        <IconButton
                                            onClick={() => handleImageDelete(index)}
                                            sx={{ position: "absolute", top: 0, right: 0, bgcolor: "rgba(255,255,255,0.7)" }}>
                                            <DeleteIcon color="error" sx={{
                                                fontSize: "0.8rem"
                                            }} />
                                        </IconButton>
                                    </Box>
                                ))}
                            </Box>}
                        </form>
                    </Box>
                    {!mobile && (
                        <Box sx={{
                            flex: 1,
                            p: 1,
                            bgcolor: '#f2f2f2',
                            borderRadius: 2,
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            // overflow: 'hidden'
                        }}>
                            <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                                {imagesData.map((img, index) => (
                                    <Box key={index} sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: `${(index - currentSlide) * 100}%`,
                                        transition: 'left 0.5s ease-in-out',
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',

                                    }}>
                                        <LazyImage
                                            src={img.src}
                                            alt={`Slide ${index}`}
                                            style={{
                                                width: '90%',
                                                height: '100%',
                                                borderRadius: '10px',
                                                objectFit: 'cover'
                                            }} />
                                    </Box>
                                ))}
                            </Box>
                            <Typography variant="h5"
                                fontFamily={"Pacifico, cursive"}
                                color="primary" gutterBottom sx={{ mt: 0 }}>
                                {imagesData[currentSlide].text}
                            </Typography>
                        </Box>
                    )}

                </Box>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Product added to cart!"
                />
                <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center", alignItems: "center" }}>
                    {Array.isArray(repair_price_dataId) &&
                        repair_price_dataId.map((item) => (
                            <Box key={item._id} sx={{
                                p: 1, border: "1px solid gray",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                            }}>
                                {item.repair_name} - {item.price} -
                                <DeleteIcon color="error" onClick={() => handleDelete(item._id)} />
                            </Box>
                        ))}
                    <div style={{
                        color: "green"
                    }}>
                        {Array.isArray(repair_price_dataId) &&
                            repair_price_dataId.reduce((total, item) => total + item.price, 0)
                        }
                    </div>
                </Box>


                <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
                    <DialogContent>
                        {selectedImage && <LazyImage src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ width: "100%" }} />}
                    </DialogContent>
                </Dialog>
            </Paper >
            {!mobile && <Box sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                zIndex: 1
            }}>
                <Footer />
            </Box>}
        </Box >
    );
};

export default RepairUploadBat;
