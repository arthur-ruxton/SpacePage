import BackgroundGetter from "../componentsAstro/BackgroundGetter"

const Home = () => {
    return (
      <section className="home-section">
        <h4> Welcome to Space News</h4>
        <p> Here we venture into the beyond, explore whats happening in the space around us and look at some pretty far away stuff</p>
        <BackgroundGetter />
      </section>
    )
  }
  
  export default Home