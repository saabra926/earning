// pages/top-stories.js
import Head from 'next/head';

export default function TopStories() {
  const stories = [
    {
      title: "🔥 Heatwave Crisis in India Reaches Alarming Levels",
      date: "April 29, 2025",
      content: `India is experiencing a never-before heatwave, with the temperature in Delhi, Rajasthan, and Uttar Pradesh topping 47°C. Heatstroke patients are flooding hospitals, and the government has sounded red alerts in some areas. Crops are reported to be failing by farmers, water shortage is rising, and schools have been shut. Climate scientists say that such high temperatures are becoming more intense and regular due to global warming.

Additionally, the Indian Meteorological Department foresees the heat lasting for another week. Public warnings have been made available in several languages. Urban areas such as Delhi have established cooling centers and free drinking water dispensation. The heat has raised arguments on climate adaptation policy and the need for greening initiatives. Power supplies are strained, causing frequent power outages. Public health campaigners are demanding swift action to safeguard vulnerable groups.`
    },
    {
      title: "🌪️ Tornadoes Rip Across Midwest USA",
      date: "April 28, 2025",
      content: `Several EF3 and EF4 tornadoes ravaged Oklahoma, Kansas, and Missouri, leveling houses and infrastructure. The National Weather Service made repeated warnings, and people scrambled for cover. Damage is estimated at more than $500 million. Warm, wet Gulf air colliding with dry Rocky Mountain air provided perfect conditions for tornadoes.

Moore and Tulsa are among the areas that have been hard hit. Scientists attribute this to changing patterns of the jet stream. Cleanups are assisted by volunteers, and local authorities are handing out disaster relief. Underground shelters and improved warning systems are being called for in the future.`
    },
    {
      title: "🌊 Flash Floods Devastate Jakarta, Indonesia",
      date: "April 27, 2025",
      content: `Heavy three-day rains caused catastrophic flooding in Jakarta, inundating entire city districts. More than 200,000 residents were left homeless. Emergency centers were established. Jakarta's old drainage system could not handle the volume. Authorities are accelerating new canals and pumps plans.

Environmentalists emphasize green infrastructure and afforestation to reduce disaster damage in the future. Public health workers are on the lookout for outbreaks of waterborne diseases. Citizens are pushing for long-term climate adaptation rather than short-term solutions.`
    },
    {
      title: "❄️ Canada Braces for Harsh Arctic Winter",
      date: "April 26, 2025",
      content: `Arctic gusts are blowing through Canada, delivering below-freezing conditions to Nunavut, Manitoba, and Alberta. Inuit members have stocked up emergency rations, as schools and highways prepare for shutdown. Blizzards have been forecast by the Canadian Weather Office throughout the prairies.

The authorities are advising people to stay away from unnecessary travel. Cold shelters in large cities have extended their operating hours. Researchers think that the polar vortex is moving because of warming Arctic oceans. This year's snowfall could be a record breaker.`
    },
    {
      title: "🔥 Wildfires Rage Across Australia’s New South Wales",
      date: "April 25, 2025",
      content: `Hot winds and dryness have ignited more than 50 bushfires in the vicinity of Sydney. Firefighters from all over the country have been sent. Some communities have been evacuated, and air quality in Sydney has fallen dramatically.

Climate scientists report that fire seasons are getting longer and more intense as a result of climate change. People are advised to prepare evacuation plans. Drones and satellites are being employed to track fire spread in real time.`
    },
    {
      title: "☔ Typhoon Fujin Hits Japan with Record Rainfall",
      date: "April 24, 2025",
      content: `Typhoon Fujin struck with more than 150 km/h winds. Tokyo and Chiba recorded more than 400 mm rain in a 24-hour period. Trains, airports, and schools were closed. More than a million residents were forced to evacuate when rivers overflowed levees.

Japan's warning systems helped people survive, but the river overflow flooding has destroyed infrastructure. Upgrades are necessary to be able to handle future storms with higher winds, according to engineers.`
    },
    {
      title: "🌬️ Sandstorm Disrupts Travel in Saudi Arabia",
      date: "April 23, 2025",
      content: `A huge sandstorm raged over Riyadh and neighboring cities, lowering visibility to close to zero. Airports halted flights, and roads were temporarily closed. Health alerts have been issued for individuals with respiratory ailments.

Urban planners are considering how improved vegetation and urban planning could minimize sandstorm effects in the future. Schools continued to be closed as a precaution, and mask distribution rose.`
    },
    {
      title: "💨 Cyclone Basil Threatens Madagascar and Mozambique",
      date: "April 22, 2025",
      content: `Cyclone Basil, a Category 3, is bearing down on southeastern Africa across the Indian Ocean. Coastal residents are bracing for flooding and strong winds. International relief is on standby.

Weather experts are monitoring the storm's trajectory intently. Mozambique's National Disaster Institute has deployed food and water resources ahead of time. Ferry services have been halted in Madagascar, and fishermen have been advised to remain ashore.`
    },
    {
      title: "🌫️ Smog Alert Issued in Beijing Amid Weather Inversion",
      date: "April 21, 2025",
      content: `The air quality index in Beijing reached dangerous levels as a result of a severe temperature inversion. Industrial activity, traffic, and static winds exacerbated the pollution. Outdoor activities were suspended in schools, and masks are advised.

Government officials are mandating short-term factory closures. Such inversions are growing more common, according to health experts, because of regional climate shifts. The city is committing to cleaner transit and tighter emissions regulations.`
    },
    {
      title: "🌧️ Historic Floods Submerge Venice, Italy",
      date: "April 20, 2025",
      content: `Venice is seeing its worst flooding in 50 years. St. Mark's Basilica and its surroundings are flooded after storm surges merged with heavy rain. Tourism has ground to a halt.

City engineers are reconsidering the MOSE barrier project, which is meant to shield Venice from such occurrences. Climate activists claim sea-level rise is ahead of local solutions. Locals are walking on wooden walkways and boats through flooded streets.`
    },
    {
      title: "🌪️ Severe Storms Pound South Africa’s Eastern Cape",
      date: "April 19, 2025",
      content: `Thunderstorms and flash floods struck the Eastern Cape, disrupting electricity to thousands of people. Roadways and bridges were destroyed, and emergency shelters quickly became occupied.

Advanced warnings had been issued by the South African Weather Service. NGOs are distributing food, water, and blankets. The provincial government is seeking disaster relief funds from the national treasury.`
    },
    {
      title: "🔥 Drought Emergency Declared in Chile",
      date: "April 18, 2025",
      content: `Chile's central region is experiencing its worst drought in 60 years. Water reservoirs are at less than 20% capacity, and crops are being left behind by farmers. Santiago has placed water use restrictions.

The government issued a state of emergency to tap into funding. Climate specialists attribute the crisis to ongoing La Niña conditions. Desalination plants and cloud seeding are being considered.`
    },
    {
      title: "🌨️ Record Snowfall Blankets Moscow",
      date: "April 17, 2025",
      content: `Moscow was hit with its most intense late-spring snow in decades, grounding flights and halting traffic. A Siberian cold front rolled through the city, shattering records.

City services were strained to clear streets. Schools shifted to online learning. Meteorologists attribute the cause to an anomaly in Arctic jet streams.`
    },
    {
      title: "☀️ Heat Records Shattered Across Brazil",
      date: "April 16, 2025",
      content: `Brazil is experiencing April temperatures that break all records. São Paulo and Rio de Janeiro topped 42°C. Cool public centers opened, and people have hydration spots in parks and metros.

Limited outdoor exposures are recommended by health officials. Climate scientists believe that deforestation of the Amazon is weakening rainfall cycles in the region, producing more intense heatwaves.`
    },
    {
      title: "☁️ UK Sees Wettest Spring in a Century",
      date: "April 15, 2025",
      content: `The UK has just set its wettest spring for more than 100 years. The rivers of Yorkshire and the Midlands are at or near flood points. Rail and road journeys have been affected.

London and the Thames Valley have had flood barriers raised several times this month. Residents demand further investment in drainage in rural areas and urban roofs..`
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
