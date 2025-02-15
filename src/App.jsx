import './App.scss';

import sunImg from "./assets/weather/sun.png"
import Weather from "./components/weather"

const App = () => {

  return (
    <>
    
    {/* Nagłówek */}
    <header className="rounded p-3 m-3" style={{backgroundColor: "rgba(143, 106, 124, 0.7)"}} >
    <div className="container">
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Pogoda</h1>
        </div>
      </div>
    </div>
    </header>

    
    <Weather/>
    

    {/* Stopka */}
    <footer className="rounded text-center text-lg-start m-3 p-3" style={{backgroundColor: "rgba(143, 106, 124, 0.7)"}}>
      <div className="text-center text-white">
        Autor — Alina Kumorek
      </div>
      <small className="text-center text-white">
        API — <a className="link-light" href="https://open-meteo.com/">Open-Meteo</a><br/>
        Ikony — <a className="link-light" href="https://www.flaticon.com/authors/freepik">Freepik z Flaticon</a><br/>
        Tło — <a className="link-light" href="https://www.pexels.com/pl-pl/zdjecie/fotografia-pod-katem-czerwonych-chmur-i-blekitnego-nieba-844297/">Eberhard Grossgasteiger z Pexels</a>
      </small>
    </footer>

    </>
  )
}

export default App
