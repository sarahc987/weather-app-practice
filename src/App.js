import "./styles.css";
import Search from "./Search";
import Details from "./Details";
import Current from "./Current";
import Link from "./Link";
import Time from "./Time";

export default function App() {
  return (
    <div className="App">
      <div className="container wrapper">
        <Search />
        <div className="row">
          <Current />
        </div>
        <Details />
        <Time />
      </div>
      <Link />
    </div>
  );
}
