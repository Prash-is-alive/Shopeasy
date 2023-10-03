import React, { useEffect, useState, useContext, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle, BiUserCheck } from "react-icons/bi";
import { Button } from "@mui/material";
import { Context } from "../../utils/context";
import "./Header.scss";
const Cart = React.lazy(() => import("../Cart/Cart"));
const Modal = React.lazy(() => import("../MyModal"));
const Search = React.lazy(() => import("./Search/Search"));
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navigate = useNavigate();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const { cartCount, showCart, setShowCart, showModal, setShowModal, logged } =
    useContext(Context);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li>Categories</li>
          </ul>
          <div className="center " onClick={() => navigate("/")}>
            SHOPEASY
          </div>
          <div className="right">
            <TbSearch onClick={() => setSearchModal(true)} />
            <AiOutlineHeart />
            <span className="user-icon">
              {(logged.loggedIn && (
                <>
                  <BiUserCheck
                    onClick={() => setShowModal({ show: true, mode: "logout" })}
                  />
                </>
              )) || (
                <>
                  <BiUserCircle
                    onClick={() => setShowModal({ show: true, mode: "signIn" })}
                  />
                </>
              )}
            </span>
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
            <span>{logged.loggedIn && logged.loggedInUsername}</span>
          </div>
        </div>
      </header>

      <Suspense fallback={<span>Loading...</span>}>
        {searchModal && <Search setSearchModal={setSearchModal} />}
        {showCart && <Cart />}
        {showModal.show && <Modal mode={showModal.mode} />}
      </Suspense>
    </>
  );
};

export default Header;
