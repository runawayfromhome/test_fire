import Link from "next/link"



export default function Home(){
    return (
    <>
        <div>
            <h1>putangina moooooooooo</h1>
            <Link href="/blog"> Blog </Link>
            <Link href="/products"> Products </Link>
            <Link href="/articles/breaking-news-1234?lang=en"> Read in English </Link>
            <Link href="/articles/breaking-news-1234?lang=fr"> Read in French </Link>
            
            
            
            <h1>putangina moooooooooo</h1>

        </div>

    </>
    )
}