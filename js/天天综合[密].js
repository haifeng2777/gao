var rule = {
  title: '天天综合[密]',//发布页:'https://666sav.com','https://771267398.550xx.vip',
  hostJs: 'print(HOST);let html=request(HOST,{headers:{"User-Agent":PC_UA}});let src=jsp.pdfh(html,".login-txt&&a:eq(1)&&href");print(src);HOST=src',
  host: 'https://666sav.com',
  url: '/fyclass-fypage.html[/fyclass]',
  searchUrl: '/sos**/page/fypage.html',
  searchable: 2,
  headers: {'User-Agent': 'PC_UA'},
  hikerListCol: "movie_3",
  hikerClassListCol: "movie_3",
  timeout: 5000,
  filterable: 1,
  class_name: '中文资源&超清资源&AV解说&国产传媒&久久热&废材资源&实时直播',
  class_url: 'xjzy/&cq/&avjs/&gccm/&99re/&fcw/&zb/',
  play_parse: true,
  lazy: "js:\n  let html = request(input);\n  let hconf = html.match(/r player_.*?=(.*?)</)[1];\n  let json = JSON5.parse(hconf);\n  let url = json.url;\n  if (json.encrypt == '1') {\n    url = unescape(url);\n  } else if (json.encrypt == '2') {\n    url = unescape(base64Decode(url));\n  }\n  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {\n    input = {\n      parse: 0,\n      jx: 0,\n      url: url,\n    };\n  } else {\n    input;\n  }",
  tab_rename: {'道长在线': '在线线路'},
  double: true,
  推荐: '*',
  一级: '#list_videos_videos_watched_right_now_items .item;img&&alt;.lazy-load&&data-original;.duration&&Text;a&&href',
  二级:'*',
  搜索: '*',
}






