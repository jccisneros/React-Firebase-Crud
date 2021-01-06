import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  InputText,
  TextArea,
  Button,
} from "../../theme";

const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    web: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEditTask(values);
    setValues({ ...initialStateValues });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>New Data </h2>
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
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button>Save</Button>
      </div>
      
    </Form>
  );
};

export default LinkForm;
