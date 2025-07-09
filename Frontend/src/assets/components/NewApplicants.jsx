import React from "react";
import "../css/adm.css";

const autoNumbers = [
  {
    name: "Shiva Toto GECK",
    number: "6202584345",
  },
  {
    name: "Durga Toto GECK",
    number: "9027092868",
  },
  {
    name: "Lalit Yadav Toto Geck",
    number: "8294015867",
  },
  {
    name: "Sachin Toto GECK",
    number: "9608356096",
  },
  {
    name: "Tamana Toto GECK",
    number: "6206091125",
  },
];

const files = [
  { name: "GAP.pdf", label: "Gap Formate" },
  { name: "Anti_Ragging_Affidavit_Format.pdf", label: "Anti Ragging Format" },
  { name: "Medical-Format-GECK.pdf", label: "Medical Format" },
  { name: "uniform 24-2028.pdf", label: "Dress Code 24-2028" },
  {
    name: "BTech(Group_A)1st_2nd_Sem.pdf",
    label: "B.Tech (Group_A) Syllabus",
  },
  {
    name: "BTech(Group_B)1st_2nd_Sem.pdf",
    label: "B.Tech (Group_B) Syllabus",
  },
];

const NewApplicants = () => {
  return (
    <div>
      <section className="section" id="documents">
        <h2>Documents</h2>
        <div className="documents-grid">
          {files.map((file, index) => (
            <div
              onClick={() =>
                window.open(
                  `https://akshay0712-dev.github.io/campusDocs/docs/${file.name}`,
                  "_blank"
                )
              }
            >
              <a className="fa-solid fa-file" style={{ width: "fit" }}></a>
              {file.label}
            </div>
          ))}
        </div>
      </section>

      {/* Phone Numbers Section */}
      <section className="section phone-section">
        <h2>📱 Important Contacts</h2>
        <ul className="phone-list">
          {autoNumbers.map((entry, index) => (
            <li key={index} className="phone-item">
              <a href={`tel:${entry.number}`} className="phone-link">
                📞 {entry.name} - {entry.number}
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/* Photo Copy Numbers Section */}
      <section className="section phone-section">
        <h2>📱  Photo Copy </h2>
        <ul className="phone-list">
          
            <li k className="phone-item">
              <a href={`tel:${9508828315}`} className="phone-link">
                📞 Vivek yadav - 9508828315
              </a>
            </li>
        </ul>
      </section>
    </div>
  );
};

export default NewApplicants;
