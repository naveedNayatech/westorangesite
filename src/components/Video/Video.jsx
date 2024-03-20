import './Video.css';

const Video = () => {
  return (
    //  https://www.youtube.com/watch?v=bw7uEf42M2Y 

    <div className="video-container">
    <video
        loop muted autoPlay controls=""
        className="responsive-video"
        src="WellnessVideo.mp4"
    />
    </div>
  )
}

export default Video