import React from "react";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleOnSubmit = async () => {
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    const res = await fetch("/api/notification", {
      method: "POST",
      body: JSON.stringify({
        message: `Contact us form%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`,
      }),
    });
    if (res.status === 200) {
      alert("Message sent successfully");
      setEmail("");
      setName("");
      setMessage("");
    }
  };
  return (
    <div className="lg:px-[96px] py-[90px] px-6 font-general-sans bg-[#D7F3FF] min-h-screen">
      <h1 className="text-3xl font-semibold">Contact us</h1>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>
      <div className="w-[60%] mt-7">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              name=""
              id=""
              className="border h-12 px-5 w-full bg-transparent border-neutral-400 rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              name=""
              id=""
              className="border h-12 px-5 w-full bg-transparent border-neutral-400 rounded-md"
            />
          </div>
          <div className="col-span-2">
            <textarea
              name=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              id=""
              className="border p-5 w-full bg-transparent border-neutral-400 rounded-md"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={() => handleOnSubmit()}
            className="bg-[#023E8A] hover:bg-[#1c3556] text-white px-10 py-3 rounded-md mt-5"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
