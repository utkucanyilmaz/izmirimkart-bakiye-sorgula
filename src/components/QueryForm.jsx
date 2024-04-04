import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";
import { useCardContext } from "../context/CardContext";

function QueryForm({ handleSubmit }) {
  const { cardInfo, setCardInfo } = useCardContext();

  const [cardNumber, setCardNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event) {
    setCardNumber(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://openapi.izmir.bel.tr/api/iztek/bakiyesorgulama/${cardNumber}`
      );

      if (res.HataVarMi) {
        throw new Error(`${res.HataMesaj}`);
      }

      const result = await res.json();

      setCardInfo(result);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 place-items-center md:place-items-baseline md:grid-cols-3 my-4 md:flex-row space-y-4 md:space-x-4 w-full md:w-8/12"
      >
        <Input
          desc={"Kart Numarası"}
          label={"kartnumarasi"}
          onInputChange={handleChange}
          value={cardNumber}
        />
        <Button isLoading={isLoading} type={"submit"}>
          Bakiye Sorgula
        </Button>
      </form>
      <Card />
    </>
  );
}

export default QueryForm;
