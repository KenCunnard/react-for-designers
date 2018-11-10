import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card/card';
import Section from '../components/section/section';
import Wave from '../components/wave/wave';

const IndexPage = () => (
  <div>
    <div className="hero">
      <div className="heroGroup">
        <h1>Learn to<br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="logos">
          <img src={ require('../images/logo-sketch.png') }></img>
          <img src={ require('../images/logo-figma.png') }></img>
          <img src={ require('../images/logo-studio.png') }></img>
          <img src={ require('../images/logo-framer.png') }></img>
          <img src={ require('../images/logo-react.png') }></img>
          <img src={ require('../images/logo-swift.png') }></img>
        </div>
        <Wave />
      </div>
    </div>
    <div className="cards">
      <h2>11 courses, more coming</h2>
      <div className="cardGroup">
        <Card 
          title="Design System" 
          text="10 sections" 
          image={require('../images/wallpaper.jpg')}
        />
        <Card 
          title="React for Designers" 
          text="12 sections" 
          image={require('../images/wallpaper2.jpg')}
        />
        <Card 
          title="Sound Design" 
          text="5 sections" 
          image={require('../images/wallpaper3.jpg')}
        />
        <Card 
          title="ARKit 2" 
          text="10 sections" 
          image={require('../images/wallpaper4.jpg')}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')} 
      logo={require('../images/logo-react.png')} 
      title="React for Designers" 
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
