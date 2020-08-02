import {getPoolDetails} from '../../services/index.js';
import {Card} from '../common/Card/index.js'

class CabRide {
  constructor(data) {
    this.location = data;
    this.poolDetails = [];
    this.source = '',
    this.dest = ''
    this.location.insertAdjacentHTML('beforeend',  this.render());
    this.findPool();
  }

  findPool() {
    debugger
    getPoolDetails(this.source, this.dest).then(response => {
      debugger
      this.poolDetails = response;
      document.querySelector('.ride__details').innerHTML = this.renderDriverDetails();
    })

  }

  handleSearch(point, event) {
    switch(point) {
      case "source" : {
        this.source = event.target.value.toLowerCase();
        this.findPool();
        break;
      }
      case "dest" : {
        this.dest = event.target.value.toLowerCase();
        this.findPool()
      }
    }

  }

  renderDriverDetails() {
    return (
      this.poolDetails.map(rideData => {
        return (
          Card(rideData)
        )
      }).join('')
    )
  }

  render() {
    setTimeout(()=> {
      const source = document.getElementById('source_location');
      const dest = document.getElementById('dest_location');
      source.addEventListener('keyup', (e) => this.handleSearch('source', e));
      dest.addEventListener('keyup', (e) => this.handleSearch('dest', e));
    },0)
    return (
      `<div class="login__container">
        <div>Commuter: Location Search</div>
        <div class="login__section">
          <div class="login__header">PICK A RIDE</div>
          <div class="login__credential">
            <div class="login__area">
              <div>Start from</div>
              <input id="source_location" placeholder="start location" />
              <div>Destination</div>
              <input id="dest_location" placeholder="destination" />
            </div>
            <div class="ride__details">
              <div>
                ${this.renderDriverDetails()}
              </div>
            </div>
          </div>
        </div>
      </div>`
    )
  }
}

export default CabRide;