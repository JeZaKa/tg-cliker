"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Кликай по картинке!</h1>
      <button onClick={() => setCount(count + 1)} className="relative">
        <Image src="/titan.png" alt="Clicker" width={200} height={200} />
      </button>
      <p className="mt-3 text-lg">Счётчик: {count}</p>
    </div>
  );
}
