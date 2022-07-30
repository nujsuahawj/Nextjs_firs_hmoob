import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/hmongher.png" alt="jacksainther" width={77} height={77} />
            </div>
            <Link href="/"><a className="nav-link">ໜ້າລັກ</a></Link>
            <Link href="/about"><a className="nav-link">ກ່ຽວກັບ</a></Link>
            <Link href="/contact/"><a className="nav-link">ຕິດຕໍ່</a></Link>
        </nav>
     );
}
 
export default Navbar;