// pages/top-stories.js
"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import "./page.css"

export default function TopStories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleStories, setVisibleStories] = useState(15); // Show 15 initially
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'heat', name: 'Heatwaves' },
    { id: 'storm', name: 'Storms' },
    { id: 'flood', name: 'Floods' },
    { id: 'cold', name: 'Cold Waves' },
    { id: 'religious', name: 'Religious Impact' },
    { id: 'wildfire', name: 'Wildfires' },
    { id: 'drought', name: 'Droughts' }
  ];

  const stories = [
    // 1-15 (original articles with slight keyword optimizations)
    {
      id: 1,
      title: "India's Deadly Heatwave Breaks Temperature Records | Extreme Weather Alert",
      date: "3 hours ago",
      content: `India is presently suffering one of the worst heatwaves in its history, with the temperature rising above 50°C (122°F) in various parts of northern and central India. Towns such as Phalodi in Rajasthan and Nagpur in Maharashtra have recorded all-time highs, creating unbearable pressure on public health infrastructure and systems.
This intense heat not only disrupted daily routines—resulting in school closures and shortened working hours—but also caused mass power outages as electricity usage surged. The poor, particularly the elderly, children, and those who work outdoors, are experiencing extreme health threats such as heatstroke, dehydration, and even death. Hospitals have witnessed an uptick in heat-related ailments, as local governments struggle to provide cooling shelters and hand out water.

Experts blame this increasing heatwave on the impacts of climate change, coupled with urbanization and forest depletion at high speeds, which have considerably diminished natural cooling. Meteorologists project that extreme temperatures such as these will be more frequent and intense within the next few years unless massive mitigation measures are taken.

India's lethal heatwave is a grim reminder of the need to tackle global warming with green policies, green infrastructure investment, and public engagement. With temperatures still rising, the imperative for resilience has never been higher.
`,
      category: 'heat',
      location: 'India',
      severity: 'severe',
      keywords: 'heatwave, extreme heat, temperature records, India weather'
    },
    {
      id: 2,
      title: "Tornado Outbreak: Midwest USA Hit by Destructive EF3 and EF4 Twisters",
      date: "2 hours ago",
      content: `

Whole neighborhoods have been destroyed, triggering emergency declarations and mass evacuations. Emergency workers are laboring day and night to try and find survivors buried beneath the wreckage, while local shelters are filled to capacity with uprooted families. Tens of thousands have been left without electricity, and months will be needed to repair the damage to infrastructure.

Meteorologists had given advanced notice, but the speed of development and erratic trajectories of the tornadoes surprised many residents. This outbreak is just one of a growing trend of more ferocious weather events driven by a warming climate that ratchets up atmospheric instability and moisture levels—two prime ingredients for ferocious storms.

As rescue operations commence, experts call for enhanced early warning systems, preparation of the community, and more resilient building codes to cope with such calamities. This recent outbreak highlights the increasing vulnerability of the American heartland to extreme weather conditions.
`,
      category: 'storm',
      location: 'USA',
      severity: 'severe',
      keywords: 'tornado outbreak, severe thunderstorms, Midwest weather, EF4 tornado'
    },
    {
      id: 3,
      title: "Jakarta Flood Emergency: Torrential Rains Submerge Indonesian Capital",
      date: "37 mins ago",
      content: `Jakarta, the sprawling capital of Indonesia, is once once more hooking with a major surge crisis after persistent exuberant downpours submerged huge parcels of the city. Over 200 millimeters of rain fell in less than 24 hours, overpowering waste frameworks and causing waterways to burst their banks. Boulevards have turned into waterways, homes are immersed, and thousands have been constrained to empty to brief shelters.

Critical infrastructureâincluding transportation, schools, and healthcare facilitiesâhas been extremely disturbed. The cityâs notorious activity gridlock declined as major streets and rail lines were submerged. Specialists have sent crisis administrations and military work force to help in protect and alleviation endeavors, whereas water crafts and inflatable flatboats are being utilized to explore overflowed neighborhoods.

Jakartaâs helplessness to flooding is exacerbated by a combination of variables: quick urbanization, destitute waste foundation, arrive subsidence, and rising ocean levels. Numerous parts of the city lie underneath ocean level, making indeed direct precipitation a genuine threat.

Climate specialists caution that extraordinary climate occasions like this are getting to be more visit due to worldwide climate alter. The Jakarta surge crisis isn't fair a common disasterâitâs a wake-up call for critical urban arranging changes, maintainable water administration, and climate adjustment techniques in one of Asiaâs fastest-growing megacities.`,
      category: 'flood',
      location: 'Indonesia',
      severity: 'moderate',
      keywords: 'Jakarta floods, Indonesia rainfall, urban flooding, climate adaptation'
    },
    {
      id: 4,
      title: "Arctic Blast: Canada Faces Dangerous -40°C Wind Chill Temperatures",
      date: "2 hours ago",
      content: `Canada is confronting a brutal Cold impact this week, with wind chill temperatures diving as moo as -40Â°C over parts of the Prairies, Northern Ontario, and Quebec. This extraordinary cold snap, driven by a surge of polar discuss from the Ice, has activated far reaching climate notices and raised genuine concerns for open safety.

The biting cold has brought life to a close halt in numerous locales. Schools have been closed, flights postponed, and open transport administrations extremely disturbed. Crisis covers are working at full capacity as defenseless populaces, particularly the destitute and elderly, confront life-threatening conditions. Frostbite can happen in as small as 5 to 10 minutes beneath these temperatures, inciting wellbeing authorities to encourage inhabitants to remain inside and wear different layers on the off chance that going exterior is unavoidable.

The Ice discuss mass has too strained vitality frameworks, as warming requests surge over the nation. Specialists are inquiring citizens to preserve vitality and check on neighbors, particularly those living alone.

Meteorologists note that whereas cold snaps are not bizarre for Canadian winters, the concentrated and term of this Cold impact are disturbing. Researchers proceed to ponder potential joins between such extraordinary polar episodes and moving climate designs, counting the debilitating of the polar vortex.`,
      category: 'cold',
      location: 'Canada',
      severity: 'moderate',
      keywords: 'polar vortex, arctic blast, extreme cold, Canada winter'
    },
    {
      id: 5,
      title: "Australian Bushfires Intensify: Sydney Ringed by 50+ Blazes | Fire Weather Warning",
      date: "49 mins ago",
      content: `Australia is once once more fighting a furious bushfire emergency, with over 50 dynamic bursts encompassing Sydney and debilitating adjacent communities. Fueled by burning temperatures, moo mugginess, and solid winds, these fires have provoked a region-wide Fire Climate Caution and the arrangement of hundreds of crisis personnel.

Thick smoke has covered the city, driving to dangerous discuss quality levels and driving schools to shut, open air occasions to be canceled, and inhabitants to stay inside. A few country towns on the edges of Sydney have as of now been cleared, and firefighters are working energetically to contain quickly progressing fire fronts. In spite of their endeavors, troublesome landscape and unusual wind shifts have made concealment endeavors amazingly dangerous.

Australiaâs bushfire season is starting prior and enduring longer due to rising worldwide temperatures and drawn out dry season conditions. Climate researchers caution that these progressively extreme fire occasions are the unused standard unless definitive climate activity is taken.

Authorities are encouraging the open to remain caution, take after departure orders instantly, and get ready crisis packs. As the fires seethe on, the circumstance underscores the critical require for upgraded fire administration techniques, superior arrive utilize arranging, and a national commitment to climate strength. Sydney presently stands on the frontlines of a developing natural emergency.`,
      category: 'wildfire',
      location: 'Australia',
      severity: 'severe',
      keywords: 'Australian bushfires, wildfire emergency, Sydney smoke, fire weather'
    },
    {
      id: 6,
      title: "Typhoon Fujin: Japan Battles 150 km/h Winds and Flash Flooding",
      date: "11 mins ago",
      content: `Japan is reeling from the affect of Storm Fujin, a capable storm that has unleashed winds coming to 150 km/h and activated broad streak flooding over coastal and inland locales. Making landfall close Kyushu some time recently clearing through Honshu, the tropical storm has caused mass disturbance to transportation, control blackouts influencing hundreds of thousands, and noteworthy harm to infrastructure.

Authorities issued crisis clearing orders for over a million inhabitants as waterways swelled and avalanches undermined hilly zones. In cities like Osaka and Hiroshima, exuberant downpours overpowered waste frameworks, submerging boulevards and homes. Bullet prepare administrations were suspended, and major interstates closed as a prudent measure.

Rescue operations are underway, with Japanâs Self-Defense Powers helping in clearings and giving crisis help. Schools have been closed, and businesses over influenced locales stay closed in the midst of progressing security concerns.

Meteorologists property Tropical storm Fujinâs quality to abnormally warm sea temperatures, reliable with climate alter patterns fueling more strongly tropical storms within the Pacific. The Japanese government has repeated calls for improved fiasco readiness and climate adjustment measures.

Typhoon Fujin serves as a stark update of Japanâs helplessness to normal calamities and the expanding require for strong foundation and coordinated emergency reaction frameworks within the confront of heightening climate dangers.`,
      category: 'storm',
      location: 'Japan',
      severity: 'severe',
      keywords: 'Typhoon Fujin, Japan typhoon, extreme rainfall, Pacific storm'
    },
    {
      id: 7,
      title: "Middle East Sandstorm: Riyadh Grinds to Halt Amid Zero Visibility",
      date: "4 hours ago",
      content: `A enormous sandstorm has inundated Riyadh and expansive parts of the Middle eastern Landmass, diving the Saudi capital into chaos and decreasing perceivability to approach zero. The thick divider of tidy cleared through the city with fierce winds, disturbing existence , establishing flights, closing schools, and driving businesses to shutter.

Residents woke up to an spooky orange sky as discuss quality dove to unsafe levels. Wellbeing specialists encouraged individuals to remain inside, wear defensive covers, and dodge open air action, particularly those with respiratory conditions. Crisis rooms over the city have seen a sharp rise in patients enduring from asthma, eye aggravation, and breathing difficulties.

This most recent sandstorm is one of the foremost extreme in later a long time and highlights the developing recurrence and concentrated of such occasions over the Center East. Specialists interface the compounding drift to drawn out dry season, desertification, and unsustainable arrive useâfactors exacerbated by climate change.

Saudi authorities are working to relieve the affect, conveying cleanup groups and observing discuss quality. Be that as it may, long-term solutions require regional participation on natural arrangement, afforestation endeavors, and maintainable urban arranging. Riyadhâs sudden shutdown may be a clear flag that extraordinary climate occasions, counting sandstorms, are getting to be an progressively critical natural and open wellbeing challenge within the locale.`,
      category: 'storm',
      location: 'Saudi Arabia',
      severity: 'moderate',
      keywords: 'Saudi sandstorm, Middle East dust storm, haboob, desert weather'
    },
    {
      id: 8,
      title: "Cyclone Alert: Category 3 Storm Threatens Madagascar Coastline",
      date: "34 mins ago",
      content: `Madagascar is bracing for affect as a capable Category 3 tornado churns toward its eastern coastline, bringing with it the danger of dangerous winds, exuberant rain, and life-threatening storm surges. The storm, right now pressing supported winds of up to 195 km/h, is anticipated to create landfall inside the following 24 to 48 hours, inciting critical departure orders in defenseless coastal areas.

Authorities have pronounced a tornado crisis and mobilized calamity reaction groups, while schools, ports, and airplane terminals within the stormâs anticipated way have been briefly closed. Nearby inhabitants are boarding up homes and stocking up on fundamentals as the nation plans for what may be one of the foremost extreme storms of the season.

Meteorologists caution that the cycloneâs moderate development seem heightening flooding dangers, with streams likely to flood and avalanches expected in precipitous locales. The nation, as of now battling with framework challenges and destitution, faces a increased hazard of delayed recuperation in case the storm causes broad damage.

This creating tornado underscores the helplessness of island countries like Madagascar to climate-related fiascos. Specialists proceed to call for reinforced early-warning frameworks, flexible foundation, and universal back to assist moderate the heightening impacts of extraordinary climate fueled by worldwide climate alter.`,
      category: 'storm',
      location: 'Africa',
      severity: 'severe',
      keywords: 'Cyclone Basil, Madagascar storm, Indian Ocean cyclone'
    },
    {
      id: 9,
      title: "Beijing Smog Crisis: 'Hazardous' Air Pollution Levels Trigger Health Alerts",
      date: "29 mins ago",
      content: `Beijing is once once more overwhelmed in a thick cover of harmful brown haze, with discuss quality levels coming to the âhazardousâ category on the Discuss Quality Record (AQI). PM2.5 concentrationsâtiny particles that enter profound into the lungsâhave taken off to over 300 Âµg/mÂ³, distant surpassing secure levels prescribed by the World Wellbeing Organization.

The exhaust cloud has extremely influenced perceivability, disturbed transportation, and provoked citywide wellbeing alarms. Specialists have prompted inhabitants, particularly children, the elderly, and those with respiratory or heart conditions, to stay inside and dodge strenuous movement. Schools have suspended open air exercises, and healing centers are detailing an increment in patients with breathing issues and eye irritation.

This emergency is generally ascribed to a combination of mechanical outflows, coal-fired warming, vehicle debilitate, and stagnant winter climate conditions that trap poisons near to the ground. In spite of government endeavors to decrease outflows through stricter directions and cleaner vitality arrangements, Beijing proceeds to battle with repeating discuss contamination episodes.

Environmental specialists push the require for more forceful, long-term arrangements, counting a broader move to renewable vitality, territorial contamination control participation, and open mindfulness campaigns. The current brown haze emergency serves as a calming update of the continuous open wellbeing challenges postured by urban discuss contamination in quickly creating economies.
Tools`,
      category: 'heat',
      location: 'China',
      severity: 'moderate',
      keywords: 'Beijing smog, China air pollution, hazardous air quality'
    },
    {
      id: 10,
      title: "Venice Flood Disaster: Historic City Submerged by 50-Year High Tide",
      date: "44 mins ago",
      content: `Venice is confronting one of its most noticeably awful surge catastrophes in half a century, as an uncommonly tall tideâknown as acqua altaâhas submerged over 80% of the notorious city. Water levels surged to about 190 cm (6.2 feet), the second-highest ever recorded, inundating homes, businesses, and world-renowned points of interest like St. Markâs Basilica, which has endured critical basic damage.

Shocking pictures appear gondolas cleared into contract lanes, businesspeople swimming through waist-deep water, and centuries-old buildings battling against the tenacious tide. Inhabitants and visitors alike have been stranded, whereas crisis groups scramble to convey water pumps and defensive boundaries. The cityâs chairman has announced a state of crisis, assessing harms within the hundreds of millions of euros.

While regular flooding isn't modern to Venice, the scale and recurrence have compounded radically, which specialists property to a combination of sea-level rise, climate alter, and the cityâs normal subsidence. The MOSE boundary framework, outlined to ensure Venice from such tidal surges, has confronted delays, specialized issues, and feedback over its effectiveness.

This calamity has reignited critical calls for comprehensive actionâboth locally and globallyâto protect social legacy locales from climate-related dangers. Veniceâs survival presently pivots on quick natural, infrastructural, and political arrangements.`,
      category: 'flood',
      location: 'Italy',
      severity: 'severe',
      keywords: 'Venice flooding, high tide, Italy climate change'
    },
    {
      id: 11,
      title: "Ramadan Heatwave: North African Muslims Endure 45°C Fasting Conditions",
      date: "7 hours ago",
      content: `As the heavenly month of Ramadan unfurls, millions of Muslims over North Africa are watching day by day fasts beneath extraordinary and unforgiving warm. Temperatures have taken off to 45Â°C (113Â°F) in nations like Algeria, Tunisia, Libya, and parts of Egypt, making outstandingly challenging conditions for those going without from nourishment and water from first light to dusk.

This heatwave, depicted by meteorologists as one of the foremost strongly in later a long time for the locale amid Ramadan, is putting monstrous physical strain on the fasting populace. Parchedness, warm weariness, and weariness are major wellbeing concerns, particularly for open air laborers, the elderly, and those with preexisting conditions. Therapeutic experts are encouraging individuals to break quick quickly in the event that signs of heat-related sickness appear.

Mosques and community centers have started adjusting by facilitating supplications and iftar dinners inside with discuss conditioning, and open wellbeing authorities are advancing mindfulness around hydration methodologies amid non-fasting hours. In any case, for numerous, especially those in provincial or underserved ranges, such safety measures are harder to access.

Climate specialists caution that extraordinary warm occasions amid devout and social observances may ended up progressively common due to worldwide warming. This Ramadan heatwave underscores the pressing require for climate adjustment methodologies that consider both natural substances and social hones.`,
      category: 'religious',
      location: 'North Africa',
      severity: 'moderate',
      keywords: 'Ramadan heatwave, Muslim fasting, North Africa weather'
    },
    {
      id: 12,
      title: "Nile Flooding Threatens Ancient Coptic Christian Monasteries in Egypt",
      date: "13 hours ago",
      content: `Rising waters of the Nile Waterway are posturing a genuine danger to a few of Egyptâs most prized Coptic Christian cloisters, numerous of which date back over 1,500 a long time. Unseasonal flooding, fueled by overwhelming upstream downpours and climate-driven changes in waterway stream, has infringed on noteworthy religious complexes in Upper Egypt, counting those close Assiut and Sohag.

These religious communities, carved into cliffs or built along riverbanks, are sacrosanct locales of early Christian legacy and proceed to serve as dynamic places of adore and journey. Presently, numerous are at chance of water harm, auxiliary disintegration, and potential misfortune of crucial devout artifacts, compositions, and divider works of art. Friars and nearby volunteers are working critically to build improvised obstructions, pump out water, and strengthen helpless foundations.

Egyptian legacy specialists and the Coptic Standard Church have called for crisis mediations, counting building ponders and defensive framework. Be that as it may, the pace of floodingâand restricted get to in inaccessible areasâmakes fast conservation endeavors difficult.

This natural emergency highlights the crossing point of climate alter and social legacy, as rising waters imperil points of interest that have stood for centuries. Without prompt activity, the flooding of the Nile seem eradicate imperative joins to Egyptâs Christian past and worldwide devout history.`,
      category: 'religious',
      location: 'Egypt',
      severity: 'moderate',
      keywords: 'Nile flooding, Coptic monasteries, Egypt climate impact'
    },
    {
      id: 13,
      title: "UK Weather: Wettest Spring in Century Causes Widespread Flooding",
      date: "14 mins ago",
      content: `The Joined together Kingdom is hooking with the wettest spring in over a century, as tireless precipitation has activated broad flooding over Britain, Ribs, and parts of Scotland. With precipitation levels outperforming authentic records, waterways have burst their banks, farmlands are waterlogged, and handfuls of communities have been cleared out inundated.

Towns along the Thames, Severn, and Ouse waterways are among the hardest hit, with crisis administrations conducting departures and sandbagging endeavors to secure homes and businesses. Prepare lines have been disturbed, streets closed, and hundreds of schools closed due to floodwaters. The Environment Organization has issued hundreds of surge notices, encouraging inhabitants to stay careful and plan for potential evacuations.

Agricultural districts are confronting extreme misfortunes, as waterlogged soil has postponed planting and harmed spring crops. Protections claims are mounting, and neighborhood committees are calling for pressing government bolster to finance recuperation and repair harmed infrastructure.

Meteorologists interface the diligent rain to a slowed down fly stream design, advance heightens by a warming climate that's expanding the recurrence of extraordinary climate occasions. As the UK faces the repercussions of this memorable spring, specialists are calling for critical speculation in surge strength, maintainable urban seepage frameworks, and climate adjustment arranging to get ready for a wetter, more unusual future.`,
      category: 'flood',
      location: 'UK',
      severity: 'moderate',
      keywords: 'UK flooding, record rainfall, Met Office'
    },
    {
      id: 14,
      title: "Hajj Heat Crisis: Mecca Pilgrims Suffer Through 46°C Temperatures",
      date: "48 mins ago",
      content: `Millions of Muslim travelers performing Hajj in Mecca are confronting extraordinary and perilous warm conditions, with temperatures taking off to 46Â°C (115Â°F) beneath the strongly Saudi sun. The yearly journey, one of the five columns of Islam, requires travelers to perform a arrangement of physically requesting ritualsâmany of them outdoorsâmaking the burning warm a genuine wellbeing risk.

Saudi wellbeing specialists have conveyed thousands of therapeutic staff to supply crisis care, hydration stations, and cooling zones, but cases of warm weariness, parchedness, and heatstroke are rising strongly. Elderly travelers and those with basic wellbeing issues are especially helpless. In spite of broad arranging, the sheer scale of the occasion and the escalated of the warm are pushing security measures to their limits.

To relieve the dangers, organizers have presented shaded regions, moistening frameworks, and disseminated millions of water bottles. Be that as it may, the timing of Hajj amid the crest of summer in later a long time, due to the lunar Islamic calendar, has compounded the challenge.

Climate specialists caution that rising worldwide temperatures are making mass social occasions like Hajj progressively unsafe. As the journey proceeds, the circumstance highlights the critical require for long-term climate adjustment methodologies to ensure members and guarantee the otherworldly travel remains secure for eras to come.`,
      category: 'religious',
      location: 'Saudi Arabia',
      severity: 'severe',
      keywords: 'Hajj heat, Mecca temperatures, pilgrimage weather'
    },
    {
      id: 15,
      title: "Tornado Destroys Historic Arkansas Church Before Baptism Ceremony",
      date: "58 mins ago",
      content: `A capable tornado tore through northern Arkansas this week, taking off a path of pulverization and appallingly decimating a notable church fair minutes some time recently a planned immersion ceremony. The 130-year-old structure, a foundation of the neighborhood community, was diminished to rubble in minutes as the EF3 tornado tore through the rustic town with wind speeds surpassing 140 mph (225 km/h).

Miraculously, no one was interior the church when the tornado struck. Congregants had been postponed by declining climate conditions, a turn of destiny that likely spared lives. Neighborhood inhabitants depict the misfortune of the church as profoundly emotionalânot as it were as a put of revere but as a imperative gathering space woven into the town's history and identity.

Emergency responders and community volunteers arrived quickly, helping with flotsam and jetsam evacuation and rescuing what few artifacts remained, counting charred pages from hymnals and parts of recolored glass windows. The broader range too endured harm to homes, ranches, and framework, with control blackouts influencing thousands.

Meteorologists caution that such extreme tornadoes are getting to be more visit and sporadic, driven in portion by changing climate conditions. As the town starts the troublesome handle of recuperation and modifying, the devastation of the adored church serves as a capable image of both powerlessness and flexibility within the confront of natureâs wrath.`,
      category: 'religious',
      location: 'USA',
      severity: 'moderate',
      keywords: 'church tornado, Arkansas storms, religious climate impact'
    },

    // New articles 16-30 with optimized keywords
    {
      id: 16,
      title: "California Drought Emergency: Reservoirs at Critical Lows | Water Restrictions Expanded",
      date: "1 hour ago",
      content: `California is confronting a extending dry season crisis as key supplies over the state reach basically moo levels, provoking authorities to grow water confinements statewide. After numerous sequential dry winters and record-breaking warm, water capacity in major stores like Lake Shasta and Lake Oroville has dropped to less than 30% of capacityâlevels not seen in decades.

Governor Gavin Newsom has pronounced a statewide dry spell crisis, encouraging inhabitants, ranches, and businesses to radically decrease water utilization. Obligatory preservation measures presently incorporate limits on open air watering, bans on washing carports, and decreased agrarian assignments. Urban water providers are being inquired to cut utilization by up to 20%.

The agrarian division, which depends intensely on water from the Central Valley Venture and State Water Venture, is being hit particularly difficult, with trim yields debilitated and neglected farmland expanding. Provincial communities are too seeing wells run dry, constraining a few family units to depend on trucked-in water.

Climate researchers point to long-term trendsârising temperatures, contracting snowpacks, and moving precipitation patternsâas key drivers of this delayed dry season. Specialists caution that California must quicken venture in water reusing, desalination, and maintainable groundwater administration to get ready for an progressively bone-dry future. The current emergency may be a stark update of the Westâs water helplessness in a warming world.`,
      category: 'drought',
      location: 'USA',
      severity: 'severe',
      keywords: 'California drought, water restrictions, megadrought, climate change'
    },
    {
      id: 17,
      title: "European Heatwave: France Records All-Time High Temperature of 45.9°C",
      date: "2 hours ago",
      content: `France is reeling from a memorable heatwave as the nation recorded its most noteworthy temperature everâan astounding 45.9Â°C (114.6Â°F) within the southern town of Gallargues-le-Montueux. The burning warm has covered much of Western Europe, disturbing existence , imperiling open wellbeing, and raising new concerns around the forces impacts of climate change.

The French government has issued red-alert warm notices in numerous districts, encouraging inhabitants to remain inside, hydrate routinely, and check on helpless populaces such as the elderly and youthful children. Schools have been closed, clinics are on tall caution, and cooling covers have been opened in urban centers. Agrarian segments are too feeling the strain, with heat-stressed crops and animals misfortunes mounting.

Public wellbeing specialists are drawing comparisons to the dangerous 2003 heatwave, which slaughtered over 15,000 individuals in France. Whereas crisis readiness has progressed since at that point, the concentrated and early entry of this summerâs heatwave have caught numerous off guard.

Climate researchers emphasize that such extraordinary temperature occasions are getting to be more visit and extreme due to worldwide warming. Franceâs record-breaking warm is portion of a broader European design, underscoring the critical require for both relief endeavors to decrease emanations and adjustment techniques to ensure communities from heightening climate dangers.`,
      category: 'heat',
      location: 'France',
      severity: 'severe',
      keywords: 'European heatwave, record temperatures, France weather'
    },
    {
      id: 18,
      title: "Amazon Rainforest Fires: Brazil Reports 83% Increase in Blazes",
      date: "3 hours ago",
      content: `In a profoundly disturbing natural advancement, Brazil has detailed an 83% surge in rapidly spreading fires inside the Amazon rainforest, raising worldwide concerns over deforestation, climate alter, and biodiversity misfortune. Partisan information from Brazilâs National Established for Space Investigate (INPE) uncovers thousands of dynamic fire hotspots over the locale, with June encountering one of the most elevated fire checks in later a long time. The Amazon, frequently alluded to as the âlungs of the Earth,â plays a basic part in carbon sequestration and worldwide climate control. In any case, unlawful logging, slash-and-burn farming, and powerless authorization of natural assurances have quickened woodland corruption. Naturalists and climate researchers caution that the expanding recurrence and concentrated of Amazon fires may thrust the biological system toward an irreversible tipping point, discharging gigantic sums of put away carbon dioxide and undermining endless species. The rise in bursts coincides with approach rollbacks and budget cuts to Brazilâs natural offices, provoking broad feedback from worldwide communities and natural organizations. Deforestation-driven fires not as it were affect neighborhood discuss quality but moreover contribute essentially to worldwide nursery gas emanations. Critical universal participation, economical arrive utilize hones, and more grounded administrative systems are basic to combat this raising emergency and protect one of the planetâs most crucial biological treasures.`,
      category: 'wildfire',
      location: 'Brazil',
      severity: 'severe',
      keywords: 'Amazon fires, Brazil wildfires, rainforest destruction'
    },
    {
      id: 19,
      title: "Monsoon Mayhem: Bangladesh Floods Displace 4 Million People",
      date: "45 mins ago",
      content: `Bangladesh is hooking with one of its most exceedingly bad helpful emergencies in later a long time as persistent storm downpours trigger disastrous surges, uprooting over 4 million individuals. The low-lying delta country, as of now powerless to climate alter, has seen streams swell past threat levels, submerging whole towns, farmlands, and crucial foundation. Heavy storms have overpowered dikes and waste frameworks, driving to broad waterlogging and relocation over locale like Sylhet, Sunamganj, and Kurigram. Crisis covers are stuffed, whereas nourishment deficiencies, waterborne infections, and need of sanitation are compounding the emergency. Climate specialists point to a aggravating patternârising ocean levels, frigid liquefy within the Himalayas, and heightens rainstorm are making such extraordinary climate occasions more visit and serious in South Asia. Bangladesh, in spite of contributing negligibly to worldwide nursery gas emissions, remains one of the foremost climate-vulnerable nations within the world. The scale of uprooting highlights the pressing require for climate-resilient foundation, early caution frameworks, and universal help. Compassionate organizations are calling for quick alleviation and long-term adjustment methodologies to secure millions from repeating climate-induced calamities. As the floodwaters proceed to rise, the world must act unequivocally to back Bangladesh and address the broader climate emergency fueling such obliterating characteristic occasions.`,
      category: 'flood',
      location: 'Bangladesh',
      severity: 'severe',
      keywords: 'Bangladesh floods, monsoon rains, climate migration'
    },
    {
      id: 20,
      title: "Texas Deep Freeze: Power Grid Fails Amid Historic Winter Storm",
      date: "5 hours ago",
      content: `A notable winter storm has dove Texas into a profound solidify, uncovering basic shortcomings within the stateâs control framework and clearing out millions without warm, power, or clean water. As temperatures dropped to record lows, request for power surged, causing the to a great extent separated Texas control gridâmanaged by ERCOT (Electric Unwavering quality Committee of Texas)âto buckle beneath weight. The disappointment driven to rolling power outages, far reaching blackouts, and a humanitarian crisis that paralyzed everyday life over the state. Solidified gas pipelines, offline wind turbines, and constrained winterization of control plants seriously hampered vitality generation, highlighting the gridâs need of readiness for extraordinary cold. Clinics, nursing homes, and fundamental administrations were extended lean, whereas inhabitants mixed for nourishment, warmth, and security. This emergency reignited a national wrangle about almost vitality approach, framework versatility, and climate adjustment. Specialists contend that the profound solidify is portion of a broader drift of extraordinary climate escalates by climate alter, challenging the misinterpretation that southern states are resistant to such conditions. The Texas power outage underscores the pressing require for foundation modernization, expanded vitality sources, and vigorous possibility arranging. As the state recuperates, it serves as a stark update that indeed energy-rich districts are not safe to the cascading impacts of climate disturbance and destitute administrative foreknowledge.`,
      category: 'cold',
      location: 'USA',
      severity: 'severe',
      keywords: 'Texas freeze, power outage, winter storm'
    },
    {
      id: 21,
      title: "Siberian Heatwave: Arctic Temperatures Hit 38°C in Record-Breaking Event",
      date: "6 hours ago",
      content: `In an uncommon climate occasion, temperatures in Siberia's Ice locale have taken off to 38Â°C (100.4Â°F), checking the most noteworthy temperature ever recorded north of the Ice Circle. This record-breaking heatwave, centered around the Russian town of Verkhoyansk, may be a stark pointer of the quickening climate emergency and the quick warming of the Arcticâcurrently warming at more than twice the worldwide normal. The seriously warm has activated broad permafrost defrost, rapidly spreading fires, and territory misfortune, with genuine suggestions for worldwide climate steadiness. As the solidified ground dissolves, endless sums of methaneâa powerful nursery gasâare being discharged, making a unsafe criticism circle that may advance worsen worldwide warming. Researchers caution that such extraordinary climate occasions, once considered uncommon, are presently getting to be more visit and extreme due to human-induced climate alter. The Siberian heatwave has too disturbed neighborhood environments, uprooted natural life, and postured wellbeing dangers to communities unaccustomed to such conditions. Climate specialists and natural bunches are calling for quick worldwide activity to control carbon emanations, contribute in climate adjustment, and secure powerless polar districts. This disturbing occasion serves as a capable wake-up call that the impacts of climate alter are not far off or abstractâthey are happening presently, with worldwide consequences.`,
      category: 'heat',
      location: 'Russia',
      severity: 'severe',
      keywords: 'Arctic heatwave, Siberia temperatures, climate feedback loops'
    },
    {
      id: 22,
      title: "Hurricane Season Forecast: NOAA Predicts Above-Average Atlantic Activity",
      date: "22 mins ago",
      content: `The National Maritime and Climatic Organization (NOAA) has issued a concerning figure for the up and coming Atlantic storm season, anticipating above-average storm movement due to a combination of hotter sea temperatures and moving barometrical conditions. Specialists expect between 17 to 25 named storms, counting 8 to 13 storms, with up to 7 conceivably coming to major tropical storm status (Category 3 or higher). This increased viewpoint is generally driven by record-breaking ocean surface temperatures within the Atlantic, which fuel storm arrangement and heightened. The move from El NiÃ±o to La NiÃ±a conditions is additionally anticipated to diminish wind shear, making a more favorable environment for tropical storm improvement. Coastal communities from the Inlet of Mexico to the Eastern Seaboard are being encouraged to get ready early, as the chance of landfalling storms remains significant. Climate researchers caution that worldwide warming isn't as it were expanding the recurrence of tropical violent winds but too making them more seriously and dangerous. With rising ocean levels and quick urbanization in coastal locales, the potential for disastrous flooding and storm surge is developing. NOAAâs estimate highlights the pressing require for vigorous catastrophe readiness, strong framework, and climate adjustment methodologies as extraordinary climate gets to be the unused standard in a warming world.`,
      category: 'storm',
      location: 'Atlantic',
      severity: 'moderate',
      keywords: 'hurricane forecast, NOAA prediction, Atlantic storms'
    },
    {
      id: 23,
      title: "Deadly Landslide in Colombia: Heavy Rains Trigger Mountain Collapse",
      date: "1 hour ago",
      content: `A obliterating avalanche in Colombia has claimed handfuls of lives and cleared out whole communities buried beneath rubble, taking after days of tenacious precipitation that soaked the hilly territory. The dangerous collapse happened within the rustic division of ChocÃ³, where unsteady inclines gave way, clearing absent homes, streets, and farmland in seconds. Protect endeavors are underway, but the thick mud and proceeded rain are hampering operations, raising fears that the passing toll may rise. Colombia, with its rough geology and defenseless framework, is especially inclined to such calamities amid the stormy season. Climate researchers caution that escalates precipitation patternsâdriven by worldwide warming and moving climate systemsâare expanding the recurrence and seriousness of avalanches over the Andean locale. Deforestation, unregulated development, and destitute arrive administration assist compound the chance, clearing out marginalized communities excessively uncovered to such risks. This awful occasion underscores the pressing require for speculation in early caution frameworks, feasible land-use arranging, and climate-resilient foundation. As Colombia grieves the lives misplaced, the worldwide community and nearby specialists are being called upon to reinforce catastrophe readiness and natural securities. The avalanche serves as a horrid update of how climate alter is turning common vulnerabilities into deadly dangers, particularly in underserved and biologically delicate districts.`,
      category: 'flood',
      location: 'Colombia',
      severity: 'severe',
      keywords: 'Colombia landslide, extreme rainfall, mountain weather'
    },
    {
      id: 24,
      title: "Drought Threatens Spain's Olive Harvest: Farmers Face 'Worst Year in Memory'",
      date: "3 hours ago",
      content: `Spain, the worldâs biggest maker of olive oil, is confronting a serious agrarian emergency as an tenacious dry season debilitates to obliterate this yearâs olive gather. Ranchers over key olive-growing districts like Andalusia are announcing shriveled forests, split soil, and radically diminished yieldsâsome evaluating misfortunes of up to 80%. With precipitation levels at noteworthy lows and taking off summer temperatures, numerous depict this as the "most exceedingly bad year in memory" for the industry. The delayed dry spell, escalates by climate alter, has not as it were dried up supplies but too driven to water apportioning and edit disappointments over southern Europe. Olive oil generation is especially touchy to climate designs, and the push from water shortage is influencing both the amount and quality of the olives. This emergency is as of now driving up costs in worldwide markets and undermining the jobs of thousands of little agriculturists who depend on the collect. Specialists caution that unless critical activity is taken to adjust cultivating hones, contribute in drought-resistant crops, and execute maintainable water administration, such climate-induced disturbances may ended up the standard. Spain's olive oil segment, a foundation of its agrarian economy and Mediterranean culture, stands at a basic point within the confront of a quickly warming planet.`,
      category: 'drought',
      location: 'Spain',
      severity: 'severe',
      keywords: 'Spain drought, olive harvest, agricultural impacts'
    },
    {
      id: 25,
      title: "Kerala Floods: Indian State Battles Second Major Deluge in Three Years",
      date: "2 hours ago",
      content: `The southern Indian state of Kerala is once once more reeling from disastrous floodsâits moment major downpour in fair three yearsâtriggered by ceaseless rainstorm downpours, flooding waterways, and dangerous avalanches. Whole towns have been submerged, streets washed absent, and thousands constrained into crisis covers as specialists scramble to protect stranded inhabitants and provide help. The persistent deluge has overpowered dams and water bodies, especially in locale like Idukki, Wayanad, and Ernakulam, which are confronting life-threatening immersion. Specialists trait the expanding recurrence and escalated of such occasions to climate alter, destitute urban arranging, and wild deforestation in environmentally delicate zones just like the Western Ghats. Kerala, known for its tall proficiency and vigorous healthcare, presently faces the included challenge of overseeing repetitive normal catastrophes in the midst of a developing populace and framework strain. Earthy people have long cautioned approximately the threats of unregulated development and quarrying in flood-prone regions, which have exacerbated the affect of overwhelming precipitation. The calamity highlights the pressing require for climate-resilient advancement, made strides early caution frameworks, and long-term water administration methodologies. As Kerala perseveres however another compassionate emergency, it underscores the worldwide reality that climate extremes are now not anomaliesâthey are quick getting to be a unsafe design that requests quick, facilitated activity.`,
      category: 'flood',
      location: 'India',
      severity: 'severe',
      keywords: 'Kerala floods, India monsoon, extreme rainfall'
    },
    {
      id: 26,
      title: "Swiss Glacier Collapse: Rapid Melting Creates Dangerous Conditions",
      date: "4 hours ago",
      content: `Switzerland is seeing a emotional and disturbing result of climate alter as one of its notorious ice sheets experiences fast collapse, making perilous conditions for adjacent communities and biological systems. The quickened dissolving of the glacierâfueled by record-high temperatures and contracting snow coverâhas driven to destabilized ice masses, sudden torrential slides, and potential flooding dangers from frigid lakes. Researchers observing the Alps report that ice sheets are withdrawing at exceptional rates, with a few losing over 6% of their volume in a single year. The collapse underscores the delicate state of Europeâs high-altitude cryosphere, where rising worldwide temperatures are reshaping scenes that have stood for centuries. Switzerland, regularly considered a show for natural stewardship, presently faces raising dangers to its mountain framework, tourism economy, and water supply, which is intensely dependent on cold soften amid dry seasons. The occurrence is additionally a stark caution for other glaciated locales around the world: climate alter isn't a removed danger, but a show emergency. Specialists are calling for critical activity to decrease nursery gas outflows, contribute in icy mass checking advances, and create disaster preparedness strategies. The Swiss icy mass collapse could be a capable image of the broader natural change unfurling within the age of worldwide warming.`,
      category: 'cold',
      location: 'Switzerland',
      severity: 'moderate',
      keywords: 'glacier collapse, alpine melting, Switzerland climate'
    },
    {
      id: 27,
      title: "Zimbabwe Drought: 5 Million Face Food Shortages as Crops Fail",
      date: "5 hours ago",
      content: `Zimbabwe is within the hold of a annihilating dry spell that has cleared out over 5 million individuals confronting intense nourishment deficiencies, as fizzled downpours and extraordinary warm cripple the nationâs rural yield. Once-fertile areas have turned to tidy, with staple crops like maize and sorghum shrinking some time recently gather. The El NiÃ±o climate wonder, coupled with the broader impacts of climate alter, has heightens the dry conditions, making this one of the most exceedingly bad dry spells within the countryâs later history. Provincial communities, intensely subordinate on subsistence cultivating, are among the hardest hit, with animals biting the dust and water sources drying up. The emergency is pushing families to the brink of starvation and driving numerous to desert their arrive in look of help. Zimbabweâs financial insecurity and constrained nourishment saves are compounding the issue, clearing out helpful offices battling to meet surging requests. The government has announced a state of fiasco, engaging for worldwide help to supply crisis nourishment help and long-term flexibility methodologies. Specialists caution that without pressing climate adaptation, improved water system, and sustainable land use hones, such emergencies will proceed to heighten. Zimbabweâs dry season could be a desperate update that the worldwide climate crisis is as of now undermining nourishment security in a few of the worldâs most helpless districts.`,
      category: 'drought',
      location: 'Zimbabwe',
      severity: 'severe',
      keywords: 'Zimbabwe drought, food security, African climate'
    },
    {
      id: 28,
      title: "Pacific Northwest Heat Dome: Portland Hits 46°C in Unprecedented Event",
      date: "1 day ago",
      content: `An exceptional warm arch has overwhelmed the Pacific Northwest, pushing temperatures in cities like Portland, Oregon to a record-breaking 46Â°C (115Â°F), shattering past climate standards in a locale customarily known for its gentle summers. This extraordinary climate eventâcaused by a stationary high-pressure framework catching hot discuss over the areaâhas driven to handfuls of passings, overpowered crisis administrations, and constrained the closure of schools, businesses, and transportation systems. Powerless populaces, particularly the elderly and unhoused, are bearing the brunt of the emergency, as foundation built for cooler climates buckles beneath the stretch. Climate researchers point to worldwide warming as a major driver, caution that such "warm arches" are getting to be more visit and extreme due to rising nursery gas concentrations within the climate. The occasion has moreover raised cautions around the strength of northern locales that have not generally required warm adjustment measures like broad discuss conditioning or warm activity plans. Crops have shriveled, control networks are strained, and rapidly spreading fires have escalates, compounding the regionâs climate vulnerabilities. The Pacific Northwest warm arch stands as a stark caution that no put is resistant to the impacts of climate alter, which pressing speculations in climate flexibility and outflows decreases are critical to avoid indeed more disastrous extremes within the future.`,
      category: 'heat',
      location: 'USA',
      severity: 'severe',
      keywords: 'heat dome, Pacific Northwest, record temperatures'
    },
    {
      id: 29,
      title: "Great Barrier Reef: Mass Coral Bleaching Event Declared After Heat Stress",
      date: "2 days ago",
      content: `Australia's Extraordinary Boundary Reef is encountering however another mass coral dying occasion, with researchers announcing it one of the foremost extreme on record due to drawn out marine heatwaves and rising sea temperatures. Activated by intemperate warm push, this dying marks the seventh such occasion in later decadesâan disturbing flag that the worldâs biggest coral reef framework is beneath intense risk from climate alter. Ethereal and submerged overviews have uncovered far reaching fading over all three locales of the reef, with numerous corals turning spooky white as they oust the advantageous green growth that give them with vitality and dynamic color. Whereas a few corals may recoup in the event that temperatures drop, rehashed presentation to extraordinary warm debilitates reef versatility, increments mortality rates, and disturbs the fragile marine biological systems that depend on them. The reef, a UNESCO World Legacy location, bolsters thousands of marine species and plays a basic part in Australia's tourism and angling businesses. Specialists caution that without critical worldwide activity to cut nursery gas outflows and constrain sea warming, these occasions will proceed with expanding recurrence and concentrated. The mass fading of the Great Boundary Reef isn't fair an natural tragedyâitâs a stark pointer of the heightening worldwide climate crisis requesting quick and supported reaction.`,
      category: 'heat',
      location: 'Australia',
      severity: 'severe',
      keywords: 'coral bleaching, Great Barrier Reef, ocean warming'
    },
    {
      id: 30,
      title: "Himalayan Glacial Lake Threat: Climate Change Increases Flood Risks",
      date: "6 hours ago",
      content: `The Himalayas, frequently alluded to as the "Third Post," are confronting a developing natural risk as climate alter quickens the dissolving of ice sheets, significantly expanding the chance of cold lake upheaval surges (GLOFs). As rising temperatures cause ice to withdraw, meltwater gathers in delicate frigid lakes held back by unsteady common dams made of free shake and flotsam and jetsam. These lakes, swelling in measure and number, posture a genuine threat to downstream communities in nations like Nepal, India, Bhutan, and China. A sudden breachâoften activated by torrential slides, avalanches, or seismic activityâcan unleash disastrous surges, pulverizing homes, foundation, and farmlands in minutes. In later a long time, the recurrence and scale of these surge occasions have escalates, with specialists connecting them specifically to worldwide warming. The 2021 Chamoli calamity in Uttarakhand, India, served as a stark update of the dangerous results of Himalayan frigid precariousness. Researchers are encouraging pressing venture in adj. observing, early caution frameworks, and chance moderation foundation to diminish the affect of potential GLOFs. As the climate emergency extends, the Himalayan regionâhome to millions and the source of major Asian riversâis progressively helpless. Securing it requires facilitated territorial endeavors, worldwide climate activity, and feasible improvement methodologies in high-altitude situations.`,
      category: 'flood',
      location: 'Himalayas',
      severity: 'moderate',
      keywords: 'glacial lakes, Himalayan climate, flood risk'
    }
  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = activeCategory === 'all' || story.category === activeCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.keywords.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).slice(0, visibleStories);

  const loadMoreStories = () => {
    setVisibleStories(prev => prev + 6);
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setVisibleStories(15);
  };

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return stories.length;
    return stories.filter(story => story.category === categoryId).length;
  };

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.exploreweather.site/top-stories" />
      </Head>

      <nav className="weather-nav">
        <div className="container">
          <div className="nav-content">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search stories by title, content or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search weather stories"
              />
              <svg className="search-icon" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <div className="category-container">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleStories(30);
                  }}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  aria-label={`Filter by ${category.name}`}
                >
                  {category.name}
                  <span className="category-count">({getCategoryCount(category.id)})</span>
                </button>
              ))}
              {(activeCategory !== 'all' || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="reset-btn"
                  aria-label="Reset all filters"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="results-info">
          <p>
            Showing {filteredStories.length} of {stories.length} stories
            {activeCategory !== 'all' && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {filteredStories.length > 0 ? (
          <>
            <div className="weather-grid">
              {filteredStories.map((story) => (
                <article key={story.id} className="weather-card">
                  <div className="card-content-wrapper">
                    <div className="card-header">
                      <span className={`severity-badge ${story.severity}`}>
                        {story.severity === 'severe' ? 'Severe' : 'Moderate'}
                      </span>
                      <span className="story-date">{story.date}</span>
                    </div>
                    <h2 className="card-title">{story.title}</h2>
                    <p className="card-content">{story.content}</p>
                    <div className="card-footer">
                      <span className="location">
                        <svg className="location-icon" viewBox="0 0 24 24" width="16" height="16">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                        {story.location}
                      </span>
                      <span className="category-tag">
                        {categories.find(c => c.id === story.category)?.name}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {visibleStories < filteredStories.length && (
              <div className="load-more-container">
                <button
                  onClick={loadMoreStories}
                  className="load-more-btn"
                  aria-label="Load more stories"
                >
                  Load More Stories
                  <svg className="chevron-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            <svg className="empty-icon" viewBox="0 0 24 24" width="48" height="48">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" />
            </svg>
            <h3>No stories found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button
              onClick={resetFilters}
              className="reset-btn"
              aria-label="Reset all filters"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>
    </>
  );
}