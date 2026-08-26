import {
  PhoneCall,
  Send,
  MessagesSquare,
  MapPin,
  Linkedin,
  Instagram,
} from "lucide-react";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="space-y-2">
          <p className="text-md text-[16px] font-bold text-[#152f3e]">
            Call us
          </p>
          <p className="text-sm font-medium text-gray-500">
            Call our team Mon-Sat from 9am to 6pm.
          </p>
        </div>
        <p className="flex gap-2 mt text-[15px] font-semibold items-center">
          <PhoneCall size={16} className="text-[#152f3e]" />
          +91 1234567890
        </p>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <p className="text-md text-[16px] font-bold text-[#152f3e]">
            Chat with us
          </p>
          <p className="text-sm font-medium text-gray-500">
            Speak to our friendly team for any quries.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-2 text-[15px] cursor-pointer hover:underline font-semibold items-center">
            <MessagesSquare size={16} className="text-[#152f3e]" />
            Message on WhatsApp
          </p>
          <p className="flex gap-2 text-[15px] cursor-pointer hover:underline font-semibold items-center">
            <Send size={16} className="text-[#152f3e]" />
            Shoot us an email
          </p>
          <p className="flex gap-2 text-[15px] cursor-pointer hover:underline font-semibold items-center">
            <Linkedin size={16} className="text-[#152f3e]" />
            Message us on LinkedIn
          </p>
          <p className="flex gap-2 text-[15px] cursor-pointer hover:underline font-semibold items-center">
            <Instagram size={16} className="text-[#152f3e]" />
            Message us on Instagram
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-2">
          <p className="text-[16px] font-bold text-[#152f3e]">Visit us</p>
          <p className="text-sm font-medium text-gray-500">
            Chat to us in person at our Kalaburagi HQ.
          </p>
        </div>
        <p className="flex gap-2 text-[15px] font-semibold items-center">
          <MapPin size={16} className="text-[#152f3e]" />
          Plot No Q3, 1st Stage Kapnoor Industrial Estate, Kalaburagi, Karnataka
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
