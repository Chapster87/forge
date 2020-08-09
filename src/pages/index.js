import React, { Component } from "react"
import CardMedia from '@material-ui/core/CardMedia';
import { Link, graphql } from "gatsby"
import { FaRegClock } from "react-icons/fa"

import Layout from "../layouts/layout"
import SEO from '../components/SEO'

import "../styles/homepage.scss"

import bgVidMp4 from '../videos/ForgeJerseyReveal.mp4'
import bgVidOgv from '../videos/ForgeJerseyReveal.ogv'
import bgVidWebm from '../videos/ForgeJerseyReveal.webm'

class Home extends Component {
	render() {

		return (
			<Layout>
				<React.Fragment>
					<SEO title="Homepage" keywords={[`gatsby`, `application`, `react`]} />

					<video id="bg-video" className="home-video" muted loop>
						<source src={bgVidMp4} type="video/mp4"/>
						<source src={bgVidOgv} type="video/ogg"/>
						<source src={bgVidWebm} type="video/webm"/>
					</video>

				</React.Fragment>
			</Layout>
		)
	}

	componentDidMount() {
    	var video = document.getElementById("bg-video");

		/**
		 * Check if video can play, and play it
		 */
		video.addEventListener( "canplay", function() {
			video.play();
		});
	}
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`