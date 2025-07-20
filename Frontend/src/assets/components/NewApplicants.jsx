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

const whatsapp_group = [
  {
    name: "Information Group for 2K25-29",
    link: "https://chat.whatsapp.com/LEp8IOFNtG1JLVi7mpByOA",
  },
];

const files = [
  { name: "GAP.pdf", label: "Gap Year Format" },
  { name: "Anti_Ragging_Affidavit_Format.pdf", label: "Anti Ragging Format" },
  { name: "Medical-Format-GECK.pdf", label: "Medical Format" },
  {
    name: "https://drive.google.com/file/d/1qA87bBvMI056mBBcTx5Nkf_ok2sn1hwG/view?usp=drive_link",
    label: "Dress Code 25-2029",
  },
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
                  file.label === "Dress Code 25-2029"
                    ? "https://drive.google.com/file/d/1qA87bBvMI056mBBcTx5Nkf_ok2sn1hwG/view?usp=drive_link"
                    : `https://akshay0712-dev.github.io/campusDocs/docs/${file.name}`,
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

      {/* WhatsAPP Group  Section */}
      <section className="section whatsapp-section">
        <h2>💬 WhatsApp Groups</h2>
        <p className="info-text mb-4">
          Join the official WhatsApp group(s) to stay updated with important
          announcements, document requirements, and orientation-related info.
        </p>
        <div className="whatsapp-grid flex justify-between" style={{}}>
          {whatsapp_group.map((group, index) => (
            <div
              key={index}
              onClick={() => window.open(group.link, "_blank")}
              className="whatsapp-card cursor-pointer transition-all hover:scale-105  w-fit hover:bg-green-100 border border-green-300 rounded-lg shadow-md mb-3"
              style={{ padding: "30px" }}
            >
              <div className="flex items-center gap-8 ">
                <i className="fa-brands fa-whatsapp text-green-600 text-xl"></i>
                <span className="text-base font-medium">{group.name}</span>
              </div>
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
                📞 {entry.name} - {entry.number}{" "}
                {entry.name == "Shiva Toto GECK" ? (
                  <span className="text-yellow-600">(Recommended)</span>
                ) : (
                  ""
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/* Photo Copy Numbers Section */}
      <section className="section phone-section">
        <h2>📱 Photo Copy </h2>
        <ul className="phone-list">
          <li k className="phone-item">
            <a href={`tel:${9508828315}`} className="phone-link">
              📞 Vivek yadav - 9508828315
            </a>
          </li>
        </ul>
      </section>
      {/* Map Numbers Section */}
      <section className="section map-section ">
        <h2>📌 Navigate to Collage </h2>

        <p className="info-text mt-2">
          If you need help with transportation, call any of the auto contacts
          listed above and request a ride from the railway station or bus stand
          or market to the college—or vice versa.
        </p>
        <p className="info-text mt-2">
          अगर आपको परिवहन में मदद चाहिए, तो ऊपर दिए गए किसी भी ऑटो संपर्क नंबर
          पर कॉल करें और रेलवे स्टेशन या बस स्टैंड से कॉलेज तक (या कॉलेज से
          रेलवे स्टेशन/बस स्टैंड तक) जाने के लिए सवारी बुक करें।
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.732539055283!2d87.94539419272905!3d26.141376076992067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e511d49252272f%3A0x3b19e1b5f2bf4a28!2sGovt.%20Engineering%20College%20Kishanganj!5e0!3m2!1sen!2sin!4v1752601693070!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full rounded-3xl "
        ></iframe>
      </section>
    </div>
  );
};

export default NewApplicants;
