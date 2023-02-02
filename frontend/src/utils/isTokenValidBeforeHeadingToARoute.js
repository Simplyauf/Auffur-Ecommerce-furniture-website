import { toast } from "react-toastify";
import { fetchIsTokenValid } from "../features/authSlice/fetchIsTokenValid";

export async function isTokenValidBeforeHeadingToRoute(dispatch, navigate) {
  const isValid = await dispatch(fetchIsTokenValid());
  if (!isValid.payload) {
    navigate("/login");
    toast("Only logged in user may can access profile page", {
      type: "error",
      autoClose: 2000,
      position: "top-center",
    });
  }
}
