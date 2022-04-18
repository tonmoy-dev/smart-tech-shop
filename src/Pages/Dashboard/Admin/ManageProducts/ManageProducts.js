import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import * as React from 'react';
import useCustomStyles from '../../../../Hooks/useCustomStyles';

const ManageProducts = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        fetch(`https://smart-tech-shop-server.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);
    const { StyledTableCell, StyledTableRow } = useCustomStyles();
    
    return (
        <Box>
            <Typography sx={{ textAlign: 'left', my:2 }} variant="h5" component="div" gutterBottom>
                Manage All products
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 'auto' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Image</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Product Price</StyledTableCell>
                            <StyledTableCell align="center">Manage Product</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell component="th" scope="row">
                                    <img style={{width:'40px'}} src={product.img} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{product.name}</StyledTableCell>
                                <StyledTableCell align="center">${product.price}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button color="primary" variant="contained">Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
        </Box>
    
    );
};

export default ManageProducts;