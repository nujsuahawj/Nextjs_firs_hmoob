import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/nas.module.css'
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: {
            users: data
        }
    }
}
const Contact = ({users}) => {
    return ( 
        <>
            <Head>
                <title>jacksainther | contact</title>
                <meta name='keywords' content='jacksainther' />
            </Head>
            <div>
                <h1>All Users</h1>
                {users.map(user => (
                    <Link href={'/sim/' + user.id} key={user.id}>
                        <a className={styles.single}>
                            <h3>{user.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default Contact;