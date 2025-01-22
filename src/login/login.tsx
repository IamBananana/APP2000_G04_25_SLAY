import AppNavbar from "../components/Navbar";
import Page from "./page";

const navLinks = [
    { name: "Hjem", href: "/" },
    { name: "Om oss", href: "/omOss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Spill", href: "/spill" }, //Kan man spille uten å logge inn?
    { name: "Registrer", href: "/registrer" },
    
]


export default function Login(){
    {
        return (
            <>
                <AppNavbar links={navLinks}></AppNavbar>
                <Page />
            </>
        )
    }
}