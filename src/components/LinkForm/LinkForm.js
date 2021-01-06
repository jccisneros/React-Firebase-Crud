import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import {
  Form,
  FormGroup,
  FormLabel,
  InputText,
  TextArea,
  Button,
  Line,
} from "../../theme";

const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    web: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const validURL = (str) => {
    return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      str
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (values.url === "" || values.web === "" || values.description === "") {
      toast("All fields are required!", {
        autoClose: 2000,
        position: "top-right",
        hideProgressBar: true,
        type: "error",
        pasuOnHover: true,
      });
    } else if (validURL(values.url) === false) {
      toast("The url is invalid!!", {
        autoClose: 2000,
        position: "top-right",
        hideProgressBar: true,
        type: "error",
        pasuOnHover: true,
      });
    } else {
      props.addOrEditLink(values);
      setValues({ ...initialStateValues });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const getLinkById = async (id) => {
    try {
      const doc = await db.collection("links").doc(id).get();
      setValues(doc.data());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}> New Link Data </h2>
      <Line />
      <FormGroup>
        <FormLabel>URL</FormLabel>
        <InputText
          type="text"
          name="url"
          placeholder="https://someurl.com"
          value={values.url}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Website</FormLabel>
        <InputText
          type="text"
          name="web"
          placeholder="Website Name"
          value={values.web}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Description</FormLabel>
        <TextArea
          name="description"
          rows="2"
          placeholder="Description"
          value={values.description}
          onChange={handleChange}
        />
      </FormGroup>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button>{props.currentId === "" ? "Save" : "Update"}</Button>
      </div>
    </Form>
  );
};

export default LinkForm;
