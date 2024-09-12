"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import { useRef } from 'react';

export default function CalcDefault() {
  return (
  <>
    <main className="flex flex-col items-center">
        <Card className="bg-gray-100">
          <CardDescription className="flex items-center justify-end h-16 m-4 rounded-lg text-3xl font-bold px-4 bg-white border-[1px]">
            <span>0</span>
          </CardDescription>
          
        </Card>
    </main>
  </>
  );
}

