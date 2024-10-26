import { useState } from 'react'
import data from "./Data";
import General from './General'
import Summary from './Summary'
import Education from "./Education"
import Experience from "./Experience"
import './App.css'

function App() {
  const [CV, setCV] = useState(data);
  const [isEdit, setIsEdit] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries((new FormData(e.target)).entries());
    const updatedCV = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      summary: data.summary,
      education: {
        school: data.school,
        study: data.study,
      },
      experience: []
    };

    for (let i = 0; i < CV.experience.length; i++) {
      const newExperience = {
        id: data["id" + i],
        company: data["company" + i],
        position: data["position" + i],
        responsibilities: data["responsibilities" + i],
        from: data["from" + i],
        to: data["to" + i]
      }

      updatedCV.experience.push(newExperience);
    };    

    setIsEdit(!isEdit);
    setCV(updatedCV);
  };

  const handleAddExperience = () => {
    const newExperience = [...CV.experience, {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: ""
    }];    

    setCV({ ...CV, experience: newExperience });
  };

  const handleRemoveExperience = (id) => {
    setCV({ ...CV, experience: CV.experience.filter(job => job.id != id) });
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <General CV={CV} isEdit={isEdit}/>
      <Summary CV={CV} isEdit={isEdit}/>
      <Education education={CV.education} isEdit={isEdit} />
      <Experience experience={CV.experience} isEdit={isEdit} handleAddExperience={handleAddExperience} handleRemoveExperience={handleRemoveExperience} />
      {isEdit ?
            <button type='sumbit'>Submit</button>
            :
        		<input value="Edit" type="button" onClick={() => setIsEdit(!isEdit)} />
      }
    </form>
    </>
  );
}

export default App
