import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form
              action="https://formspree.io/r.kh.sabzi@gmail.com"
              method="POST"
              className="mt-5"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="john smith"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="email@email.com"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="imortant"
                  className="form-control"
                />
              </div>
              <div className="form">
                <textarea
                  name="messege"
                  rows="10"
                  className="form-control"
                  placeholder="hello there body"
                ></textarea>
              </div>
              <div className="for-group mt-3">
                <input
                  type="submit"
                  className="form-control bg-primary text-white"
                  value="send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
