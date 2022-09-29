import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiUpload } from "react-icons/bi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { uploadAction } from "../store/upload-slice";
import { useDropzone } from "react-dropzone";
import { RiDragDropLine } from "react-icons/ri";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

/* --------------------Drop zone------------------------ */

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

/* ----------------------------------------------------- */

const ProjectUpload = () => {
  const uploadData = useSelector((state) => state.upload.uploadData);
  const [files, setFiles] = useState([]);
  const [submitEnabled, setSubmitStatus] = useState(false);
  const dispatch = useDispatch();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  
  const isEmptyForm = () => {
    return uploadData.name === "" ||
      uploadData.discription === "" ||
      uploadData.init_date === "" ||
      uploadData.completion_date === ""
      ? true
      : false;
  };
  const saveData = async (e) => {
    e.preventDefault();
    setSubmitStatus(true);
    if (isEmptyForm()===true) {
      fireAlert({
        title: "Captain?",
        body: "Some fields are empty",
        icon: "error",
        confirmButtonText: "Yes",
      });

      setSubmitStatus(false);
    } else {
      try {
        const response = await axios({
          method: "post",
          mode: 'cors',
          url: "http://localhost:8000/api/upload-project",
          data: new FormData(document.getElementById("form")),          
        });
        if (response.status === 200) {
          fireAlert({
            title: "Aye, captain!",
            body: response.data.message,
            icon: "success",
          });
          dispatch(
            uploadAction.setUploadData({
              name: "",
              category: "",
              discription: "",
              init_date: "",
              completion_date: "",
            })
          );
          setFiles([]);
          setSubmitStatus(false);
        }
      } catch (error) {
        let problem=error.response.status +", "+ error.response.statusText;
        fireAlert({
          title: "Captain?",
          body: problem,
          icon: "error",
        });
        setSubmitStatus(false);
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    e.preventDefault();

    dispatch(
      uploadAction.setUploadData({
        name: e.target.name === "name" ? e.target.value : uploadData.name,
        discription:
          e.target.name === "discription"
            ? e.target.value
            : uploadData.discription,
        init_date:
          e.target.name === "init_date" ? e.target.value : uploadData.init_date,
        completion_date:
          e.target.name === "completion_date"
            ? e.target.value
            : uploadData.completion_date,
        category:
          e.target.name === "categoryId" ? e.target.value : uploadData.category,
      })
    );
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt={file.name}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const MySwal = withReactContent(Swal);
  const fireAlert = (props) => {
    MySwal.fire({
      title: <strong>{props.title}</strong>,
      html: <i>{props.body}</i>,
      icon: props.icon,
    });
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
        <Form onSubmit={saveData} id="form">
          <Field
            type="text"
            name="name"
            value={uploadData.name}
            onChange={handleInput}
            placeholder="Project Title"
          />
          <Field
            type="text"
            name="init_date"
            value={uploadData.init_date}
            onChange={handleInput}
            placeholder="Initial Date"
          />
          <Field
            type="text"
            value={uploadData.completion_date}
            name="completion_date"
            onChange={handleInput}
            placeholder="Completion Date"
          />
          <Discription
            name="discription"
            value={uploadData.discription}
            onChange={handleInput}
            placeholder="Project Discription"
          ></Discription>
          <Category
            name="categoryId"
            value={uploadData.category}
            onChange={handleInput}
          >
            <option value="1" defaultValue={true}>
              CGI
            </option>
            <option value="2">3D Printing</option>
          </Category>
          <div className="container">
            <DropField {...getRootProps({ className: "dropzone" })}>
              <Field type="file" name="images[]" {...getInputProps()} />
              <p>Drop or click to select the Render Images</p>
              <label>
                <RiDragDropLine />
              </label>
              <aside style={thumbsContainer}>{thumbs}</aside>
            </DropField>
          </div>

          <Submit type="submit" disabled={submitEnabled}>
            {submitEnabled?"Uploading...":"Upload"} <FaCloudUploadAlt />
          </Submit>
        </Form>
      </Wrapper>
    </Container>
  );
};

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "var(--color-primary-variant)";
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
  &:disabled{
    cursor: not-allowed;
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

const DropField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  width: 30vw;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: var(--color-bg-dark);
  color: var(--color-primary-variant);
  outline: none;
  transition: border 0.24s ease-in-out;

  p {
    font-size: 16px;
  }

  label {
    font-size: 20px;
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 60vw;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 70vw;

    p {
      font-size: 20px;
    }
    label {
      font-size: 40px;
    }
  }
`;
export default ProjectUpload;
