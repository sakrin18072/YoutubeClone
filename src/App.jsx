import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { SideBar, Feed , NavBar} from './components'
import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import Search from './components/Search'
const App = () => {
  return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>
                    <Route path='/YoutubeClone' exact element = {<Feed/>} />
                    <Route path='/video/:id' element = {<VideoDetail/>} />
                    <Route path='/channel/:channelId' element = {<ChannelDetail/>} />
                    <Route path='/search/:searchTerm' element = {<Search/>} />
                </Routes>
            </div>
        </BrowserRouter>
  )
}

export default App