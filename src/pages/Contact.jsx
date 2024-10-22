import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import contactUsBG from "../assets/images/contactUsBG.jpg";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      style={{
        backgroundImage: `url(${contactUsBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Input id="name" type="text" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input id="email" type="email" placeholder="Your Email" required />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <Textarea id="message" placeholder="Your Message" required />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold mb-2">Connect with us:</h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Facebook className="w-8 h-8 text-black hover:scale-110 hover:text-blue-800" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Twitter className="w-8 h-8 text-black hover:scale-110  hover:text-blue-400" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Instagram className="w-8 h-8 text-black  hover:scale-110  hover:text-pink-500" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Linkedin className="w-8 h-8 text-black  hover:scale-110  hover:text-sky-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
