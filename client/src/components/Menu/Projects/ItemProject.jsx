import React from "react";
import axios from "axios";
import ChangeProject from "./ChangeProject";
import classes from "../stylesMenu/ItemLi.module.css";

export default class ItemProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangeProjectForm: false
    };
  }

  removeProject = async event => {
    event.preventDefault();
    await axios
      .post(`/remove-project`, {
        id_project: this.props.element.id_project
      })
      .then(() => {
        this.props.getList();
      });
  };

  showChangeProjectForm = () => {
    if (this.state.showChangeProjectForm === false) {
      this.setState({ showChangeProjectForm: true });
    } else {
      this.setState({ showChangeProjectForm: false });
    }
  };

  render() {
    return (
      <li
        className={classes.item_li}
      >
        {this.state.showChangeProjectForm ? (
          <ChangeProject
            showChangeProjectForm={this.showChangeProjectForm}
            getList={this.props.getList}
            element={this.props.element}
          />
        ) : (
          <div className={classes.item}>
            <span className={classes.item_name}>
              {" "}
              {this.props.element.project}
            </span>
            <div className={classes.buttons_block}>
              <button
                onClick={this.showChangeProjectForm}
                className={classes.item_change_button}
              >
                <img src="img/pencil.svg" alt="change" />
              </button>
              <button
                onClick={this.removeProject}
                className={classes.item_delete_button}
              >
                <img src="img/remove.svg" alt="change" />
              </button>
            </div>
          </div>
        )}
      </li>
    );
  }
}
