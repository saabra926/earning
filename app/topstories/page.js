// pages/top-stories.js

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
    },
    //nect session (15)
    {
      title:"🔥 Ramadan Fasting Under Scorching Temperatures in North Africa",
      date:"March 31, 2025",
      content:"Moroccan and Algerian Muslims fasted through Ramadan during a record heatwave. Daytime temperatures reached 45°C, making it physically draining to fast without water. Indoor iftars became a community norm, and doctors recommended caution. This year, we prayed for rain more than anything, a local imam said."
    },
    {
      title:"🌊 Rising Nile Endangers Coptic Christian Sites",
      date:"April 01, 2025",
      content:"Unusual Nile flooding affected some ancient Coptic monasteries in Egypt, endangering wall paintings and manuscripts. The monks of St. Macarius rushed to save religious texts. Climate scientists attribute the flood to upstream dam discharges and unstable rainfall."
    },
    {
      title:"🌧️ Cyclone Damages Sacred Tree in Sri Lanka",
      date:"May 05, 2025",
      content:"Cyclone Indira knocked over a centuries-old Bo tree which was said to be a sapling of the tree of the Buddha's enlightenment in Anuradhapura. Pilgrims cried and prayed silently beside the felled branches. Restoration specialists are determining whether it can be resuscitated or cloned."
    },
    {
      title:"🌫️ Smog Shuts Down Diwali Prayers in Delhi Temples",
      date:"Aril 21, 2025",
      content:"Toxic smog shrouded Delhi over Diwali, closing temples and cancelling aartis outside. Families burned diyas at home with air purifiers going full speed. Older priests livestreamed prayers instead. Firecracker prohibitions were mostly flouted, exacerbating the air emergency."
    },
    {
      title:"☁️ Cold Wave Interrupts Pilgrimage to Amarnath Cave",
      date:"Oct 11, 2025",
      content:"Subzero temperatures and unexpected snowfall brought the traditional Amarnath Yatra to a standstill in Kashmir. Tents buckled under the weight of snow, and mules carrying luggage froze overnight. Pilgrims were escorted back by paramilitary troops.We came to Lord Shiva, and He sent us this test, a pilgrim quipped."
    },
    {
      title:"🌪️ Tornado Wrecks Rural Church Days Before Baptisms",
      date:"Dec 19, 2025",
      content:"A twister devastated a small Arkansas town, leveling a century-old church where 12 children were to be baptized. The congregation met for a makeshift service in a barn. Resiliently, even amidst the destruction, hymns were sung and a vow to rebuild was made."
    },
    {
      title:"🌡️ Christian Pilgrims Collapse from Heat in Jerusalem",
      date:"Jan 13, 2025",
      content:"An Easter surge in pilgrimages coincided with a record heatwave in Jerusalem. Pilgrims fainted on the Via Dolorosa route under 42°C temperatures. Emergency workers gave assistance, and local churches provided shaded resting areas. Some processions were relocated indoors."
    },
    {
      title:"🌬️ Typhoon Floods Buddhist Temples in Vietnam",
      date:"Feb 03, 2025",
      content:"Typhoon Goma pounded the Vietnamese coast, inundating hundreds of pagodas and shutting down religious ceremonies. Thousands of worshippers had come for Vesak but were diverted to storm shelters. Meditations were led by monks in candlelit community centers. Dozens of relics were relocated to higher ground."
    },
    {
      title:" 🔥 Heatwave in Iran Forces Shortened Muharram Processions",
      date:"Feb 23, 2025",
      content:"Above 45°C in Tehran and Mashhad prompted clerics to limit Ashura processions this year. Medical squads treated worshippers for fainting and fatigue. Children and old people were requested to remain indoors. Some processions shifted to early morning or late evening hours to escape scorching heat."
    },
    {
      title:" ❄️ Blizzard Blocks Buddhist Pilgrims in Nepal",
      date:"Oct 23, 2025",
      content:"A spring blizzard struck Mustang Valley, stranding dozens of Tibetan Buddhist pilgrims traveling to Muktinath Temple. Local villagers offered them shelter and soup as prayer flags hung suspended in mid-air. The storm downed all the mobile networks and brought the mountain trek to an end for more than a week."
    },
    {
      title:" 🌧️ Monsoon Deluge Floods Sikh Pilgrimage Route to Hemkund Sahib",
      date:"Oct 09, 2025",
      content:"Torrential rains from the monsoon triggered landslides along the pilgrimage path to Hemkund Sahib in the Indian state of Uttarakhand. Roads were swept away, and hundreds of pilgrims were trapped for two days in mountain huts. Rescue missions, including army helicopters, transported food and medicine. Pilgrims referred to the experience as a test of faith."
    },
    {
      title:" 💨 Dust Storms Disrupt Easter Celebrations in Kenya",
      date:"Nov 20, 2025",
      content:"Bleak dust storms swept northern Kenya over Easter weekend, dispersing congregants and destroying outdoor party arrangements. Pastors rescheduled services in various villages. Windstorms fueled by months of drought and desertification forced many families to spend days sweeping sand out of their houses. Sunday worship resumed under makeshift canopies."
    },
    {
      title:" 🔥 Greek Wildfires Interrupt Orthodox Pilgrimage Routes",
      date:"Nov 25, 2025",
      content:"Wildfires in southern Greece compelled the evacuation of monastic communities on Mount Athos, a holy Orthodox Christian place. Pilgrims were forced back halfway by smoke and advancing flames. Forest shrines were burned, and monks nearby prayed as they watched centuries-old forests go up in flames. Authorities indicate that 2025 has been the driest spring in more than 70 years."
    },
    {
      title:" 🌊 Rising Seas Threaten Sacred Temples in Bangladesh",
      date:"Mar 05, 2025",
      content:"The sea level rise has submerged several coastal Hindu temples' pathways in Bangladesh. Pilgrims now have to wade through water or travel by boat to reach places for religious festivities. The population of Kuakata is demanding climate justice since saltwater also destroys agricultural produce and freshwater resources. This is not only a climate issue, it's a spiritual crisis, a local priest stated."
    },
    {
      title:" ☀️ Pilgrims Endure Blistering Heat at Hajj in Saudi Arabia",
      date:"April 04, 2025",
      content:"Millions of pilgrims thronged Mecca under a merciless sun during Hajj this year, with temperatures reaching more than 46°C. Hundreds were treated for dehydration and heatstroke at medical tents. Children and elderly pilgrims suffered the most. Saudi officials boosted misting stations and handed out water bottles, but others contend that climate change is making the holy journey riskier by the year. Volunteers lugged water along long stretches, and prayer areas were covered with emergency tarps."
    },
  ];

  return (
    <>
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
