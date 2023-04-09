import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "./schemas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import toast from "react-hot-toast";

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      terms: false,
      age: "",
      jobtitle: "",
      gender: "",
    },
    validationSchema: registrationSchema,
    onSubmit: async (values, actions) => {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
      toast.success("Successfully Registered", {
        icon: "😃",
      });
      actions.resetForm();
    },
  });

  return (
    <form
      className="container min-vh-100 d-flex gap-3 justify-content-center align-items-center flex-column"
      style={{ background: "#CBDAE9" }}
      onSubmit={formik.handleSubmit}
    >
      <h1 className="border-bottom border-dark pb-2">Registration</h1>
      <div>
        <label htmlFor="name">Full Name</label>
        <div className="w-75">
          <input
            id="name"
            name="name"
            className={
              formik.errors.name && formik.touched.name
                ? `form-control input-error`
                : `form-control`
            }
            type="text"
            autoComplete="off"
            placeholder="Enter full name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="text text-danger">{formik.errors.name}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <div className="w-75">
          <input
            id="email"
            name="email"
            className={
              formik.errors.email && formik.touched.email
                ? `form-control input-error`
                : `form-control`
            }
            type="email"
            autoComplete="off"
            placeholder="Enter your email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text text-danger">{formik.errors.email}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <div className="w-75">
          <input
            id="age"
            name="age"
            className={
              formik.errors.age && formik.touched.age
                ? `form-control input-error`
                : `form-control`
            }
            type="number"
            autoComplete="off"
            placeholder="Enter age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          {formik.errors.age && formik.touched.age ? (
            <div className="text text-danger">{formik.errors.age}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="">Gender</label>
        <div className="w-75">
          <span>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="male"
                checked={formik.values.gender === "male"}
                onChange={formik.handleChange}
              />
              <label class="form-check-label" for="male">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formik.values.gender === "female"}
                onChange={formik.handleChange}
              />
              <label class="form-check-label" for="female">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={formik.values.gender === "other"}
                onChange={formik.handleChange}
              />
              <label class="form-check-label" for="other">
                Other
              </label>
            </div>
          </span>
          {formik.errors.gender && formik.touched.gender ? (
            <div className="text text-danger">{formik.errors.gender}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="jobtitle">Job Title</label>
        <div className="w-75">
          <select
            name="jobtitle"
            id="jobtitle"
            className={
              formik.errors.jobtitle && formik.touched.jobtitle
                ? `form-control input-error`
                : `form-control`
            }
            onChange={formik.handleChange}
            value={formik.values.jobtitle}
          >
            <option value="">Select One</option>
            <option value="QA">Quality Analyst</option>
            <option value="seo">SEO Executive</option>
            <option value="softwareEngineer">Software Engineer</option>
            <option value="contentwriter">Content Writer</option>
            <option value="graphic">Graphic Designer</option>
          </select>
          {formik.errors.jobtitle && formik.touched.jobtitle ? (
            <div className="text text-danger">{formik.errors.jobtitle}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className="w-75">
          <input
            id="password"
            name="password"
            className={
              formik.errors.password && formik.touched.password
                ? `form-control input-error`
                : `form-control`
            }
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="text text-danger">{formik.errors.password}</div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <label htmlFor="confirm_password">Confirm Password</label>
        <div className="w-75">
          <input
            id="confirm_password"
            name="confirm_password"
            className={
              formik.errors.confirm_password && formik.touched.confirm_password
                ? `form-control input-error`
                : `form-control`
            }
            type="password"
            autoComplete="off"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <div className="text text-danger">
              {formik.errors.confirm_password}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div class="form-check">
        <section>
          <input
            class="form-check-input"
            type="checkbox"
            id="terms"
            name="terms"
            onChange={formik.handleChange}
            checked={formik.values.terms}
          />
          <label class="form-check-label ms-3" for="flexCheckDefault">
            I have read and agree to the Terms and Conditions​
          </label>
          {formik.errors.terms && formik.touched.terms ? (
            <div className="ms-3 text text-danger">{formik.errors.terms}</div>
          ) : (
            ""
          )}
        </section>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default App;
