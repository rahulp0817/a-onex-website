// Send to WhatsApp
export const openWhatsApp = (message: string) => {
  const phoneNumber = "+918904557717";
  if (!phoneNumber) {
    console.error("WhatsApp phone number us missing!");
    return;
  }

  const encodedMessage = encodeURIComponent(message);

  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }

}

// Copy to Clipboard
export const copyToClipboard = async (text: string) => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    }
  } catch (error) {
    console.error("Copy failed:", error);
    return false;
  }
};
