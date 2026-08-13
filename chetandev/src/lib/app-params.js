const isNode = typeof window === "undefined";

export const appParams = {
  appId: null,
  token: null,
  fromUrl: isNode ? "" : window.location.href,
};