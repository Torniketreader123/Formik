import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AgreementText, Button, Card, Description, Input, Inputs, SubmitButton, Title, ErrorMessage } from "./";  







function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("First Name cannot be empty"),
      lastName: Yup.string().required("Last Name cannot be empty"),
      email: Yup.string().email("Invalid email format").required("Looks like this is not an email"),
      password: Yup.string().required("Password cannot be empty")
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Title>Learn to code by watching others</Title>
        <Description>
          See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
        </Description>
        <Button>Try it free for 7 days then $20/mo. thereafter</Button>
        <Inputs>
          <Input type="text" name="firstName" placeholder="First Name" value={values.firstName} onChange={handleChange}  />
          {errors.firstName ? <ErrorMessage>{errors.firstName}</ErrorMessage> : null}
          <Input type="text" name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange} />
          {errors.lastName ? <ErrorMessage>{errors.lastName}</ErrorMessage> : null}
          <Input type="email" name="email" placeholder="Email Address" value={values.email} onChange={handleChange} />
          {errors.email ? <ErrorMessage>{errors.email}</ErrorMessage> : null}
          <Input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} />
          {errors.password ? <ErrorMessage>{errors.password}</ErrorMessage> : null}
          <SubmitButton type="submit">CLAIM YOUR FREE TRIAL</SubmitButton>
          <AgreementText>
            By clicking the button, you are agreeing to our Terms and Services
          </AgreementText>
        </Inputs>
      </Card>
    </form>
  );
}


export default App;
