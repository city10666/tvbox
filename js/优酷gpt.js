var rule = {
    title: '优酷',
    host: 'https://www.youku.com', // 将%79%6f%75%6b%75解码为youku
    homeUrl: '',
    searchUrl: 'https://search.youku.com/api/search?pg=fypage&keyword=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    // 分类链接（fypage参数支持1个()表达式）
    url: '/category/data?optionRefresh=1&pageNo=fypage&params=fyfilter',
    filter_url: '{{fl}}',
    filter: {
        "电视剧": [
            {
                "key": "main_area",
                "name": "全部地区",
                "value": [
                    { "n": "全部地区", "v": "" },
                    { "n": "内地剧", "v": "中国内地" },
                    { "n": "港剧", "v": "中国香港" },
                    { "n": "台剧", "v": "中国台湾" },
                    { "n": "韩剧", "v": "韩国" },
                    { "n": "美剧", "v": "美国" },
                    { "n": "英剧", "v": "英国" },
                    { "n": "日剧", "v": "日本" },
                    { "n": "泰剧", "v": "泰国" }
                ]
            },
            {
                "key": "tags",
                "name": "全部类型",
                "value": [
                    { "n": "全部类型", "v": "" },
                    { "n": "青春", "v": "青春" },
                    { "n": "古装", "v": "古装" },
                    { "n": "爱情", "v": "爱情" },
                    { "n": "都市", "v": "都市" },
                    { "n": "喜剧", "v": "喜剧,搞笑" },
                    { "n": "战争", "v": "战争" },
                    { "n": "军旅", "v": "军旅" },
                    { "n": "谍战", "v": "谍战" },
                    { "n": "偶像", "v": "偶像" },
                    { "n": "警匪", "v": "警匪" },
                    { "n": "冒险", "v": "冒险" },
                    { "n": "穿越", "v": "穿越" },
                    { "n": "仙侠", "v": "仙侠" },
                    { "n": "武侠", "v": "武侠" },
                    { "n": "悬疑", "v": "悬疑" },
                    { "n": "罪案", "v": "罪案" },
                    { "n": "家庭", "v": "家庭" },
                    { "n": "历史", "v": "历史" },
                    { "n": "年代", "v": "年代" },
                    { "n": "农村", "v": "农村" }
                ]
            },
            {
                "key": "year",
                "name": "全部年份",
                "value": [
                    { "n": "全部年份", "v": "" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "2020" },
                    { "n": "2019", "v": "2019" },
                    { "n": "2018", "v": "2018" },
                    { "n": "2017", "v": "2017" },
                    { "n": "2016", "v": "2016" },
                    { "n": "2015", "v": "2015" },
                    { "n": "2014-2011", "v": "2011-2014" },
                    { "n": "更早", "v": "-2010" }
                ]
            },
            {
                "key": "status",
                "name": "全部规格",
                "value": [
                    { "n": "全部规格", "v": "" },
                    { "n": "全网独播", "v": "1" },
                    { "n": "优酷自制", "v": "2" },
                    { "n": "已完结", "v": "3" },
                    { "n": "即将上线", "v": "4" },
                    { "n": "短剧", "v": "5" }
                ]
            },
            {
                "key": "pay_type",
                "name": "付费类型",
                "value": [
                    { "n": "付费类型", "v": "" },
                    { "n": "免费", "v": "0" },
                    { "n": "VIP", "v": "2" },
                    { "n": "付费", "v": "1" }
                ]
            },
            {
                "key": "sort",
                "name": "综合排序",
                "value": [
                    { "n": "综合排序", "v": "" },
                    { "n": "热度最高", "v": "7" },
                    { "n": "最新上线", "v": "1" },
                    { "n": "最好评", "v": "3" },
                    { "n": "最多播放", "v": "2" }
                ]
            }
        ],
        "电影": [
            {
                "key": "main_area",
                "name": "全部地区",
                "value": [
                    { "n": "全部地区", "v": "" },
                    { "n": "内地", "v": "中国内地" },
                    { "n": "中国香港", "v": "中国香港" },
                    { "n": "中国台湾", "v": "中国台湾" },
                    { "n": "美国", "v": "美国" },
                    { "n": "印度", "v": "印度" },
                    { "n": "日韩", "v": "韩国,日本" },
                    { "n": "泰国", "v": "泰国" },
                    { "n": "欧洲", "v": "欧洲" }
                ]
            },
            {
                "key": "tags",
                "name": "全部类型",
                "value": [
                    { "n": "全部类型", "v": "" },
                    { "n": "喜剧", "v": "喜剧,搞笑" },
                    { "n": "动作", "v": "动作" },
                    { "n": "怪兽", "v": "怪兽" },
                    { "n": "战争", "v": "战争" },
                    { "n": "爱情", "v": "爱情" },
                    { "n": "悬疑", "v": "悬疑" },
                    { "n": "武侠", "v": "武侠" },
                    { "n": "奇幻", "v": "奇幻" },
                    { "n": "科幻", "v": "科幻" },
                    { "n": "冒险", "v": "冒险" },
                    { "n": "警匪", "v": "警匪" },
                    { "n": "动画", "v": "动画" },
                    { "n": "惊悚", "v": "惊悚" },
                    { "n": "犯罪", "v": "犯罪" },
                    { "n": "恐怖", "v": "恐怖" },
                    { "n": "剧情", "v": "剧情" },
                    { "n": "历史", "v": "历史" },
                    { "n": "纪录片", "v": "纪录片" },
                    { "n": "传记", "v": "传记" },
                    { "n": "歌舞", "v": "歌舞" },
                    { "n": "短片", "v": "短片" },
                    { "n": "其他", "v": "其他" }
                ]
            },
            {
                "key": "source",
                "name": "全部规格",
                "value": [
                    { "n": "全部规格", "v": "" },
                    { "n": "院线", "v": "1" },
                    { "n": "网络电影", "v": "0" },
                    { "n": "独播", "v": "2" },
                    { "n": "高清修复", "v": "3" },
                    { "n": "1080P", "v": "4" }
                ]
            },
            {
                "key": "year",
                "name": "全部年份",
                "value": [
                    { "n": "全部年份", "v": "" },
                    { "n": "2025", "v": "2025" },
                    { "n": "2024", "v": "2024" },
                    { "n": "2023", "v": "2023" },
                    { "n": "2022", "v": "2022" },
                    { "n": "2021", "v": "2021" },
                    { "n": "2020", "v": "2020" },
                    { "n": "2019", "v": "2019" },
                    { "n": "2018", "v": "2018" },
                    { "n": "2017", "v": "2017" },
                    { "n": "2016", "v": "2016" },
                    { "n": "2015", "v": "2015" },
                    { "n": "2014-2010", "v": "2010-2014" },
                    { "n": "2009-2000", "v": "2000-2009" },
                    { "n": "90年代", "v": "1990-1999" },
                    { "n": "80年代", "v": "1980-1989" },
                    { "n": "70年代", "v": "1970-1979" },
                    { "n": "更早", "v": "-1969" }
                ]
            },
            {
                "key": "pay_type",
                "name": "付费类型",
                "value": [
                    { "n": "付费类型", "v": "" },
                    { "n": "免费", "v": "0" },
                    { "n": "会员", "v": "2" },
                    { "n": "点播", "v": "1" }
                ]
            },
            {
                "key": "sort",
                "name": "综合排序",
                "value": [
                    { "n": "综合排序", "v": "" },
                    { "n": "热度最高", "v": "7" },
                    { "n": "最多播放", "v": "2" },
                    { "n": "最新上线", "v": "1" },
                    { "n": "最好评", "v": "3" }
                ]
            },
            {
                "key": "tag_label_name",
                "name": "为你推荐",
                "value": [
                    { "n": "为你推荐", "v": "" },
                    { "n": "高分必看", "v": "高分必看" },
                    { "n": "卖座电影", "v": "卖座电影" },
                    { "n": "小说改编", "v": "小说改编" },
                    { "n": "铁血硬汉", "v": "铁血硬汉" },
                    { "n": "视效大片", "v": "视效大片" },
                    { "n": "漫画改编", "v": "漫画改编" },
                    { "n": "绝地求生", "v": "绝地求生" },
                    { "n": "真人真事改编", "v": "真人真事改编" },
                    { "n": "范伟", "v": "范伟" },
                    { "n": "火爆枪战", "v": "火爆枪战" },
                    { "n": "影史经典", "v": "影史经典" },
                    { "n": "拯救世界", "v": "拯救世界" },
                    { "n": "万茜", "v": "万茜" },
                    { "n": "马思纯", "v": "马思纯" },
                    { "n": "王俊凯", "v": "王俊凯" },
                    { "n": "豪华阵容", "v": "豪华阵容" },
                    { "n": "李玉", "v": "李玉" },
                    { "n": "无厘头喜剧", "v": "无厘头喜剧" },
                    { "n": "超能力", "v": "超能力" },
                    { "n": "欢喜搭档", "v": "欢喜搭档" }
                ]
            }
        ],
        // 其他分类（综艺、动漫、少儿、纪录片、文化、亲子、教育、搞笑、生活、体育、音乐、游戏）可参考上述结构补充
        "综艺": [],
        "动漫": [],
        "少儿": [],
        "纪录片": [],
        "文化": [],
        "亲子": [],
        "教育": [],
        "搞笑": [],
        "生活": [],
        "体育": [],
        "音乐": [],
        "游戏": []
    },
    headers: {
        'User-Agent': 'PC_UA',
        'Cookie': 'cna=VvNvGX3e0ywCAavVEXlnA2bg; __ysuid=1626676228345Rl1; __ayft=1652434048647; __arycid=dm-1-00; __arcms=dm-1-00; __ayvstp=85; __arpvid=1667204023100cWWdgM-1667204023112; __ayscnt=10; __aypstp=60; isg=BBwcqxvvk3BxkWQGugbLpUSf7TrOlcC_U7GAj_YdfYfvQbzLHqYGT4Hgp6m5TvgX; tfstk=c3JOByYUH20ilVucLOhh0pCtE40lZfGc-PjLHLLfuX7SWNyAiQvkeMBsIw7PWDC..; l=eBQguS-PjdJFGJT-BOfwourza77OSIRA_uPzaNbMiOCPOb1B5UxfW6yHp4T6C3GVhsGJR3rp2umHBeYBqQd-nxvOF8qmSVDmn'
    },
    timeout: 5000,
    class_name: '少儿&电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    class_url: '少儿&电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    limit: 20,
    play_parse: true,
    lazy: 'js:input={parse:1,jx:1,url:input};',
    一级: 'js:let d=[];MY_FL.type=MY_CATE;let fl=stringify(MY_FL);fl=encodeUrl(fl);input=input.split("{")[0]+fl;if(MY_PAGE>1){let old_session=getItem("yk_session_"+MY_CATE,"{}");input=input.replace("optionRefresh=1","session="+encodeUrl(old_session))}let html=fetch(input,fetch_params);try{html=JSON.parse(html);let lists=html.data.filterData.listData;let session=html.data.filterData.session;session=stringify(session);if(session!==getItem("yk_session_"+MY_CATE,"{}")){setItem("yk_session_"+MY_CATE,session)}lists.forEach(function(it){let vid = it.videoLink.includes("id_") ? it.videoLink.split("id_")[1].split(".html")[0] : "msearch:";d.push({title: it.title, img: it.img, desc: it.summary, url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + vid, content: it.subTitle})})}catch(e){log("一级列表解析发生错误:" + e.message)}setResult(d);',
    二级: 'js:var d=[];VOD={};let html=request(input);let json=JSON.parse(html);if(/keyword/.test(input)){input="https://search.youku.com/api/search?appScene=show_episode&showIds=" + json.pageComponentList[0].commonData.showId;json=JSON.parse(fetch(MY_URL,fetch_params))}let video_lists=json.serisesList;var name=json.sourceName;if(/优酷/.test(name) && video_lists.length > 0){let ourl = "https://v.youku.com/v_show/id_" + video_lists[0].videoId + ".html";let _img = video_lists[0].thumbUrl;let html = fetch(ourl, {headers: {Referer: "https://v.youku.com/", "User-Agent": PC_UA}});let json = /__INITIAL_DATA__/.test(html) ? html.split("window.__INITIAL_DATA__ =")[1].split(";")[0] : "{}";if(json === "{}"){log("触发了优酷人机验证");VOD.vod_remarks = ourl;VOD.vod_pic = _img;VOD.vod_name = video_lists[0].title.replace(/(\\d+)/g, "");VOD.vod_content = "触发了优酷人机验证,本次未获取详情,但不影响播放(" + ourl + ")"} else {try{json = JSON.parse(json);let data = json.data.data;let data_extra = data.data.extra;let img = data_extra.showImgV;let model = json.data.model;let m = model.detail.data.nodes[0].nodes[0].nodes[0].data;let _type = m.showGenre;let _desc = m.updateInfo || m.subtitle;let JJ = m.desc;let _title = m.introTitle;VOD.vod_pic = img;VOD.vod_name = _title;VOD.vod_type = _type;VOD.vod_remarks = _desc;VOD.vod_content = JJ}catch(e){log("海报渲染发生错误:" + e.message);print(json);VOD.vod_remarks = name}}}if(!/优酷/.test(name)){VOD.vod_content = "非自家播放源,暂无视频简介及海报";VOD.vod_remarks = name}function adhead(url){return urlencode(url)}play_url = play_url.replace("&play_url=", "&type=json&play_url=");video_lists.forEach(function(it){let url = "https://v.youku.com/v_show/id_" + it.videoId + ".html";if(it.thumbUrl){d.push({desc: it.showVideoStage ? it.showVideoStage.replace("期", "集") : it.displayName, pic_url: it.thumbUrl, title: it.title, url: play_url + adhead(url)})} else if(name !== "优酷"){d.push({title: it.displayName ? it.displayName : it.title, url: play_url + adhead(it.url)})}});VOD.vod_play_from = name;VOD.vod_play_url = d.map(function(it){return it.title + "$" + it.url}).join("#");',
    搜索: 'js:var d=[];let html = request(input);let json = JSON.parse(html);json.pageComponentList.forEach(function(it){if(it.hasOwnProperty("commonData")){it = it.commonData;d.push({title: it.titleDTO.displayName, img: it.posterDTO.vThumbUrl, desc: it.stripeBottom, content: it.updateNotice + " " + it.feature, url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + it.showId + "&appCaller=h5"})}});setResult(d);'
}