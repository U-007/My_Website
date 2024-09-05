"use client";

import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 9343441220",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sharmamridul1612@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Raipur, Chhattisgarh, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-sm">
              <h3 className="text-4xl text-blue-500">Let's work together</h3>
              <p className="text-white/60">
                I'm always open to discussing product design work or partnership
                opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" className="rounded-md" />
                <Input type="text" placeholder="Lastname" className="rounded-md" />
                <Input type="email" placeholder="Email address" className="rounded-md" />
                <Input type="tel" placeholder="Phone number" className="rounded-md" />
              </div>
              <Select>
                <SelectTrigger className="w-full rounded-md">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Select a service">
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ml">Machine Learning</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="data-analyst">Data Analyst</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Message"
                className="flex min-h-[80px] w-full rounded-md border bg-slate-950 text-white"
              />
              <Button
                type="submit"
                className="mt-4 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md self-start"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <div className="flex flex-col gap-4 text-white">
              {info.map((item, index) => (
                <div key={index} className="flex items-center gap-4 rounded-xl">
                  {item.icon}
                  <div>
                    <h4 className="text-lg">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
