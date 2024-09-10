import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function CalcDefault() {
  return (
  <>
    <main className="flex flex-col items-center">
        <Card className="bg-gray-100">
          <CardDescription className="flex items-center justify-end h-16 m-4 rounded-lg text-3xl font-bold px-4 bg-white border-[1px]">
            <span>Number</span>
          </CardDescription>
          <div className="grid grid-cols-4 items-center p-4 gap-1">
            <Button className="h-16 w-20" variant="outline">%</Button>
            <Button className="h-16 w-20" variant="outline">CE</Button>
            <Button className="h-16 w-20" variant="outline">C</Button>
            <Button className="h-16 w-20" variant="outline">BACK</Button>
            <Button className="h-16 w-20" variant="outline">1/X</Button>
            <Button className="h-16 w-20" variant="outline">X^2</Button>
            <Button className="h-16 w-20" variant="outline">sqrt</Button>
            <Button className="h-16 w-20" variant="outline">/</Button>
            <Button className="h-16 w-20" variant="outline">7</Button>
            <Button className="h-16 w-20" variant="outline">8</Button>
            <Button className="h-16 w-20" variant="outline">9</Button>
            <Button className="h-16 w-20" variant="outline">x</Button>
            <Button className="h-16 w-20" variant="outline">4</Button>
            <Button className="h-16 w-20" variant="outline">5</Button>
            <Button className="h-16 w-20" variant="outline">6</Button>
            <Button className="h-16 w-20" variant="outline">-</Button>
            <Button className="h-16 w-20" variant="outline">1</Button>
            <Button className="h-16 w-20" variant="outline">2</Button>
            <Button className="h-16 w-20" variant="outline">3</Button>
            <Button className="h-16 w-20" variant="outline">+</Button>
            <Button className="h-16 w-20" variant="outline">0</Button>
            <Button className="h-16 w-20" variant="outline">.</Button>
            <Button className="h-16 col-span-2" variant="outline">=</Button>
          </div>
        </Card>
    </main>
    
  </>
  );
}
