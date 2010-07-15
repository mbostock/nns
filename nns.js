function n$(e) {

  var o = {
    add: function(n) {
      n = n$.qualify(n);
      return n$(e.appendChild(n.space == null
          ? document.createElement(n.local)
          : document.createElementNS(n.space, n.local)));
    },
    attr: function(n, v) {
      n = n$.qualify(n);
      if (arguments.length == 1) {
        return n.space == null
            ? e.getAttribute(n.local)
            : e.getAttributeNS(n.space, n.local);
      }
      if (n.space == null) {
        if (v == null) e.removeAttribute(n.local);
        else e.setAttribute(n.local, v);
      } else {
        if (v == null) e.removeAttributeNS(n.space, n.local);
        else e.setAttributeNS(n.space, n.local, v);
      }
      return o;
    },
    style: function(n, v, p) {
      if (arguments.length == 1) return e.style.getPropertyValue(n);
      if (v == null) e.style.removeProperty(n);
      else e.style.setProperty(n, v, arguments.length == 3 ? p : null);
      return o;
    },
    text: function(v) {
      var t = e.firstChild;
      if (!arguments.length) return t && t.nodeValue;
      if (t) t.nodeValue = v;
      else if (v != null) t = e.appendChild(document.createTextNode(v));
      return o;
    },
    element: e
  };

  return o;
}

n$.qualify = function(n) {
  var i = n.indexOf(":");
  return {
    space: n$.prefix[n.substring(0, i)],
    local: n.substring(i + 1)
  };
};

n$.prefix = {
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
