import { createElement, render } from "lib/virtualDOM";
import Header from "../../components/layout/Header";
import Post from "../../components/Post";

import "./index.css";

const state;
function useState() {
  function setState(value) {
    state = value;
    render();
  }
}

const Home = async () => {
  const cards = await fetcher("./url");

  const template = () => {
    return createElement({
      tagName: "div"
      children: [Header(), Card()],
    });
  };

  new Component({
    template: `<div class="header"></div>`
    mounte: () => {Header({
      target: "header",
      props: {}
    })}
  });
};

function Home() {
  return (
    <Wrapper>
      <Header />
      <Cards />
      <Footer />
    </Wrapper>
  );
}

export default Home;
