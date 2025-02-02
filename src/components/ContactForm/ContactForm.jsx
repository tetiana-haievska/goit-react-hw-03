import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Invalid phone number")
    .min(6, "Must be at least 6 digits")
    .required("Required"),
});

export default function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ name: values.name, number: values.number });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label>
            Name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number:
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
