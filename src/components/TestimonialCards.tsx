"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Music has been an incredible journey for our daughter. The teachers’ dedication to nurturing her musical talent while fostering a love for music education is truly commendable. We’re grateful for the positive impact it’s had on her development.",
    name: "Sophie and Mark Johnson",
    title: "Parents of Lily Johnson, Student",
  },
  {
    quote:
      "I’ve grown so much as a musician since joining [Music School Name]. The instructors are passionate and supportive, offering personalized guidance that has helped me excel in both performance and theory. I’m proud to be part of such a vibrant musical community.",
    name: "Lucas Martinez",
    title: "Senior Student, Music Performance Track",
  },
  {
    quote:
      "Choosing [Music School Name] was one of the best decisions for my son’s musical education. The curriculum is comprehensive, the facilities are excellent, and the teachers are not only skilled but also genuinely invested in their students’ success.",
    name: "Emily Chen",
    title: "Parent of Jake Chen, Student",
  },
  {
    quote:
      "[Music School Name] goes beyond teaching music; they inspire creativity and passion in every student. As a teacher here, I’m proud to be part of a team that nurtures young talents and prepares them for a lifelong journey in music.",
    name: "David Thompson",
    title: "Music Teacher, Piano Department",
  },
  {
    quote:
      "Being part of [Music School Name] has been transformative. Their emphasis on holistic music education, combining theory, technique, and performance, has prepared me well for a career in music. I’m grateful for the opportunities and mentorship I’ve received.",
    name: "Sarah Johnson",
    title: "Graduate, Music Education Program",
  },
  {
    quote:
      "I enrolled my daughter in [Music School Name] to develop her musical skills, and I’ve been amazed at her progress. The instructors are nurturing and patient, creating a positive learning environment that encourages her to explore and grow as a musician.",
    name: "Michael Brown",
    title: "Parent of Emma Brown, Student",
  },
  {
    quote:
      "[Music School Name] provided me with the foundation I needed to pursue music professionally. Their faculty’s expertise and mentorship were invaluable in shaping my musical career. I recommend this school to anyone serious about music.",
    name: "Jessica Garcia",
    title: "Professional Musician, Alumni",
  },
  {
    quote:
      "Attending [Music School Name] has been an enriching experience. The diverse curriculum and talented faculty have broadened my musical horizons. I feel well-prepared for future musical endeavors, thanks to the school’s comprehensive approach.",
    name: "Benjamin Carter",
    title: "Current Student, Music Composition Track",
  },
  {
    quote:
      "As a parent, I appreciate [Music School Name]’s commitment to excellence in music education. They not only teach technical skills but also instill a passion for music that will stay with my child for life. I’m thrilled with his progress and love for music.",
    name: "Olivia Green",
    title: "Parent of Ethan Green, Student",
  },
  {
    quote:
      "[Music School Name] fosters a supportive and inclusive community where students can explore their musical interests freely. The instructors’ dedication and encouragement have been instrumental in my growth as a musician and performer.",
    name: "Alice",
    title: "Student, Music Composition",
  },
];

const MusicSchoolTestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicSchoolTestimonialCards;
