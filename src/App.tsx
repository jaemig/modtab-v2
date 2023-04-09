import Background from "./js/core/components/background/Background";
import CenterView from "./js/core/components/layout/CenterView";
import MusicPlayer from "./js/core/components/music-player/MusicPlayer";
import Quote from "./js/core/components/quote/Quote";
import Weather from "./js/core/components/weather/Weather";

function App() {

  return (
    <div className="app">
      <Background
        image='/images/default_bg2.jpg'
        blur={0}
        opacity={1}
      />
        <MusicPlayer />
        <Weather />
        <CenterView />
        <Quote />
    </div>
  )
}

export default App
