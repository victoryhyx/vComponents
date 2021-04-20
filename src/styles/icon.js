!(function(t) {
  var e,
    c,
    n,
    o,
    i,
    s,
    l =
      '<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M978.66 923.1L854.33 798.76c65.22-77.75 104.5-178 104.5-287.42 0-247.15-200.35-447.5-447.5-447.5s-447.5 200.35-447.5 447.5 200.35 447.5 447.5 447.5c108.92 0 208.74-38.92 286.34-103.6L922.1 979.66c7.81 7.81 18.05 11.72 28.28 11.72s20.47-3.91 28.28-11.72c15.63-15.62 15.63-40.94 0-56.56z m-467.33-44.26c-49.65 0-97.77-9.71-143.02-28.85-43.75-18.51-83.06-45.01-116.84-78.79-33.78-33.78-60.29-73.09-78.79-116.84-19.14-45.26-28.85-93.38-28.85-143.02s9.71-97.77 28.85-143.02c18.51-43.75 45.01-83.06 78.79-116.84 33.78-33.78 73.09-60.29 116.84-78.79 45.26-19.14 93.38-28.85 143.02-28.85 49.65 0 97.77 9.71 143.02 28.85 43.75 18.51 83.06 45.01 116.84 78.79 33.78 33.78 60.29 73.09 78.79 116.84 19.14 45.26 28.85 93.38 28.85 143.02s-9.71 97.77-28.85 143.02c-18.51 43.75-45.01 83.06-78.79 116.84-33.78 33.78-73.09 60.29-116.84 78.79-45.25 19.14-93.37 28.85-143.02 28.85z" fill="#7F7F7F" ></path></symbol><symbol id="icon-quxiao" viewBox="0 0 1024 1024"><path d="M512.28 111.8c54.03 0 106.41 10.57 155.67 31.4 47.62 20.14 90.41 49 127.17 85.76 36.76 36.76 65.61 79.55 85.76 127.17 20.84 49.26 31.4 101.64 31.4 155.67s-10.57 106.41-31.4 155.67c-20.14 47.62-48.99 90.41-85.76 127.17-36.76 36.76-79.55 65.61-127.17 85.76-49.26 20.84-101.64 31.4-155.67 31.4s-106.41-10.57-155.67-31.4c-47.62-20.14-90.41-48.99-127.17-85.76-36.76-36.76-65.61-79.55-85.76-127.17-20.84-49.26-31.4-101.64-31.4-155.67s10.57-106.41 31.4-155.67c20.14-47.62 49-90.41 85.76-127.17 36.76-36.76 79.55-65.61 127.17-85.76 49.26-20.84 101.64-31.4 155.67-31.4m0-80c-265.1 0-480 214.9-480 480s214.9 480 480 480 480-214.9 480-480-214.9-480-480-480z" fill="#7F7F7F" ></path><path d="M566.23 514.72L699.35 381.6c15.62-15.62 15.62-40.95 0-56.57-15.62-15.62-40.95-15.62-56.57 0L509.87 457.94 380.26 327.36c-15.56-15.68-40.89-15.77-56.57-0.21-15.68 15.56-15.77 40.89-0.21 56.57L453.3 514.51 325.81 642c-15.62 15.62-15.62 40.95 0 56.57 7.81 7.81 18.05 11.72 28.28 11.72s20.47-3.91 28.28-11.72l127.28-127.28 129.62 130.58c7.82 7.88 18.1 11.82 28.39 11.82 10.19 0 20.38-3.87 28.18-11.61 15.68-15.56 15.77-40.89 0.21-56.57L566.23 514.72z" fill="#7F7F7F" ></path></symbol><symbol id="icon-zhuyi" viewBox="0 0 1024 1024"><path d="M511.87 33.99c-265.1 0-480 214.9-480 480s214.9 480 480 480 480-214.9 480-480-214.91-480-480-480z m-0.27 757.33c-27.61 0-50-22.39-50-50s22.39-50 50-50 50 22.39 50 50c0 27.62-22.39 50-50 50z m37.67-179.49c0 19.18-16.48 34.73-36.8 34.73-20.33 0-36.8-15.55-36.8-34.73 0 0-22.66-249.86-22.69-333.45-0.01-24.73 26.64-41.73 59.5-41.73 30.66 0 58.29 15.52 58.29 41.01-0.01 84.93-21.5 334.17-21.5 334.17z" fill="#7F7F7F" ></path></symbol><symbol id="icon-yiwen" viewBox="0 0 1024 1024"><path d="M513 31.56c-265.1 0-480 214.9-480 480s214.9 480 480 480 480-214.9 480-480-214.9-480-480-480z m45.89 723.97c0 22.09-17.91 40-40 40s-40-17.91-40-40 17.91-40 40-40 40 17.91 40 40z m54.75-236.31c-31.07 30.93-57.9 57.64-58.96 102.87-0.46 19.38-16.31 34.77-35.59 34.77-0.28 0-0.57 0-0.85-0.01-19.66-0.46-35.23-16.78-34.76-36.44 1.74-73.84 45.09-116.99 79.92-151.67 28.41-28.29 45.82-46.87 45.82-71.41 0-31.04-10-55.63-29.71-73.09-17.44-15.44-42.28-24.3-68.16-24.3-48.72 0-97.88 30.11-97.88 97.38 0 19.67-15.94 35.61-35.61 35.61s-35.61-15.94-35.61-35.61c0-65.16 29.21-104.7 53.72-126.41 30.73-27.21 71.71-42.2 115.38-42.2 43.68 0 84.66 14.99 115.38 42.2 24.51 21.7 53.72 61.25 53.72 126.41-0.02 55.4-35.5 90.73-66.81 121.9z" fill="#7F7F7F" ></path></symbol><symbol id="icon-gouxuan" viewBox="0 0 1024 1024"><path d="M513.81 111.35c54.03 0 106.41 10.57 155.67 31.4 47.62 20.14 90.41 49 127.17 85.76 36.76 36.76 65.61 79.55 85.76 127.17 20.84 49.26 31.4 101.64 31.4 155.67s-10.57 106.41-31.4 155.67c-20.14 47.62-48.99 90.41-85.76 127.17-36.76 36.76-79.55 65.61-127.17 85.76-49.26 20.84-101.64 31.4-155.67 31.4s-106.41-10.57-155.67-31.4c-47.62-20.14-90.41-48.99-127.17-85.76-36.76-36.76-65.61-79.55-85.76-127.17-20.84-49.26-31.4-101.64-31.4-155.67s10.57-106.41 31.4-155.67c20.14-47.62 49-90.41 85.76-127.17 36.76-36.76 79.55-65.61 127.17-85.76 49.26-20.83 101.63-31.4 155.67-31.4m0-80c-265.1 0-480 214.9-480 480s214.9 480 480 480 480-214.9 480-480-214.91-480-480-480z" fill="#7F7F7F" ></path><path d="M461.85 702.75L270.46 510.47c-15.58-15.66-15.53-40.98 0.13-56.57 15.66-15.58 40.98-15.53 56.57 0.13l134.58 135.21 238.66-240.7c15.56-15.69 40.88-15.79 56.57-0.24 15.69 15.55 15.79 40.88 0.24 56.57L461.85 702.75z" fill="#7F7F7F" ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[
      d.length - 1
    ].getAttribute("data-injectcss");
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function a() {
    i || ((i = !0), n());
  }
  (e = function() {
    var t, e, c, n;
    ((n = document.createElement("div")).innerHTML = l),
      (l = null),
      (c = n.getElementsByTagName("svg")[0]) &&
        (c.setAttribute("aria-hidden", "true"),
        (c.style.position = "absolute"),
        (c.style.width = 0),
        (c.style.height = 0),
        (c.style.overflow = "hidden"),
        (t = c),
        (e = document.body).firstChild
          ? ((n = t), (c = e.firstChild).parentNode.insertBefore(n, c))
          : e.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((c = function() {
            document.removeEventListener("DOMContentLoaded", c, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", c, !1))
      : document.attachEvent &&
        ((n = e),
        (o = t.document),
        (i = !1),
        (s = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (t) {
            return void setTimeout(s, 50);
          }
          a();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), a());
        }));
})(window);