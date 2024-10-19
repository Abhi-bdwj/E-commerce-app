import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryProducts from "./pages/CategoryProducts";

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
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/category/:categoryName",
        element: <CategoryProducts />,
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
    <div className="flex flex-col min-h-screen">
      <Provider store={appStore}>
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
