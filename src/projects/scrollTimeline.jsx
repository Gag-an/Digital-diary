import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Calendar, Github } from "lucide-react";
import "./scrollTimeline.css";

export function ScrollTimeline({ events = [] }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const progressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      const nextIndex = Math.floor(v * events.length);
      setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
    });
  }, [scrollYProgress, events.length]);

  return (
    <section ref={containerRef} className="timeline">
      {/* Center Line */}
      <div className="timeline-line" />
      <motion.div
        className="timeline-line-active"
        style={{ height: progressHeight }}
      />

      {events.map((event, index) => (
        <div
          key={index}
          className={`timeline-item ${
            index % 2 === 0 ? "left" : "right"
          }`}
        >
          {/* Dot */}
          <div
            className={`timeline-dot ${
              index <= activeIndex ? "active" : ""
            }`}
          />

          {/* Card */}
          <motion.div
            className="timeline-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* Date */}
            <div className="timeline-date">
              <Calendar size={14} />
              {event.year}
            </div>

            {/* Title */}
            <h3>{event.title}</h3>

            {/* Subtitle */}
            {event.subtitle && (
              <p className="company">{event.subtitle}</p>
            )}

            {/* Description */}
            <p className="desc">{event.description}</p>

            {/* Tech Stack */}
            {event.tech && (
              <div className="tech-stack">
                {event.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* GitHub Link */}
            {event.github && (
              <a
                href={event.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <Github size={16} />
                View on GitHub
              </a>
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
}


