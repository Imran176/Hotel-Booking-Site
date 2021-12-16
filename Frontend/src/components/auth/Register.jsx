              import React from "react";
              import { makeStyles } from "@material-ui/core/styles";
              import { TextField, Button } from "@material-ui/core";
              import userService from "../../services/UserService";
              import { toast } from "react-toastify";
              const useStyles = makeStyles((theme) => ({
                container: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "300px",
                },
                child: {
                  width: "60%",
                },
              }));
              const Register = (props) => {
                const classes = useStyles();
                const [email, setEmail] = React.useState("");
                const [password, setPassword] = React.useState("");
                const [name, setName] = React.useState("");
                return (
                  <div className={classes.container}>
                    <div className={classes.child}>
                      <TextField
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />{" "}
                      <br />
                      <TextField
                        label="email"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />{" "}
                      <br />
                      <TextField
                        label="password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />{" "}
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                          userService
                            .register(name, email, password)
                            .then((data) => {
                              console.log(data);
                              props.history.push("/login");
                            })
                            .catch((err) => {
                              console.log(err);
                              toast.error(err.response.data, {
                                position: toast.POSITION.TOP_LEFT,
                              });
                            });
                        }}
                      >
                        Register
                      </Button> 
                    </div>
                  </div>
                );
              };

              export default Register;
