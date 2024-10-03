"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
export default function Nav() {
  const isLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProvidrers = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setupProvidrers();
  }, []);
  return (
    <nav className="bg-black text-white flex p-4">
      <Link href="/">
        <Image
          src="/assets/ThoughtsLogo.png"
          alt="Logo"
          width={30}
          height={30}
          className="inline rounded-full"
        />
        <p className=" mx-2 hidden sm:inline">Thoughts</p>
      </Link>
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="">
            <Link href="/create-prompt" className="black-btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="black-btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assests/ThoughtsLogo.png"
                alt="profile"
                width={30}
                height={30}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=""
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
      <div>
        {isLoggedIn ? (
          <Image
            src="/assests/ThoughtsLogo.png"
            alt="profile"
            width={30}
            height={30}
          />
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className=""
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
}
