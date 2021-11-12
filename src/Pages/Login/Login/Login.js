
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";






const Login = () => {
  const { register, handleSubmit} = useForm();

  const history = useHistory();
  const location = useLocation();

  const  url  = location.state?.from || "/" ;

  const {
    loginWithEmailAndPassword,
    readDatabase,
    signInUsingGoogle,
    setUser,
    setIsLoading,
  } = useAuth();

  
  const handleSignIn = () => {
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



  const onSubmit = (data) => {
    console.log(data)
    loginWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        readDatabase(user, user.uid);
        history.push(url);
      })
      .catch((error) => {
        alert('Enter Valid Email and Password')
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
        <Header></Header>

    <Container className="py-5">
      <Row>
        <Col xs={12} md={4} className="mx-auto">
          <Card className="shadow">
           
            <Card.Title className="mx-auto my-5">Tour<span className="orange">X</span> </Card.Title>
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className=" mb-2">Email</label>
                <input className="form-control" {...register("email")} />

                <label className="mt-2">Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("password")}
                />

                <br />

                <input
                  style={{ width: "100%" }}
                  className="btn btn-outline-danger rounded-pill orange mt-3 mb-3"
                  type="submit"
                  value="Login"
                />
              </form>
              <Button
                onClick={handleSignIn}
                variant="outline-success rounded-pill mb-3"
                style={{ width: "100%" }}
              >
               <i className="fab fa-google p-2"></i> Continue with Google
              </Button>{" "}
              <NavLink className="mx-auto orange" to="/register">
                New User?
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

export default Login;