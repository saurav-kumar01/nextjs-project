"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Music Theory",
    description:
      "Fundamental concepts such as notation, scales, chords, harmony, rhythm, and form.",
  },
  {
    title: "Ear Training",
    description:
      "Developing the ability to recognize pitches, intervals, chords, and rhythms by ear.",
  },
  {
    title: "Instrumental or Vocal Training",
    description:
      "Instruction in playing a specific instrument (e.g., piano, guitar, violin) or developing vocal technique.",
  },
  {
    title: "Music History",
    description:
      "Studying the evolution of music styles, composers, and significant works throughout history.",
  },
  {
    title: "Ensemble Performance",
    description:
      "Participating in groups such as choirs, bands, orchestras, or chamber music ensembles to develop collaborative skills.",
  },
  {
    title: "Composition and Arranging",
    description:
      "Learning to create original music and arrange existing pieces for different instruments or voices.",
  },
  {
    title: "Music Technology",
    description:
      "Exploring the use of software and hardware for recording, editing, and producing music.",
  },
  {
    title: "Conducting",
    description:
      "Techniques and skills related to leading and conducting musical ensembles.",
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
