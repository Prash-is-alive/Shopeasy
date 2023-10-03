import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const location = useLocation();
  const [showModal, setShowModal] = useState({show:false,mode:''});
  const [logged, setLogged] = useState({
    loggedIn: false,
    loggedInUsername: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [location]);

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setLogged(user);
      console.log(user);
    }
  },[])
  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
    //   try{
      //   const  sessItem = [...JSON.parse(sessionStorage.getItem('cartItems')),cartItems]
  //     console.log(sessItem);
  //     sessionStorage.setItem('cartItems',JSON.stringify(sessItem));
  //   }catch(err){}
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        cartItems,
        setCartItems,
        handleAddToCart,
        cartCount,
        handleRemoveFromCart,
        showCart,
        setShowCart,
        handleCartProductQuantity,
        cartSubTotal,
        setShowModal,
        showModal,
        user,
        setUser,
        logged,
        setLogged,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
