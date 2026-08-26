"use client";

import ContactDetails from "@/components/contactus/ContactDetails";
import SupportForm from "@/components/contactus/SupportForm";
import HeadingBanner from "@/components/HeadingBanner";
import { sendEmail } from "@/services/emailService";
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
              try {
                console.log(data);

                await sendEmail({
                  firstName: data.firstName,
                  lastName: data.lastName,
                  email: data.email,
                  phone: data.phone,
                  message: data.message,
                });

                // console.log("Email sent successfully");
              } catch (error) {
                console.error("Error sending email:", error);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Contactus;

// email service
// template id
// public key: in account section
// install: npm install @emailjs/browser
