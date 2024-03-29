import "../app/globals.css";
import SingleLayout from "../components/single_layout";

export default function App({ Component, pageProps }) {
  return (
    <SingleLayout>
      <Component {...pageProps} />
    </SingleLayout>
  );
}
