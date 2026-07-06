import { type SubmitEvent } from "react";
import * as z from "zod";

function App() {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const schema = z.object({
      firstName: z.string().min(5, "First name is required"),
      lastName: z.string().min(5, "Last name is required"),
      email: z.email("Invalid email address"),
    });

    const result = schema.safeParse(Object.fromEntries(formData));

    if (result.success) {
      console.log("User: ", result.data);
    } else {
      console.log("Error: ", JSON.parse(result.error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="firstName" id="firstName" />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" name="lastName" id="lastName" />
      <br />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="email" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
