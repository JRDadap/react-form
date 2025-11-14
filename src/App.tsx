import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: {
      english: true,
      math: false,
      physics: false,
    },
    uploadResume: "",
    url: "",
    techSelection: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubjectChange = (sub: string) => {
    setPersonalDetails((prev) => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [sub]: !prev.subjects[sub as keyof typeof prev.subjects],
      },
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPersonalDetails((prev) => ({
        ...prev,
        uploadResume: file.name,
      }));
    }
  };

  const handleReset = () => {
    setPersonalDetails({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subjects: {
        english: true,
        math: false,
        physics: false,
      },
      uploadResume: "",
      url: "",
      techSelection: "",
      about: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted", personalDetails);
  };

  const techOptions = [
    {
      label: "Beginners",
      items: [
        { label: "HTML", value: "1" },
        { label: "CSS", value: "2" },
        { label: "JavaScript", value: "3" },
      ],
    },
    {
      label: "Advance",
      items: [
        { label: "React", value: "4" },
        { label: "Node", value: "5" },
        { label: "Express", value: "6" },
        { label: "MongoDB", value: "7" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={personalDetails.firstName}
            onChange={handleChange}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={personalDetails.lastName}
            onChange={handleChange}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalDetails.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
          <label htmlFor="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={personalDetails.contact}
            onChange={handleChange}
            placeholder="Enter Mobile number"
            required
          />
          <label>Gender*</label>
          {["male", "female", "other"].map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                checked={personalDetails.gender === g}
                onChange={handleChange}
              />
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </label>
          ))}
          <label>Your best Subject</label>
          {Object.entries(personalDetails.subjects).map(([key, value]) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={value}
                onChange={() => handleSubjectChange(key)}
              />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
          <label>Upload Resume*</label>
          <input type="file" onChange={handleFileChange} required />
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            value={personalDetails.url}
            onChange={handleChange}
            placeholder="Enter url"
            required
          />
          <label>Select your choice</label>
          <select
            name="techSelection"
            value={personalDetails.techSelection}
            onChange={handleChange}
            required
          >
            <option value="">Select your Ans</option>

            {techOptions.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.items.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <label>About</label>
          <textarea
            name="about"
            value={personalDetails.about}
            onChange={handleChange}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default App;
