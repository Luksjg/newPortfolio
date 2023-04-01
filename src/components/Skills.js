import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These are some of the technologies I like to work with most of the time.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.clipartmax.com/png/full/291-2918933_html-and-css-logo.png" alt="Image" />
                                <h5>HTML5 / CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="Image" />
                                <h5>React / Redux TK </h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/3161/3161158.png" alt="Image" />
                                <h5>SQL / Postgress</h5>
                            </div>
                            <div className="item">
                                <img src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="Image" />
                                <h5>NoSQL / MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="https://wsofter.ru/wp-content/uploads/2017/12/node-express.png" alt="Image" />
                                <h5>Express JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Image" />
                                <h5>GIT / GIT Hub</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
