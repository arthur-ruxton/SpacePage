import BackgroundGetter from "../componentsAstro/BackgroundGetter"

const Home = () => {
    return (
      <section className="home-section">
        <h3> Welcome to Space Page</h3>
        <p> Here we venture into the beyond, explore whats happening in the space around us and look at some pretty far away stuff</p>
        <BackgroundGetter />
      </section>
    )
  }
  
  export default Home