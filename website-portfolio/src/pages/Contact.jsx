import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <br></br>
      <p>Please leave your information below and I will reach out between 1-3 business days!</p>
      <br></br>

      <form class="was-validated">
        <div class="mb-3">
        <label for="examplyInputName1">Full Name</label>
          <input type="text" class="form-control" placeholder="Name" />
          <label for="exampleInputEmail1">Email address</label>
          <div class="invalid-feedback">
            Please enter a email in the textarea.
          </div>
          <input
            type="email"
            class="form-control is valid"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <label for="validationTextarea">Textarea</label>
          <textarea
            class="form-control is-invalid"
            id="validationTextarea"
            placeholder="Required example textarea"
            required
          ></textarea>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div>
          <button> Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;