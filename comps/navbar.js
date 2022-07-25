import Link from "next/link";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Jack Sainther </h1>
            </div>
            <Link href="/"><a className="nav-link">ໜ້າລັກ</a></Link>
            <Link href="/about"><a className="nav-link">ກ່ຽວກັບ</a></Link>
            <Link href="/contact/"><a className="nav-link">ຕິດຕໍ່</a></Link>
        </nav>
     );
}
 
export default Navbar;