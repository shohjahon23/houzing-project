import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../components/Generic/Button";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import { Container, Logo, Section, Wrapper, Link, Main } from "./style";

const Home = () => {
  const navigate = useNavigate();


  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => !hidden && (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            ))}
          </Section>
          <Section>
            <Button onClick={() => navigate('/signin')} type={'dark'}>Sign In</Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Home;
