import Feed from "@components/Feed";
import About from "@components/About";
import ContactUs from "@components/ContactUs";
import NewsHandlers from "@components/NewsHandlers";

const Home = () => {
  return (
    <>
      <section className="w-full flex-col flex-center" id="sectionHome">
        <h1 className="head_text text-center">
          Welcome to NewsNess!
          <br />
          <span className="orange_gradient text-center">Stay Informed, Stay Ahead!</span>
        </h1>
        <p className="desc text-center">
          NewsNess is a <strong>One-Shot platform</strong> to access all the major headlines trending in the country <strong>across diffrent media hubs.</strong> Now 
          no need to visit different media portals and waste you valuable time, instead you can just simply get all at <strong>one place.</strong>   
        </p>
      </section>
      <NewsHandlers/>
      <About/>
      <ContactUs/>
    </>
  )
}

export default Home;
