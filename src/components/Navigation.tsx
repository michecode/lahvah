import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [expanded, setExpanded] = useState(false);

  let dropdown:any;

  if (expanded) {
    dropdown = (
    <div className="flex flex-col ml-[15%] ">
      <span className="font-serif text-2xl md:text-4xl p-1">
      <Link href="/models">
        <a>models</a>
      </Link>
      </span>
      <span className="font-serif text-2xl md:text-4xl p-1">
      <Link href="/contact">
        <a>contact</a>
      </Link>
      </span>
    </div>
    )}

  return (
    <>
    <header className="relative flex justify-end items-end mt-12 sm:mb-12 md:mb-4 px-8 sm:px-32 ">
      <h1 className="font-serif text-4xl mr-auto sm:text-4xl md:text-8xl">
        <Link href="/">
          <a>lahvah</a>
        </Link>
      </h1>
      <div className="ml-auto lg:hidden" onClick={() => setExpanded(!expanded)}>
        <span className="">{expanded ? <CloseIcon /> : <MenuIcon />}</span>
      </div>
      
      <div className="hidden lg:block">
        <Link href="/models">
          <a
            className="
          ml-auto
          font-serif
          text-4xl
          md:text-5xl
          lg:text-6xl
          inline-block
          relative
          no-underline
          px-[10px]
          after:absolute
          after:w-[100%]
          after:h-[5px]
          after:bg-black
          after:bottom-0
          after:left-0
          after:scale-x-0
          after:origin-bottom-right
          after:transition-transform
          hover:after:origin-bottom-left
          hover:after:scale-x-100
          "
          >
            models
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="
          mx-10
          font-serif
          text-4xl
          md:text-5xl
          lg:text-6xl
          inline-block
          relative
          no-underline
          px-[10px]
          after:absolute
          after:w-[100%]
          after:h-[5px]
          after:bg-black
          after:bottom-0
          after:left-0
          after:scale-x-0
          after:origin-bottom-right
          after:transition-transform
          hover:after:origin-bottom-left
          hover:after:scale-x-100
          "
          >
            contact
          </a>
        </Link>
      </div>
      
    </header>
    {dropdown}
    </>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7ZM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12ZM4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z"
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="36"
      width="36"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
      ></path>
    </svg>
  );
}
