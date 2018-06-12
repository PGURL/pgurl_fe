import {
  title,
  primaryColor
} from "assets/jss/material-kit-react.jsx";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  },
  underline: {
    "&:hover:before,&:before": {
      backgroundColor: `${primaryColor} !important`,
      height: "1px !important"
    },
    "&:after": {
      backgroundColor: primaryColor
    }
  },
  input: {
    "&,&::placeholder": {
      color: "#AAAAAA",
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    }
  },
  submitBtn: {
    fontSize: "17px",
    marginLeft: "20px"
  },
  pg2: {
    verticalAlign:'middle',
    height:'50px',
    display: "inline-block",
  },
  rowTitle: {
    color:'#777',
    fontWeight:'400',
  }
};

export default workStyle;
