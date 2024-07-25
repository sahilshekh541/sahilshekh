/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/Alert";
import Alert from "../components/Alert";
const Contact = () => {
  const [isloading, setIsloading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlefocus = () => setCurrentAnimation("walk");
  const handleblur = () => setCurrentAnimation("idle");
  const handlesubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sahil",
          from_email: form.email,
          to_email: "sahilshekh1117@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsloading(false);
        showAlert({
          show: true,
          text: "Message sent succesfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsloading(false);
        setCurrentAnimation("idle");
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
        setTimeout(() => {
          hideAlert();
        }, 3000);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text"> Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handlesubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              title="Enter Your Name"
              className="input"
              placeholder="john"
              required
              value={form.name}
              onChange={handlechange}
              onFocus={handlefocus}
              onBlur={handleblur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="text"
              name="email"
              title="Enter Email Address"
              className="input"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handlechange}
              onFocus={handlefocus}
              onBlur={handleblur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              name="message"
              className="textarea"
              placeholder="Let me know how can i help you!"
              required
              value={form.message}
              onChange={handlechange}
              onFocus={handlefocus}
              onBlur={handleblur}
            />
          </label>
          <button
            className="btn"
            type="submit"
            onFocus={handlefocus}
            disabled={isloading}
            onBlur={handleblur}
          >
            {isloading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, far: 1000, near: 0.1 }}>
          <Suspense fallback={<Loader />}>
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
