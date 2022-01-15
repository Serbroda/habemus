import { fetcher, fetcherText } from "@utils/fetcher";
import type { NextPage } from "next";
import Image from "next/image";
import useSWR from "swr";
import Container from "./components/container";

const Home: NextPage = () => {
    const { data: greet, error: greetError } = useSWR("/api/greet/danny", fetcher);
    const { data: version, error: verionError } = useSWR("/api/version_info", fetcherText);

    return (
        <Container>
            <div className="max-w-6xl mx-auto text-justify md:text-left">
                <h1>Hello NextJs 2</h1>

                <p>{greet ? greet.name : "no-data"}</p>
                <p>Version: {version || "??"}</p>

                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </div>
        </Container>
    );
};

export default Home;
