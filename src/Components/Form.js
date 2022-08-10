import React from 'react'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Button from '@mui/material/Button'

export default function Form() {
    return (
        <div style={{
            // backgroundImage:"png1.png" 
        }}>
        < img style={{
            width:"100%",
            height:"721px"
        }} src='png1.png' />

            <div style={{
                position: "absolute",
                width: "370px",
                height: "500px",
                left: "84px",
                top: "140px",
                background: "rgba(16, 17, 17, 0.42)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "26px"
            }}>
                {/* <div style={{
                    display:"flex",
                    margin:"5%",
                    border:"1px solid white",
                    // paddingTop:"20px",
                    borderRadius:"10px",
                }}> */}
                
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{
                        margin:"10px",
                        marginTop:"20px",
                        width:"90%",
                    }}/>
                
                <FormGroup row>
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{
                        margin:"10px",
                        marginTop:"10px",
                        width:"90%"
                    }}/>
                    <Button style={{
                        boxSizing: "borderBox",
                        position: "absolute",
                        // width: "289px",
                        marginTop:"100px",
                        // left: "25px",
                        // top: "450pxm",

                        background: "linear-gradient(116.92deg, #3E2424 16.14%, #6F6767 66.84%)",
                        borderRadius: "22px",
                    }} variant="contained" disableElevation>
                        Send Otp
                    </Button>
                    </FormGroup>
                    
                    {/* <TextField variant="outlined" placeholder="username" /> */}
                    
                    

                    <TextField id="outlined-basic" label="Otp" variant="outlined" style={{
                        margin:"10px",
                        marginTop:"10px",
                        width:"90%"
                    }}/>
                    <TextField id="outlined-basic" label="College" variant="outlined" style={{
                        margin:"10px",
                        marginTop:"10px",
                        width:"90%"
                    }}/>
                    <TextField id="outlined-basic" label="Year" variant="outlined" style={{
                        margin:"10px",
                        marginTop:"10px",
                        width:"90%"
                    }}/>
                    <Button style={{
                        boxSizing: "borderBox",
                        position: "absolute",
                        width: "289px",
                        marginTop:"100px",
                        left: "25px",
                        // top: "450pxm",

                        background: "linear-gradient(116.92deg, #3E2424 16.14%, #6F6767 66.84%)",
                        borderRadius: "22px",
                    }} variant="contained">REGISTER</Button>
                
            </div>

        </div>
    )
}
