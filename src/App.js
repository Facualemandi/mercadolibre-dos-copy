import React, { useState } from "react";
import "./App.css";
import ANav from "./Components/ANav";
import CMenu from "./Components/CMenu";
import DSimilarProducts from "./Components/DSimilarProducts";
import GMainProduct from "./Components/GMainProduct";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menu, setMenu] = useState(false);

  const [productOne, setProductOne] = useState(true);
  const [productTwo, setProductTwo] = useState(false);
  const [productThree, setProductThree] = useState(false);
  const [productFour, setProductFour] = useState(false);
  const [productFive, setProductFive] = useState(false);
  const [question, setQuestion] = useState({});

  const [all, setAll] = useState(true);
  const [positive, setPositive] = useState(false);
  const [negative, setNegative] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [valueComent, setValueComent] = useState("");

  const openMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const handleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  const onChangeProduct = () => {
    if (productOne) {
      setProductOne(false);
      setProductTwo(true);
    }
    if (productTwo) {
      setProductTwo(false);
      setProductThree(true);
    }
    if (productThree) {
      setProductThree(false);
      setProductFour(true);
    }
    if (productFour) {
      setProductFour(false);
      setProductFive(true);
    }
    if (productFive) {
      setProductFive(false);
      setProductOne(true);
    }
  };

  const changeOneImage = () => {
    setProductTwo(false);
    setProductOne(true);
    setProductThree(false);
    setProductFour(false);
    setProductFive(false);
  };

  const changeSecondImgae = () => {
    setProductTwo(true);
    setProductOne(false);
    setProductThree(false);
    setProductFour(false);
    setProductFive(false);
  };
  const changeThreeImage = () => {
    setProductTwo(false);
    setProductOne(false);
    setProductThree(true);
    setProductFour(false);
    setProductFive(false);
  };
  const changeFourImage = () => {
    setProductTwo(false);
    setProductOne(false);
    setProductThree(false);
    setProductFour(true);
    setProductFive(false);
  };
  const changeFiveImage = () => {
    setProductTwo(false);
    setProductOne(false);
    setProductThree(false);
    setProductFour(false);
    setProductFive(true);
  };

  const positiveComments = () => {
    setPositive(true)
    setAll(false);
    setNegative(false);
  };
  const negativeComments = () => {
    setPositive(false);
    setAll(false);
    setNegative(true);
  };
  const allComments = () => {
    setPositive(false);
    setAll(true);
    setNegative(false);
  };

  return (
    <>
      <ANav openMenu={openMenu} menu={menu} />
      <CMenu menu={menu} />
      <DSimilarProducts darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <GMainProduct
        onChangeProduct={onChangeProduct}
        changeOneImage={changeOneImage}
        changeSecondImgae={changeSecondImgae}
        changeThreeImage={changeThreeImage}
        changeFourImage={changeFourImage}
        changeFiveImage={changeFiveImage}
        productOne={productOne}
        productTwo={productTwo}
        productThree={productThree}
        productFour={productFour}
        productFive={productFive}
        darkMode={darkMode}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        question={question}
        setQuestion={setQuestion}
        valueComent={valueComent}
        setValueComent={setValueComent}
        all={all}
        setAll={setAll}
        positive={positive}
        setPositive={setPositive}
        negative={negative}
        setNegative={setNegative}
        positiveComments={positiveComments}
        negativeComments={negativeComments}
        allComments={allComments}
      />
    </>
  );
}

export default App;
