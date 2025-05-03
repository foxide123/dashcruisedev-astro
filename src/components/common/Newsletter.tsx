"use client";

import { AlertBox } from "@/components/modals/AlertBox";
import { newsletterSignup } from "@/actions/newsletterActions";
import { useState } from "react";
import PopupModal from "@/components/modals/PopupModal";
import type { NewsletterDataProps } from "@/types/common_types";
import sanitizeHtml from 'sanitize-html';

export function Newsletter({locale = 'en', newsletterData}: {locale?: string; newsletterData: NewsletterDataProps}) {

  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [alert, setAlert] = useState<{
    type: "error" | "success";
    message: string;
  } | null>(null);
  


  return (
    <div className="w-full bg-amber-500 flex lg:flex-row flex-col justify-between rounded-[10px] py-[24px] px-[32px]">
      <div className="flex flex-col text-white text-2xl font-bold ">
       {/*  <h2 dangerouslySetInnerHTML={{__html: newsletterData['header']}}> */}
       <h2 dangerouslySetInnerHTML={{__html: sanitizeHtml(newsletterData.header, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['br'])
       })}}>
        </h2>
      </div>
      <div className="flex lg:flex-row lg:items-center lg:mt-0 mt-3 flex-col text-sm font-normal">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await newsletterSignup({
              email: email,
              locale: locale,
              invalidEmailText: newsletterData.invalidEmailError
            });

            if (result?.success) {
              setShowPopup(true);
              console.log("Setting show popup to true");
              setTimeout(() => setShowPopup(false), 3000);
            } else if (result?.error) {
              setAlert({
                type: "error",
                message: "Signup Error " + result.error,
              });

              setTimeout(() => setAlert(null), 5000);
            }
          }}
        >
          <input
            type="email"
            placeholder={newsletterData.placeholder}
            className="bg-white p-3 rounded-md text-sm lg:w-[600px] w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="lg:ml-3 lg:mt-0 mt-3 bg-black text-white p-2 rounded-md font-bold text-lg cursor-pointer"
          >
            {newsletterData.cta}
          </button>
          {showPopup && (
            <PopupModal
              onClose={() => setShowPopup(false)}
              message="Newsletter Signup Success"
            />
          )}
          {alert && <AlertBox message={alert.message} />}
        </form>
      </div>
    </div>
  );
}
