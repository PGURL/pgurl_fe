import React from "react";
import axios from 'axios';

// material-ui components
import { Input } from "material-ui";
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Send from '@material-ui/icons/Send';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

//style
import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

//image
import pg2 from "assets/img/pg2.png";

import { APIURL }  from 'constants/setting';

class WorkSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputUrl: "",
      respondMsg:"我是皮雞",
      shortUrl:""
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm() {
    let string = this.state.inputUrl;
    let pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const url = `${APIURL}/short`;

    if (pattern.test(string)) {
      this.setState({
        respondMsg: '送出中',
      });
      axios.post(url, {
          url: string,
        })
        .then( (response) => {
          if(response.data.status === 'success') {
            this.setState({
              respondMsg: '成功',
              shortUrl:`${APIURL}/q/${response.data.shorturl}`
            });
          }else {
            this.setState({
              respondMsg: '這不是一個合法的URL',
              shortUrl:''
            });
          }
        })
        .catch( (error) => {
          console.log(error);
          this.setState({
            respondMsg: '錯誤，請稍後再試',
            shortUrl:''
          });
        });

    } else {
        this.setState({
          respondMsg: '這不是一個合法的URL',
          shortUrl:''
        });
    }
  }

  // handleUserInput = event => {
  //   console.log(event);
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   this.setState({[name]: value});
  // };

  handleUserInput (event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]: value});
  }
  render() {
    const {
      classes,
    } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={10}>
            <Input
              placeholder="請貼上網址"
              id="inputUrl"
              name="inputUrl"
              value={this.state.inputUrl}
              onChange={this.handleUserInput}
              classes={{
                input: classes.input,
                underline: classes.underline
              }}
              style={{ width: '70%' }}
            />
            <Button color="primary" round className={classes.submitBtn} onClick={this.submitForm}><Send style={{marginRight: "5px"}} />送出</Button>
            <p className={classes.rowTitle}>
              <img src={pg2} alt="pg" className={classes.pg2}/>
              <span>{this.state.respondMsg}</span>
            </p>
            <p className={classes.rowTitle}>
              <span>您的短網址：</span>
              <a href={this.state.shortUrl}>{this.state.shortUrl}</a>
            </p>
          </GridItem>
          {/*
          <GridItem cs={12} sm={12} md={6}>
            <CustomInput
              labelText="請貼上網址"
              id="name"
              value={this.state.inputUrl}
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "inputUrl",
                name: "inputUrl",
              }}
              onChange={this.handleUserInput}
            />
            </GridItem>
          */}
        </GridContainer>

      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
