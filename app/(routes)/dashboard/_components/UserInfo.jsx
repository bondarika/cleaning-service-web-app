"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-lg p-8 bg-gray-50 rounded-lg flex flex-col gap-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            Пользовательская информация
          </h2>
          <p className="text-gray-600">Привет, {session?.user?.name}!</p>
          <p className="text-gray-600">Email: {session?.user?.email}</p>
        </div>
        <p className="text-primary">
          Для просмотра истории бронирований перейдите во вкладку "Бронирования"
        </p>
        <div>
          <label htmlFor="address" className="font-bold">
            Адрес:
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="font-bold">
            Номер телефона:
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="font-bold">
            Номер карты:
          </label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3 rounded-md hover:bg-red-600 transition-colors duration-300"
        >
          Выйти
        </button>
      </div>
    </div>
  );
}
