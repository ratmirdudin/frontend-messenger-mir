import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const menus = [
  {title: "Мой профиль", link: "/"},
  {title: "Диалоги", link: "/im"},
  {title: "Друзья", link: "/"},
]

const Sidebar = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col mr-2 h-min min-w-fit border max-md:hidden">
      {menus.map(({title, link}) => (
        <Link key={title} href={link}>
          <p
             className={(router.pathname.replaceAll("/", "") === link.replaceAll("/", "") ? " bg-amber-300 " : "") + "text-sm text-zinc-700 px-2 py-2 cursor-pointer select-none border-b last:border-0 hover:shadow-xl hover:bg-amber-300 transform transition ease-out"}>
            {title}
          </p>
        </Link>
      ))}
    </div>
  )
};

// const Sidebar = () => {
//   const router = useRouter()
//   return (
//     <div className="flex flex-col mr-2 h-min min-w-fit border">
//       {menus.map(({title, link}) => (
//         <p key={title} onClick={() => router.push(link)}
//            className={(router.pathname.replaceAll("/", "") === link.replaceAll("/", "") ? " bg-amber-300 " : "") + "text-sm text-zinc-700 px-2 py-2 cursor-pointer select-none border-b last:border-0 hover:shadow-xl hover:bg-amber-300 transform transition ease-out"}>
//           {title}
//         </p>
//       ))}
//     </div>
//   )
// };

export default Sidebar;