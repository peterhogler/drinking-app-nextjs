import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Karla } from "@next/font/google";

interface LayoutProps {
    children: React.ReactNode;
}

const karla = Karla({ subsets: ["latin"] });

const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Drinking Next App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={karla.className}>
                <div className="max-w-[2000px] px-6 m-auto">
                    <Navbar />
                    {props.children}
                </div>
            </main>
        </>
    );
};
export default Layout;
