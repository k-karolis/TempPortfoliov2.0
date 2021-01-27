import { React, Component } from "react";
import { motion } from "framer-motion";
import Letter from "./styled";

const box = {
  hidden: {
    opacity: 0,
    x: -25,
    scale: 2,
  },
};

class SplitText extends Component {
  render() {
    return (
      <div text={this.props.text}>
        {this.props.text.split("").map(function (char, index) {
          return (
            <motion.div
              key={index}
              variants={box}
              initial="hidden"
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                transition: {
                  delay: index * 0.05,
                  duration: 3.5,
                  ease: [0.83, 0, 0.17, 1],
                },
              }}
              exit="hidden"
            >
              <Letter>{char}</Letter>
            </motion.div>
          );
        })}
      </div>
    );
  }
}

export default SplitText;
