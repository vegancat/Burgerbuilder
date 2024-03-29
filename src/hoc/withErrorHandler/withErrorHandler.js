import React, { Component } from "react";

import Aux from "../Auxiliary/Auxilliary";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    constructor(props) {
      super(props);
      this.reqInstance = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInstance = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({
            error
          });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInstance);
      axios.interceptors.response.eject(this.resInstance);
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }

    errorConfirmedHandler = () => {
      this.setState({
        error: null
      });
    };
  };
};

export default withErrorHandler;
