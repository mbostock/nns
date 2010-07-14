var nsvg = (function() {

  var ns = {
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function create(type, attributes) {
    return set(document.createElementNS(ns.svg, type), attributes);
  }

  function set(element, attributes) {
    if (attributes) for (name in attributes) {
      var i = name.indexOf(":"),
          namespace = null,
          value = attributes[name];
      if (i > 0) {
        var prefix = name.substring(0, i);
        if (prefix in ns) {
          namespace = ns[prefix];
          name = name.substring(i + 1);
        }
      }
      if (value == null) element.removeAttributeNS(namespace, name);
      else element.setAttributeNS(namespace, name, value);
    }
    return element;
  }

  return {ns: ns, create: create, set: set};
})();
