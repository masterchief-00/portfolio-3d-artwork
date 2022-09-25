import React from "react";
import styled from "styled-components";
import DropZone from "./DropZone";
import { BiUpload } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { uploadAction } from "../store/upload-slice";

const ProjectUpload = () => {
  const uploadData = useSelector((state) => state.upload.uploadData);
  const dispatch = useDispatch();

  const saveData = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", e.target.name);
    formData.append("discription", e.target.discription);
    formData.append("init_date", e.target.init_date);
    formData.append("completion_date", e.target.completion_date);
    formData.append("categoryId", e.target.category);
    // formData.append("images", e.target.images);

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/api/upload-project",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    dispatch(
      uploadAction.setUploadData({
        [e.target.name]: e.target.value,
      })
    );
    
  };
  return (
    <Container id="upload">
      <Wrapper>
        <IconHeader>
          <h1>
            <BiUpload />
          </h1>
        </IconHeader>
        <h1>Project Upload</h1>
        <Form onSubmit={saveData} >
          <Field
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Project Title"
          />
          <Field
            type="text"
            name="init_date"
            onChange={handleInput}
            placeholder="Initial Date"
          />
          <Field
            type="text"
            name="completion_date"
            onChange={handleInput}
            placeholder="Completion Date"
          />
          <Discription
            name="discription"
            onChange={handleInput}
            placeholder="Project Discription"
          ></Discription>
          <Category
            name="categoryId"
            onChange={handleInput}
          >
            <option value="1" defaultValue={true}>
              CGI
            </option>
            <option value="2">3D Printing</option>
          </Category>
          <DropZone />
          <Submit type="submit">
            Upload <FaCloudUploadAlt />
          </Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 120px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: var(--color-bg);
  border: solid 1px var(--color-bg-variant);
  border-radius: 1rem;
  width: 60vw;
  padding: 2rem;
  margin-top: 20px;
  margin-bottom: 40px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 90vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 90vw;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
`;
const Field = styled.input`
  background-color: transparent;
  text-align: center;
  padding: 1rem;
  width: 30vw;
  color: var(--color-white);
  border-bottom: solid 1px var(--color-primary-variant);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: var(--color-light);
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 70vw;
    font-size: 25px;
  }
`;
const Discription = styled.textarea`
  resize: none;
  background-color: transparent;
  padding: 1rem;
  width: 30vw;
  overflow-y: scroll;
  color: var(--color-white);
  border-bottom: solid 1px var(--color-primary-variant);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);

  ::placeholder {
    color: var(--color-light);
    text-align: center;
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 70vw;
    font-size: 25px;
  }
`;
const Category = styled.select`
  background-color: transparent;
  padding: 1rem;
  width: 30vw;
  color: var(--color-white);
  border-bottom: solid 1px var(--color-primary-variant);
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);

  option {
    background-color: var(--color-bg);
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 70vw;
    font-size: 25px;
  }
`;

const IconHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: "";
    text-align: center;
    width: 7rem;
    height: 2px;
    margin: 5px;
    background-color: var(--color-white);
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    &:before,
    &:after {
      content: "";
      text-align: center;
      width: 4rem;
      height: 2px;
      margin: 2px;
      background-color: var(--color-white);
    }
  }
`;

const Submit = styled.button`
  padding: 0.8rem;
  width: 8rem;
  margin-top: 10px;
  background-color: var(--color-primary-variant);
  border: solid 1px transparent;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--color-bg);
    border-color: var(--color-primary-variant);
    color: var(--color-white);
  }
  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 6rem;
    padding: 0.6rem;
  }

  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 0.8rem;
    margin-top: 30px;
    width: 15rem;
    font-size: 25px;
  }
`;
export default ProjectUpload;
