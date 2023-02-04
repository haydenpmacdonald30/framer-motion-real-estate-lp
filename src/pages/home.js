import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
              
                <Link to={`/model/house1`}>
                  <ProgressiveImage
                    src={require("../images/realestate.jpeg")}
                    placeholder={require("../images/realestate.jpeg")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='aaaaaa'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
                <div className='image-hovering-letters'><p>click to enter</p></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <div className='title'>123 Fake Street</div>
                <div className='title'>$3,000,000.00</div>
                <div className='title'>Bed: 4</div>
                <div className='title'>Bath: 3</div>
                <div className='title'>Lot Size: 1.2 Acres</div>

              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
                <div className='title'>REAL ESTATE ANIMATIONS</div>
              <div className='title'>REAL ESTATE ANIMATIONS</div>
              <div className='location'>
                <span>250-332-2456</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
