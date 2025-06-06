import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import apiURL from "../api";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  justify-content: space-evenly;
  width: 100%;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-flow: column nowrap;
  margin-top: 20px;
  gap: 5px;
  width: 300px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #888;
    outline: none;
    background: #f8f8f8;
  }
`;

const DividingLine = styled.div`
  border-left: 1px solid lightgray;
  height: 110%;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CreateUserMenu({ handleUserAdded, setIsLoggedIn, setCurrentUser }) {
  const navigate = useNavigate();
  const [formCreateData, setFormCreateData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [formLoginData, setFormLoginData] = useState({
    username: "",
    password: "",
  });

  const handleCreateChange = (e) => {
    setFormCreateData({
      ...formCreateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setFormLoginData({
      ...formLoginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formLoginData),
      });
      const data = await res.json();
      if (res.ok) {
        setCurrentUser(data)
        setIsLoggedIn(true)
        navigate('/')
        setFormLoginData({
          username: "",
          password: "",
        });
      } else {
        alert("Error logging in: " + data.error);
      }
    } catch (err) {
      console.error("Failed to login: ", err);
    }
  };

  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    if (formCreateData.password !== formCreateData.confirmPassword) {
      alert('Please make sure passwords match.')
      return
    }
    try {
      const res = await fetch(`${apiURL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formCreateData),
      });
      const data = await res.json();
      if (res.ok) {
        handleUserAdded(data);
        setFormCreateData({
          username: "",
          password: "",
          confirmPassword: "",
          role: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error("Failed to create user: ", err);
    }
  };

  return (
    <>
      <Wrapper>
        <StyledForm onSubmit={handleSubmitLogin}>
          <FormWrapper>
            <Title>Login!</Title>
            <StyledInput
              name="username"
              type="text"
              placeholder="Username"
              value={formLoginData.username}
              onChange={handleLoginChange}
              required
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              value={formLoginData.password}
              onChange={handleLoginChange}
              required
            />
            <Button type="submit">Login</Button>
          </FormWrapper>
        </StyledForm>
        <DividingLine />
        <StyledForm onSubmit={handleSubmitCreate}>
          <FormWrapper>
            <Title>Create an account</Title>
            <StyledInput
              name="username"
              type="text"
              placeholder="Username"
              value={formCreateData.username}
              onChange={handleCreateChange}
              required
            />
            <StyledInput
              name="password"
              type="password"
              placeholder="Password"
              value={formCreateData.password}
              onChange={handleCreateChange}
              required
            />
            <StyledInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formCreateData.confirmPassword}
              onChange={handleCreateChange}
              required
            />
            <div>
              <input
                type="checkbox"
                name="role"
                checked={formCreateData.role === "admin"}
                onChange={(e) =>
                  setFormCreateData({ ...formCreateData, role: e.target.checked ? "admin" : "customer" })
                }
              />
              <span> Admin</span>
            </div>
            <Button type="submit">Create Account</Button>
          </FormWrapper>
        </StyledForm>
      </Wrapper>
    </>
  );
}
