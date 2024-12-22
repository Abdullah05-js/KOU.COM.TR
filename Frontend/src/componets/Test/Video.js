import React,{useState,useRef} from 'react';
import random from "./2024-10-13 22-54-50.mkv"
import { Button } from '@nextui-org/button';
import { MutedSpeakerIcon, PlayIcon, SpeakerIcon,PictureInPictureIcon, FullScreenIcon, ResSizeScreenIcon } from '../../svgs/Icon';
import { PauseIcon } from '../../svgs/Icon';
import { Chip } from '@nextui-org/chip';

const handleDuration = (time) => {

    const format = new Intl.NumberFormat(undefined,{
        minimumIntegerDigits:2
    })
   const m =  Math.floor(time/60) % 60
   const s = Math.floor(time%60)
   const h =  Math.floor(time /3600)
   if(h === 0)
    return `${m}:${format.format(s)}`;
   else
    return `${h}:${format.format(h)}:${format.format(s)}`;
}

const Video = () => {
    const VideoRef = useRef();
    const VideoContinerRef = useRef();
    const [Play,setPlay] = useState(false);
    const [isMuted,setisMuted] = useState(false);
    const [ShowSlider,SetShowSlider] = useState(false);
    const [isFullScreen,SetisFullScreen] = useState(false);
    const [VideoDuration,setVideoDuration] = useState(0);
    const [MainTimeLine,setMainTimeLine] =useState(handleDuration(0));


    const handleTimeUpdate = () => {
        setMainTimeLine(handleDuration(VideoRef.current.currentTime))
    }

    const handlePictureInPicture = () => {
        
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
          } else if (document.pictureInPictureEnabled) {
            handPlay();
            VideoRef.current.requestPictureInPicture();
          }

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

        isFullScreen ? document.exitFullscreen():VideoContinerRef.current.requestFullscreen();        
        
    }
  
    return (
        <div ref={VideoContinerRef} onClick={handPlay} onDoubleClick={handFullScreen} className={`text-primary ss:w-full sm:w-full max-w-[672px] relative rounded-3xl ${isFullScreen ? "w-screen h-screen" : ""}`}>
             <div className='flex flex-row justify-between items-center absolute bottom-0 left-0 right-0 z-50 p-2'>
                <div className='flex flex-row justify-center items-center'>   
                    <Button isIconOnly onClick={handPlay} className='bg-transparent  ml-2 flex  justify-center items-center'>
                      { Play ?   <PauseIcon/> : <PlayIcon/>}
                    </Button>

                    <Chip className='bg-transparent text-primary text-center pb-1'>
                        Powered by Gamblers
                    </Chip>

                </div>
                
                <div className='flex flex-row gap-7 justify-center items-center'>
                <p className='flex  justify-center items-center'>{`${MainTimeLine}/${handleDuration(VideoDuration)}`}</p>

              
                <Button isIconOnly onClick={handMute}  className='bg-transparent flex  justify-center items-center'>
                  {isMuted ? <MutedSpeakerIcon /> : <SpeakerIcon/>}
                 
                </Button>
           
                
                <Button isIconOnly onClick={handlePictureInPicture} className='bg-transparent text-primary flex  justify-center items-center'>
                   <PictureInPictureIcon/>
                </Button>
                <Button isIconOnly onClick={handFullScreen} className='bg-transparent text-primary mr-2 flex  justify-center items-center'>
                   { isFullScreen ?  <ResSizeScreenIcon/> :<FullScreenIcon /> }
                  
                </Button>
                </div>
            </div>
                {/* here we used oncanplay to avoid error when the media is not loaded bc if its not the duration will be undifend */}
             <video loop  onTimeUpdate={handleTimeUpdate} onCanPlay={() => setVideoDuration(VideoRef.current.duration)} ref={VideoRef} src={random} className={` object-cover rounded-3xl ${isFullScreen ? "w-screen h-screen" : ""}`}></video>
        </div>
    );
}

export default Video;
