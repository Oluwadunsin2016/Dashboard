/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";
import { countries } from "../libs/constants";

const SetExchangeRate = () => {
  const [fromCountry, setFromCountry] = useState(null);
  const [toCountry, setToCountry] = useState(null);
  const [rate, setRate] = useState("");
  const [message, setMessage] = useState("");

  const uniqueCountries = Array.from(new Map(countries.map(c => [c.code, c])).values());

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fromCountry || !toCountry) {
      setMessage("Please select both countries.");
      return;
    }

    try {
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
    } catch (err) {
      setMessage("Error setting exchange rate");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Set Exchange Rate</h1>
        <form onSubmit={handleSubmit} className="space-y-4">

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
          <Button type="submit" color="primary" fullWidth>
            Set Rate
          </Button>
        </form>

        {/* Message Display */}
        {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
      </div>
    </div>
  );
};

export default SetExchangeRate;
