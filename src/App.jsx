import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/layout/Header";
import Cart from "./pages/Cart";
import ProductDetailPage from "./components/products/ProductDetailPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/layout/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./pages/Home";
import ProductsByCategory from "./components/products/ProductsByCategory";
import CheckoutPage from "./components/cart/CheckOutPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cart/",
        element: <Cart />,
      },
      {
        path: "/cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/category/:categoryName",
        element: <ProductsByCategory />,
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
        path: "/productdetailpage/:id",
        element: <ProductDetailPage />,
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
    <div className="flex flex-col min-h-screen">
      <Provider store={appStore}>
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        {{ path: "/cart" } ? null : <Footer />}
      </Provider>
    </div>
  );
}

export default App;
