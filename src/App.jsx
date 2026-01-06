import { fetchGIF, fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {


  return (
    <div className='h-screen w-full text-white bg-gray-950'>
      <button className="bg-green-400 px-4 py-2 m-5" onClick={async ()=>{
        const data = await fetchPhotos('dog')
        console.log(data.results);
        
        }}>Get Photo</button>
        
      <button className="bg-green-400 px-4 py-2 m-5" onClick={async ()=>{
        const data = await fetchVideos('dog')
        console.log(data.videos);
        
        }}>Get Video</button>

      <button className="bg-green-400 px-4 py-2 m-5" onClick={async ()=>{
        const data = await fetchGIF('dog')
        console.log(data.results);
        
        }}>Get GIF</button>

        <br />
        <hr />
        <div className="m-5">
          Check the console for fetched data.
        </div>
    </div>
  )
}

export default App
