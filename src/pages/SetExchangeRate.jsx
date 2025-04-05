/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { Select, SelectItem, Input, Button, Spinner } from "@nextui-org/react";
import { countries } from "../libs/constants";
import exchange_rate from '../assets/exchange_rate.png';

const SetExchangeRate = () => {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [rate, setRate] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");
 
  const available= !!fromCountry && !!toCountry && !!rate


  const uniqueCountries = Array.from(new Map(countries.map(c => [c.code, c])).values());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fromCountry || !toCountry) {
      setMessage("Please select both countries.");
      return;
    }

    try {
      setIsPending(true);
      const response = await axios.post("https://dashboard-backend-hazel-five.vercel.app/api/set-rate", {
        fromCountry: fromCountry, // Send country name instead of object
        toCountry: toCountry,     // Send country name instead of object
        rate: parseFloat(rate),
      });

      if (response.data) {
        setMessage(`Exchange rate set successfully: ${response.data.rate}`);
        setFromCountry(null);
        setToCountry(null);
        setRate("");
      }
      setIsPending(false);
    } catch (err) {
      setMessage("Error setting exchange rate");
      setIsPending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 min-h-[60vh] max-w-4xl rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={exchange_rate}
            alt="OTP Illustration"
            width={400}
            height={800}
          />
        </div>
       <div className="flex-1 p-6 flex flex-col justify-center items-center">
       <h1 className="text-2xl font-bold mb-6 text-center">Set Exchange Rate</h1>
        <p className="text-gray-600 text-sm mb-4 text-center italic">
  Enter how much 1 unit of the selected <b>From Country</b> currency is worth in the selected <b>To Country</b> currency.
</p>
        <form onSubmit={handleSubmit} className="space-y-4 w-full">

          {/* From Country */}
          <Select
            label="From Country"
            selectedKeys={fromCountry ? new Set([fromCountry.code]) : new Set()}
            onSelectionChange={(e) => {
              const selected = uniqueCountries.find(c => c.code === e.currentKey);
              setFromCountry(selected || null);
            }}
            required
          >
            {uniqueCountries.map((country) => (
              <SelectItem key={country.code} textValue={country.name}>
                <div className="flex items-center gap-2">
                  <img src={country.image} alt={country.name} className="w-5 h-5" />
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </Select>

          {/* To Country */}
          <Select
            label="To Country"
            selectedKeys={toCountry ? new Set([toCountry.code]) : new Set()}
            onSelectionChange={(e) => {
              const selected = uniqueCountries.find(c => c.code === e.currentKey);
              setToCountry(selected || null);
            }}
            required
          >
            {uniqueCountries.map((country) => (
              <SelectItem key={country.code} textValue={country.name}>
                <div className="flex items-center gap-2">
                  <img src={country.image} alt={country.name} className="w-5 h-5" />
                  <span>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </Select>

          {/* Exchange Rate */}
          <Input
            label="Exchange Rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />

          {/* Submit Button */}
          <Button isDisabled={isPending || !available} type="submit" color="primary" fullWidth className="rounded-md">
          {isPending ? (
        <span className="flex items-center gap-1 justify-center">    <Spinner size="sm"
        color="white"
      /> Please wait...</span>
          ):
            <span>Set Rate</span>
          }
          </Button>
        </form>

        {/* Message Display */}
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
       </div>
      </div>
    </div>
  );
};

export default SetExchangeRate;
