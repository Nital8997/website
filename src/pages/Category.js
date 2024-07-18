import { Container,Box,Typography ,Grid} from '@mui/material'
import React from 'react'
import b1 from '../assets/Blogimages/b1.jpg'


function Category() {
  return (
    <div>
      <Box>
        <Box  sx={{backgroundColor:"#f7f7f7"}}>
        <Container>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"63px 0px 63px 0px"}}>
            <Typography  variant='h4' sx={{fontWeight:"600",textAlign:"start",color:"#132a36"}}>Category: Latest</Typography>
            <Typography sx={{fontSize:"12px",color:"gray",
                ":&hover":{
                    color:"#ca9d7a"
                }
            }}>Home / Latest</Typography>
          </Box>
        </Container>
        </Box>
        <Container>
            <Box>
            <Grid container spacing={2}>
  <Grid item xs={4}>
    <Box sx={{textAlign:"start",position:"relative"}}>
        <img src={b1} alt=""  style={{height:"100%",width:"100%"}}/>
        <Box>
            <Typography sx={{color:"gray",fontWeight:"500",paddingTop:"25px"}}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"gray",paddingTop:"25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",fontSize:"12px",paddingTop:"25px"}}>
        <Typography>August 16, 2018</Typography>
        <Typography> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px gray",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
    </Box>
  </Grid>
  <Grid item xs={4}>
  drg
  </Grid>
  <Grid item xs={4}>
    dg
  </Grid>
  <Grid item xs={4}>
  dg
  </Grid>
  <Grid item xs={4}>
  dg
  </Grid>
  <Grid item xs={4}>
  dg
  </Grid>
</Grid>
            </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Category
