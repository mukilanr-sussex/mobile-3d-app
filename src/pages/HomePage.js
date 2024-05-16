import Divider from "@mui/material/Divider";
import Main from "../components/Main";
import Container from "../components/Container";
import HomePageBanner from "../components/HomePageBanner";
import HomePageModels from "../components/HomePageModels";
import BrandsSlider from "../components/BrandsSlider";

const HomePage = () => {
  return (
    <Main colorInvert={true}>
      <HomePageBanner />
      <Container>
        <HomePageModels />
      </Container>
      <Container>
        <Divider />
      </Container>
      <Container
        maxWidth={1}
        paddingTop={"0 !important"}
        paddingBottom={"24px !important"}
      >
        <BrandsSlider />
      </Container>
    </Main>
  );
};

export default HomePage;
