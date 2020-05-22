import React from 'react'
import youtube from '../api/youtube'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'


class App extends React.Component{
    state = {
        videos : [],
        SelectedVideo : null
    }

    componentDidMount(){
        this.submitHandler('python');
    }

    OnSelectHandler = (video) => {
        console.log(video)
        this.setState({SelectedVideo:video})
    }

    submitHandler = async (term) =>{
      const response = await youtube.get("/search", {
            params: {
              q: term,
              part: "snippet",
              maxResults: 5,
              key: 'AIzaSyA9wnoMXKGKiJKu3Uex495yYxmw0K8Tyao'
            }
        })
        
        this.setState({videos:response.data.items, SelectedVideo:response.data.items[0]})
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar submitHandler = {this.submitHandler}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video = {this.state.SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos = {this.state.videos} OnSelectHandler = {this.OnSelectHandler} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App