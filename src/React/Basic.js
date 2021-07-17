"use strict";

const React = require("react");
const createElement = React.createElement;
const Fragment = React.Fragment;

export var empty = null;

export var keyed = (key) => (child) =>
  createElement(Fragment, { key: key }, child);

export var element = (component) => (props) =>
  Array.isArray(props.children)
    ? createElement.apply(null, [component, props].concat(props.children))
    : createElement(component, props);

export var elementKeyed = (component) => (props) =>
  createElement(component, props);

export var fragment = (children) =>
  createElement.apply(null, [Fragment, null].concat(children));

export var createContext = (defaultValue) => () =>
  React.createContext(defaultValue);

export var contextProvider = (context) => context.Provider;

export var contextConsumer = (context) => context.Consumer;