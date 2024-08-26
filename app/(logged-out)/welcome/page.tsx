"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const className = document.body.className;
    setIsDarkMode(className.includes("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const className = document.body.className;
          setIsDarkMode(className.includes("dark"));
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Image
        src={isDarkMode ? "/planwireWhite.png" : "/planwireBlack.png"}
        width="140"
        height="35"
        alt="Planwire"
        style={{ width: "140px", height: "35px" }}
      />
      <h1 className="flex gap-2 items-center">Hoşgeldiniz Sitemize !</h1>
      <p>Sitemize Hoşgeldiniz</p>
      <div className="flex gap-3 items-center">
        <Button asChild>
          <Link href="/login">Giriş Yap</Link>
        </Button>
        <small>veya</small>
        <Button asChild variant="outline">
          <Link href="/register">Kayıt Ol</Link>
        </Button>
      </div>
    </>
  );
}
