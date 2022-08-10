import {FcSearch} from 'react-icons/fc'
import TextField from '@mui/material/TextField'
import Card from '@mui/material/Card'
import  CardMedia  from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography  from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'


function Historypage() {
  return (
<div style={{backgroundColor:"lightgrey",height:"570px" }}>
  <div style={{textAlign:"center",fontSize:"25px",paddingTop:"20px"}}>Search For Your Details</div>
{/* <textarea></textarea> */}
<TextField placeholder='Enter Your User Id' style={{width:"800px",marginLeft:"200px",marginTop:"50px",backgroundColor:"white",borderRadius:"10px"}}/><FcSearch style={{marginTop:"50px",width:"55px",height:"50px"}}/>


<div style={{height:"180px",width:"800px",backgroundColor:"white",marginLeft:"200px",marginTop:"100px",display:"flex",borderRadius:"8px",border:"2px "}}>
<p style={{fontSize:"20px",paddingTop:"30px",paddingLeft:"20px",width:"25%",fontWeight:"bolder"}}>MARATHON <br></br> <br></br> August 14,2022</p>
<img src="image 13.png" alt="" style={{height:"100px",paddingTop:"40px"}} />
<img src="image 14.png" alt="" style={{height:"100px" ,paddingTop:"40px" ,paddingLeft:"30px"}} />
</div>
</div>

  );
}

export default Historypage;
