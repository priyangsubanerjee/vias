import { signOut } from "next-auth/react";
import React from "react";

function Logout() {
  return (
    <div>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}

export default Logout;
