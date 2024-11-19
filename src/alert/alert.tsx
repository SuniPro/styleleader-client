import Swal from "sweetalert2";
import theme from "../styles/theme";

export function success(msg: string) {
  Swal.fire({
    icon: "success",
    title: msg,
    showConfirmButton: false,
    timer: 1500,
    background: `${theme.colors.black}`,
    color: `${theme.colors.lightGold}`,
  });
}

export function error(title: string, msg: string) {
  Swal.fire({
    icon: "error",
    title: title,
    text: msg,
  });
}
