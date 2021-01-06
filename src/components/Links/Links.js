import React, { useState, useEffect } from "react";
import { MdDeleteForever, MdCreate } from "react-icons/md";
import { toast } from "react-toastify";
import LinkForm from "../LinkForm";

import {
  CardContainer,
  Card,
  CardHeader,
  CardTitle,
  CardItemEdit,
  CardItemDelete,
  CardItemText,
  CardButton,
  CardText,
  TitleSection,
  Title,
  Line,
} from "../../theme";

import { db } from "../../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);

  const [currentId, setCurrentId] = useState("");

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);

        toast("New Item Added!", {
          autoClose: 2000,
          position: "top-right",
          hideProgressBar: true,
          type: "success",
          pasuOnHover: true,
        });
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        toast("Item Update Succesfully!", {
          autoClose: 2000,
          position: "top-right",
          hideProgressBar: true,
          type: "info",
          pasuOnHover: true,
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteLink = async (id) => {
    try {
      if (window.confirm("are you sure you want to delete this item?")) {
        await db.collection("links").doc(id).delete();
        toast("Item Removed Succesfully!", {
          autoClose: 2000,
          position: "top-right",
          hideProgressBar: true,
          type: "error",
          pasuOnHover: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getLinks = async () => {
    try {
      db.collection("links").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setLinks(docs);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <LinkForm {...{ addOrEditLink, currentId, setCurrentId, links }} />

      <CardContainer>
        <TitleSection>
          <h2>Link List</h2>
          <Line />
        </TitleSection>
        {links.map((link) => (
          <Card key={link.id}>
            <CardHeader>
              <CardTitle>
                <Title style={{ fontSize: "2rem !important" }}>
                  {link.web}
                </Title>
              </CardTitle>
              <span style={{ fontSize: "2rem", fontWeight: "bold" }}> | </span>
              <CardItemEdit
                onClick={() => {
                  setCurrentId(link.id);
                }}
              >
                <MdCreate />
                <CardItemText>Edit</CardItemText>
              </CardItemEdit>
              <CardItemDelete
                onClick={() => {
                  onDeleteLink(link.id);
                }}
              >
                <MdDeleteForever />
                <CardItemText>Delete</CardItemText>
              </CardItemDelete>
            </CardHeader>
            <Line />
            <CardText>{link.description}</CardText>
            <CardButton href={link.url} target="_blank" rel="noreferrer">
              Go to website
            </CardButton>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default Links;
