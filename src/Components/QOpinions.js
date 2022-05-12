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
            <p className="p_stars">
              5 estrellas
              <p className="line_blue">
                <p className="line_blue_five"></p>
              </p>
              <span>756</span>
            </p>

            <p className="p_stars">
              4 estrellas
              <p className="line_blue">
                <p className="line_blue_four"></p>
              </p>
              <span>486</span>
            </p>

            <p className="p_stars">
              3 estrellas
              <p className="line_blue">
                <p className="line_blue_three"></p>
              </p>
              <span>146</span>
            </p>

            <p className="p_stars">
              2 estrellas
              <p className="line_blue">
                <p className="line_blue_two"></p>
              </p>
              <span>113</span>
            </p>

            <p className="p_stars">
              1 estrellas
              <p className="line_blue">
                <p className="line_blue_one"></p>
              </p>
              <span>103</span>
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default QOpinions;

