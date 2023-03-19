import DropDownMenu from "./components/DropDownMenu";
import Home from "./components/Home";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="w-full h-full flex">
      <div className="w-auto">
        <DropDownMenu />
      </div>
      <div className="flex w-full">
        <div className="basis-3/4">
          <Home />
        </div>
        <div className="basis-1/4">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
