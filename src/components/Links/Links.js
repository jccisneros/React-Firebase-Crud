import React, { useState, useEffect } from "react";
import { MdDeleteForever, MdCreate } from "react-icons/md";
import { toast } from 'react-toastify';
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
  Title
} from "../../theme";

import { db } from "../../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);

  const addOrEditTask = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
    toast("New Item Added!", {
      autoClose: 2000,
      position: 'top-right',
      hideProgressBar: true,
      type: 'success',
      pasuOnHover: true
      
    });
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this item?")) {
      await db.collection('links').doc(id).delete();
      toast("Item Removed Succesfully!", {
        autoClose: 2000,
        position: 'top-right',
        hideProgressBar: true,
        type: 'error',
        pasuOnHover: true
        
      });
    }
  };

  const getLinks = async () => {
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
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <>
      <LinkForm addOrEditTask={addOrEditTask} />
      <CardContainer>
        {/* <h2 style={{ textAlign: "center" }}>Data List</h2> */}
        {links.map((link) => (
          <Card key={link.id}>
            <CardHeader>
              <CardTitle>
                <Title style={{fontSize: '2rem !important'}}>{link.web}</Title>
              </CardTitle>
              <span style={{ fontSize: '2rem', fontWeight: 'bold'}}> | </span>
              <CardItemEdit
                onClick={() => {
                  // onDeleteLink(link.id);
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
            <hr style={{width: '100%', marginTop: '.8rem', height: '.2rem'}}/>
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
