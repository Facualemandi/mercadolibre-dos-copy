import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import "../Styles/QOpinions.css";

const QOpinions = () => {
  return (
    <>
      <section className="containerOp">
        <p className="name_headphone">
          Opiniones sobre Auriculares Headset Hyperx Orbit S 7.1 Planar Head
          Tracking
        </p>

        <section className="container_total_opinion">
          <section className="container_promedio">
            <span className="fourStar"> 4.6</span>
            <section>
              <AiFillStar className="icon_promedio_star" />
              <AiFillStar className="icon_promedio_star" />
              <AiFillStar className="icon_promedio_star" />
              <AiFillStar className="icon_promedio_star" />
              <BsStarHalf className="icon_promedio_star" />
            </section>
            <p>Promedio entre 1.172 opiniones </p>
          </section>

          <section className="container_starts">
            <div className="p_stars">
              5 estrellas
              <div className="line_blue">
                <div className="line_blue_five"></div>
              </div>
              <span>756</span>
            </div>

            <div className="p_stars">
              4 estrellas
              <div className="line_blue">
                <div className="line_blue_four"></div>
              </div>
              <span>486</span>
            </div>

            <div className="p_stars">
              3 estrellas
              <div className="line_blue">
                <div className="line_blue_three"></div>
              </div>
              <span>146</span>
            </div>

            <div className="p_stars">
              2 estrellas
              <div className="line_blue">
                <div className="line_blue_two"></div>
              </div>
              <span>113</span>
            </div>

            <div className="p_stars">
              1 estrellas
              <div className="line_blue">
                <div className="line_blue_one"></div>
              </div>
              <span>103</span>
            </div>
            
          </section>
        </section>
      </section>
    </>
  );
};

export default QOpinions;

