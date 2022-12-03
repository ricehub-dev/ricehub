import { useSession } from "@supabase/auth-helpers-react";
import Account from "./Account";
import SignIn from "./SignIn";

export default function AccountPage() {
  const session = useSession();
  return <>{session ? <Account /> : <SignIn />}</>;
}
