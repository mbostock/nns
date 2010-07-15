function n$(element) {

  var o = {
    add: function(name) {
      name = n$.qualify(name);
      return n$(element.appendChild(name.space == null
          ? document.createElement(name.local)
          : document.createElementNS(name.space, name.local)));
    },
    attr: function(name, value) {
      name = n$.qualify(name);
      if (arguments.length == 1) {
        return name.space == null
            ? element.getAttribute(name.local)
            : element.getAttributeNS(name.space, name.local);
      }
      if (name.space == null) {
        if (value == null) element.removeAttribute(name.local);
        else element.setAttribute(name.local, value);
      } else {
        if (value == null) element.removeAttributeNS(name.space, name.local);
        else element.setAttributeNS(name.space, name.local, value);
      }
      return o;
    },
    style: function(name, value) {
      if (arguments.length == 1) return element.style.getPropertyValue(name);
      if (value == null) element.style.removeProperty(name);
      else element.style.setProperty(name, value);
      return o;
    },
    text: function(value) {
      var text = element.firstChild;
      if (!arguments.length) return text && text.nodeValue;
      if (text) text.nodeValue = value;
      else text = element.appendChild(document.createTextNode(value));
      return o;
    },
    element: element
  };

  return o;
}

n$.qualify = function(name) {
  var i = name.indexOf(":");
  return {
    space: n$.prefix[name.substring(0, i)],
    local: name.substring(i + 1)
  };
};

n$.prefix = {
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
