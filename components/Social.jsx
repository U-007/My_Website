import Link from "next/link";
import {FaGithub, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";

const socials=[
    {icon: <FaGithub />, path: "https://github.com/mridul-3"},
    {icon: <FaTwitter />, path: "https://x.com/16_Mridul"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/mridul-s-1bb22a1a8/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/mridul_._sharma/"},
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};

export default Social;
