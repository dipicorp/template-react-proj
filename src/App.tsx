import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import LocalStorage from './submodules/localstorage/local-storage';
import { RequireLogined } from './middleware/require-logined';
import About from './pages/about/about';
import { Homepage } from './pages/homepage/homepage';
import { NotFound } from './pages/not-found/not-found';
import Signup from './pages/signup/signup';
import Tailwind from './pages/tailwind/tailwind';
import CallBackRecoil from './pages/usecallback-recoil/callback-recoil';
import { CartItem, cartState, Theme, themeState } from './state/user-state';

const App = () => {

  let setTheme = useSetRecoilState(themeState)
  let setCart = useSetRecoilState(cartState)

  useEffect(() => {
    let curTheme = LocalStorage.get<Theme>("theme");
    let curCart = LocalStorage.get<CartItem[]>("cart");

    if (!curTheme) {
      curTheme = "light"
      LocalStorage.set("theme", "light")
    }
    setTheme(curTheme)

    if (!curCart) {
      curCart = []
      LocalStorage.set("cart", [])
    }
    setCart(curCart)
  }, [setTheme, setCart])

  return <>
    <Nav />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/callback-recoil" element={RequireLogined(CallBackRecoil)} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/tailwind" element={<Tailwind />} />
      <Route element={<NotFound />} />
    </Routes>
    <Footer />
  </>
}

export default App;
