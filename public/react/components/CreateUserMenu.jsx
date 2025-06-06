import styled from "styled-components";
import Button from "./Button";

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

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  background-color: red;
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

export default function CreateUserMenu() {
  return (
    <>
      <Wrapper>
        <StyledForm>
          <FormWrapper>
            <Title>Login!</Title>
            <StyledInput
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <StyledInput
              name="password"
              type="text"
              placeholder="Password"
              required
            />
            <Button type="submit">Login</Button>
          </FormWrapper>
        </StyledForm>
        <DividingLine />
        <StyledForm>
          <FormWrapper>
            <Title>Create an account</Title>
            <StyledInput
              name="username"
              type="text"
              placeholder="Username"
              required
            />
            <StyledInput
              name="password"
              type="text"
              placeholder="Password"
              required
            />
            <StyledInput
              name="password"
              type="text"
              placeholder="Confirm Password"
              required
            />
            <div>
              <input type="checkbox" /> <span>Admin</span>
            </div>

            <StyledCheckbox />
            <Button type="submit">Create Account</Button>
          </FormWrapper>
        </StyledForm>
      </Wrapper>
    </>
  );
}
