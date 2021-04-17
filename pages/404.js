import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
    // document.title = "404 Error";
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1);
            router.push("/");
        }, 3000)
    }, []);
    return (
        <>
            <Head>
                <title>Ninja List | 404 Error</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Ooops! 404 Error</h1>
                <h2>That Page Cannot Be Found :(</h2>
                <p>Go Back To The <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </>
    );
}

export default NotFound;