"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  const router = useRouter();

  // Функция для перенаправления на страницу авторизации
  const handleSignInClick = () => {
    router.push("/register");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div
      className="p-5 shadow-sm flex  justify-between"
      style={{
        backgroundColor: "black",
        width: "100%",
        color: "white",
        fontSize: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <div className="flex items-center gap-8 ">
        <Image src="/logo.svg" alt="logo" width={40} height={20} />
        <h2 className="text-bold text-xl text-primary">Cleany</h2>
        <div
          className="md:flex items-center
            gap-6 hidden
            "
        >
          <Link
            href={"/"}
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            Главная
          </Link>
          <h2
            className="hover:scale-105 hover:text-primary
                cursor-pointer"
          >
            <Link href={"/about"}>О нас</Link>
          </h2>
        </div>
      </div>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src="/avatar.svg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Link href={"/dashboard"}>Профиль</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>Бронирования</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={handleSignInClick}>Вход / Регистрация</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
