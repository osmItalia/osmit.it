import * as React from "react"

import { BgImage } from "gbimage-bridge"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import HTMLRenderer from "react-html-renderer"

import { graphql } from 'gatsby';

import Map from '../components/map';

import config from '../config';
import { Facebook, GitHub } from "react-feather";


const IndexPage = ({ data }) => {
  const imageMap = data.allFile.edges.map(e => ({ [e.node.name]: getImage(e.node) }))
    .reduce((p,c) => Object.assign(p,c), {})

  const { placeholderImage } = data
  const image = getImage(placeholderImage)

  const stack = [
    config.headerGradientOverlay,
    image,
  ]

  return (
    <>
      <BgImage
        Tag="header"
        className="py-12"
        image={stack}
        preserveStackingContext
      >
        <div className="max-w-6xl p-2 mx-auto md:p-4 flex">
          <div className="flex">
            <StaticImage 
              className="mr-5" 
              alt="logo Wikimedia" 
              src="../images/WIKIItaly.png" 
              width={70} 
              height={70} 
              layout="fixed" 
              loading="eager" 
              placeholder="blurred"
            />
            <StaticImage 
              alt="logo OSM Italia" 
              src="../images/OSMItaly.svg" 
              width={70} 
              height={70} 
              layout="fixed" 
              loading="eager" 
              placeholder="blurred" 
            />
          </div>
          <div className="ml-auto font-bold self-center uppercase">
            <a className="mx-2" href="#">Home</a>
            <a className="mx-2" href="#chisiamo">Chi Siamo</a>
            <a className="mx-2" href="#progetti">Progetti</a>
            <a className="mx-2" href="#contatti">Contatti</a>
          </div>
        </div>
      </BgImage>
      <main className="max-w-6xl p-2 mx-auto md:p-4">
        <section className="my-10">
          <h2 className="text-3xl flex mb-2 font-bold">
            <StaticImage 
              loading="eager" 
              alt="" 
              className="mr-5" 
              src="../images/osm.svg" 
              width={50} 
              layout="fixed" 
            />{config.osmTitle}
          </h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5">
            <HTMLRenderer html={config.osmDescription} />
          </div>
          <Map />
        </section>
        <section className="my-10" id="chisiamo">
          <h2 className="text-3xl flex mb-2 font-bold">
            <StaticImage 
              alt="" 
              className="mr-5" 
              src="../images/osm.svg" 
              width={50} layout="fixed" 
            />{config.osmItalyTitle}</h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full">
            <HTMLRenderer html={config.osmItalyDescription} />
          </div>
          <StaticImage 
            src="../images/image.png" 
            layout="fullWidth" 
            className="mx-auto mt-5 mx-10" 
          />
        </section>
        <section id="progetti" className="mb-10">
          <h2 className="text-3xl flex mb-2 font-bold">
            <StaticImage 
              alt="" 
              className="mr-5" 
              src="../images/osm.svg" 
              width={50} 
              layout="fixed" 
            />Progetti
          </h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5">
            <HTMLRenderer html={config.projectsDescription} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
            {config.projects.map(p => (
              <div className="flex gap-4" key={p.name}>
                <GatsbyImage image={imageMap[p.image]} alt="" />
                <div>
                  <p className="text-lg font-bold">{p.name}</p>
                  <p className="mb-5">{p.description}</p>
                  <a href={p.link} className="mt-1 px-3 py-2 bg-first rounded">Vai</a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contatti">
        <h2 className="text-3xl font-bold mb-2">{config.contactTitle}</h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5">
            <HTMLRenderer html={config.contactDescription} />
          </div>
          <div className="flex gap-4 items-center mt-5">
            {config.github && (
              <a href={config.github.url} target="blank" className="flex gap-2">
                <GitHub />{config.github.text}
              </a>)}
            {config.facebook && (
              <a href={config.facebook.url} target="blank" className="flex gap-2">
                <Facebook />{config.facebook.text}
              </a>)}
          </div>
        </section>
      </main>
      <footer>
        <div className="max-w-6xl p-2 mx-auto md:p-4 my-5">
          
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const indexQuery = graphql`
  query AssetsPhotos {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/images/projects/"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 150
              height: 150
              layout: FIXED
              placeholder: BLURRED
            )
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
