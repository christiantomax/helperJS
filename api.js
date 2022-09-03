import axios from "axios";

export const PUBLIC_DATA = "PUBLIC_DATA";
export const CARS = "CARS";

export const AUTH_DATA = "AUTH_DATA";

export const MENU_CHILD = "MENU_CHILD";

export async function APIPOST(url, data) {
  data.token = process.env.REACT_APP_TOKEN;
  const request = await axios({
    method: 'POST',
    url: url,
    data: data,
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      try {
        return e.response.data
      } catch {
        return 'Something went wrong : 500';
      }
    });

  return request;
}

export async function APIPOSTFILES(url, data) {
  const request = await axios({
    method: 'POST',
    url: url,
    data: data,
    header: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      try {
        return e.response.data
      } catch {
        return 'Something went wrong : 500';
      }
    });

  return request;
}

export async function APIGET(url, data) {
  data.token = process.env.REACT_APP_TOKEN;
  var request = null;
  try {
    let headers = {};
    request = await axios({
      method: "GET",
      url,
      headers,
      params: data
    }).then(response => {
      return response.data;
    })
      .catch(e => {
        try {
          return e.response.data
        } catch {
          return {
            status: false,
            data: 'Something went wrong : 500'
          }
        }
      });
    return request;
  } catch (e) {
    return { status: false, data: e };
  }
}


export async function APIGET_NO_TOKEN(url, data) {
  var request = null;
  try {
    let headers = {};
    request = await axios({
      method: "GET",
      url,
      headers,
      params: data
    }).then(response => {
      return response.data;
    })
      .catch(e => {
        try {
          return e.response.data
        } catch {
          return {
            status: false,
            data: 'Something went wrong : 500'
          }
        }
      });
    return request;
  } catch (e) {
    return { status: false, data: e };
  }
}

export async function API_POST_AUTH(url, data={}) {
  const request = await APIPOST(url, data);
  return {
    type: AUTH_DATA,
    payload: request
  }
}

export async function API_GET_MY_DATA(url) {
  let sessionKey = localStorage.getItem("session_key")
  const request = await APIGET(url, { "session_key": sessionKey })
  return {
    type: AUTH_DATA,
    payload: request
  };
}

export async function API_SOCIAL_LOGIN(url, data={}) {
  data.token = process.env.REACT_APP_TOKEN;
  const request = await axios({
    method: 'POST',
    url: url,
    data: data,
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(e => {
      try {
        return e.response.data
      } catch {
        return 'Something went wrong : 500';
      }
    });
  
  return request;
}