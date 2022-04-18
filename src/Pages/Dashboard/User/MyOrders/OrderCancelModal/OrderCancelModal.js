import { Button, Modal, Typography } from "@mui/material";
import { Box } from '@mui/system';
import React from "react";
import useCustomStyles from "../../../../../Hooks/useCustomStyles";

const OrderCancelModal = ({orders,setOrders,openCancellation,setOpenCancellation,handleCancellationClose}) => {
    const { modalStyle } = useCustomStyles();

    // order cancel handlers
    const handleOrderCancel = id => {
        fetch(`https://smart-tech-shop-server.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remainingOrder = orders.filter(order => order._id !== id);
                    setOrders(remainingOrder);
                    setOpenCancellation(false);
                }
            });
    };
    const handleNotToCancel = () => {
        setOpenCancellation(false);
    }
    return (
        <div>
            {orders.map(order => (
                <Modal
                open={openCancellation}
                onClose={handleCancellationClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={modalStyle}>
                    <Typography sx={{ mb: 3 }} id="modal-modal-title" variant="h6" component="h2">
                        Do you want to cancel the order?
                    </Typography>
                    <Button sx={{mx:2}} onClick={() => handleOrderCancel(order._id)} color="primary" variant="contained">Yes</Button>
                    <Button sx={{mx:2}} onClick={handleNotToCancel} variant="contained">No</Button>
                </Box>
                </Modal>
            ))}
        </div>
    );
}

export default OrderCancelModal;