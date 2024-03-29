import "../app/globals.css";
import SingleLayout from "../components/single_layout";
import { useAuth } from "../lib/auth";

export default function App({ Component, pageProps }) {
  useAuth(Component);

  return (
    <SingleLayout>
      <Component {...pageProps} />
    </SingleLayout>
  );
}
