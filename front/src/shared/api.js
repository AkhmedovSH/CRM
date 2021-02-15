import Axios from "axios";

const mainUrl = process.env.VUE_APP_ENV == 'development' ? 'https://' + process.env.VUE_APP_URL : 'https://' + window.location.hostname;

const axiosInstance = Axios.create({
  baseURL: mainUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": localStorage.getItem("token") ? "Bearer " + localStorage.getItem("token") : "",
    "Accept-Language": localStorage.getItem("lang"),
    "Language": localStorage.getItem("lang")
  }
});

const axiosFile = Axios.create({
  baseURL: mainUrl,
  headers: {"Content-Type": "multipart/form-data","Accept": "application/json"}
});

function checkToken(_this){
  var tokenTime = localStorage.getItem('tokenTime');
  var difference = Math.floor( ( ( Date.now() - tokenTime ) / 1000) / 60 );
  //If more than 3 minutes token expired logout user
  return new Promise((resolve, reject) => {
    if(difference < 20){
      resolve(true);
    }else{
      var user = {
        username: localStorage.getItem('username'),
        password: localStorage.getItem('password'),
      }
      let jsonData = JSON.stringify(user);
      axiosInstance.post('/auth/login', jsonData).then(response => {
          localStorage.setItem('access_token', response.data.access_token)
					localStorage.setItem('tokenTime', JSON.stringify(new Date().getTime()));
					_this.$store.commit("SET_SUBMIT_BUTTON_DISABLE", false);
          resolve(true);
        }).catch(error => {
          if(error.response.status == 401) {
            _this.$helper.clearTemporaryStorage()
            window.location.href = mainUrl + "#/login";
					}
					_this.$store.commit("SET_SUBMIT_BUTTON_DISABLE", false);
          resolve(false);
        });
    }
  });
}

function getPath(payload, url) {
	let iterations = Object.entries(payload).length;
	var pathArr = "?";
	if(url != undefined)
		url.includes("?") ? pathArr = '&' : pathArr = '?'
 
  for (let key in payload) {
    if (!--iterations) {
      pathArr += key + "=" + payload[key];
    } else {
      pathArr += key + "=" + payload[key] + "&";
    }
  }
  return pathArr;
}

//This is for pagination data get request
export async function PGET(payload = [], url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);

  await checkToken(_this);

  return new Promise((resolve, reject) => {
    /* Params ?page=2&smth=10 */
    var params = "";
    if (Object.entries(payload).length > 0) {
      params = getPath(payload, url);
    }

    axiosInstance.get(url + params, { headers: {"Authorization": "Bearer " + localStorage.getItem("access_token")}})
      .then(response => {
        notification == true ? primaryNotification(_this) : "";
        resolve(response);
        _this.$store.commit("SET_LOADING", false);
      }).catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        notification == true ? errorNotification(_this, error) : "";
      });
  });
}

export async function GET(payload = [], url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);

  await checkToken(_this);

  return new Promise((resolve, reject) => {
    /* Params ?page=2&smth=10 */
    var params = "";
    if (Object.entries(payload).length > 0) {
      params = getPath(payload);
    }

    axiosInstance.get(url + params, {headers: { "Authorization": "Bearer " + localStorage.getItem("access_token")}})
      .then(response => {
        notification == true ? primaryNotification(_this) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
      }).catch(error => {
        _this.$store.commit("SET_LOADING", false);
        httpStatusChecker(error, _this)
      });
  });
}

export async function POST(payload, url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);
  _this.$store.commit("SET_SUBMIT_BUTTON_DISABLE", true);
  await checkToken(_this);

  let jsonData = JSON.stringify(payload);
  return new Promise((resolve, reject) => {
    axiosInstance.post(url, jsonData, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
      .then(response => {
        notification == true ? successNotification(_this) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
        _this.$store.commit("SET_SUBMIT_BUTTON_DISABLE", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        _this.$store.commit("SET_SUBMIT_BUTTON_DISABLE", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

export async function PUT(payload, url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);

  await checkToken(_this);
  let jsonData = JSON.stringify(payload);
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(url, jsonData, {headers: { Authorization: "Bearer " + localStorage.getItem("access_token")}})
      .then(response => {
        notification == true ? primaryNotification(_this) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

export async function FILE(payload, url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);

  await checkToken(_this);

  return new Promise((resolve, reject) => {
    axiosFile.post(url, payload, {
        headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}
      })
      .then(response => {
        notification == true ? successNotification(_this, _this.$store.state.updatedText) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

export async function DELETE(id, url, _this, notification = true) {
  _this.$store.commit("SET_LOADING", true);

  await checkToken(_this);

  return new Promise((resolve, reject) => {
    axiosInstance.delete(url + id, {headers: {Authorization: "Bearer " + localStorage.getItem("access_token")}})
      .then(response => {
        notification == true ? deleteNotification(_this,  _this.$t('DELETED')) : "";
        resolve(response.data.success);
        _this.$store.commit("SET_LOADING", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

export async function GUESS_GET(payload, url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);
 
  let jsonData = JSON.stringify(payload);
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(url, jsonData, {})
      .then(response => {
        notification == true ? primaryNotification(_this) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

export async function GUESS_POST(payload, url, _this, notification = false) {
  _this.$store.commit("SET_LOADING", true);
 
  let jsonData = JSON.stringify(payload);
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(url, jsonData, {})
      .then(response => {
        notification == true ? primaryNotification(_this) : "";
        resolve(response.data);
        _this.$store.commit("SET_LOADING", false);
      })
      .catch(error => {
        _this.$store.commit("SET_LOADING", false);
        reject(error);
        httpStatusChecker(error, _this)
      });
  });
}

function primaryNotification(_this, message) {
  _this.$toast.info({title: _this.$t('SUCCESS'), message: message !== undefined ? "" : _this.$t('DATA_SUCCESFULLY_CHANGED')})
}

function successNotification(_this, message) {
	_this.$toast.success({title: _this.$t('SUCCESS'), message: message !== undefined ? "" : _this.$t('DATA_SUCCESFULLY_CREATED')})
}

function errorNotification(_this, message) {
  _this.$toast.error({title: _this.$t('ERROR'), message: message})
}

function deleteNotification(_this, message) {
  _this.$toast.success({title: _this.$t('SUCCESS'), message: message})
}

function httpStatusChecker(error, _this) {
  if(error.response.status == 400) {
    errorNotification(_this, error.response.data.message)
  }
  if(error.response.status == 401) {
    _this.$toast.error({title: _this.$t('ERROR'), message:  _this.$t('LOGIN_OR_PASSWORD_INVALID')})
  }
  if(error.response.status == 404) {
    _this.$toast.error({title: _this.$t('ERROR'), message:  _this.$t('NOT_FOUND')})
  }
  if(error.response.status == 415) {
    _this.$toast.error({title: _this.$t('ERROR'), message:  _this.$t('UNSUPPORTED_MEDIA_TYPE')})
  }
  if(error.response.status == 500) {
    _this.$toast.error({title: _this.$t('ERROR'), message:  _this.$t('SYSTEM_ERORR')})
  }
}
