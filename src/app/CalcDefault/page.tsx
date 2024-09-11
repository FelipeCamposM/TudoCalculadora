"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import useCalc from "./CalcDefaultFunc";
import { useState } from 'react';

export default function CalcDefault() {
  const {handleButtonClick} = useCalc();
  return (
  <>
    <main className="flex flex-col items-center">
        <Card className="bg-gray-100">
          <CardDescription className="flex items-center justify-end h-16 m-4 rounded-lg text-3xl font-bold px-4 bg-white border-[1px]">
            <span id="display">0</span>
          </CardDescription>
          <div className="grid grid-cols-4 items-center p-4 gap-1">
      {[
        '%', 'CE', 'C', 'BACK', 
        '1/X', 'X^2', 'sqrt', '/', 
        '7', '8', '9', 'x', 
        '4', '5', '6', '-', 
        '1', '2', '3', '+', 
        '0', '.', '=',
      ].map((buttonLabel, index) => (
        <Button
          key={index}
          className={`h-16 ${buttonLabel === '=' ? 'col-span-2' : 'w-20'}`}
          variant="outline"
          onClick={() => handleButtonClick(buttonLabel)}
        >
          {buttonLabel}
        </Button>
      ))}
    </div>
        </Card>
    </main>
    
  </>
  );
}

