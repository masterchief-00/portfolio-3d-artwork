import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { RiDragDropLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { uploadAction } from "../store/upload-slice";


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

const DropZone = () => {
  const [files, setFiles] = useState([]);
  const dispatch=useDispatch()
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
     }
  });

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

  return (
    <div className="container">
      <Container {...getRootProps({ className: "dropzone" })}>
        <Field name="images" {...getInputProps()} />
        <p>Drop or click to select the Render Images</p>
        <label>
          <RiDragDropLine />
        </label>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </Container>
    </div>
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

const Field = styled.input``;
export default DropZone;
