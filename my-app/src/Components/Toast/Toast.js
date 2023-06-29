import { useToast } from "../../Contexts/ToastContext";
import "./Toast.css";
export function Toast() {
  const { toast, hideToastBar } = useToast();
  return (
    <div className={`toast ${toast.isVisible}`}>
      {/* <div className="toast show"> */}
      <span className="pd-1">
        {toast.message}
        {/* bcdhvbsjnk */}
      </span>
      <button className="icon--button" onClick={() => hideToastBar()}>
        <i className="fi fi-rs-cross icon--xmark"></i>
      </button>
    </div>
  );
}
