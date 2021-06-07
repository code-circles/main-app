import React from 'react'
import Head from 'next/head'
import SpotlightCard from '../components/SpotlightCard'

function About() {
  return (
    <div>
      <Head>
        <title>Upward</title>
        <meta name="description" content="Advancing women in tech" />
        <link rel="icon" href="/upward-logo.png" />
      </Head>
      <div className="container text-center page-margin-top">
        <h1>About Us</h1>
        <div>
          <p>
            This diversity project started to help give engineers{' '}
            <b>hands-on experience</b> with new and popular technologies used at
            startups, such as <b>React</b> and <b>Node.js</b>. Our goal is to
            create a web application to help <b>advance women in tech</b>{' '}
            through study groups and <b>mentorship</b>. Our web application is
            an <b>open source project</b> that women engineers work on to build
            features on a live application that both <b>builds their skills</b>,
            and <b>benefits the community</b> as a whole.
          </p>
          <p>
            Get involved by signing up for the waitlist to join one of our study
            groups, or by signing up to get mentorship and career development
            support as you find your next role with Upward.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <SpotlightCard
              name="Mariane Bekker"
              image="/marianebekker.jpeg"
              role="Founder &amp; CEO"
              linkedin="https://www.linkedin.com/in/marianebekker/"
              bio="Mariane is a software engineer leader with over a decade of experience mentoring software engineers. She started her career as a software engineer after graduating from McGill University in Canada and then moved to San Francisco.  Her passion and super power is mentoring other women in tech to close the gender gap."></SpotlightCard>
            <SpotlightCard
              name="Louise Lehman"
              role="Lead Software Engineer"
              image="/louiselehman.jpeg"
              linkedin="https://www.linkedin.com/in/louiselehman/"
              bio="Louise is a Full Stack Software Engineer in the health and wellness industry. She loves having the opportunity to work and interact with people across differing disciplines, including product, architecture, UX, copy, research, and AI/ML. She aspires to be a humble teacher, a trustworthy and helpful collaborator, a good listener, an analytical thinker, a good friend, and to be graceful amidst chaos."></SpotlightCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
