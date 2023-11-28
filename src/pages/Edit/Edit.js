import React, { useState } from 'react';
import { Grid, Typography, TextField, Container,Button } from '@mui/material';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Edit = () => {

    const[inputdata,setInputData]=useState({
        level:"",
        message:"",
        resourceId:"",
        timestamp:"",
        spanID:"",
        commit:"",
        parentResourceId:""
    })

    console.log(inputdata);

    //setInputValue
    const setInputValue=(e)=>{
        const{name,value}=e.target;
        setInputData({...inputdata,[name]:value})
    }

    //submit user data
    const submitUserData=(e)=>
    {
        e.preventDefault();
        toast.success("Data successfully inserted")
    }


  return (
    <Container >
      <Grid container spacing={2}  sx={{marginTop:'100px'}}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>level</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.level}
            name='level'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>message</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.message}
            name='message'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>resourceId</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.resourceId}
            name='resourceID'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>timestamp</Typography>
          <TextField
            id='outlined-basic'
            name='timestamp'
            variant='outlined'
            value={inputdata.timestamp}
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>traceID</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.traceID}
            name='reaceID'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>spanID</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.spanID}
            name='spanID'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>commit</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.commit}
            name='commit'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
          <Typography variant='h6'>parentResourceId</Typography>
          <TextField
            id='outlined-basic'
            variant='outlined'
            value={inputdata.parentResourceId}
            name='parentResourceId'
            fullWidth
            sx={{ width: '100%', height: '40px', paddingBottom:'20px' }}
             onChange={setInputValue}
          />
        </Grid>
        <Grid item sx={12}>
        <Button
            sx={{
            paddingRight: '20px',
            backgroundColor: 'green',
            color: 'white',
            '&:hover': 
            {
            backgroundColor: 'lightgreen',
            },
            }}
            type="submit"
            onClick={submitUserData}
        >
        <Typography>
            Submit
        </Typography>
        </Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-center"/>
    </Container>
  );
};

export default Edit;
