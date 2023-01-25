import { toast } from "react-toastify";
import { fetchIsTokenValid } from "../features/authSlice/fetchIsTokenValid";

export async function isTokenValidBeforeHeadingToRoute(dispatch, navigate) {
  const isValid = await dispatch(fetchIsTokenValid());
  if (!isValid.payload) {
    toast("Something went wrong", {
      type: "error",
      autoClose: 3000,
      position: "top-center",
    });
    await navigate("/login");
    toast("Only logged in user may can access profile page", {
      type: "error",
      autoClose: 3000,
      position: "top-center",
    });
  }
}
