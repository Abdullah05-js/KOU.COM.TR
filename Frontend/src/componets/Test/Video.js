import React,{useState,useRef} from 'react';
import random from "./2024-10-13 22-54-50.mkv"
import { Button } from '@nextui-org/button';
import { MutedSpeakerIcon, PlayIcon, SpeakerIcon,PictureInPictureIcon, FullScreenIcon, ResSizeScreenIcon } from '../../svgs/Icon';
import { PauseIcon } from '../../svgs/Icon';
import { Slider } from '@nextui-org/slider';

const Video = () => {
    const VideoRef = useRef();
    const [Play,setPlay] = useState(false);
    const [isMuted,setisMuted] = useState(false);
    const [ShowSlider,SetShowSlider] = useState(false);
    const [isFullScreen,SetisFullScreen] = useState(false);

    const handlePictureInPicture = () => {
  
    }

    const handMute = () => {
         setisMuted(e => !e)
        
         isMuted ? VideoRef.current.muted = false : VideoRef.current.muted = true;
    }

    const handPlay = () => {
       setPlay(e => !e)
       
       Play ? VideoRef.current.pause() : VideoRef.current.play();
    }

    const handFullScreen = () => {
        SetisFullScreen((e) => !e)
    }
  
    return (
        <div className={`text-primary w-full relative ${isFullScreen ? "h-screen" : ""}`}>
             <div className='flex flex-row justify-between items-center absolute bottom-0 left-0 right-0 z-50'>
                <div className='flex flex-row justify-center items-center'>   
                    <Button isIconOnly onClick={handPlay} className='bg-transparent'>
                      { Play ?   <PauseIcon/> : <PlayIcon/>}
                    </Button>
                </div>
                
                <div className='flex flex-row gap-7 justify-center items-center'>
                <p>{`${"fv"}/${"fvd"}`}</p>

              
                <Button isIconOnly onClick={handMute}  className='bg-transparent '>
                  {isMuted ? <MutedSpeakerIcon /> : <SpeakerIcon/>}
                 
                </Button>
           
                
                <Button isIconOnly onClick={handlePictureInPicture} className='bg-transparent text-primary'>
                   <PictureInPictureIcon/>
                </Button>
                <Button isIconOnly onClick={handFullScreen} className='bg-transparent text-primary mr-2'>
                   { isFullScreen ?  <ResSizeScreenIcon/> :<FullScreenIcon /> }
                  
                </Button>
                </div>
            </div>
             <video  ref={VideoRef} src={random} className='rounded-xl '></video>
        </div>
    );
}

export default Video;
