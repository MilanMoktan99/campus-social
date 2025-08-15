// src/data/eventsData.js
// NOTE: paths assume this file is at src/data/ and images live in src/assets/

import springCareerFairImg from "../assets/spring-career-fair.jpg";
import dataVizWorkshopImg from "../assets/data-viz-workshop.jpg";
import yogaSessionImg from "../assets/yoga-session.jpg";
import musicJamImg from "../assets/music-jam.jpg";
import techTalkImg from "../assets/tech-talk.jpg";
import volunteerDriveImg from "../assets/volunteer-drive.png";

export const EVENTS = [
  {
    id: "spring-career-fair",
    title: "Spring Career Fair",
    category: "Career",
    description:
      "Connect with top employers and explore internships and full-time roles across tech, finance, and creative industries.",
    date: "2025-03-15",
    startTime: "10:00",
    endTime: "16:00",
    building: "Student Union Building",
    attendees: 245,
    image: springCareerFairImg,
    details:
      "The Spring Career Fair brings together 60+ companies hiring for summer and new-grad roles. Expect resume reviews, speed-interview booths, and alumni networking corners. Bring 10 copies of your resume. Dress is smart casual. Lunch snacks provided.",
    agenda: [
      { time: "10:00", item: "Opening & Welcome" },
      { time: "10:30", item: "Booths Open + Resume Clinic" },
      { time: "12:30", item: "Alumni Panel: Breaking Into Product" },
      { time: "14:00", item: "Speed Interviews (pre-registered)" },
      { time: "15:40", item: "Raffle & Closing Remarks" },
    ],
    tags: ["Recruiting", "Networking", "Internships"],
  },
  {
    id: "data-viz-workshop",
    title: "Hands-On Data Viz Workshop",
    category: "Academic",
    description:
      "Build dashboards with real campus datasets. Bring your laptop—no prior experience required.",
    date: "2025-03-11",
    startTime: "13:00",
    endTime: "15:00",
    building: "Library Lab 2",
    attendees: 78,
    image: dataVizWorkshopImg,
    details:
      "Learn the fundamentals of visual analytics: choosing the right chart, avoiding misleading visuals, and telling clear stories. We'll use open-source tools and publish a mini project by the end of the session.",
    agenda: [
      { time: "13:00", item: "Why Visualization Matters" },
      { time: "13:25", item: "Chart Types & Pitfalls" },
      { time: "14:00", item: "Guided Build: Campus Energy Dashboard" },
      { time: "14:45", item: "Share & Feedback" },
    ],
    tags: ["Workshop", "Analytics"],
  },
  {
    id: "tech-talk",
    title: "Tech Talk: AI in Education",
    category: "Academic",
    description:
      "Learn how AI is transforming learning and teaching on campus and beyond.",
    date: "2025-03-16",
    startTime: "14:00",
    endTime: "15:30",
    building: "Engineering Hall",
    attendees: 65,
    image: techTalkImg,
    details:
      "Panel discussion with professors and industry experts on AI applications.",
    agenda: [
      { time: "14:00", item: "Opening Remarks" },
      { time: "14:15", item: "AI in Education Talk" },
      { time: "15:00", item: "Q&A" },
    ],
    tags: ["AI", "Workshop"],
  },
  {
    id: "yoga-session",
    title: "Morning Yoga Session",
    category: "Wellness",
    description: "Start your day relaxed and energized with yoga.",
    date: "2025-03-12",
    startTime: "07:00",
    endTime: "08:00",
    building: "Wellness Center",
    attendees: 32,
    image: yogaSessionImg,
    details: "Open yoga session for all students. Mats provided.",
    agenda: [
      { time: "07:00", item: "Warm-up & Breathing" },
      { time: "07:15", item: "Yoga Flow" },
      { time: "07:45", item: "Cool Down & Meditation" },
    ],
    tags: ["Health", "Fitness"],
  },
  {
    id: "music-jam",
    title: "Campus Music Jam",
    category: "Social",
    description: "Bring your instrument and jam with fellow students.",
    date: "2025-03-14",
    startTime: "18:00",
    endTime: "21:00",
    building: "Auditorium",
    attendees: 56,
    image: musicJamImg,
    details: "Open stage for students to perform and collaborate.",
    agenda: [
      { time: "18:00", item: "Opening & Warm-up" },
      { time: "18:30", item: "Student Performances" },
      { time: "20:30", item: "Group Jam" },
    ],
    tags: ["Music", "Fun"],
  },
  {
    id: "volunteer-drive",
    title: "Campus Volunteer Drive",
    category: "Social",
    description: "Join us to clean and beautify the campus area.",
    date: "2025-03-18",
    startTime: "09:00",
    endTime: "12:00",
    building: "Main Entrance",
    attendees: 40,
    image: volunteerDriveImg,
    details: "Community service event for all students.",
    agenda: [
      { time: "09:00", item: "Gather Volunteers" },
      { time: "09:15", item: "Assign Areas" },
      { time: "09:30", item: "Cleanup Activity" },
      { time: "11:30", item: "Wrap-up & Snacks" },
    ],
    tags: ["Community", "Service"],
  },
];

export const CATEGORIES = [
  { key: "All", count: EVENTS.length },
  { key: "Academic", count: EVENTS.filter((e) => e.category === "Academic").length },
  { key: "Social", count: EVENTS.filter((e) => e.category === "Social").length },
  { key: "Career", count: EVENTS.filter((e) => e.category === "Career").length },
  { key: "Wellness", count: EVENTS.filter((e) => e.category === "Wellness").length },
];
