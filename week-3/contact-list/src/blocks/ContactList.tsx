"use client";

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
import axios from "axios";
import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const ContactList = () => {
  return (
    <>
      <ContactForm />
      <ContactTable />
    </>
  );
};

export default ContactList;
