import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField
} from '@material-ui/core';
const index = (props) => {
    const {open, handleClouse } = props;
    return ( 
        <Dialog 
            open = { open }
            onClose = {handleClouse }
            arialabelledby = "alert-dialog-title"
            ariadescribedby = "alert-dialog-description" >
            <DialogTitle DialogTitle id = "alert-dialog-title" > { 'Use Google s location service?'} </DialogTitle> 
            <DialogContent >
                <TextField 
                    id = "standard-multiline-flexible" 
                    label = "Title"
                    multiline rowsMax = {4}/> 
                <TextField 
                    id = "standard-multiline-flexible" 
                    label = "Description" 
                    multiline rowsMax = { 4}/> 
            </DialogContent >
            <DialogActions>
                <Button color = 'primary' > Create </Button > 
                <Button 
                    color = 'secondary' 
                    onClick = {handleClouse}> Cancel 
                </Button> 
            </DialogActions>
        </Dialog>
    );
};

export default index;