import * as React from "react"

import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import HTMLRenderer from "react-html-renderer"
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import loadable from '@loadable/component';
import ResponsiveEmbed from "react-responsive-embed";
import ReactMarkdown from 'react-markdown';
import { Menu } from '@headlessui/react';
import classnames from 'classnames';

import config from '../config';

const Map = loadable(() => import("../components/map"));

const IndexPage = ({ data }) => {
  const imageMap = data.allFile.edges.map(e => ({ [e.node.name]: getImage(e.node) }))
    .reduce((p,c) => Object.assign(p,c), {})

  return (
    <>
      <Helmet title={config.siteTitle} defer={false} />
      <header
        className="py-2 border-b-2 sticky top-0 z-[10000] bg-white"
      >
        <div className="max-w-6xl p-2 mx-auto md:p-4 flex">
          <div className="flex items-center">
            <StaticImage 
              alt="logo OSM Italia" 
              src="../images/OSMItaly.png" 
              width={50}
              height={50} 
              layout="fixed" 
              loading="eager" 
              placeholder="blurred"
            />
            <StaticImage 
              loading="eager" 
              alt="" 
              className="mr-5" 
              src="../images/WIKIItaly.png" 
              width={50}
              height={50}
              layout="fixed" 
              placeholder="blurred"
            />
            <div className="ml-1 font-bold text-xl hidden md:block">{config.navbarTitle}</div>
          </div>
          <div className="ml-auto self-center md:hidden">
            <Menu>
              <Menu.Button>
                <svg viewBox="0 0 100 80" width="30" height="30" className="fill-first">
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>
              </Menu.Button>
              <Menu.Items className="absolute flex flex-col bg-white right-2 drop-shadow-md">
                {config.navbar.map(item => (
                  <Menu.Item key={item.href}>
                    {({ active }) => (
                      <a 
                        className={classnames('px-2 py-2', { 'bg-first text-white': active })} 
                        href={item.href}
                        target={item.newTab ? '_blank' : '_self'}
                      >{item.title}</a>
                    )}
                  </Menu.Item>  
                ))}
              </Menu.Items>
            </Menu>
          </div>
          <div className="ml-auto font-bold self-center uppercase hidden md:block">
            {config.navbar.map(item => (
              <a className="mx-2" key={item.href} href={item.href} target={item.newTab ? '_blank' : '_self'}>{item.title}</a>
            ))}
          </div>
        </div>
      </header>
      <main className="max-w-6xl p-2 mx-auto md:p-4">
        <section className="my-10" id="home">
          <h2 className="text-3xl flex mb-2 font-bold">
            <StaticImage 
              loading="eager" 
              alt="" 
              className="mr-5" 
              src="../images/osm.png" 
              width={50} 
              layout="fixed" 
              placeholder="blurred"
            />
            {config.osmTitle}
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
              src="../images/OSMItaly.png" 
              width={50} 
              layout="fixed" 
              placeholder="blurred"
            />{config.osmItalyTitle}</h2>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="prose lg:prose-lg max-w-full">
              <HTMLRenderer html={config.osmItalyDescription} />
            </div>
            <StaticImage 
              src="../images/image.jpeg" 
              layout="fullWidth" 
              className=""
              placeholder="blurred"
            />
          </div>
          
        </section>
        <section id="progetti" className="mb-10">
          <h2 className="text-3xl flex mb-2 font-bold">
            <StaticImage 
              alt="" 
              className="mr-5" 
              src="../images/osm.png" 
              width={50} 
              layout="fixed"
              placeholder="blurred"
            />{config.projectsTitle}
          </h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5">
            <HTMLRenderer html={config.projectsDescription} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 my-5">
            {config.projects.map(p => (
              <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-4" key={p.name}>
                <GatsbyImage image={imageMap[p.image]} alt="" />
                <div className="md:col-span-2 text-center md:text-left">
                  <p className="text-lg font-bold">{p.name}</p>
                  <p className="mb-5 prose-a:underline"><ReactMarkdown>{p.description}</ReactMarkdown></p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-1 px-3 py-2 bg-first rounded text-white">Vai</a>
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
          <div className="md:block hidden">
            <ResponsiveEmbed 
              src={config.contactsMap}
            ></ResponsiveEmbed>
          </div>
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5 md:hidden">
            <HTMLRenderer html={config.contactMobileMapAlternative} />
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
  }
`
