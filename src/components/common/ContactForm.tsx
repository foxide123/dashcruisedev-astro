"use client";

import { useState } from "react";
/* import { handleMailSubmition } from "@/app/actions/mailActions"; */
import PopupModal from "@/components/modals/PopupModal";
import { AlertBox } from "@/components/modals/AlertBox";
import { handleMailSubmition } from "@/actions/mailActions";
import type {ContactFormDataProps} from "@/types/common_types"


export default function ContactUsForm({
  padding,
  marginTop,
  formData
}: {
  padding?: string;
  marginTop?: string;
  //eslint-disable-next-line
  formData:ContactFormDataProps
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [pending, setPending] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);

  return (
    <div className={`lg:w-[747px] ${marginTop} rounded-lg`}>
      <form
         onSubmit={async (e) => {
          e.preventDefault();
          setPending(true);

          const formData = new FormData(e.currentTarget);

          const result = await handleMailSubmition(formData);
          setPending(false);
          if (result?.success) {
            setShowPopup(true);
            console.log("Setting show popup to true");
            setFormValues({ name: "", email: "", message: "" });
            setTimeout(() => setShowPopup(false), 3000);
          } else if (result?.error) {
            setAlert({
              type: "error",
              message: "Submission error: " + result.error,
            });
            setTimeout(()=> setAlert(null), 5000);
            console.error("Validation or server error:", result.error);
            // You could also show a toast or inline error here
          }
        }} 
        className={`flex flex-col ${padding}`}
      >
        <input
          type="text"
          id="nameInput"
          name="name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          required
          placeholder={formData.name}
          className="border-1 p-5 outline-none rounded-md"
        />
        <input
          type="email"
          id="emailInput"
          name="email"
          required
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          placeholder={formData.email}
          className="border-1 mt-5 p-5 outline-none rounded-md"
        />
        <textarea
          name="message"
          required
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
          placeholder={formData.message}
          className="border-1 mt-5 p-5 h-50 outline-none rounded-md"
        />
        <button
          type="submit"
          className="w-[215px] cursor-pointer text-base font-bold leading-6 rounded-4xl bg-carrot-500 text-white mt-5 p-5"
        >
          {pending ? `${formData.sending}` : `${formData.send}`}
        </button>
        {alert && <AlertBox message={alert.message} />}
        {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
      </form>
    </div>
  );
}
