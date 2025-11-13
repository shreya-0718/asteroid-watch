import React from 'react'

const AsteroidCard = ({ asteroid }) => {
  if (!asteroid) return null;

  const name = asteroid.name;
  const approach = asteroid.close_approach_data?.[0];
  const diameter = asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);
  const speed = parseFloat(approach.relative_velocity.kilometers_per_hour).toFixed(0);
  const date = approach.close_approach_date;
  const hazard = asteroid.is_potentially_hazardous_asteroid;
  const url = asteroid.nasa_jpl_url;

  return (
    <div className="w-full h-full flex items-stretch justify-center bg-blush">
      <div className="h-full w-full max-w-2xl flex flex-col justify-center bg-white bg-opacity-10 p-6 rounded-2xl border border-white overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p>🪐 Diameter: {diameter} km</p>
        <p>📅 Approach Date: {date}</p>
        <p>🚀 Speed: {speed} km/h</p>
        {hazard && <p>🚨 Potentially Hazardous ⚠️</p>}
        <p> 
          ✨ More info{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet font-bold"
            style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}
          >here :3</a>
           
        </p>
      </div>
    </div>
  );
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