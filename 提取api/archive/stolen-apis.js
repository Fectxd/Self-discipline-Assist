const axios = require('axios');

/**
 * 天气 API 1
 * URL: https://assets.msn.cn/resolver/api/resolve/v3/config/?expType=AppConfig&expInstance=default&apptype=homePage&v=20251216.31&targetScope={%22audienceMode%22:%22adult%22,%22browser%22:{%22browserType%22:%22edgeChromium%22,%22version%22:%22120%22,%22ismobile%22:%22false%22},%22deviceFormFactor%22:%22desktop%22,%22domain%22:%22www.msn.cn%22,%22locale%22:{%22content%22:{%22language%22:%22zh%22,%22market%22:%22cn%22},%22display%22:{%22language%22:%22zh%22,%22market%22:%22cn%22}},%22os%22:%22windows%22,%22modes%22:{%22audienceMode%22:%22adult%22},%22platform%22:%22web%22,%22pageType%22:%22hp%22,%22pageExperiments%22:[%22prg-pr2-nohidepa%22]}
 */
async function getWeather1(expType = 'AppConfig', expInstance = 'default', apptype = 'homePage', v = '20251216.31', targetScope = '{"audienceMode":"adult","browser":{"browserType":"edgeChromium","version":"120","ismobile":"false"},"deviceFormFactor":"desktop","domain":"www.msn.cn","locale":{"content":{"language":"zh","market":"cn"},"display":{"language":"zh","market":"cn"}},"os":"windows","modes":{"audienceMode":"adult"},"platform":"web","pageType":"hp","pageExperiments":["prg-pr2-nohidepa"]}') {
  const response = await axios.get('https://assets.msn.cn/resolver/api/resolve/v3/config/', {
    params: {
      expType: expType,
      expInstance: expInstance,
      apptype: apptype,
      v: v,
      targetScope: targetScope,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 天气 API 2
 * URL: https://assets.msn.cn/service/news/feed/pages/weblayout?User=m-13A1CAFD74C4677709ACDC3875B96665&activityId=6942e626-1494-4ea5-b48f-14ee8b3a5a05&adoffsets=c1:-1,c2:-1&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&audienceMode=adult&cm=zh-cn&colstatus=c1:0,c2:0&column=c2&colwidth=300&contentType=article,video,slideshow,webcontent&dprValue=1&it=edgeid&l3v=2&layout=c2&memory=8&newsSkip=0&newsTop=48&ocid=hponeservicefeed&pgc=1035&private=1&timeOut=1000&vpSize=800x600&wposchema=byregion
 */
async function getWeather2(adoffsets = 'c1:-1,c2:-1', audienceMode = 'adult', cm = 'zh-cn', colstatus = 'c1:0,c2:0', column = 'c2', colwidth = '300', contentType = 'article,video,slideshow,webcontent', dprValue = '1', it = 'edgeid', l3v = '2', layout = 'c2', memory = '8', newsSkip = '0', newsTop = '48', ocid = 'hponeservicefeed', pgc = '1035', private = '1', timeOut = '1000', vpSize = '800x600', wposchema = 'byregion') {
  const response = await axios.get('https://assets.msn.cn/service/news/feed/pages/weblayout', {
    params: {
      User: 'm-13A1CAFD74C4677709ACDC3875B96665',
      activityId: '6942e626-1494-4ea5-b48f-14ee8b3a5a05',
      adoffsets: adoffsets,
      apikey: '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM',
      audienceMode: audienceMode,
      cm: cm,
      colstatus: colstatus,
      column: column,
      colwidth: colwidth,
      contentType: contentType,
      dprValue: dprValue,
      it: it,
      l3v: l3v,
      layout: layout,
      memory: memory,
      newsSkip: newsSkip,
      newsTop: newsTop,
      ocid: ocid,
      pgc: pgc,
      private: private,
      timeOut: timeOut,
      vpSize: vpSize,
      wposchema: wposchema,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 天气 API 3
 * URL: https://srtb.msn.cn/auction
 */
async function getWeather3() {
  const response = await axios.get('https://srtb.msn.cn/auction', {
    params: {
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 天气 API 4
 * URL: https://arc.msn.com/v4/api/selection?nct=1&fmt=json&nocookie=0&locale=zh-cn&country=CN&muid=13A1CAFD74C4677709ACDC3875B96665&ISSIGNEDIN=0&MSN_CANVAS=1&OPSYS=WIN10&ISMOBILE=0&BROWSER=6&placement=10837393&bcnt=1&asid=6e42a38376b94bb0cc7f6d8fd617dc6b
 */
async function getWeather4(nct = '1', fmt = 'json', nocookie = '0', locale = 'zh-cn', country = 'CN', muid = '13A1CAFD74C4677709ACDC3875B96665', ISSIGNEDIN = '0', MSN_CANVAS = '1', OPSYS = 'WIN10', ISMOBILE = '0', BROWSER = '6', placement = '10837393', bcnt = '1', asid = '6e42a38376b94bb0cc7f6d8fd617dc6b') {
  const response = await axios.get('https://arc.msn.com/v4/api/selection', {
    params: {
      nct: nct,
      fmt: fmt,
      nocookie: nocookie,
      locale: locale,
      country: country,
      muid: muid,
      ISSIGNEDIN: ISSIGNEDIN,
      MSN_CANVAS: MSN_CANVAS,
      OPSYS: OPSYS,
      ISMOBILE: ISMOBILE,
      BROWSER: BROWSER,
      placement: placement,
      bcnt: bcnt,
      asid: asid,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 天气 API 5
 * URL: https://assets.msn.cn/service/Finance/Charts?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&activityId=6942e626-1494-4ea5-b48f-14ee8b3a5a05&ocid=finance-utils-peregrine&cm=zh-cn&it=edgeid&scn=APP_ANON&ids=adfh77,adg1m7,aopzxm,a1yv52,adg21h,b1a977&type=1D1M&wrapodata=false&chartflag=7&allowempty=true
 */
async function getWeather5(ocid = 'finance-utils-peregrine', cm = 'zh-cn', it = 'edgeid', scn = 'APP_ANON', ids = 'adfh77,adg1m7,aopzxm,a1yv52,adg21h,b1a977', type = '1D1M', wrapodata = 'false', chartflag = '7', allowempty = 'true') {
  const response = await axios.get('https://assets.msn.cn/service/Finance/Charts', {
    params: {
      apikey: '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM',
      activityId: '6942e626-1494-4ea5-b48f-14ee8b3a5a05',
      ocid: ocid,
      cm: cm,
      it: it,
      scn: scn,
      ids: ids,
      type: type,
      wrapodata: wrapodata,
      chartflag: chartflag,
      allowempty: allowempty,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 日历 API 1
 * URL: https://assets.msn.cn/resolver/api/resolve/v3/config/?expType=AppConfig&expInstance=default&apptype=homePage&v=20251216.31&targetScope={%22audienceMode%22:%22adult%22,%22browser%22:{%22browserType%22:%22edgeChromium%22,%22version%22:%22120%22,%22ismobile%22:%22false%22},%22deviceFormFactor%22:%22desktop%22,%22domain%22:%22www.msn.cn%22,%22locale%22:{%22content%22:{%22language%22:%22zh%22,%22market%22:%22cn%22},%22display%22:{%22language%22:%22zh%22,%22market%22:%22cn%22}},%22os%22:%22windows%22,%22modes%22:{%22audienceMode%22:%22adult%22},%22platform%22:%22web%22,%22pageType%22:%22hp%22,%22pageExperiments%22:[%22prg-pr2-nohidepa%22]}
 */
async function getCalendar1(expType = 'AppConfig', expInstance = 'default', apptype = 'homePage', v = '20251216.31', targetScope = '{"audienceMode":"adult","browser":{"browserType":"edgeChromium","version":"120","ismobile":"false"},"deviceFormFactor":"desktop","domain":"www.msn.cn","locale":{"content":{"language":"zh","market":"cn"},"display":{"language":"zh","market":"cn"}},"os":"windows","modes":{"audienceMode":"adult"},"platform":"web","pageType":"hp","pageExperiments":["prg-pr2-nohidepa"]}') {
  const response = await axios.get('https://assets.msn.cn/resolver/api/resolve/v3/config/', {
    params: {
      expType: expType,
      expInstance: expInstance,
      apptype: apptype,
      v: v,
      targetScope: targetScope,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}


/**
 * 日历 API 2
 * URL: https://assets.msn.cn/service/news/feed/pages/weblayout?User=m-13A1CAFD74C4677709ACDC3875B96665&activityId=6942e626-1494-4ea5-b48f-14ee8b3a5a05&adoffsets=c1:-1,c2:-1&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&audienceMode=adult&cm=zh-cn&colstatus=c1:0,c2:0&column=c2&colwidth=300&contentType=article,video,slideshow,webcontent&dprValue=1&it=edgeid&l3v=2&layout=c2&memory=8&newsSkip=0&newsTop=48&ocid=hponeservicefeed&pgc=1035&private=1&timeOut=1000&vpSize=800x600&wposchema=byregion
 */
async function getCalendar2(adoffsets = 'c1:-1,c2:-1', audienceMode = 'adult', cm = 'zh-cn', colstatus = 'c1:0,c2:0', column = 'c2', colwidth = '300', contentType = 'article,video,slideshow,webcontent', dprValue = '1', it = 'edgeid', l3v = '2', layout = 'c2', memory = '8', newsSkip = '0', newsTop = '48', ocid = 'hponeservicefeed', pgc = '1035', private = '1', timeOut = '1000', vpSize = '800x600', wposchema = 'byregion') {
  const response = await axios.get('https://assets.msn.cn/service/news/feed/pages/weblayout', {
    params: {
      User: 'm-13A1CAFD74C4677709ACDC3875B96665',
      activityId: '6942e626-1494-4ea5-b48f-14ee8b3a5a05',
      adoffsets: adoffsets,
      apikey: '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM',
      audienceMode: audienceMode,
      cm: cm,
      colstatus: colstatus,
      column: column,
      colwidth: colwidth,
      contentType: contentType,
      dprValue: dprValue,
      it: it,
      l3v: l3v,
      layout: layout,
      memory: memory,
      newsSkip: newsSkip,
      newsTop: newsTop,
      ocid: ocid,
      pgc: pgc,
      private: private,
      timeOut: timeOut,
      vpSize: vpSize,
      wposchema: wposchema,
    },
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': 'application/json'
    }
  });
  return response.data;
}
