import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState("");

  // const addUserHandler = (event) => {
  //   event.preventDefault();

  //   if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
  //     setError({
  //       title: "Invalid Input",
  //       message: "Please enter a valid Name and Age(non - empty value)",
  //     });
  //     return;
  //   }
  //   if (+enteredAge < 1) {
  //     setError({
  //       title: "Invalid Age",
  //       message: "Please enter a valid Age ( >0 )",
  //     });
  //     return;
  //   }
  //   //console.log(enteredUserName,enteredAge);
  //   props.onAddUser(enteredUserName, enteredAge);
  //   setEnteredUserName("");
  //   setEnteredAge("");

  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const errorHander = () => {
    setError(null);
  };
  
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHander}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
            //onChange={userNameChangeHandler}
            //value={enteredUserName}
          ></input>
          <label htmlFor="age">Age (In Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
            //onChange={ageChangeHandler}
            //value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
