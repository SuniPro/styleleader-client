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

export function adminDeleteConfirm(deleteFunc: () => Promise<number>) {
  Swal.fire({
    title: "정말 삭제하시겠습니까??",
    text: "삭제하면 되돌릴 수 없습니다.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteFunc()
        .catch(() => error("삭제 실패", "서버 연결을 확인해주세요."))
        .then(() =>
          Swal.fire({
            title: "삭제 완료",
            text: "해당 객체는 삭제되었습니다.",
            icon: "success",
          }),
        );
    }
  });
}
