import {
    Button,
    FormHelperText,
    InputAdornment,
    MenuItem,
    OutlinedInput,
    TextField,
  } from "@mui/material";
  import React from "react";
  
  const CreateProduct = () => {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </div>
              <div className="col-lg-4 my-2">
                <FormHelperText id="outlined-weight-helper-text">
                  
                </FormHelperText>
                <OutlinedInput
                  id="outlined-adornment-weight"
                  label="Price"
                  endAdornment={<InputAdornment position="end">₼</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </div>
              <div className="col-lg-4 my-2">
                <FormHelperText id="outlined-weight-helper-text">
                  
                </FormHelperText>
  
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Select"
                >
                  <MenuItem>Telefon</MenuItem>
                </TextField>
              </div>
              <div className="col-lg-4 my-2">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="SKU"
                  variant="outlined"
                />
              </div>
              <div className="col-lg-6">
                <Button 
                        variant="contained"
                        component="label"
                        color="succcess">Create

                </Button>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184_960_720.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateProduct;