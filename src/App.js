import {
  HighBody,
  LogoPosition,
  Link,
  Link2,
  Intro,
  Name,
  Title,
  Resume,
  LinkButtons,
  Mail,
  Github,
  Linkedin,
} from "./styled";
// import ReactDOM from "react-dom";
import LoadingLogo from "./components/LoadingLogo/LoadingLogo";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as id } from "uuid";
import SplitText from "./components/AnimateString/AnimateString";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://767990c27d0a470daa60f4ab975ff935@o511500.ingest.sentry.io/5608853",
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default function App() {
  const logo = {
    initial: {
      x: 400,
    },
    enter: {
      x: 0,
      ease: [0.83, 0, 0.17, 10],
    },
  };

  const name = {
    initial: {
      opacity: 0,
      x: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 1.25,
        duration: 1.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };
  const title = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        delay: 1.75,
        duration: 1.5,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const githubButton = {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.25,
        duration: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const linkedinButton = {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2,
        duration: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const resumeButton = {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.5,
        duration: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const mailButton = {
    initial: {
      opacity: 0,
      x: 100,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2.75,
        duration: 2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  return (
    <HighBody>
      <AnimatePresence>
        <LogoPosition key={id()}>
          <motion.div
            key={id()}
            variants={logo}
            initial="initial"
            animate="enter"
            exit="initial"
          >
            <LoadingLogo />
          </motion.div>
        </LogoPosition>

        <Link key={id()}>
          <SplitText text="www.karoliskimtys.com" />
        </Link>

        <Link2 key={id()}>
          <SplitText text="Website under construction" />
        </Link2>

        <Intro>
          <motion.div
            key={id()}
            variants={name}
            initial="initial"
            animate="enter"
            exit="initial"
          >
            <Name>Karolis Kimtys</Name>
          </motion.div>

          <motion.div
            key={id()}
            variants={title}
            initial="initial"
            animate="enter"
            exit="initial"
          >
            <Title>Junior Web Developer</Title>
          </motion.div>

          <LinkButtons>
            <motion.div
              key={id()}
              variants={linkedinButton}
              initial="initial"
              animate="enter"
              exit="initial"
            >
              <Linkedin>
                <a
                  href="https://www.linkedin.com/in/karolis-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Linkedin>
            </motion.div>
            <motion.div
              key={id()}
              variants={githubButton}
              initial="initial"
              animate="enter"
              exit="initial"
            >
              <Github>
                <a
                  href="https://github.com/k-karolis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Github>
            </motion.div>

            <motion.div
              key={id()}
              variants={resumeButton}
              initial="initial"
              animate="enter"
              exit="initial"
            >
              <Resume>
                <a
                  href="https://1drv.ms/b/s!AoWb_z-Z8JWwgaFGdUQkQ9ZBKp1jCQ?e=T469B5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Resume>
            </motion.div>

            <motion.div
              key={id()}
              variants={mailButton}
              initial="initial"
              animate="enter"
              exit="initial"
            >
              <Mail>
                <a
                  href="mailto: karolis.kimtys@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </Mail>
            </motion.div>
          </LinkButtons>
        </Intro>
      </AnimatePresence>
    </HighBody>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));
