import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/biruk.biko/",
  },
  { iconName: "fa fa-telegram", link: "https://t.me/Bikoendalew" },
  { iconName: "fa fa-github", link: "https://github.com/bikoendalew" },
  {
    iconName:"fa fa-instagram",
    link:"https://instagram.com/bikobiruk?igshid=YmMyMTA2M2Y=",
  },
  { iconName: "fa fa-linkedin", link: "https://www.linkedin.com/in/biruk-endalew-437633237/" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
