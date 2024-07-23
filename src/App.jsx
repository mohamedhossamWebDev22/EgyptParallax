import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import img1 from "./assets/2.jpg";
import img2 from "./assets/1.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

function App() {
  return (
    <>
      <Parallax className="ss" pages={5}>
        {/* photos */}
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
          }}
          id="up"
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${img4})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        {/* Txt  */}
        <ParallaxLayer offset={0.5} speed={0.1}>
          <h1>Egypt</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.1}>
          <div className="info">
            <p>
              Egypt, rich in history, is home to numerous Islamic and Roman
              monuments. The country boasts stunning Islamic architecture, such
              as the Citadel of Cairo and Al-Azhar Mosque. Additionally, Roman
              influences are evident in landmarks like the Roman Theater in
              Alexandria and the Temple of Dendera. These monuments highlight
              Egypt's diverse historical heritage and attract visitors from
              around the world.
            </p>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Egypt"
            >
              <button>See More</button>
            </a>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={0.1}>
          <div className="info">
            <p>
              Egypt's history spans thousands of years, marked by the rise and
              fall of powerful dynasties and monumental achievements in
              architecture, such as the Pyramids of Giza and the Great Sphinx.
              Ancient Egyptians made significant advancements in mathematics,
              medicine, and engineering, which laid the foundation for future
              civilizations. Their complex society, centered around the Nile
              River, developed a rich culture with elaborate religious beliefs
              and practices that continue to fascinate historians and
              archaeologists today.
            </p>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/History_of_Egypt"
            >
              <button>See More</button>
            </a>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.1}>
          <div className="info">
            <p>
              Egypt, with its rich history of pharaohs and monumental
              architecture, greatly influenced the ancient world and laid
              foundational contributions to science, art, and governance. The
              Roman Empire, renowned for its vast territories and engineering
              marvels like aqueducts and roads, further shaped Western
              civilization through law, politics, and culture. The Islamic
              civilization, emerging in the 7th century, made significant
              advancements in mathematics, medicine, astronomy, and philosophy,
              preserving and expanding upon the knowledge of earlier
              civilizations, including Egyptian and Roman legacies.
            </p>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Roman_Egypt"
            >
              <button>See More</button>
            </a>
          </div>
        </ParallaxLayer>
        

        {/* sticky */}
        <ParallaxLayer
          sticky={{start:4.2, end:4.9}}
          speed={.2}
        >
          <h3>Made By Mohamed Hossam</h3>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{start:1.2, end:4.2}}
          speed={.2}
        >
          <div className="bT">
            <a href="#up">Back <br/> To Top</a></div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
