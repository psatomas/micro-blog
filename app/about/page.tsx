import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "We love to make apps like this one!",
  };

export default function aboutPage() {
    return(
        <main>
            <h1>About us</h1>
            <p>We love to make apps like this one!</p>
        </main>
    )
}