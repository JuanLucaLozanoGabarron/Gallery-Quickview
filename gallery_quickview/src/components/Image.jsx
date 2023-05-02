import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./image.modules.css";
import Arrow from "../img/arrow.png";

export default function Image(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="card" onClick={toggleExpanded}>
      <img src={props.img} alt="" width="200px" height="200px" />
      <img id="arrow" src={Arrow} alt="" width="30px" height="20px" />
      {isExpanded && (
        <motion.div
          className="motion"
          initial={{ scale: 1 }}
          animate={{ scale: 1.3, rotate: 360 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="card">
            <div className="image">
              <img src={props.img} alt="" width="220px" height="220px" />
            </div>
            <div className="text">
              <p>{props.text}</p>
            </div>
            <button>Go back</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
