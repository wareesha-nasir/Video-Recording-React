import VideoRecorder from 'react-video-recorder';
import {React,useState} from 'react';
import {Dialog,DialogTitle,DialogContent,Button} from '@material-ui/core';

const App=()=>{
  const [openCam,setOpen]=useState(false);

return(
  <div style={{textAlign:"center", marginTop:"10%",border:"1px solid grey", marginLeft:"30%",
  marginRight:"30%",padding:"5%"}}>
    <Button style={{backgroundColor:"red", fontSize:"25px",borderRadius:"5em"}} onClick={()=>setOpen(true)}>record</Button>
  <Dialog open={openCam} fullWidth maxWidth="sm" >
      <DialogTitle>
          <div  >
          Add new list
          <Button onClick={()=>setOpen(false)} style={{float:"right"}}>X</Button></div>
          </DialogTitle>
      <DialogContent dividers>
    
      <VideoRecorder
    onRecordingComplete={videoBlob => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }}
  />    
      </DialogContent>
  </Dialog>
  </div>
)

}

export default App;
