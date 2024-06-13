"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import useRequest from "@/hooks/useRequest";
import formatDate from "@/lib/dateFormatter";
import { Card } from "@/components/ui/card";

const ContactTable = () => {
  const {
    submitSearch,
    setSearchTerm,
    deleteContacts,
    toggleEdit,
    updateContacts,
    setContactName,
    setPhoneNumber,
    data,
    editingId,
    contactName,
    phoneNumber,
  } = useRequest();

  return (
    <Card className="mx-3 p-4">
      <div className="flex flex-col gap-4 mx-5">
        <div className="flex items-center gap-2 justify-end">
          <Input
            placeholder="Search Contact"
            className="w-[20rem] my-3"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={() => submitSearch()}>Search</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Contact Name</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell className="w-[30%]">
                  {editingId === contact.id ? (
                    <Input
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                    />
                  ) : (
                    contact.contactName
                  )}
                </TableCell>
                <TableCell className="w-[30%]">
                  {editingId === contact.id ? (
                    <Input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  ) : (
                    contact.phoneNumber
                  )}
                </TableCell>
                <TableCell className="w-[30%]">
                  {formatDate(contact.dateAdded)}
                </TableCell>
                <TableCell className="flex gap-2 w-[10%]">
                  <Button onClick={() => deleteContacts(contact.id)}>
                    <FaTrashAlt />
                  </Button>
                  {editingId === contact.id ? (
                    <Button onClick={() => updateContacts(contact.id)}>
                      <FaSave />
                    </Button>
                  ) : (
                    <Button onClick={() => toggleEdit(contact.id)}>
                      <FaEdit />
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ContactTable;
