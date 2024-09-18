import "./HomePage.css";
import Content from "../../components/Content/Content";
import CircleGroup from "../../components/CircleGroup/CircleGroup";

const MainPage = () => {
  return (
    <Content isCloseBtnDisabled={true}>
      <div className="circles-box">
        <CircleGroup
          count={10}
          color={1}
          appearTime={1}
          dissapearTime={10000}
        />
        <CircleGroup
          count={10}
          color={2}
          appearTime={3000}
          dissapearTime={10000}
        />
        <CircleGroup
          count={10}
          color={3}
          appearTime={6000}
          dissapearTime={10000}
        />
      </div>
    </Content>
  );
};

export default MainPage;
