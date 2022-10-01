import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { FaAward } from "react-icons/fa";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import IMG1 from "../assets/loader.gif";

import { renderActions } from "../store/render-slice";

const Top = () => {
  const projectData = useSelector((state) => state.render.projectData);
  const dataReady = useSelector((state) => state.render.ready);
  const dispatch = useDispatch();

  const fetchProjects = async () => {
    try {
      const response = await axios({
        method: "get",
        mode: "cors",
        url: "http://localhost:8000/api/getDetails/projects",
      });

      dispatch(renderActions.setProjectData(response.data.projects));
      dispatch(renderActions.setRecents());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <Container id="favorites">
      <Jump bottom>
        <IconHeader>
          <h1>
            <FaAward />
          </h1>
        </IconHeader>
      </Jump>
      <Fade bottom>
        <h1>Highly rated projects we've worked on</h1>
      </Fade>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
        spaceBetween={2}
        slidesPerView={1}
        speed={900}
        // navigation
        mousewheel
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {!dataReady && (
          <Loading>
            <img src={IMG1} alt="loading" />
          </Loading>
        )}

        {projectData.map((project) => (
          <SwiperSlide className="slide" key={project.id}>
            <Card>
              <Picture src={project.imageSource} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.body}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  padding: 2rem 8rem;
  width: 100vw;
  height: max-content;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.5rem 2rem;
    h1 {
      font-size: 18px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 0.5rem 5rem;
    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }
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
`;
const Card = styled.div`
  padding: 1rem;
  align-items: center;
  margin-top: 20px;
  border: solid 1px var(--color-primary-variant);
  border-radius: 8px;
  width: max-content;
  height: max-content;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 1rem 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      padding: 5px;
      font-size: 15px;
    }
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    padding: 1.5rem 1/7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      padding: 10px;
      font-size: 25px;
    }
  }
`;
const Picture = styled.img`
  height: 60vh;
  border-radius: 2rem;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    height: 20vh;
    border-radius: 1rem;
  }

  /* ======MEDIUM DEVICES======= */

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    height: 30vh;
    border-radius: 1rem;
  }
`;
const Loading = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;

export default Top;
