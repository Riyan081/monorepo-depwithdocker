import prisma from "@repo/db/client";
import styles from "./page.module.css";



export default async function Home() {
  const users = await prisma.user.findMany();
  return (
<div>
  <h1 className={styles.title}>Welcome to the Todo App!</h1>
   <p>{users.map((user) => (
     <div key={user.id}>
       <p>{user.username}</p>
     </div>
   ))}</p>
</div>
  );
}


export const dynamic = "force-dynamic"; // Ensure this page is always rendered on the server to fetch the latest data from the database.
//export const revalidate = 0; // Disable ISR to ensure data is always fresh on each request.

