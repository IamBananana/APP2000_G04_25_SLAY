import AppNavbar from "../components/Navbar";
import Page from "./page";

const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Mitt lag", href: "/lag" },
    { name: "Min side", href: "/minSide" },
    { name: "Login", href: "/login" },
    { name: "Registrer", href: "/registrer" },
];

export default function Spill(){

    return(
        <>
            <AppNavbar links={navLinks} />
            <Page />
        </>
    )
}