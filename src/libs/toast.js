import Swal from "sweetalert2";

export const toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseover = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
    }
})