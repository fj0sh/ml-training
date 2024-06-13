import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ContactType from "@/constants/contactType";
import useRequest from "@/hooks/useRequest";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [contactName, setContactName] = useState("");

  //   const addContact = async () => {
  //     try {
  //       const res = await axios.post("http://localhost:3000/contacts", {
  //         body: JSON.stringify({
  //           contactName: phoneNumber,
  //           phoneNumber: contactName,
  //           dateCreated: new Date().toISOString(),
  //         }),
  //       });

  //       console.log(res.data);
  //     } catch (error) {
  //       return error;
  //     }
  //   };

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     addContact();
  //   };

  const { handleSubmit, setContactName, setPhoneNumber } = useRequest();

  return (
    <div className="flex justify-center my-[3rem]">
      <Card className="flex flex-col w-[30rem]">
        <CardHeader>
          <CardTitle className="text-center">Add Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-col gap-3"
          >
            <Input
              placeholder="Contact Name"
              onChange={(e) => setContactName(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button className="w-[10rem]">Add to Contacts</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
