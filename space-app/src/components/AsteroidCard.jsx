import React from 'react'

const AsteroidCard = ({asteroid}) => {
  return (
    <div>
      
    </div>
  )
}

export default AsteroidCard

// notes:

// things we can get from the asteroid object:
//  - id (unique for every asteroid)
//  - name (like 2025 AB for example)
//  - nasa_jpl_url (link to full NASA page)
//  - absolute_magnitude_h (brightness mag.)
//  - is_potentially_hazardous_asteroid (boolean)
//  - is_sentry_object (whether it's tracked for impact risk)

// estimated_diameter (in many units: .kilometers, meters, miles, feet. )
// example: estimated_diameter.kilometers.estimated_diameter_min
// estimated_diameter.kilometers.estimated_diameter_max

// going to use /feed to give asteroids approaching earth in 7 days (where today is the middle day)

// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY