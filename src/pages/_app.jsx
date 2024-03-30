import "../app/globals.css";
import SingleLayout from "../components/single_layout";

function App({ Component, pageProps }) {
  return (
    <SingleLayout>
      <Component {...pageProps} />
    </SingleLayout>
  );
}

export default App;
