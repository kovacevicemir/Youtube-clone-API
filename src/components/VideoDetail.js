import React from 'react'

const VideoDetail = ({video}) =>{
    if(!video){
        return <p>loading</p>
    }

    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <iframe width="560" height="315" src={videoSource} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail