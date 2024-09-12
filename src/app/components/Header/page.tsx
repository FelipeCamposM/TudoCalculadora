import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
   <div>
    <div className="flex justify-between items-center h-20 p-10 bg-cyan-700">
          <h1 className="text-3xl font-bold text-white">Tudo Calculadora</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Calculadoras</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Calculadoras</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <a href="/CalcDefault">Calculadora Padrão</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/CalcMatrizes">Calculadora de Matrizes</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/CalcDefault">Calculadora de Equações</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="/CalcDefault">Calculadora de Ano Bissexto</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
   </div>
  );
}
