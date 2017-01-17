import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%",
        "fontFamily": "'Cabin', sans-serif"
    },
    "body": {
        "height": "100%",
        "width": "100% margin: 0",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflowX": "hidden"
    },
    "master": {
        "height": "100%"
    },
    "body > master": {
        "zIndex": 1,
        "height": "auto",
        "minHeight": "100%",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "100% 150px, 100% 150px",
        "backgroundPosition": "0 0, 0 bottom",
        "background": "white"
    },
    "content": {
        "paddingBottom": 0.6
    },
    "footer": {
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "clear": "both",
        "position": "relative",
        "zIndex": 10,
        "height": 0.6,
        "marginTop": 0.56
    },
    "page-banner": {
        "backgroundSize": "cover",
        "textAlign": "center"
    },
    "welcome-banner": {
        "background": "url(\"../images/LandingPageBackground.png\") no-repeat center center scroll",
        "height": 100 * vh,
        "marginBottom": -25 * vh
    },
    "welcome-banner h2": {
        "color": "white"
    },
    "about-banner": {
        "background": "url(\"../images/startup.jpg\") no-repeat center center scroll",
        "paddingTop": 150,
        "paddingBottom": "5%",
        "textAlign": "center"
    },
    "service": {
        "paddingTop": 25,
        "paddingRight": 50
    },
    "service h2": {
        "fontSize": "200%"
    },
    "service img": {
        "borderRadius": "100%",
        "marginTop": 10
    },
    "service-description": {
        "textAlign": "left",
        "paddingTop": 75
    },
    "contact-banner": {
        "background": "url(\"../images/office.jpg\") no-repeat center center scroll",
        "color": "#ffffff"
    },
    "donate-banner": {
        "textAlign": "center"
    },
    "team": {
        "textAlign": "center",
        "backgroundColor": "white"
    },
    "team-member": {
        "paddingBottom": 20
    },
    "team-member img": {
        "borderRadius": "100%"
    },
    "current-projects": {
        "textAlign": "center",
        "backgroundColor": "#008698",
        "color": "#ffffff",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "project": {
        "backgroundColor": "#ffffff",
        "paddingBottom": 50,
        "color": "#191919"
    },
    "project-logo img": {
        "marginTop": 30,
        "width": "100%"
    },
    "project-description": {
        "paddingTop": 30
    },
    "client-info": {
        "textAlign": "center",
        "backgroundColor": "#ffffff"
    },
    "student-info": {
        "textAlign": "center",
        "backgroundColor": "#ffffff"
    },
    "underline": {
        "color": "lightgray",
        "borderWidth": 3
    },
    "client-contact": {
        "color": "white",
        "textAlign": "center",
        "background": "url(\"../images/keyboard.jpeg\") no-repeat center center scroll",
        "paddingTop": 100
    },
    "students": {
        "textAlign": "center",
        "backgroundColor": "#ffffff",
        "paddingTop": 150,
        "paddingBottom": 0
    },
    "div-image": {
        "paddingTop": "15%",
        "paddingBottom": "15%",
        "backgroundSize": "cover"
    },
    "break": {
        "paddingBottom": 75
    },
    "recruitment": {
        "textAlign": "left",
        "paddingTop": 20,
        "paddingLeft": 125
    },
    "office": {
        "background": "url(\"../images/office.jpg\") no-repeat center center scroll"
    },
    "bridge": {
        "background": "url(\"../images/bridge.jpeg\") no-repeat center center scroll"
    },
    "info-box": {
        "textAlign": "center",
        "color": "#626262"
    },
    "foot": {
        "marginTop": -10,
        "textAlign": "center",
        "background": "white"
    },
    "jumbotron": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "contact-blurb": {
        "textAlign": "center",
        "paddingBottom": 40
    },
    "contact": {
        "textAlign": "left",
        "backgroundColor": "white",
        "paddingBottom": 50,
        "paddingTop": 20
    },
    "deadline": {
        "textAlign": "left"
    },
    "event-desc": {
        "textAlign": "left"
    },
    "contact-option": {
        "textAlign": "center",
        "paddingTop": 100,
        "paddingBottom": 50
    },
    "contact-option h1": {
        "paddingTop": 50,
        "paddingBottom": 50,
        "fontSize": "400%"
    },
    "nav-home": {
        "content": "url(\"../images/assets/home.png\")"
    },
    "nav-home:hover": {
        "content": "url(\"../images/assets/home-hover.png\")"
    },
    "nav-home:focus": {
        "content": "url(\"../images/assets/home-hover.png\")"
    },
    "nav-services": {
        "content": "url(\"../images/assets/services.png\")"
    },
    "nav-services:hover": {
        "content": "url(\"../images/assets/services-hover.png\")"
    },
    "nav-services:focus": {
        "content": "url(\"../images/assets/services-hover.png\")"
    },
    "nav-team": {
        "content": "url(\"../images/assets/team.png\")"
    },
    "nav-team:hover": {
        "content": "url(\"../images/assets/team-hover.png\")"
    },
    "nav-team:focus": {
        "content": "url(\"../images/assets/team-hover.png\")"
    },
    "nav-contact": {
        "content": "url(\"../images/assets/contact.png\")"
    },
    "nav-contact:hover": {
        "content": "url(\"../images/assets/contact-hover.png\")"
    },
    "nav-contact:focus": {
        "content": "url(\"../images/assets/contact-hover.png\")"
    },
    "nav-join": {
        "content": "url(\"../images/assets/join.png\")"
    },
    "nav-join:hover": {
        "content": "url(\"../images/assets/join-hover.png\")"
    },
    "nav-join:focus": {
        "content": "url(\"../images/assets/join-hover.png\")"
    },
    "navbar": {
        "opacity": 1,
        "MozOpacity": 1,
        "WebkitOpacity": 1,
        "borderBottom": 0
    },
    "navbar-default": {
        "backgroundColor": "rgba(188, 205, 220, .5)",
        "borderColor": "#ffffff"
    },
    "navbar-default navbar-brand": {
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "color": "#ffffff"
    },
    "navbar-default navbar-brand:hover": {
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-brand:focus": {
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-text": {
        "color": "#2B4A89"
    },
    "navbar-default navbar-nav > li > a": {
        "color": "#2B4A89",
        "fontSize": 20,
        "paddingTop": 30,
        "paddingRight": 45
    },
    "navbar-default navbar-nav > li > a:hover": {
        "color": "#ffffff",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > li > a:focus": {
        "color": "#ffffff",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > li > dropdown-menu": {
        "borderRadius": 0
    },
    "navbar-default navbar-nav > li > dropdown-menu > li > a": {
        "color": "#ffffff"
    },
    "navbar-default navbar-nav > li > dropdown-menu > li > a:hover": {
        "color": "#ffffff",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > li > dropdown-menu > li > a:focus": {
        "color": "#ffffff",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > li > dropdown-menu > li > divider": {
        "backgroundColor": "#5478A3"
    },
    "navbar-default navbar-nav open dropdown-menu > active > a": {
        "color": "#2B4A89",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav open dropdown-menu > active > a:hover": {
        "color": "#2B4A89",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav open dropdown-menu > active > a:focus": {
        "color": "#2B4A89",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > active > a": {
        "color": "#ffffff",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > active > a:hover": {
        "color": "#ffffff",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > active > a:focus": {
        "color": "#ffffff",
        "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    "navbar-default navbar-nav > open > a": {
        "color": "#7bdfea",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > open > a:hover": {
        "color": "#7bdfea",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > open > a:focus": {
        "color": "#7bdfea",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-toggle": {
        "borderColor": "#ffffff"
    },
    "navbar-default navbar-toggle:hover": {
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-toggle:focus": {
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-toggle icon-bar": {
        "backgroundColor": "#2B4A89"
    },
    "navbar-default navbar-collapse": {
        "borderColor": "#ffffff"
    },
    "navbar-default navbar-form": {
        "borderColor": "#ffffff"
    },
    "navbar-default navbar-link": {
        "color": "#2B4A89"
    },
    "navbar-default navbar-link:hover": {
        "color": "#4d6a79",
        "backgroundColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > dropdown > a caret": {
        "borderTopColor": "#ffffff",
        "borderBottomColor": "#ffffff"
    },
    "navbar-default navbar-nav > dropdown > a:hover caret": {
        "borderTopColor": "#BCB5BF",
        "borderBottomColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > dropdown > a:focus caret": {
        "borderTopColor": "#BCB5BF",
        "borderBottomColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > open > a caret": {
        "borderTopColor": "#BCB5BF",
        "borderBottomColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > open > a:hover caret": {
        "borderTopColor": "#BCB5BF",
        "borderBottomColor": "#BCB5BF"
    },
    "navbar-default navbar-nav > open > a:focus caret": {
        "borderTopColor": "#BCB5BF",
        "borderBottomColor": "#BCB5BF"
    },
    "footer-text": {
        "color": "#2B4A89"
    },
    "footer-link": {
        "color": "#BCB5BF"
    },
    "link": {
        "color": "#4d6a79"
    }
});