import React from 'react'
import PublicationHistoryList from './PublicationHistoryList'

function ArtListItem() {
  return (
    <li>
    <div class="frame">
      <img
        src="https://boolean-api-server.fly.dev/images/paris-street-rainy-day.jpg"
      />
    </div>
    <h3>Paris Street; Rainy Day</h3>
    <p>Artist: Gustave Caillebotte</p>
    <PublicationHistoryList />
  </li>
  )
}

export default ArtListItem