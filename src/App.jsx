import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/productdetail",
        element: <ProductPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
