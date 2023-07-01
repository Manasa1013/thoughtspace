import { useToast } from "../../Contexts/ToastContext";
import "./Toast.css";
export function Toast() {
  const { toast, hideToastBar } = useToast();
  return (
    <div
      className={`bg-white text-teal-800 pt-3 px-4 pb-2 rounded-sm fixed bottom-8 left-10 align-left z-10 right-1/2 max-w-[80%] border-b-4 border-teal-700
          ${toast.isVisible}`}
    >
      <span className="p-1">{toast.message}</span>
      <button className="icon--button" onClick={() => hideToastBar()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-5 -5 24 24"
          strokeWidth={2.0}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    // </div>
    // </div>
  );
}
