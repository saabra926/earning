// pages/top-stories.js
import Head from 'next/head';

export default function TopStories() {
  const stories = [
    {
      title: "🔥 Heatwave Crisis in India Reaches Alarming Levels",
      date: "April 29, 2025",
      content: `India is facing an unprecedented heatwave, with temperatures in Delhi, Rajasthan, and parts of Uttar Pradesh crossing 47°C. Hospitals are overwhelmed by heatstroke cases, and the government has issued red alerts in several regions. Farmers report failing crops, water scarcity is increasing, and school closures have been implemented. Climate experts warn that these high temperatures are becoming more frequent and intense due to global warming...

Moreover, the Indian Meteorological Department predicts the heat will persist for another week. Public advisories have been issued in multiple languages. Urban centers like Delhi have set up cooling stations and free drinking water distribution. The heat has intensified debates on climate adaptation policy and the urgency for greening programs. Power grids are under strain, leading to frequent outages. Public health advocates are calling for immediate action to protect vulnerable populations.`
    },
    {
      title: "🌪️ Tornadoes Rip Across Midwest USA",
      date: "April 28, 2025",
      content: `Multiple EF3 and EF4 tornadoes tore across Oklahoma, Kansas, and Missouri, destroying homes and infrastructure. The National Weather Service issued multiple warnings, and residents scrambled for shelter. Damage estimates exceed $500 million. Warm, moist Gulf air clashing with dry Rocky Mountain air created ideal conditions for tornadoes...

Communities like Moore and Tulsa have been hit hard. Scientists link these events to shifting jet stream patterns. Volunteers are helping with cleanup, and local governments are distributing disaster relief. Underground shelters and better warning systems are being discussed for the future.`
    },
    {
      title: "🌊 Flash Floods Devastate Jakarta, Indonesia",
      date: "April 27, 2025",
      content: `Heavy rains over three days triggered severe flooding in Jakarta, submerging entire neighborhoods. Over 200,000 residents were displaced. Emergency shelters were set up. Jakarta’s aging drainage system struggled to cope. Authorities are fast-tracking plans for new canals and pumps...

Environmentalists stress the need for green infrastructure and reforestation to mitigate future disasters. Public health teams are monitoring for waterborne disease outbreaks. Citizens are demanding long-term climate adaptation over temporary fixes.`
    },
    {
      title: "❄️ Canada Braces for Harsh Arctic Winter",
      date: "April 26, 2025",
      content: `Arctic winds are sweeping across Canada, bringing sub-zero temperatures to Nunavut, Manitoba, and Alberta. Inuit communities have prepared emergency supplies, while schools and roads brace for closures. The Canadian Weather Office has issued blizzard warnings across the prairies...

Authorities are urging residents to avoid unnecessary travel. Cold shelters in major cities have extended their hours. Scientists believe the polar vortex is shifting due to warming Arctic seas. Snowfall this year may break previous records.`
    },
    {
      title: "🔥 Wildfires Rage Across Australia’s New South Wales",
      date: "April 25, 2025",
      content: `Hot winds and dry conditions have sparked over 50 wildfires near Sydney. Firefighters from across the country have been deployed. Several communities have been evacuated, and air quality in Sydney has dropped significantly...

Climate scientists say fire seasons are becoming longer and more severe due to climate change. Residents are urged to have evacuation plans ready. Drones and satellites are being used to monitor fire spread in real time.`
    },
    {
      title: "☔ Typhoon Fujin Hits Japan with Record Rainfall",
      date: "April 24, 2025",
      content: `Typhoon Fujin made landfall with winds exceeding 150 km/h. Tokyo and Chiba saw over 400 mm of rain in 24 hours. Train services, airports, and schools were shut down. Over a million residents were evacuated as rivers breached levees...

Japan’s advanced warning systems saved lives, but the flooding caused by overflowing rivers has caused infrastructure damage. Engineers say upgrades are needed to withstand stronger future storms.`
    },
    {
      title: "🌬️ Sandstorm Disrupts Travel in Saudi Arabia",
      date: "April 23, 2025",
      content: `A massive sandstorm swept across Riyadh and surrounding cities, reducing visibility to near zero. Airports suspended flights, and highways were temporarily closed. Health advisories have been issued for people with respiratory conditions...

Urban planners are evaluating how better vegetation and urban design could reduce sandstorm impact in the future. Schools remained closed as a precaution, and mask distribution increased.`
    },
    {
      title: "💨 Cyclone Basil Threatens Madagascar and Mozambique",
      date: "April 22, 2025",
      content: `Cyclone Basil, a Category 3 storm, is moving across the Indian Ocean toward southeastern Africa. Coastal communities are preparing for flooding and high winds. International aid is on standby...

Meteorologists are tracking the storm's path closely. Mozambique’s National Disaster Institute has pre-deployed food and water supplies. Madagascar has suspended ferry operations and warned fishermen to stay onshore.`
    },
    {
      title: "🌫️ Smog Alert Issued in Beijing Amid Weather Inversion",
      date: "April 21, 2025",
      content: `Beijing’s air quality index hit hazardous levels due to a strong temperature inversion. Industrial activity, traffic, and stagnant winds worsened the pollution. Schools suspended outdoor activities, and masks are recommended...

Officials are enforcing temporary factory shutdowns. Health experts say such inversions are becoming more frequent due to regional climate changes. The city is investing in greener transit and stricter emissions laws.`
    },
    {
      title: "🌧️ Historic Floods Submerge Venice, Italy",
      date: "April 20, 2025",
      content: `Venice is experiencing its worst flooding in 50 years. St. Mark’s Basilica and surrounding areas are underwater after storm surges combined with heavy rain. Tourism has come to a halt...

City engineers are reviewing the MOSE barrier project, designed to protect Venice from such events. Climate activists say sea-level rise is outpacing local solutions. Locals are using wooden walkways and boats to navigate flooded streets.`
    },
    {
      title: "🌪️ Severe Storms Pound South Africa’s Eastern Cape",
      date: "April 19, 2025",
      content: `Thunderstorms and flash floods hit the Eastern Cape, leaving thousands without power. Roads and bridges were washed out, and emergency shelters filled up quickly...

The South African Weather Service had issued advance warnings. NGOs are distributing food, water, and blankets. The provincial government is requesting disaster relief funds from the national treasury.`
    },
    {
      title: "🔥 Drought Emergency Declared in Chile",
      date: "April 18, 2025",
      content: `Chile’s central region is suffering its worst drought in 60 years. Water reservoirs are below 20% capacity, and farmers are abandoning crops. Santiago has imposed water usage restrictions...

The government declared a state of emergency to access funding. Climate experts link the crisis to persistent La Niña conditions. Desalination plants and cloud seeding are being explored.`
    },
    {
      title: "🌨️ Record Snowfall Blankets Moscow",
      date: "April 17, 2025",
      content: `Moscow received its heaviest late-spring snowfall in decades, disrupting flights and traffic. A Siberian cold front swept across the city, breaking historical records...

City services struggled to keep roads clear. Schools moved to remote learning. Meteorologists cite an anomaly in Arctic jet streams as the cause.`
    },
    {
      title: "☀️ Heat Records Shattered Across Brazil",
      date: "April 16, 2025",
      content: `Brazil is seeing record-breaking April temperatures. São Paulo and Rio de Janeiro reached over 42°C. Public cooling centers have opened, and hydration points are available in parks and metros...

Health officials advise limited outdoor exposure. Climate researchers say the Amazon's deforestation is weakening regional rain cycles, making heatwaves more intense.`
    },
    {
      title: "☁️ UK Sees Wettest Spring in a Century",
      date: "April 15, 2025",
      content: `The UK has recorded its wettest spring in over 100 years. Rivers in Yorkshire and the Midlands are at critical flood levels. Rail and road travel has been disrupted...

Flood barriers in London and the Thames Valley have been raised multiple times this month. Residents are calling for more investment in rural drainage and urban green roofs.`
    }
  ];

  return (
    <>
      <Head>
        <title>Top Weather Stories | Weather Now</title>
        <meta
          name="description"
          content="Explore detailed global weather news, top climate stories, and extreme weather forecasts from around the world. Stay informed with real-time environmental updates."
        />
        <meta
          name="keywords"
          content="weather news, global weather, heatwaves, storms, floods, tornadoes, wildfires, climate change"
        />
        <meta name="author" content="Weather App" />
      </Head>

      <header className="bg-primary text-white text-center py-4">
        <h1>Top Weather Stories</h1>
        <p className="lead">Global climate and extreme weather updates</p>
      </header>

      <main className="container my-5">
        <section>
          {stories.map((story, index) => (
            <article key={index} className="mb-5 p-4 border rounded shadow-sm">
              <h2 className="h4">{story.title}</h2>
              <p className="text-muted">{story.date}</p>
              <p>{story.content}</p>
            </article>
          ))}
        </section>
      </main>

    </>
  );
}
