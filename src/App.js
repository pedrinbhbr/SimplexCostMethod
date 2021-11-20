import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, InputGroup } from 'react-bootstrap';
// https://github.com/JWally/jsLPSolver/
var solver = require('javascript-lp-solver');

// x1 é glutamina, x2 é omega
// 6 x1 + 7 x2 Objetivo
// Quantidade de vitamina A (unidades por semana)
// 5 x1 + 25 x2 ≥ 50
// Quantidade de vitamina B (unidades por semana)
// 25 x1 + 10 x2 ≥ 100
// Quantidade de vitamina C (unidades por semana)
// 10 x1 + 10 x2 ≥ 60

class App extends Component {
  constructor() {
    super();
    this.state = {
      show_result: false,
      model: {
        optimize: 'cost',
        opType: 'min',
        constraints: {
          vitaminaA: { min: null }, // 50
          vitaminaB: { min: null }, // 100
          vitaminaC: { min: null }, // 60
        },
        variables: {
          glutamina: {
            vitaminaA: null, // 5
            vitaminaB: null, // 25
            vitaminaC: null, // 10
            cost: null, // 6
          },
          omega: {
            vitaminaA: null, // 25
            vitaminaB: null, // 10
            vitaminaC: null, // 10
            cost: null, // 7
          },
        },
      },
    };
  }

  componentDidMount() {}
  render() {
    // var results = solver.Solve(this.state.model);
    // console.log(results);
    return (
      <div className='App'>
        <header>
          <h2>Simplex</h2>
          <h5>Minimização de custos</h5>
        </header>
        <body>
          <Container>
            <Row className='justify-content-md-center'>
              <Col md='auto'>
                <label style={{ fontWeight: 'bold' }}>Custo Glutamina: </label>
                <input
                  type='number'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          glutamina: {
                            ...this.state.model.variables.glutamina,
                            cost: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col md='auto'>
                <label style={{ fontWeight: 'bold' }}>Custo Ômega: </label>
                <input
                  type='number'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          omega: {
                            ...this.state.model.variables.omega,
                            cost: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
            </Row>
          </Container>
          <br />
          <Container>
            <Row className='justify-content-md-center' name='vitaminaA'>
              <Col name='label' md='auto'>
                <label>Vitamina A</label>
              </Col>
              <Col name='glutamina' md='auto'>
                <input
                  type='number'
                  placeholder='glutamina'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          glutamina: {
                            ...this.state.model.variables.glutamina,
                            vitaminaA: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col name=' omega' md='auto'>
                <input
                  type='number'
                  placeholder='omega'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          omega: {
                            ...this.state.model.variables.omega,
                            vitaminaA: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col md='auto'>>=</Col>
              <Col name='minimo' md='auto'>
                <input
                  placeholder='valor mínimo'
                  type='number'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        constraints: {
                          ...this.state.model.constraints,
                          vitaminaA: {
                            ...this.state.model.variables.vitaminaA,
                            min: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
            </Row>
            <Row className='justify-content-md-center' name='vitaminaB'>
              <Col name='label' md='auto'>
                <label>Vitamina B</label>
              </Col>
              <Col name='glutamina' md='auto'>
                <input
                  type='number'
                  placeholder='glutamina'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          glutamina: {
                            ...this.state.model.variables.glutamina,
                            vitaminaB: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col name='omega' md='auto'>
                <input
                  type='number'
                  placeholder='omega'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          omega: {
                            ...this.state.model.variables.omega,
                            vitaminaB: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col md='auto'>>=</Col>
              <Col name='minimo' md='auto'>
                <input
                  placeholder='valor mínimo'
                  type='number'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        constraints: {
                          ...this.state.model.constraints,
                          vitaminaB: {
                            ...this.state.model.variables.vitaminaB,
                            min: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
            </Row>
            <Row className='justify-content-md-center' name='vitaminaC'>
              <Col name='label' md='auto'>
                <label>Vitamina C</label>
              </Col>
              <Col name='glutamina' md='auto'>
                <input
                  type='number'
                  placeholder='glutamina'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          glutamina: {
                            ...this.state.model.variables.glutamina,
                            vitaminaC: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col name='omega' md='auto'>
                <input
                  type='number'
                  placeholder='omega'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        variables: {
                          ...this.state.model.variables,
                          omega: {
                            ...this.state.model.variables.omega,
                            vitaminaC: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
              <Col md='auto'>>=</Col>
              <Col name='minimo' md='auto'>
                <input
                  placeholder='valor mínimo'
                  type='number'
                  onChange={(e) =>
                    this.setState({
                      model: {
                        ...this.state.model,
                        constraints: {
                          ...this.state.model.constraints,
                          vitaminaC: {
                            ...this.state.model.variables.vitaminaC,
                            min: e.target.value,
                          },
                        },
                      },
                    })
                  }
                ></input>
              </Col>
            </Row>
          </Container>
          <br />

          <Button
            onClick={() => {
              var result = solver.Solve(this.state.model);
              console.log(result);
              this.setState({ resultado: result });
              if (
                result.feasible === true &&
                this.state.model.constraints.vitaminaA.min !== '' &&
                this.state.model.constraints.vitaminaB.min !== '' &&
                this.state.model.constraints.vitaminaC.min !== '' &&
                this.state.model.variables.glutamina.vitaminaA !== '' &&
                this.state.model.variables.glutamina.vitaminaB !== '' &&
                this.state.model.variables.glutamina.vitaminaC !== '' &&
                this.state.model.variables.glutamina.cost !== '' &&
                this.state.model.variables.omega.cost !== '' &&
                this.state.model.variables.omega.vitaminaA !== '' &&
                this.state.model.variables.omega.vitaminaB !== '' &&
                this.state.model.variables.omega.vitaminaC !== '' &&
                this.state.model.constraints.vitaminaA.min !== null &&
                this.state.model.constraints.vitaminaB.min !== null &&
                this.state.model.constraints.vitaminaC.min !== null &&
                this.state.model.variables.glutamina.vitaminaA !== null &&
                this.state.model.variables.glutamina.vitaminaB !== null &&
                this.state.model.variables.glutamina.vitaminaC !== null &&
                this.state.model.variables.glutamina.cost !== null &&
                this.state.model.variables.omega.cost !== null &&
                this.state.model.variables.omega.vitaminaA !== null &&
                this.state.model.variables.omega.vitaminaB !== null &&
                this.state.model.variables.omega.vitaminaC !== null
              ) {
                this.setState({ show_result: true });
              } else {
                this.setState({ show_result: false });
              }
            }}
          >
            Calcular
          </Button>
          {this.state.show_result === false ? (
            ''
          ) : (
            <div>
              <label>Resultado: {this.state.resultado.result}</label>
              <br />
              <label>Glutamina: {this.state.resultado.glutamina}</label>
              <br />
              <label>Ômega: {this.state.resultado.omega}</label>
              <br />
            </div>
          )}
        </body>
      </div>
    );
  }
}

export default App;
