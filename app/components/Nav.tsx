"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
export default function Nav() {
  return (
    <nav className="">
      <Link href="/">
        <Image src="" alt="Logo"
      </Link>
    </nav>
  );
}
