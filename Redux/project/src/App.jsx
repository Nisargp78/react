import { fetchGIF, fetchPhotos, fetchVideos } from "./api/MediaApi"
import SearchBar from "./components/SearchBar";

const App = () => {

  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <SearchBar />
      <button className="bg-green-900 text-white m-5 p-5" onClick={async ()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
      }}>Get Photos</button>
      <button className="bg-green-900 text-white m-5 p-5" onClick={async ()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos);
      }}>Get Videos</button>
      <button className="bg-green-900 text-white m-5 p-5" onClick={async ()=>{
        const data = await fetchGIF('cat')
        console.log(data.results);
      }}>Get GIFS</button>
    </div>
  )
}

export default App