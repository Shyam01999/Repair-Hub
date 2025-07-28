import { JSX } from "react";
import { CustomerHeader } from "../components/customer/CustomerHeader";
import "@css/globals.css";



export default function Home():JSX.Element {
  return (
    <>
      <header>
        <CustomerHeader/>
      </header>
      <main>
        <h1>Main part of customer side</h1>
      </main>
      <footer>
        <h2>Footer of customer side</h2>
      </footer>
    </>
  );
}
