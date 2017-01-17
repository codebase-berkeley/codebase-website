import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "mission": {
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "color": "#2B4A89",
        "marginTop": -70 * vh,
        "position": "relative",
        "marginLeft": 0
    },
    "mission-text": {
        "textAlign": "center",
        "fontSize": 84
    },
    "bg": {
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "color": "#2B4A89",
        "marginTop": 10
    },
    "bg-text": {
        "fontFamily": "'MyriadPro'",
        "fontSize": 28,
        "textAlign": "center"
    },
    "apply-container": {
        "marginTop": 175,
        "marginLeft": 0,
        "width": 150
    },
    "topbgimg": {
        "background": "url('../images/bg.png')",
        "height": 100 * vh,
        "zIndex": 10,
        "marginTop": -5 * vh
    },
    "apply": {
        "border": "1.1px solid #2B4A89",
        "borderRadius": 7,
        "paddingTop": 15,
        "paddingBottom": 15,
        "paddingLeft": 70,
        "paddingRight": 70,
        "textAlign": "center",
        "color": "#2B4A89",
        "marginLeft": 45 * vw,
        "textDecoration": "none",
        "fontFamily": "'MyriadPro'",
        "fontSize": 20
    },
    "apply:hover": {
        "textDecoration": "none",
        "color": "#ffffff",
        "background": "#2B4A89"
    },
    "gear": {
        "marginTop": 200,
        "marginLeft": 47 * vw,
        "marginBottom": 10,
        "width": 80
    },
    "projects-wrapper": {
        "marginTop": 3,
        "textAlign": "center"
    },
    "projects": {
        "fontSize": 30,
        "color": "#2B4A89",
        "display": "inline",
        "fontFamily": "'MyriadPro'"
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
        "width": 325,
        "fontFamily": "'MyriadPro'"
    },
    "card-1": {
        "marginTop": 30,
        "marginLeft": 10 * vw,
        "boxShadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
        "textAlign": "center"
    },
    "card-title": {
        "color": "#3C8721",
        "fontSize": 22,
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
        "marginTop": 30,
        "marginRight": 30,
        "marginBottom": 10,
        "marginLeft": 30,
        "display": "inline-flex",
        "textAlign": "left",
        "fontSize": 15
    },
    "card-2": {
        "marginTop": 30,
        "marginLeft": 5 * vw,
        "boxShadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
        "textAlign": "center"
    },
    "card-title-2": {
        "color": "#D38742",
        "fontSize": 22,
        "marginTop": 50
    },
    "card-subtitle-2": {
        "color": "#566573",
        "fontSize": 18
    },
    "card-3": {
        "marginTop": 30,
        "marginLeft": 5 * vw,
        "boxShadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
        "textAlign": "center"
    },
    "card-title-3": {
        "color": "#6D3BAD",
        "fontSize": 22,
        "marginTop": 50
    },
    "card-subtitle-3": {
        "color": "#566573",
        "fontSize": 18
    },
    "tie": {
        "marginTop": 100,
        "marginLeft": 47 * vw,
        "marginBottom": 10,
        "width": 80
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
        "width": 285,
        "fontFamily": "'MyriadPro'"
    },
    "card-comm-1": {
        "marginTop": 30,
        "marginLeft": 6.25 * vw,
        "boxShadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
        "textAlign": "center"
    },
    "comm-desc": {
        "marginTop": 30,
        "marginRight": 30,
        "marginBottom": 30,
        "marginLeft": 30,
        "display": "inline-flex",
        "textAlign": "left",
        "fontSize": 15
    },
    "comm-list": {
        "listStyle": "none"
    },
    "comm-img-1": {
        "height": 50,
        "width": "auto",
        "marginTop": 60
    },
    "comm-img-2": {
        "height": 50,
        "width": "auto",
        "marginTop": 58
    },
    "comm-img-3": {
        "height": 50,
        "width": "auto",
        "marginTop": 65
    },
    "comm-img-4": {
        "height": 50,
        "width": "auto",
        "marginTop": 65
    },
    "card-comm-2": {
        "marginTop": 30,
        "marginLeft": 2 * vw,
        "boxShadow": "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
        "textAlign": "center"
    },
    "card-title-4-1": {
        "color": "#436CD1",
        "fontSize": 22,
        "marginTop": 50
    },
    "card-title-4": {
        "color": "#436CD1",
        "fontSize": 22,
        "marginTop": 0
    },
    "comm-desc-4": {
        "marginTop": 15,
        "marginRight": 30,
        "marginBottom": 30,
        "marginLeft": 30,
        "textAlign": "left",
        "fontSize": 15
    },
    "card-title-5-1": {
        "color": "#6D3BAD",
        "fontSize": 22,
        "marginTop": 50
    },
    "card-title-5": {
        "color": "#6D3BAD",
        "fontSize": 22,
        "marginTop": 0
    }
});