import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }
            , 3000);
    }
    , []);
    return ( 
        <div className="not-found">
            <h1>Ooop...</h1>
            <h2>ໜ້ານີ້ມີຄວາມຜິດພາບ.</h2>
            <p>ກັບຄືນສູ່ <Link href='/'><a>ໜ້າລັກ</a></Link></p>
        </div>
     );
}
 
export default NotFound;