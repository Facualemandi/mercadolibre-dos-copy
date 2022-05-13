import React from "react";
import "../Styles/RQuestions.css";
import { BsArrowReturnRight } from "react-icons/bs";

const newEntry = {
  pregunta: "",
};

const RQquestions = ({
  searchValue,
  setSearchValue,
  setQuestion,
  valueComent,
  setValueComent,
  darkMode,
}) => {
  const onAskQuestion = (e) => {
    setSearchValue(e.target.value);
    setQuestion({
      ...newEntry,
      pregunta: searchValue,
    });
  };

  const returQuestion = (e) => {
    if (searchValue.length > 0) {
      setValueComent(searchValue);
      setSearchValue('')
    } else {
      setQuestion(false);
    }
  };

  return (
    <>
      <section className="container_total_ask">
        <section className="ask">
          <p> Preguntale al vendedor </p>

          <textarea
            onChange={onAskQuestion}
            className="textArea"
            rows="2"
            cols="20"
            value={searchValue}
          ></textarea>

          <button onClick={returQuestion}>Preguntar</button>
        </section>

        <h4 className="ultimasRealizadas">Ultimas realizadas</h4>

        <section className="container_questions">
          <section>
            <p className={`${darkMode && "questionDark"}`}>
              Me podrás confirmar que tienen las placas audeze? No veo que tenga
              el sello en el auricular derecho como lo tienen otros en las fotos
            </p>
            <span>
              <p className="response">
                <BsArrowReturnRight />
                Sí, las tiene. Las imágenes son ilustrativas. Cualquier otra
                inquietud no dudes en avisarnos!
              </p>
            </span>
          </section>

          <section>
            <p className={`${darkMode && "questionDark"}`}>
              Hola que tal, el auricular (no el microfono) tiene cancelacion de
              ruido? gracias!
            </p>
            <span>
              <p className="response">
                <BsArrowReturnRight />
                Hola! Sí, cuenta con cancelación de ruido. Cualquier otra
                inquietud no dudes en avisarnos! Gracias por tu consulta!
                Saludos
              </p>
            </span>
          </section>

          <section>
            <p className={`${darkMode && "questionDark"}`}>
              Hola, funcionan de manera inalámbrica con Xbox series s?
            </p>
            <span>
              <p className="response">
                <BsArrowReturnRight />
                Hola buen día. No son inalámbricos, son cableados. Quedamos a tu
                disposición. Saludos, Yohana DaleClick.
              </p>
            </span>
          </section>
          <section>
            <p className={`${darkMode && "questionDark"}`}>
              Hola! qué tal es a reducción de ruido de estos auriculares?
            </p>
            <span>
              <p className="response">
                <BsArrowReturnRight />
                Hola! La reducción de ruido es excelente. Cualquier otra
                inquietud no dudes en avisarnos! Gracias por tu consulta!
                Saludos
              </p>
            </span>
          </section>

          <section>
            <p className={`${darkMode && "questionDark"}`}>
              Hola, como se carga la bateria interna?
            </p>
            <span>
              <p className="response">
                <BsArrowReturnRight />
                Hola! Podes ver todas las especificaciones detalladas en la
                descripción de la publicación. Saludos,
              </p>
            </span>
          </section>

          <section>
            <p> {valueComent} </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default RQquestions;
