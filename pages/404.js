import Link from 'next/link'
import {useRouter} from "next/router";

export default function FourOhFour() {
  const router = useRouter()
  // console.log(router)
  return <>
    <p>Страница не найдена! </p>
    <Link href="/">
      Вернуться на главную страницу
    </Link>
  </>
}