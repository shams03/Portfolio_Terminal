import React from "react";

export default function Contact() {
  const contacts = [
    {
      text: "Phone number",
      value: "+918779324457",
      href: "tel:8779324457",
    },
    {
      text: "Email",
      value: "shams03.work@gmail.com",
      href: "mailto:shams03.work@gmail.com",
    },
    {
      text: "X (twitter)",
      value: "@shams_zero",
      href: "https://x.com/shams_zero",
    },
  ];
  return (
    <div className="w-11/12 mx-auto">
      {contacts.map(({ text, value, href }, index) => {
        return (
          <div className="flex items-center gap-20  mt-3" key={index}>
            <h1 className="text-yellow-200 w-36">{text}</h1>
            <a href={href} className="flex-1 underline text-blue-300 ">
              {value}
            </a>
          </div>
        );
      })}
    </div>
  );
}
