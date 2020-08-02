export function Card(data) {
    const {
      name,
      source,
      destination,
      carType,
      seatAvailable,
      rating,
      timeToReach,
      image
    } = data

    return (
      `<div class="card__container">
        <img src="${image}" alt="image" />
        <div class="driver__details">
          <div><span class="driver__name">${name}</span><span class="cab__arrival">${timeToReach} away</span></div>
          <div>route: ${source} to ${destination}</div>
          <div>car: ${carType}</div>
          <span>seats available: ${seatAvailable}</span>
        </div>
        <div class="driver__rating">
          ${rating} | star
        </div>
      </div>`
    )
 }
