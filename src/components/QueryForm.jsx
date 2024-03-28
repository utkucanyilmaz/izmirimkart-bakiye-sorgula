import React, { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useCardContext } from "../context/CardContext";

function QueryForm({ handleSubmit }) {
  const { setCardInfo } = useCardContext();

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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-4 md:mt-8"
    >
      <Input
        label={"kartnumarasi"}
        desc="Kart Numarası :"
        onInputChange={handleChange}
        value={cardNumber}
      />
      <Button isLoading={isLoading} type={"submit"}>
        Bakiye Sorgula
      </Button>
    </form>
  );
}

export default QueryForm;
