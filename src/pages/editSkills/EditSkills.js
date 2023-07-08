import { Chip, MenuItem, Select } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../components/AppContext";
import useStyles from "./editSkillsStyles";

export const EditSkills = () => {
  const { classes } = useStyles();
  const [skillArray, setSkillArray] = useState([]);
  const [hobbiesArray, setHobbiesArray] = useState([]);
  const [subjectArray, setSubjectArray] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const { skills, setSkills } = useContext(AppContext);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      let skillsRequest = await fetch(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json"
      );
      let skillList = await skillsRequest.json();
      setSkillArray(skillList?.result[0]?.skills || []);

      let hobbiesRequest = await fetch(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json"
      );
      let hobbiesList = await hobbiesRequest.json();
      setHobbiesArray(hobbiesList?.result[0]?.hobbies || []);

      let subjectRequest = await fetch(
        "https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json"
      );
      let subjectList = await subjectRequest.json();
      setSubjectArray(subjectList?.result[0]?.subjects || []);
    } catch (error) {
      console.log("fetch error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  let isFormComplete = true;

  const handleSaveDetails = () => {
    setSkills({
      selectedHobbies,
      selectedSkills,
      selectedSubjects,
    });
    navigate("/mybio");
  };

  useEffect(() => {
    if (skills.selectedHobbies) {
      setSelectedHobbies(skills.selectedHobbies);
    }
    if (skills.selectedSkills) {
      setSelectedSkills(skills.selectedSkills);
    }
    if (skills.selectedSubjects) {
      setSelectedSubjects(skills.selectedSubjects);
    }
  }, [skills]);

  const handleDeleteChip = (event, type, selectedElement) => {
    event.stopPropagation();
    if (type === "selectedSkills") {
      let newSkills = [...selectedSkills];
      newSkills = newSkills.filter((item) => item._id !== selectedElement._id);
      setSelectedSkills(newSkills);
    }
  };

  return (
    <>
      <div className={classes.editSkillLabel}>
        I am incredible at these skills / professionally great at
      </div>
      <Select
        multiple
        value={selectedSkills}
        onChange={(event) => setSelectedSkills(event.target.value)}
        native={false}
        displayEmpty={true}
        fullWidth
        renderValue={(values) =>
          values.map((item) => (
            <Chip
              color="primary"
              key={item._id}
              label={item.value}
              onDelete={(event) =>
                handleDeleteChip(event, "selectedSkills", item)
              }
            />
          ))
        }
      >
        {skillArray.map((skill) => (
          <MenuItem key={skill._id} value={skill}>
            {skill.value}
          </MenuItem>
        ))}
      </Select>
      <div className={classes.editSkillLabel}>
        Hobbies I am passionate about
      </div>
      <Select
        multiple
        value={selectedHobbies}
        onChange={(event) => setSelectedHobbies(event.target.value)}
        native={false}
        displayEmpty={true}
        fullWidth
        renderValue={(values) =>
          values.map((item) => (
            <Chip
              color="primary"
              key={item._id}
              label={item.value}
              onDelete={(event) =>
                handleDeleteChip(event, "selectedHobbies", item)
              }
            />
          ))
        }
      >
        {hobbiesArray.map((item) => (
          <MenuItem key={item._id} value={item}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
      <div className={classes.editSkillLabel}>My Favorite Subjects Are</div>
      <Select
        multiple
        value={selectedSubjects}
        onChange={(event) => setSelectedSubjects(event.target.value)}
        native={false}
        displayEmpty={true}
        fullWidth
        renderValue={(values) =>
          values.map((item) => (
            <Chip
              color="primary"
              key={item._id}
              label={item.value}
              onDelete={(event) =>
                handleDeleteChip(event, "selectedSubjects", item)
              }
            />
          ))
        }
      >
        {subjectArray.map((subject) => (
          <MenuItem key={subject._id} value={subject}>
            {subject.value}
          </MenuItem>
        ))}
      </Select>
      <div
        className={classes.saveButton}
        style={!isFormComplete ? { backgroundColor: "#f47373" } : {}}
        onClick={handleSaveDetails}
      >
        Save
      </div>
    </>
  );
};
