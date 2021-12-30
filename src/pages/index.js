import * as React from "react"

import { StaticImage } from 'gatsby-plugin-image'
import HTMLRenderer from "react-html-renderer"

import Map from '../components/map';

import config from '../config';

const IndexPage = () => {
  return (
    <>
      <header className="bg-black py-5">
        <div className="container mx-auto flex">
          <div className="flex">
            <StaticImage className="mr-5" alt="logo Wikimedia" src="../images/WIKIItaly.png" width={50} height={50} layout="fixed" />
            <StaticImage alt="logo OSM Italia" src="../images/OSMItaly.svg" width={50} height={50} layout="fixed" />
          </div>
          <div className="ml-auto text-white self-center uppercase">
            <a className="mx-2">Home</a>
            <a className="mx-2" href="#chisiamo">Chi Siamo</a>
            <a className="mx-2" href="#progetti">Progetti</a>
            <a className="mx-2" href="#contatti">Contatti</a>
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        <section className="my-10">
          <h2 className="text-3xl flex mb-2 font-bold"><StaticImage alt="" className="mr-5" src="../images/osm.svg" width={50} layout="fixed" />OpenStreetMap</h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full mb-5">
            <HTMLRenderer html={config.osm_description} />
          </div>
          <Map />
        </section>
        <section className="my-10" id="chisiamo">
          <h2 className="text-3xl flex mb-2 font-bold"><StaticImage alt="" className="mr-5" src="../images/osm.svg" width={50} layout="fixed" />OpenStreetMap Italia</h2>
          <hr />
          <div className="prose lg:prose-lg mt-5 max-w-full">
            <HTMLRenderer html={config.osm_italy_description} />
          </div>
          <StaticImage src="../images/image.png" layout="fullWidth" className="mx-auto mt-5 mx-10" />
        </section>
        <section id="progetti">
          <h2 className="text-3xl flex mb-2 font-bold"><StaticImage alt="" className="mr-5" src="../images/osm.svg" width={50} layout="fixed" />Progetti</h2>
          <hr />
        </section>
      </main>
      <footer id="contatti">
        <div className="container">

        </div>
      </footer>
    </>
  )
}

export default IndexPage
