import React from 'react';
import ReactDom from 'react-dom';
import axios from "axios";

const data = axios.get('https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js',
    {})
  .then((response) => response.data)
  .then(data => console.log(data));

const Playlist = (props) =>{
    return (
        <div className="playlist-list">
                <div className="playlist-pict">
                    <img
                        src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c206551210d902b"
                
                    />
                    <p>Bohemian Rhapsody (The Original Soundtrack)</p>
                    <p>Queen</p>
                    <p>album</p>
                    <button>Play</button>

                </div>
            
        </div>

    )
}
export default Playlist;