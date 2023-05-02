import { React } from "react";
import Image from "./Image";
import { motion } from "framer-motion";
import "./gallery.modules.css";
import City from "../img/city.jpeg";
import Column from "../img/column.jpeg";
import Three from "../img/three.jpeg";
import Tower from "../img/tower.jpeg";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery Quickview</h1>
      <motion.div
        className="gallery"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.51, 0.7, 1],
        }}
      >
        <Image img={City} text="New Jersey " />

        <Image img={Column} text="Column of Rome" />

        <Image img={Three} text="Three in Zambia" />

        <Image img={Tower} text="Tower of New York" />
      </motion.div>
    </div>
  );
}
