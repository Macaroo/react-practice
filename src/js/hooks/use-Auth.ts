// zustandを使用して状態管理やloginやlogout, isLoginCheckDoneの判定処理をできるようにしたので、このカスタムフックは一旦不要になった。

import { useEffect } from "react";
import { useAuthStore } from "../stores/use-auth-store";

// export const useAuth = () => {
//   const { isLoggedIn, setIsLoggedIn, isLoginCheckDone, setIsLoginCheckDone, userName, setUserName, login, logout } =
//     useAuthStore();

//   return { isLoggedIn, isLoginCheckDone, login, logout, userName, setUserName };
// };
