import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

import initializationFirebase from "../Firebase/firebase.init";

initializationFirebase();

const Register = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";
  const { register, handleSubmit } = useForm();

  const {
    registerWithEmailAndPassword,
    setUser,
    
    setIsLoading,
    signInUsingGoogle,
  } = useAuth();

  const onSubmit = (data) =>
    registerWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = data.name;
        setUser(user);

        data.uid = user.uid;
        fetch("https://salty-retreat-73850.herokuapp.com/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })

        .then(res => res.json())
        .then(data => console.log(data));

        
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });

  const handleSignInBtnClick = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Header></Header>
      <Container className="py-5">
        <Row>
          <Col xs={12} md={4} className="mx-auto">
            <Card className="shadow">
              <Card.Title className="mx-auto text-danger fw-bolder py-4">
                RODIAR
              </Card.Title>

              <Card.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className=" mb-2 ">Name</label>
                  <input className="form-control" {...register("name")} />

                  <label className=" mb-2 mt-2">Email</label>
                  <input className="form-control" {...register("email")} />

                  <label className="mt-2 mb-2">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    {...register("password")}
                  />

                  <input
                    style={{ width: "100%" }}
                    className="btn btn-outline-danger rounded-pill orange mt-3 mb-3"
                    type="submit"
                    value="Signup"
                  />
                </form>
                {/* <Button
                onClick={handleSignInBtnClick}
                variant="outline-success rounded-pill mb-3"
                style={{ width: "100%" }}
              >
               <i className="fab fa-google p-2"></i> Continue with Google
              </Button>{" "}
              <br /> */}
                <NavLink className="mx-auto orange" to="/login">
                  Already have an account?
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Register;
