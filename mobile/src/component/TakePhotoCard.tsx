import { CameraAlt, FlipCameraAndroid, Reply } from '@mui/icons-material';
import { Box, Button, IconButton, Stack } from '@mui/material';
import React, { useRef, useState } from 'react'
import { Camera } from 'react-camera-pro';
import idCard from '@/assets/img/id-card.png'
function TakePhotoCard({ onBack, onTake }) {
    const camera = useRef(null);
   
    const [numberOfCameras, setNumberOfCameras] = useState(0);
    const takePhoto = () => {
    if (camera.current) {
      try {
        const photo = camera.current.takePhoto();
        onTake(photo);
        
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  return (
    <div>
        <div>
      <Camera ref={camera} facingMode='environment' numberOfCamerasCallback={setNumberOfCameras} />
      <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
                <img src={idCard} alt={idCard} width={'100%'} height={'100%'} />
            </Box>
    </div>
    <Stack direction='row' sx={{position:'fixed',bottom:0,left:0,bgcolor:'#000',width:'100vw',height:56,justifyContent:'space-around',alignItems:'center'}}>
   
    <IconButton sx={{color:'#fff'}} onClick={onBack} >
            <Reply sx={{fontSize:40}}/>
          </IconButton>
          <IconButton sx={{color:'#fff'}} onClick={takePhoto}>
            <CameraAlt sx={{fontSize:40}}/>
          </IconButton>
          <IconButton  hidden={numberOfCameras <= 1} sx={{color:'#fff'}} onClick={() => {
          camera.current.switchCamera();
        }} >
            <FlipCameraAndroid sx={{fontSize:40}}/>
          </IconButton>
    </Stack>
    </div>
  )
}

export default TakePhotoCard
