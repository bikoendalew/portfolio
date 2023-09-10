import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Biruk" },
  { meta: "last name", metaInfo: "Endalew" },
  { meta: "Nationality", metaInfo: "Ethiopia" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Addis Ababa" },
  { meta: "phone", metaInfo: "+251940566330" },
  { meta: "Email", metaInfo: "birukendalew090@gmail.com" },
  { meta: "langages", metaInfo: "Amharic, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
