const { location } = window;

// ie兼容
export const baseHost = location.origin
  ? `${location.protocol}//${location.host}`
  : location.origin;
const apiHost = baseHost.indexOf('localhost') !== -1 ? baseHost : baseHost;

export const API_BASE = `${apiHost}/api/v2`;
