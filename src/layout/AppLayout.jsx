import NavMenu from "./NavMenu.jsx"; 
import Main from "./Main.jsx";
import Footer from "./Footer.jsx"; 

export default function Layout ({children}) {
    return (
        <>
        <NavMenu />
        <Main />
        {children}
        <Footer />
        </>
    )
}