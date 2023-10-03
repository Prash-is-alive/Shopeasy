import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactLoading from "react-loading";
const Header = React.lazy(() => import("./components/Header/Header"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Category = React.lazy(() => import("./components/Category/Category"));
const SingleProduct = React.lazy(() =>
  import("./components/SingleProduct/SingleProduct")
);
const Newsletter = React.lazy(() =>
  import("./components/Footer/Newsletter/Newsletter")
);
const AppContext = React.lazy(() => import("./utils/context"));
const About = React.lazy(() => import("./components/About/About"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Suspense fallback={<ReactLoading type={"cylon"} color={"#8e2de2"} />}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Newsletter />
          <Footer />
        </Suspense>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
