import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/auth";

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create">Create</Link>
              <button onClick={signOut}>Logout</button>
              <Link href={`/user/${session.id}`}>{session.user.name}</Link>
            </>
          ) : (
            <button onClick={signIn('github')}>Login</button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;