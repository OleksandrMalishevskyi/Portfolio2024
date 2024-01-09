
import {
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const navLinks = [
  { id: 1, icon: <FaHome />, text: "Home", url: "/" },
  { id: 2, icon: <FaInfoCircle />, text: "About", url: "/about" },
  { id: 3, icon: <FaGraduationCap />, text: "Education", url: "/education" },
  { id: 4, icon: <FaTools />, text: "Skills", url: "/skills" },
  { id: 5, icon: <FaBriefcase />, text: "Portfolio", url: "/portfolio" },
  { id: 6, icon: <FaEnvelope />, text: "Contact", url: "/contact" },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/oleksandr-malishevskyi-technotiger/',
    icon: <FaLinkedin />,
  },
  { href: 'https://github.com/OleksandrMalishevskyi', icon: <FaGithub />},
  {
    href: 'https://www.youtube.com/channel/UC7exfGfvkeMXcrV3jK-umbA',
    icon: <FaYoutube />,
  },
]

export { navLinks, socialLinks }
