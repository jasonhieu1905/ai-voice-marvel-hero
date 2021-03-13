import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useCart } from "../context/Cart-Context";

function useAlan() {
  const [alanBtnInstance, setAlanBtnInstance] = useState(null);
  const {
    setShowCartItems,
    getImageBySuperHero,
    addToCart,
  } = useCart();

  useEffect(() => {
    if (alanBtnInstance != null) return;
    setAlanBtnInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        key:
          "9b98a477eeb0f5e757f78363edf942c52e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          switch (commandData.command) {
            case "open-cart":
              setShowCartItems(true);
              break;
            case "close-cart":
              setShowCartItems(false);
              break;
            case "add-item":
              const payload = commandData.payload;
              const { name, quantity } = payload;
              const image = getImageBySuperHero(name);  
              addToCart(name, image, quantity);
              setShowCartItems(true);
              break;
            default:
              break;
          }
        },
      })
    );
  }, []);

  return <div></div>;
}

export default useAlan;
