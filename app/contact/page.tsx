"use client";

import ContactDetails from "@/components/contactus/ContactDetails";
import SupportForm from "@/components/contactus/SupportForm";
import HeadingBanner from "@/components/HeadingBanner";
import React from "react";

function Contactus() {
  return (
    <section>
      <HeadingBanner
        name="Contact Us"
        description="Have questions, feedback, or want to learn more about our products? Reach out our team will get back to you as soon as possible."
      />

      <div className="mx-6 mt-16 mb-40 flex flex-col gap-16 lg:mx-52 lg:flex-row lg:items-start">
        <div className="flex-1">
          <ContactDetails />
        </div>

        <div className="flex-1">
          <SupportForm
            onSubmitForm={async (data) => {
              console.log(data);

              // EMAILJS CALL HERE

              /*
    await emailjs.send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      "PUBLIC_KEY"
    );
    */
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;
