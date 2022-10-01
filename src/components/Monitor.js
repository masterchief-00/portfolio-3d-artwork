import React, { useEffect } from "react";
import styled from "styled-components";
import { MdOutlineEqualizer } from "react-icons/md";
import { SiBlender, SiGooglemessages } from "react-icons/si";
import { CgPrinter, CgSandClock } from "react-icons/cg";
import { BsGraphUp } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { GiStarsStack } from "react-icons/gi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { monitorActions } from "../store/monitor-slice";

const Monitor = () => {
  const monitorData = useSelector((state) => state.monitor.monitorData);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios({
        method: "get",
        mode: "cors",
        url: "http://localhost:8000/api/getDetails/monitor",
      });
      console.log(response.data.visits)
      dispatch(
        monitorActions.setMonitorData({
          total: response.data.total,
          cgi: response.data.cgi,
          print: response.data.print,
          renders: response.data.renders.resources.length,
          favorites: response.data.favorites,
          visits:response.data.visits
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container id="monitoring">
      <IconHeader>
        <h1>
          <TbHeartRateMonitor />
        </h1>
      </IconHeader>
      <h1>Monitoring</h1>
      <Wrapper>
        <Item>
          <Icon>
            <MdOutlineEqualizer />
          </Icon>

          <Content>
            <h2>Total Projects</h2>
            <label>{monitorData.total}</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <SiBlender />
          </Icon>
          <Content>
            <h2>CGI Projects</h2>
            <label>{monitorData.cgi}</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <CgPrinter />
          </Icon>
          <Content>
            <h2>3D Printing Projects</h2>
            <label>{monitorData.print}</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <BsGraphUp />
          </Icon>
          <Content>
            <h2>Visits</h2>
            <label>{monitorData.visits}</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <IoMdPhotos />
          </Icon>
          <Content>
            <h2>Render Images</h2>
            <label>{monitorData.renders}</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <SiGooglemessages />
          </Icon>
          <Content>
            <h2>Messages</h2>
            <label>7</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <CgSandClock />
          </Icon>
          <Content>
            <h2>Ongoing Projects</h2>
            <label>3</label>
          </Content>
        </Item>
        <Item>
          <Icon>
            <GiStarsStack />
          </Icon>
          <Content>
            <h2>Favorite Projects</h2>
            <label>{monitorData.favorites}</label>
          </Content>
        </Item>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 20px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    width: 80vw;
    grid-template-columns: 1fr;
  }
  /* ======MEDIUM DEVICES======= */
  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 90vw;
    grid-template-columns: 1fr 1fr;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-bg);
  border: solid 1px var(--color-bg-variant);
  border-radius: 1rem;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.4rem;
  }
`;
const Icon = styled.div`
  font-size: 35px;

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`;
const Content = styled.div`
  padding: 0.7rem;

  label {
    font-size: 25px;
    text-align: left;
  }

  /* ======SMALL DEVICES====== */

  @media screen and (max-width: 600px) {
    padding: 0.2rem;

    label {
      font-size: 18px;
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
export default Monitor;
