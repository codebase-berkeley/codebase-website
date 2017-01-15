import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "mission": {
        "backgroundColor": "rgba(0,0,0,0)",
        "color": "#2B4A89",
        "marginTop": 190,
        "marginLeft": 30 * vw
    },
    "mission-text": {
        "fontFamily": "Avenir Light",
        "fontSize": 84
    },
    "bg": {
        "backgroundColor": "rgba(0,0,0,0)",
        "color": "#2B4A89",
        "marginTop": 10,
        "marginLeft": 35.5 * vw
    },
    "bg-text": {
        "fontFamily": "'MyriadPro'",
        "fontSize": 28
    },
    "apply-container": {
        "marginTop": 175,
        "width": 150
    },
    "apply": {
        "border": "1.1px solid #2B4A89",
        "borderRadius": 7,
        "paddingTop": 10,
        "paddingBottom": 10,
        "paddingLeft": 50,
        "paddingRight": 50,
        "textAlign": "center",
        "color": "#2B4A89",
        "marginLeft": 45 * vw,
        "textDecoration": "none"
    },
    "apply:hover": {
        "textDecoration": "none",
        "color": "#ffffff",
        "background": "#2B4A89"
    },
    "gear": {
        "marginTop": 350,
        "marginLeft": 46 * vw,
        "width": 100
    },
    "projects-wrapper": {
        "marginTop": 3,
        "textAlign": "center"
    },
    "projects": {
        "fontSize": 30,
        "color": "#2B4A89",
        "display": "inline"
    },
    "card": {
        "background": "#fff",
        "borderRadius": 15,
        "display": "inline-block",
        "height": 450,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "position": "relative",
        "width": 325
    },
    "card-1": {
        "marginTop": 30,
        "marginLeft": 10 * vw,
        "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "textAlign": "center"
    },
    "card-title": {
        "color": "#3C8721",
        "fontSize": 26,
        "marginTop": 50
    },
    "card-subtitle": {
        "color": "#566573",
        "fontSize": 18
    },
    "project-desc-old": {
        "marginTop": 50,
        "display": "inline-flex",
        "marginRight": 30,
        "fontSize": 16
    },
    "project-desc": {
        "marginTop": 10,
        "marginRight": 30,
        "marginBottom": 10,
        "marginLeft": 30,
        "display": "inline-flex",
        "textAlign": "left",
        "fontSize": 16
    },
    "circle1": {
        "height": 100,
        "width": 100,
        "marginLeft": 110,
        "border": "1px solid #3C8721",
        "borderRadius": "50%",
        "marginTop": 30
    },
    "card-2": {
        "marginTop": 30,
        "marginLeft": 5 * vw,
        "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "textAlign": "center"
    },
    "card-title-2": {
        "color": "#D38742",
        "fontSize": 26,
        "marginTop": 50
    },
    "card-subtitle-2": {
        "color": "#566573",
        "fontSize": 18
    },
    "circle2": {
        "height": 100,
        "width": 100,
        "marginLeft": 110,
        "border": "1px solid #D38742",
        "borderRadius": "50%",
        "marginTop": 30
    },
    "card-3": {
        "marginTop": 30,
        "marginLeft": 5 * vw,
        "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "textAlign": "center"
    },
    "card-title-3": {
        "color": "#6D3BAD",
        "fontSize": 26,
        "marginTop": 50
    },
    "card-subtitle-3": {
        "color": "#566573",
        "fontSize": 18
    },
    "circle3": {
        "height": 100,
        "width": 100,
        "marginLeft": 110,
        "border": "1px solid #6D3BAD",
        "borderRadius": "50%",
        "marginTop": 30
    },
    "tie": {
        "marginTop": 210,
        "marginLeft": 46 * vw,
        "width": 100
    },
    "card-comm": {
        "background": "#fff",
        "borderRadius": 15,
        "display": "inline-block",
        "height": 475,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "position": "relative",
        "width": 295
    },
    "card-comm-1": {
        "marginTop": 30,
        "marginLeft": 5 * vw,
        "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "textAlign": "center"
    },
    "comm-desc": {
        "marginTop": 50,
        "display": "inline-flex",
        "marginRight": 50,
        "fontSize": 16
    },
    "comm-list": {
        "listStyle": "none"
    },
    "comm-img": {
        "height": 100,
        "width": "auto",
        "marginTop": 100
    },
    "card-comm-2": {
        "marginTop": 30,
        "marginLeft": 2 * vw,
        "boxShadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        "textAlign": "center"
    },
    "card-title-4-1": {
        "color": "#436CD1",
        "fontSize": 26,
        "marginTop": 50
    },
    "card-title-4": {
        "color": "#436CD1",
        "fontSize": 26,
        "marginTop": 0
    },
    "comm-desc-4": {
        "marginTop": 15,
        "marginRight": 50,
        "fontSize": 16
    },
    "card-title-5-1": {
        "color": "#6D3BAD",
        "fontSize": 26,
        "marginTop": 50
    },
    "card-title-5": {
        "color": "#6D3BAD",
        "fontSize": 26,
        "marginTop": 0
    }
});