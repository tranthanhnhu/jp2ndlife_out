self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(lo|vi))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/(lo|vi)/:path*"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|_vercel|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|_vercel|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()