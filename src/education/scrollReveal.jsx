import { useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./scrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);

  const splitContent = useMemo(() => {
    const processNode = (node, keyPrefix = "") => {
      if (typeof node === "string") {
        return node.split("").map((char, i) => (
          <span className="char" key={`${keyPrefix}-${i}`}>
            {char === " " ? "\u00A0" : char}
          </span>
        ));
      }

      if (Array.isArray(node)) {
        return node.map((child, i) =>
          processNode(child, `${keyPrefix}-${i}`)
        );
      }

      if (node?.props?.children) {
        return (
          <span className={node.props.className} key={keyPrefix}>
            {processNode(node.props.children, keyPrefix)}
          </span>
        );
      }

      return null;
    };

    return processNode(children);
  }, [children]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        yPercent: 120,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      }
    );

    ScrollTrigger.refresh();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    
      <span ref={containerRef} className="scroll-float">
        <span className="scroll-float-text">{splitContent}</span>
      </span>
    
    
  );
};

export default ScrollFloat;
