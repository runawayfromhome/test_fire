import Link from "next/link";

export default async function NewsArticle ({params, searchParams}:{
    params: Promise<{articleId: string}>;
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>;
    }){
    return (
        <div>
            <h1> News article id</h1>
            <p> Reading in language</p>
            
            <div>
                <Link href="/article/id?lang=en">English</Link>    
                <Link href="/article/id?lang=sp">Spanish</Link>
                <Link href="/article/id?lang=fr">French</Link>
            </div>
        </div>
    ); 
}