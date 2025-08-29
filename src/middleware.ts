
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      const url = req.nextUrl.pathname;
      if (url.startsWith("/login")) return true;
      return !!token;
    }
  }
});

export const config = { matcher: ["/((?!_next|api/auth|images|favicon.ico).*)"] };
