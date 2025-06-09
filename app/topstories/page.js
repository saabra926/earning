// pages/top-stories.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import "./page.css"

export default function TopStories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleStories, setVisibleStories] = useState(6);

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'heat', name: 'Heatwaves' },
    { id: 'storm', name: 'Storms' },
    { id: 'flood', name: 'Floods' },
    { id: 'cold', name: 'Cold Waves' },
    { id: 'religious', name: 'Religious Impact' }
  ];

  const stories = [


    {
      title: "🔥 Heatwave Crisis in India Reaches Alarming Levels",
      date: "April 29, 2025",
      content: `India is experiencing a never-before heatwave, with the temperature in Delhi, Rajasthan, and Uttar Pradesh topping 47°C. Heatstroke patients are flooding hospitals, and the government has sounded red alerts in some areas. Crops are reported to be failing by farmers, water shortage is rising, and schools have been shut. Climate scientists say that such high temperatures are becoming more intense and regular due to global warming.`,
      category: 'heat',
      location: 'India',
      severity: 'severe'
    },
    {
      title: "🌪️ Tornadoes Rip Across Midwest USA",
      date: "April 28, 2025",
      content: `Several EF3 and EF4 tornadoes ravaged Oklahoma, Kansas, and Missouri, leveling houses and infrastructure. The National Weather Service made repeated warnings, and people scrambled for cover. Damage is estimated at more than $500 million. Warm, wet Gulf air colliding with dry Rocky Mountain air provided perfect conditions for tornadoes.`,
      category: 'storm',
      location: 'USA',
      severity: 'severe'
    },
    {
      title: "🌊 Flash Floods Devastate Jakarta, Indonesia",
      date: "April 27, 2025",
      content: `Heavy three-day rains caused catastrophic flooding in Jakarta, inundating entire city districts. More than 200,000 residents were left homeless. Emergency centers were established. Jakarta's old drainage system could not handle the volume. Authorities are accelerating new canals and pumps plans.`,
      category: 'flood',
      location: 'Indonesia',
      severity: 'moderate'
    },
    {
      title: "❄️ Canada Braces for Harsh Arctic Winter",
      date: "April 26, 2025",
      content: `Arctic gusts are blowing through Canada, delivering below-freezing conditions to Nunavut, Manitoba, and Alberta. Inuit members have stocked up emergency rations, as schools and highways prepare for shutdown. Blizzards have been forecast by the Canadian Weather Office throughout the prairies.`,
      category: 'cold',
      location: 'Canada',
      severity: 'moderate'
    },
    {
      title: "🔥 Wildfires Rage Across Australia's New South Wales",
      date: "April 25, 2025",
      content: `Hot winds and dryness have ignited more than 50 bushfires in the vicinity of Sydney. Firefighters from all over the country have been sent. Some communities have been evacuated, and air quality in Sydney has fallen dramatically.`,
      category: 'heat',
      location: 'Australia',
      severity: 'severe'
    },
    {
      title: "☔ Typhoon Fujin Hits Japan with Record Rainfall",
      date: "April 24, 2025",
      content: `Typhoon Fujin struck with more than 150 km/h winds. Tokyo and Chiba recorded more than 400 mm rain in a 24-hour period. Trains, airports, and schools were closed. More than a million residents were forced to evacuate when rivers overflowed levees.`,
      category: 'storm',
      location: 'Japan',
      severity: 'severe'
    },
    {
      title: "🌬️ Sandstorm Disrupts Travel in Saudi Arabia",
      date: "April 23, 2025",
      content: `A huge sandstorm raged over Riyadh and neighboring cities, lowering visibility to close to zero. Airports halted flights, and roads were temporarily closed. Health alerts have been issued for individuals with respiratory ailments.`,
      category: 'storm',
      location: 'Saudi Arabia',
      severity: 'moderate'
    },
    {
      title: "💨 Cyclone Basil Threatens Madagascar and Mozambique",
      date: "April 22, 2025",
      content: `Cyclone Basil, a Category 3, is bearing down on southeastern Africa across the Indian Ocean. Coastal residents are bracing for flooding and strong winds. International relief is on standby.`,
      category: 'storm',
      location: 'Africa',
      severity: 'severe'
    },
    {
      title: "🌫️ Smog Alert Issued in Beijing Amid Weather Inversion",
      date: "April 21, 2025",
      content: `The air quality index in Beijing reached dangerous levels as a result of a severe temperature inversion. Industrial activity, traffic, and static winds exacerbated the pollution. Outdoor activities were suspended in schools, and masks are advised.`,
      category: 'heat',
      location: 'China',
      severity: 'moderate'
    },
    {
      title: "🌧️ Historic Floods Submerge Venice, Italy",
      date: "April 20, 2025",
      content: `Venice is seeing its worst flooding in 50 years. St. Mark's Basilica and its surroundings are flooded after storm surges merged with heavy rain. Tourism has ground to a halt.`,
      category: 'flood',
      location: 'Italy',
      severity: 'severe'
    },
    {
      title: "🔥 Ramadan Fasting Under Scorching Temperatures in North Africa",
      date: "March 31, 2025",
      content: `Moroccan and Algerian Muslims fasted through Ramadan during a record heatwave. Daytime temperatures reached 45°C, making it physically draining to fast without water. Indoor iftars became a community norm, and doctors recommended caution.`,
      category: 'religious',
      location: 'North Africa',
      severity: 'moderate'
    },
    {
      title: "🌊 Rising Nile Endangers Coptic Christian Sites",
      date: "April 01, 2025",
      content: `Unusual Nile flooding affected some ancient Coptic monasteries in Egypt, endangering wall paintings and manuscripts. The monks of St. Macarius rushed to save religious texts. Climate scientists attribute the flood to upstream dam discharges and unstable rainfall.`,
      category: 'religious',
      location: 'Egypt',
      severity: 'moderate'
    },
    {
      title: "☁️ UK Sees Wettest Spring in a Century",
      date: "April 15, 2025",
      content: `The UK has just set its wettest spring for more than 100 years. The rivers of Yorkshire and the Midlands are at or near flood points. Rail and road journeys have been affected.`,
      category: 'flood',
      location: 'UK',
      severity: 'moderate'
    },
    {
      title: "🔥 Pilgrims Endure Blistering Heat at Hajj in Saudi Arabia",
      date: "April 04, 2025",
      content: `Millions of pilgrims thronged Mecca under a merciless sun during Hajj this year, with temperatures reaching more than 46°C. Hundreds were treated for dehydration and heatstroke at medical tents. Children and elderly pilgrims suffered the most.`,
      category: 'religious',
      location: 'Saudi Arabia',
      severity: 'severe'
    },
    {
      title: "🌪️ Tornado Wrecks Rural Church Days Before Baptisms",
      date: "December 19, 2025",
      content: `A twister devastated a small Arkansas town, leveling a century-old church where 12 children were to be baptized. The congregation met for a makeshift service in a barn. Resiliently, even amidst the destruction, hymns were sung and a vow to rebuild was made.`,
      category: 'religious',
      location: 'USA',
      severity: 'moderate'
    }


  ];

  const filteredStories = stories.filter(story => {
    const matchesCategory = activeCategory === 'all' || story.category === activeCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).slice(0, visibleStories);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const loadMoreStories = () => {
    setVisibleStories(prev => prev + 6);
  };

  return (
    <>

    <Head>
        <link rel="canonical" href="https://www.exploreweather.site/about" />
      </Head>

      <header className="weather-header">
        <div className="container">
          <h1>Global Weather Stories</h1>
          <p className="subtitle">Tracking extreme climate events worldwide</p>
        </div>
      </header>

      <nav className="weather-nav">
        <div className="container">
          <div className="nav-content">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="search-icon" viewBox="0 0 20 20">
                <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </div>
            <div className="category-container">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleStories(6);
                  }}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container">
        {filteredStories.length > 0 ? (
          <>
            <div className="weather-grid">
              {filteredStories.map((story, index) => (
                <article key={index} className="weather-card">
                  <div className="card-header">
                    <span className={`severity-badge ${story.severity}`}>
                      {story.severity === 'severe' ? 'Severe' : 'Moderate'}
                    </span>
                    <span className="story-date">{formatDate(story.date)}</span>
                  </div>
                  <h2 className="card-title">{story.title}</h2>
                  <p className="card-content">{story.content}</p>
                  <div className="card-footer">
                    <span className="location">{story.location}</span>
                  </div>
                </article>
              ))}
            </div>



            {visibleStories < filteredStories.length && (
              <div className="load-more-container">
                <button onClick={loadMoreStories} className="load-more-btn">
                  Load More Stories
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
          </div>
        )}
      </main>


    </>
  );
}