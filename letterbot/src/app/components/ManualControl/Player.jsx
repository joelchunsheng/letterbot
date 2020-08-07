import React from 'react'
import fire from '../../../config/Fire';
import Hls from 'hls.js'



class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            ipAddress : ''
        }
    }
 
    componentDidMount(){

            // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ device_id: 'Development_Machine', registry_id: 'Development_Machine' })
    };
    fetch('https://asia-east2-letterbot-staging.cloudfunctions.net/get-ip', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
        // .then(data => this.setState({ ipAddress: data.id }));


        if (Hls.isSupported() && this.player) {
            const videoSrc = '';
            const  video = this.player;
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
          });
        }
    }


    render() {
        const videoStyle ={
            width: 600,
            height: 360,
            background: '#000',
        }

        return(
            <div>
                <video style={videoStyle} ref={(player) => this.player = player} autoPlay={true}/>
            </div>
)
    }
}

export default Player;
