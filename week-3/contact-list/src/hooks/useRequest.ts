import ContactType from "@/constants/contactType";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequest = () => {
  const [data, setData] = useState<ContactType[]>([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactName, setContactName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  //   const [newName, setNewName] = useState("");
  //   const [newNumber, setNewNumber] = useState("");

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = async () => {
    try {
      const reqBody = {
        contactName: contactName,
        phoneNumber: phoneNumber,
        dateAdded: new Date().toISOString(),
      };
      const res = await axios.post("http://localhost:3000/contacts", reqBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res) {
        const newData = [...data, res.data];
        setData(newData);
      }
      console.log(res.data);
      console.log(reqBody);
    } catch (error) {
      return error;
    }
  };

  const deleteContacts = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:3000/contacts/${id}`);
      if (res.status === 200) {
        const index = data.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          const copy = [...data];
          copy.splice(index, 1);
          setData(copy);
        }
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const contactFetcher = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/contacts?contactName=${search}`
      );
      setData(res.data);
    } catch (error) {
      return error;
    }
  };

  const updateContacts = async (id: number) => {
    try {
      const updatedData = {
        contactName,
        phoneNumber,
      };
      const res = await axios.patch(
        `http://localhost:3000/contacts/${id}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        setData((prevData) =>
          prevData.map((contact) =>
            contact.id === id ? { ...contact, ...updatedData } : contact
          )
        );
        setEditingId(null);
      }
    } catch (error) {
      return error;
    }
  };

  const submitSearch = () => {
    setSearch(searchTerm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addContact();
    setPhoneNumber("");
    setContactName("");
  };

  const toggleEdit = (id: number) => {
    const result = data.find((contact) => contact.id === id);

    if (result) {
      setContactName(result?.contactName);
      setPhoneNumber(result?.phoneNumber);
      setEditingId(id);
    }

    console.log(result);
  };

  useEffect(() => {
    contactFetcher();
  }, [data, search]);

  return {
    handleSubmit,
    setSearchTerm,
    setPhoneNumber,
    setContactName,
    submitSearch,
    deleteContacts,
    updateContacts,
    toggleEdit,
    data,
    editingId,
    contactName,
    phoneNumber,
  };
};
export default useRequest;
