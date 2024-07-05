import { CiCamera, CiVideoOn } from "react-icons/ci";
import { FaCamera, FaVideo } from "react-icons/fa";
import { GiDeliveryDrone, GiEngagementRing } from "react-icons/gi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { RiCameraLensFill } from "react-icons/ri";

export const headerData = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Gallary",
    link: "/gallary",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact-us",
  },
];

export const services = [
  {
    id: 1,
    title: "Wedding Shoots",
    description:
      "Capture your special day with professional photos that preserve every moment.",
    Icon: FaCamera,
  },
  {
    id: 2,
    title: "Pre-Wedding Shoots",
    description:
      "Create beautiful memories before your wedding day with expert videography.",
    Icon: FaVideo,
  },
  {
    id: 3,
    title: "Event Shoots",
    description:
      "Document your events with high-quality photos to remember them for years.",
    Icon: MdOutlineEmojiEvents,
  },
  {
    id: 4,
    title: "Portrait Shoots",
    description:
      "Capture stunning portraits that authentically show your personality and style.",
    Icon: RiCameraLensFill,
  },
  {
    id: 5,
    title: "Drone Shoots",
    description:
      "Get amazing aerial photos to add a unique view to your projects or events.",
    Icon: GiDeliveryDrone,
  },
  {
    id: 6,
    title: "Engagement Shoots",
    description:
      "Celebrate your engagement with beautiful photos that capture the joy and excitement.",
    Icon: GiEngagementRing,
  },
];

export const workImages = [
  {
    id: 1,
    image: "/Images/work-images/image1.jpg",
    rows: 5,
    cols: 2,
  },
  {
    id: 2,
    image: "/Images/work-images/image2.jpg",
    rows: 5,
    cols: 2,
  },

  {
    id: 3,
    image: "/Images/work-images/image3.jpg",
    rows: 3,
    cols: 2,
  },
  {
    id: 4,
    image: "/Images/work-images/image4.jpg",
    rows: 3,
    cols: 2,
  },
  {
    id: 5,
    image: "/Images/work-images/image5.jpg",
    rows: 5,
    cols: 2,
  },
];
