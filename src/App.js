import React, { Component } from 'react';
import './App.css';

class App extends Component {
  playInstrument(e) {
    var prettySound = new Audio(e.target.dataset.sound);
    prettySound.play();
  }

  render() {
    return (
        <section class="container" align="center">
          <div className="left-half">
            <img src="pics/TimelinePhotos/AnaandJared_Christmas2008.jpg" alt="Timeline" width="1000" />
          </div>

          <div className="text-block">
            <p>Stacy Layton</p>
          </div>

          <div className="right-half" onClick={this.playInstrument} align="left">
            <p>LAYTON FAMILY TIMELINE</p>
            <p>2002</p>
            <img src="pics/TimelinePhotos/AnaandJared_Christmas2008.jpg" alt="Ana and Jared Christmas 2008" className="input" width="400" />
            <p>2003</p>
            <img src="pics/TimelinePhotos/AnaChristmasTimeCabelas.jpg" alt="Christmas at Cabelas" className="input" width="400" />
            <p>2004</p>
            <img src="pics/TimelinePhotos/AnaJaredandStacy_Christmas2008.jpg" alt="Christmas 2008" className="input" width="400" />
            <p>2005</p>
            <img src="pics/TimelinePhotos/Aug2010FamilyReunionCoeurDLeneLake.jpg" alt="Family Reunion Aug 2010" data-sound="music/banjo.mp3" className="input" width="400" />
            <p>2006</p>
            <img src="pics/TimelinePhotos/BabyJaredwithAna.JPG" alt="Baby Jared with Ana" className="input" width="400" />
            <p>2007</p>
            <img src="pics/TimelinePhotos/BattlegroundLake_VancouverWA.jpg" alt="Battleground Lake Vancouver WA" data-sound="music/clarinet.mp3" className="input" width="400" />
            <p>2008</p>
            <img src="pics/TimelinePhotos/GreatGrandpaLeeHarris.jpg" alt="Great Grandpa Lee Harris" data-sound="music/snare-drum.mp3" className="input" width="400" />
            <p>2009</p>
            <img src="pics/TimelinePhotos/Jared_Christmas2008.jpg" alt="Jared Christmas 2008" className="input" width="400" />
            <p>2010</p>
            <img src="pics/TimelinePhotos/JaredChristmas2008.jpg" alt="Jared Christmas on 2008" className="input" width="400" />
            <p>THE END</p>
          </div>
        </section>
    );
  }
}

export default App;
