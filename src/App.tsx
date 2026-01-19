import { useState } from 'react'
import './App.css'
import fireredImg from './assets/firered.webp'
import emeraldImg from './assets/emerald.webp'
import heartgoldImg from './assets/heartgold.webp'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTileClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <button className="help-button" onClick={() => setIsModalOpen(true)}>
        ?
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              ×
            </button>
            <h2>Ironmon Maps</h2>
            <p>
              Welcome to the Ironmon Maps hub! This site provides links to the interactive maps for 
              Pokemon Ironmon challenges across different games
            </p>
            <p>
              To learn more about Ironmon visit <a href="https://ironmon.gg" target="_blank" rel="noopener noreferrer">ironmon.gg</a> or join the <a href="https://discord.com/invite/jFPYsZAhjX" target="_blank" rel="noopener noreferrer">Discord</a>
            </p>
            <div className="game-list">
              <h3>Github Links</h3>
              <ul>
                <li><strong><a href="https://github.com/kelseyyoung/FRLGIronmonMap" target="_blank" rel="noopener noreferrer">FireRed/LeafGreen</a></strong></li>
                <li><strong><a href="https://github.com/kelseyyoung/EmeraldIronmonMap" target="_blank" rel="noopener noreferrer">Emerald</a></strong></li>
                <li><strong><a href="https://github.com/kelseyyoung/HGSSIronmonMap" target="_blank" rel="noopener noreferrer">HeartGold/SoulSilver</a></strong></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="tiles-container">
        <div className="tile tile-firered" onClick={() => handleTileClick('https://kelseyyoung.github.io/FRLGIronmonMap')}>
          <img src={fireredImg} alt="FireRed" className="tile-image" />
        </div>
        
        <div className="tile tile-emerald" onClick={() => handleTileClick("https://kelseyyoung.github.io/EmeraldIronmonMap/")}>
          <img src={emeraldImg} alt="Emerald" className="tile-image" />
        </div>
        
        <div className="tile tile-heartgold" onClick={() => handleTileClick('https://kelseyyoung.github.io/HGSSIronmonMap')}>
          <img src={heartgoldImg} alt="HeartGold" className="tile-image" />
        </div>
      </div>
    </div>
  )
}

export default App

