import Link from 'next/Link';

export default function Navigation() {
  return (
    <header className="flex justify-end items-end mt-12 mb-12 px-32">
      <h1 className="font-serif text-8xl font-bold mr-auto">
        <Link href="/">
          <a>lahvah</a>
        </Link>
      </h1>
      <div className="">
        <Link href="/models">
          <a className="
          ml-auto
          font-serif
          text-6xl
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
          ">
            models
          </a>
        </Link>
        <Link href="/contact">
          <a className="
          mx-10
          font-serif
          text-6xl
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
          ">contact</a>
        </Link>
      </div>
    </header>
  );
}

// .link {
//     display: inline-block;
//     position: relative;
//     text-decoration: none;
//     padding: 10px 0;
//     color: #fff;
// }

// .link-wrapper {
//     position: relative;
//     display: block;
//     padding: 20px 0;
// }

// .hover-1 {
//     &:after {
//         content:'';
//         position: absolute;
//         width: 100%;
//         height: 3px;
//         bottom: 0;
//         left: 0;
//         background-color: @red;
//         transform: scaleX(0);
//         transform-origin: bottom right;
//         transition: transform 0.3s;
//     }

//     &:hover {
//         &:after {
//             transform-origin: bottom left;
//             transform: scaleX(1);
//         }
//     }
// }
