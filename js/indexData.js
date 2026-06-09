/*
* @Author: ZMT
* @Date:   2020-01-06 17:01:22
* @Last Modified by:   ZMT
* @Last Modified time: 2020-01-13 19:45:27
*/
'use strict';
/*今日焦点内容数据*/
var list1=[{
	src:'images/s_1.1.jpg',
	span:'01-06期',
	p:'中央气象台：新一轮较强雨雪暴雪蓝色预警发布'
},{
	src:'images/s_1.2.jpg',
	span:'01-06期',
	p:'我们的歌：肖战挑战高音唱到爆青筋'
},{
	src:'images/s_1.3.jpg',
	span:'01-06期',
	p:'爱奇艺爱电影：2019年电影名场面'
},{
	src:'images/s_1.4.jpg',
	span:'01-06期',
	p:'小寒节气饮食图鉴 三九补一冬来年无病痛'
},{
	src:'images/s_1.5.jpg',
	span:'01-06期',
	p:'从地球出发：乔振宇张榕容惊险漠星迫降'
},{
	src:'images/s_1.6.jpg',
	span:'01-06期',
	p:'王晨艺VLOG：繁华声中努力且不羁的工作狂'
},{
	src:'images/s_1.7.jpg',
	span:'01-06期',
	p:'特朗普：美军不会离开伊拉克 除非付清驻伊美军开支'
},{
	src:'images/s_1.8.jpg',
	span:'01-06期',
	p:'女生学校扫雪冻伤险遭截肢 校长：不确定责任归属'
},{
	src:'images/s_1.9.jpg',
	span:'01-06期',
	p:'江苏苏州十全街发生塌陷 目击者：听到轰轰声'
},{
	src:'images/s_1.10.jpg',
	span:'01-06期',
	p:'姚明明生日会获封“舞担” UNINE成员别样祝福超催泪'
},{
	src:'images/s_1.11.jpg',
	span:'01-06期',
	p:'教科书式操作！消防车出警遇红灯 私家车45度让路'
},{
	src:'images/s_1.12.jpg',
	span:'01-06期',
	p:'次元二bi治：2020新番动画速览！'
},{
	src:'images/s_1.13.jpg',
	span:'01-06期',
	p:'奇葩说·边骂边夸：李诞盲夸颜如晶讲这么好干嘛'
},{
	src:'images/s_1.14.jpg',
	span:'01-06期',
	p:'潮流合伙人·东京温情：凡凡大勋兄弟情单品太赞'
},{
	src:'images/s_1.15.jpg',
	span:'01-06期',
	p:'这样唱好美·禁忌之恋：齐豫揭秘飞鸟与鱼创作故事'
},{
	src:'images/s_1.16.jpg',
	span:'01-06期',
	p:'上新了故宫·开眼界：甲骨占卜解读引邓伦思考'
},{
	src:'images/s_1.17.jpg',
	span:'01-06期',
	p:'从地球出发：乔振宇张榕容惊险漠星迫降'
},{
	src:'images/s_1.18.jpg',
	span:'01-06期',
	p:'Dazed 1，2月刊封面人物周冬雨：当众孤独'
},{
	src:'images/s_1.19.jpg',
	span:'01-06期',
	p:'国剧修复：回顾那些激情燃烧的岁月'
},{
	src:'images/s_1.20.jpg',
	span:'01-06期',
	p:'塑料兄妹：戏精兄妹互相伤害'
},{
	src:'images/s_1.21.jpg',
	span:'01-06期',
	p:'电影《宠爱》太好哭了 回顾宠物与主人的有爱瞬间'
},{
	src:'images/s_1.22.jpg',
	span:'01-06期',
	p:'爱奇艺游报：最值得期待的游戏大作'
},{
	src:'images/s_1.23.jpg',
	span:'01-06期',
	p:'忆英雄剧场：破冰行动'
},{
	src:'images/s_1.24.jpg',
	span:'01-06期',
	p:'爱青春剧场：《从前有座灵剑山》许凯张榕容修仙之旅'
}];

/*综艺内容数据*/
var list2=[{
	src:'images/s_2.3.jpg',
	span:'01-04期',
	title:'我就是演员',
	p:'费启鸣挑战李现早年作品'
},{
	src:'images/s_2.4.jpg',
	span:'01-04期',
	title:'亲爱的来吃饭',
	p:'王祖蓝遇路人自称王祖贤'
},{
	src:'images/s_2.5.jpg',
	span:'01-01期',
	title:'主持人大赛',
	p:'撒贝宁自嘲童年生活平淡'
},{
	src:'images/s_2.6.jpg',
	span:'01-01期',
	title:'漫游记',
	p:'尤长靖安利椰浆饭收获差评'
},{
	src:'images/s_2.7.jpg',
	span:'01-04期',
	title:'2020四川跨年演唱会',
	p:'刘宇宁《让酒》视觉穿越'
},{
	src:'images/s_2.8.jpg',
	span:'01-05期',
	title:'苗阜王声精品相声',
	p:'苗阜家开图书馆秒变桌游室'
}];
/*自制综艺内容数据*/
var list3=[{
	src:'images/s_3.1.jpg',
	title:'第6期：Baby麦麦戴上兔子头套就skr萌娃',
	p:'<span>潮流合伙人 · </span>第6期：Baby麦麦戴上兔子头套就skr萌娃'
},{
	src:'images/s_3.2.jpg',
	title:'第6期：吴亦凡变麦麦摄像老师',
	p:'<span>下班啦合伙人 · </span>第6期：吴亦凡变麦麦摄像老师'
},{
	src:'images/s_3.3.jpg',
	title:'第12期：农农突然开车惊呆比心团',
	p:'<span>这样唱好美 · </span>第12期：农农突然开车惊呆比心团'
},{
	src:'images/s_3.4.jpg',
	title:'第12期：陈乐基邀请许靖韵跳秧歌',
	p:'<span>好美的她们 · </span>第12期：陈乐基邀请许靖韵跳秧歌'
},{
	src:'images/s_3.5.jpg',
	title:'周四档：傅首尔肖骁高能开杠',
	p:'<span>奇葩说6 · </span>周四档：傅首尔肖骁高能开杠'
},{
	src:'images/s_3.6.jpg',
	title:'周六档：傅首尔替黄执中委屈',
	p:'<span>奇葩说6 · </span>周六档：傅首尔替黄执中委屈'
}];
/*脱口秀内容数据*/
var list4=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*娱乐内容数据*/
var list5=[{
	src:'images/s_6.3.jpg',
	date1:'',
	p:'正直播:2019微博之夜来袭 赵丽颖王一博肖战出席'
},{
	src:'images/s_6.4.jpg',
	date1:'00:48',
	p:'曝娄艺潇试镜胡一菲画面 形象气质都符合人物设定'
},{
	src:'images/s_6.5.jpg',
	date1:'00:37',
	p:'陈坤为儿子庆18岁生日 优优穿西装和周迅舒淇合影'
},{
	src:'images/s_6.6.jpg',
	date1:'00:47',
	p:'LISA开通微博！网友：自拍九宫格啥时候安排？'
},{
	src:'images/s_6.7.jpg',
	date1:'01-11期',
	p:'名场面笑到头掉！《精英律师》何赛穿裙子了'
},{
	src:'images/s_6.8.jpg',
	date1:'00:59',
	p:'李荣浩新歌《两个普普通通小青年》终于唱rap了！'
},{
	src:'images/s_6.9.jpg',
	date1:'00:53',
	p:'泪目！林书豪身穿高以翔所赠西装参加全明星晚宴'
},{
	src:'images/s_6.10.jpg',
	date1:'01:38',
	p:'吴亦凡刘昊然回忆少年时光 范丞丞草帽造型吸睛无数'
}];
/*爱奇艺号内容数据*/
var list6=[{
	src:'images/s_7.1.jpg',
	title:'降妖天師',
	date2:'',
	p:'<span class="iconfont icon-user"></span>新片场',
	p1:'新片场'
},{
	src:'images/s_7.2.jpg',
	title:'小猪一家亲 做数学题',
	date2:'更新至436集',
	p:'<span class="iconfont icon-user"></span>江苏可一',
	p1:'江苏可一'
},{
	src:'images/s_7.3.jpg',
	title:'中国经典童谣 第25集 24节气古诗 大雪',
	date2:'更新至25集',
	p:'<span class="iconfont icon-user"></span>积木育儿',
	p1:'积木育儿'
},{
	src:'images/s_7.4.jpg',
	title:'它来了！让大左充满恐惧的日式料理  冲绳3',
	date2:'03:32',
	p:'<span class="iconfont icon-user"></span>吃货俱乐部官号',
	p1:'吃货俱乐部官号'
},{
	src:'images/s_7.5.jpg',
	title:'【没品精选】金刚萌妹霸气踢断钢管',
	date2:'01-10期',
	p:'<span class="iconfont icon-user"></span>基腐社',
	p1:'基腐社'
},{
	src:'images/s_7.6.jpg',
	title:'北京交通委：机动车摇号措施将会更加关注无车家庭',
	date2:'01-12期',
	p:'<span class="iconfont icon-user"></span>星知传媒',
	p1:'星知传媒'
}];
/*电影内容数据*/
var list7=[{
	src:'images/s_9.1.jpg',
	title:'狄仁杰探案',
	spansrc:'<img src="images/only.png" alt="">',
	p:'诡异飞仙连环索命',
	score:'7.2'
},{
	src:'images/s_9.2.jpg',
	title:'决战中途岛',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'美日海空激烈对决',
	score:'7.6'
},{
	src:'images/s_9.3.jpg',
	title:'受益人',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'大鹏柳岩婚姻骗局',
	score:'7.7'
},{
	src:'images/s_9.4.jpg',
	title:'降魔大师',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'驱魔天师血斩妖王',
	score:'7.5'
},{
	src:'images/s_9.5.jpg',
	title:'冰峰暴',
	spansrc:'<img src="images/only.png" alt="">',
	p:'张静初勇攀冰壁',
	score:'7.5'
},{
	src:'images/s_9.6.jpg',
	title:'中国机长',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'张涵予杜江高空救援',
	score:'8.5'
},{
	src:'images/s_9.7.jpg',
	title:'大约在冬季',
	spansrc:'<img src="images/only.png" alt="">',
	p:'马思纯霍建华虐恋',
	score:'8.2'
},{
	src:'images/s_9.8.jpg',
	title:'双子杀手',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'双面史皇对决肉搏',
	score:'7.9'
},{
	src:'images/s_9.9.jpg',
	title:'你是凶手',
	spansrc:'<img src="images/only.png" alt="">',
	p:'十年悬案疑凶重现',
	score:'8.0'
},{
	src:'images/s_9.10.jpg',
	title:'少年的你',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'冬雨千玺抵御霸凌',
	score:'8.5'
}];
/*网络电影内容数据*/
var list8=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*电视剧内容数据*/
var list9=[{
	src:'images/s_9.1.jpg',
	title:'狄仁杰探案',
	spansrc:'<img src="images/only.png" alt="">',
	i:'01-02期',
	score:'7.2'
},{
	src:'images/s_9.2.jpg',
	title:'决战中途岛',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'7.6'
},{
	src:'images/s_9.3.jpg',
	title:'受益人',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'7.7'
},{
	src:'images/s_9.4.jpg',
	title:'降魔大师',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'7.5'
},{
	src:'images/s_9.5.jpg',
	title:'冰峰暴',
	spansrc:'<img src="images/only.png" alt="">',
	i:'01-02期',
	score:'7.5'
},{
	src:'images/s_9.6.jpg',
	title:'中国机长',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'8.5'
},{
	src:'images/s_9.7.jpg',
	title:'大约在冬季',
	spansrc:'<img src="images/only.png" alt="">',
	i:'01-02期',
	score:'8.2'
},{
	src:'images/s_9.8.jpg',
	title:'双子杀手',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'7.9'
},{
	src:'images/s_9.9.jpg',
	title:'你是凶手',
	spansrc:'<img src="images/only.png" alt="">',
	i:'01-02期',
	score:'8.0'
},{
	src:'images/s_9.10.jpg',
	title:'少年的你',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	i:'01-02期',
	score:'8.5'
}];
/*动漫内容数据*/
var list10=[{
	src:'images/s_6.3.jpg',
	date1:'',
	p:'正直播:2019微博之夜来袭 赵丽颖王一博肖战出席'
},{
	src:'images/s_6.4.jpg',
	date1:'00:48',
	p:'曝娄艺潇试镜胡一菲画面 形象气质都符合人物设定'
},{
	src:'images/s_6.5.jpg',
	date1:'00:37',
	p:'陈坤为儿子庆18岁生日 优优穿西装和周迅舒淇合影'
},{
	src:'images/s_6.6.jpg',
	date1:'00:47',
	p:'LISA开通微博！网友：自拍九宫格啥时候安排？'
},{
	src:'images/s_6.7.jpg',
	date1:'01-11期',
	p:'名场面笑到头掉！《精英律师》何赛穿裙子了'
},{
	src:'images/s_6.8.jpg',
	date1:'00:59',
	p:'李荣浩新歌《两个普普通通小青年》终于唱rap了！'
},{
	src:'images/s_6.9.jpg',
	date1:'00:53',
	p:'泪目！林书豪身穿高以翔所赠西装参加全明星晚宴'
},{
	src:'images/s_6.10.jpg',
	date1:'01:38',
	p:'吴亦凡刘昊然回忆少年时光 范丞丞草帽造型吸睛无数'
}];
/*儿童内容数据*/
var list11=[{
	src:'images/s_6.3.jpg',
	date1:'',
	p:'正直播:2019微博之夜来袭 赵丽颖王一博肖战出席'
},{
	src:'images/s_6.4.jpg',
	date1:'00:48',
	p:'曝娄艺潇试镜胡一菲画面 形象气质都符合人物设定'
},{
	src:'images/s_6.5.jpg',
	date1:'00:37',
	p:'陈坤为儿子庆18岁生日 优优穿西装和周迅舒淇合影'
},{
	src:'images/s_6.6.jpg',
	date1:'00:47',
	p:'LISA开通微博！网友：自拍九宫格啥时候安排？'
},{
	src:'images/s_6.7.jpg',
	date1:'01-11期',
	p:'名场面笑到头掉！《精英律师》何赛穿裙子了'
},{
	src:'images/s_6.8.jpg',
	date1:'00:59',
	p:'李荣浩新歌《两个普普通通小青年》终于唱rap了！'
},{
	src:'images/s_6.9.jpg',
	date1:'00:53',
	p:'泪目！林书豪身穿高以翔所赠西装参加全明星晚宴'
},{
	src:'images/s_6.10.jpg',
	date1:'01:38',
	p:'吴亦凡刘昊然回忆少年时光 范丞丞草帽造型吸睛无数'
}];
/*游戏视频号内容数据*/
var list12=[{
	src:'images/s_7.1.jpg',
	title:'降妖天師',
	date2:'',
	p:'<span class="iconfont icon-user"></span>新片场',
	p1:'新片场'
},{
	src:'images/s_7.2.jpg',
	title:'小猪一家亲 做数学题',
	date2:'更新至436集',
	p:'<span class="iconfont icon-user"></span>江苏可一',
	p1:'江苏可一'
},{
	src:'images/s_7.3.jpg',
	title:'中国经典童谣 第25集 24节气古诗 大雪',
	date2:'更新至25集',
	p:'<span class="iconfont icon-user"></span>积木育儿',
	p1:'积木育儿'
},{
	src:'images/s_7.4.jpg',
	title:'它来了！让大左充满恐惧的日式料理  冲绳3',
	date2:'03:32',
	p:'<span class="iconfont icon-user"></span>吃货俱乐部官号',
	p1:'吃货俱乐部官号'
},{
	src:'images/s_7.5.jpg',
	title:'【没品精选】金刚萌妹霸气踢断钢管',
	date2:'01-10期',
	p:'<span class="iconfont icon-user"></span>基腐社',
	p1:'基腐社'
},{
	src:'images/s_7.6.jpg',
	title:'北京交通委：机动车摇号措施将会更加关注无车家庭',
	date2:'01-12期',
	p:'<span class="iconfont icon-user"></span>星知传媒',
	p1:'星知传媒'
}];
/*正在直播内容数据*/
var list13=[{
	src:'images/s_6.3.jpg',
	date1:'',
	p:'正直播:2019微博之夜来袭 赵丽颖王一博肖战出席'
},{
	src:'images/s_6.4.jpg',
	date1:'00:48',
	p:'曝娄艺潇试镜胡一菲画面 形象气质都符合人物设定'
},{
	src:'images/s_6.5.jpg',
	date1:'00:37',
	p:'陈坤为儿子庆18岁生日 优优穿西装和周迅舒淇合影'
},{
	src:'images/s_6.6.jpg',
	date1:'00:47',
	p:'LISA开通微博！网友：自拍九宫格啥时候安排？'
},{
	src:'images/s_6.7.jpg',
	date1:'01-11期',
	p:'名场面笑到头掉！《精英律师》何赛穿裙子了'
},{
	src:'images/s_6.8.jpg',
	date1:'00:59',
	p:'李荣浩新歌《两个普普通通小青年》终于唱rap了！'
},{
	src:'images/s_6.9.jpg',
	date1:'00:53',
	p:'泪目！林书豪身穿高以翔所赠西装参加全明星晚宴'
},{
	src:'images/s_6.10.jpg',
	date1:'01:38',
	p:'吴亦凡刘昊然回忆少年时光 范丞丞草帽造型吸睛无数'
}];
/*体育内容数据*/
var list14=[{
	src:'images/s_7.1.jpg',
	title:'降妖天師',
	date2:'',
	p:'<span class="iconfont icon-user"></span>新片场',
	p1:'新片场'
},{
	src:'images/s_7.2.jpg',
	title:'小猪一家亲 做数学题',
	date2:'更新至436集',
	p:'<span class="iconfont icon-user"></span>江苏可一',
	p1:'江苏可一'
},{
	src:'images/s_7.3.jpg',
	title:'中国经典童谣 第25集 24节气古诗 大雪',
	date2:'更新至25集',
	p:'<span class="iconfont icon-user"></span>积木育儿',
	p1:'积木育儿'
},{
	src:'images/s_7.4.jpg',
	title:'它来了！让大左充满恐惧的日式料理  冲绳3',
	date2:'03:32',
	p:'<span class="iconfont icon-user"></span>吃货俱乐部官号',
	p1:'吃货俱乐部官号'
},{
	src:'images/s_7.5.jpg',
	title:'【没品精选】金刚萌妹霸气踢断钢管',
	date2:'01-10期',
	p:'<span class="iconfont icon-user"></span>基腐社',
	p1:'基腐社'
},{
	src:'images/s_7.6.jpg',
	title:'北京交通委：机动车摇号措施将会更加关注无车家庭',
	date2:'01-12期',
	p:'<span class="iconfont icon-user"></span>星知传媒',
	p1:'星知传媒'
}];
/*原创内容数据*/
var list15=[{
	src:'images/s_7.1.jpg',
	title:'降妖天師',
	date2:'',
	p:'<span class="iconfont icon-user"></span>新片场',
	p1:'新片场'
},{
	src:'images/s_7.2.jpg',
	title:'小猪一家亲 做数学题',
	date2:'更新至436集',
	p:'<span class="iconfont icon-user"></span>江苏可一',
	p1:'江苏可一'
},{
	src:'images/s_7.3.jpg',
	title:'中国经典童谣 第25集 24节气古诗 大雪',
	date2:'更新至25集',
	p:'<span class="iconfont icon-user"></span>积木育儿',
	p1:'积木育儿'
},{
	src:'images/s_7.4.jpg',
	title:'它来了！让大左充满恐惧的日式料理  冲绳3',
	date2:'03:32',
	p:'<span class="iconfont icon-user"></span>吃货俱乐部官号',
	p1:'吃货俱乐部官号'
},{
	src:'images/s_7.5.jpg',
	title:'【没品精选】金刚萌妹霸气踢断钢管',
	date2:'01-10期',
	p:'<span class="iconfont icon-user"></span>基腐社',
	p1:'基腐社'
},{
	src:'images/s_7.6.jpg',
	title:'北京交通委：机动车摇号措施将会更加关注无车家庭',
	date2:'01-12期',
	p:'<span class="iconfont icon-user"></span>星知传媒',
	p1:'星知传媒'
}];
/*纪录片内容数据*/
var list16=[{
	src:'images/s_9.1.jpg',
	title:'狄仁杰探案',
	spansrc:'<img src="images/only.png" alt="">',
	p:'诡异飞仙连环索命',
	score:'7.2'
},{
	src:'images/s_9.2.jpg',
	title:'决战中途岛',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'美日海空激烈对决',
	score:'7.6'
},{
	src:'images/s_9.3.jpg',
	title:'受益人',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'大鹏柳岩婚姻骗局',
	score:'7.7'
},{
	src:'images/s_9.4.jpg',
	title:'降魔大师',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'驱魔天师血斩妖王',
	score:'7.5'
},{
	src:'images/s_9.5.jpg',
	title:'冰峰暴',
	spansrc:'<img src="images/only.png" alt="">',
	p:'张静初勇攀冰壁',
	score:'7.5'
},{
	src:'images/s_9.6.jpg',
	title:'中国机长',
	spansrc:'<img src="images/vip_100000_v_601_0_21.png" alt="">',
	p:'张涵予杜江高空救援',
	score:'8.5'
}];
/*教育母婴内容数据*/
var list17=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*音乐时尚内容数据*/
var list18=[{
	src:'images/s_21.1.jpg',
	title:'G.E.M.邓紫棋 - 透明',
	i:'',
	p:'一手包办词曲创作，谱写经典虐心情歌'
},{
	src:'images/s_21.2.jpg',
	title:'KIWI音乐料：对话徐炳超  一个"皮"字贯穿人生',
	i:'<img src="images/self.png" alt="">',
	p:'一个"皮"字贯穿人生'
},{
	src:'images/s_21.3.jpg',
	title:'吴亦凡 - 贰叁',
	i:'',
	p:'同名微电影力邀日本新生代人气女星Kōki共同绝美演绎'
},{
	src:'images/s_21.4.jpg',
	title:'欧阳娜娜的圣诞树',
	i:'<img src="images/only.png" alt="">',
	p:'欧阳娜娜的VLOG'
},{
	src:'images/s_21.5.jpg',
	title:'吴亦凡 Koki, 爱与诚',
	i:'',
	p:'《嘉人》封面大片'
},{
	src:'images/s_21.6.jpg',
	title:'音乐才子又出新歌啦！',
	i:'<img src="images/only.png" alt="">',
	p:'华晨宇仿妆'
}];
/*汽车科技内容数据*/
var list19=[{
	src:'images/s_22.1.jpg',
	title:'晓敏试凯迪拉克CT5',
	i:'',
	p:'豪华和运动并不冲突'
},{
	src:'images/s_22.2.jpg',
	title:'开着长安E-Pro买年货',
	i:'<img src="images/self.png" alt="">',
	p:'续航表现如何？'
},{
	src:'images/s_22.3.jpg',
	title:'试驾比亚迪秦',
	i:'',
	p:'5.99万配“特斯拉”大屏'
},{
	src:'images/s_22.4.gif',
	title:'手机圈大佬陪你走过2019',
	i:'<img src="images/only.png" alt="">',
	p:'短的发布会'
},{
	src:'images/s_22.5.jpg',
	title:'realme X50 5G上手体验',
	i:'',
	p:'科科情报局'
},{
	src:'images/s_22.6.jpg',
	title:'与那岩聊聊机圈的昨今明天',
	i:'<img src="images/only.png" alt="">',
	p:'小白测评'
}];
/*旅游健康内容数据*/
var list20=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*搞笑生活内容数据*/
var list21=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*军事财经内容数据*/
var list22=[{
	src:'images/s_4.1.jpg',
	title:'非常静距离',
	i:'',
	p:'宋轶赞baby情商高会说话'
},{
	src:'images/s_4.2.jpg',
	title:'一桌好宴',
	i:'<img src="images/self.png" alt="">',
	p:'张亮上手加蛋清怕被名厨打'
},{
	src:'images/s_4.3.jpg',
	title:'君有戏言',
	i:'',
	p:'辣目洋子：被叫本名很惶恐'
},{
	src:'images/s_4.4.gif',
	title:'康熙来了',
	i:'<img src="images/only.png" alt="">',
	p:'小S超努力欲上赵薇的戏'
},{
	src:'images/s_4.5.jpg',
	title:'UP！新力量',
	i:'',
	p:'张雪迎回忆拍摄《狗十三》'
},{
	src:'images/s_4.6.jpg',
	title:'毒叔会客厅',
	i:'<img src="images/only.png" alt="">',
	p:'汪海林分不清肖战王一博'
}];
/*奇秀内容数据*/
var list23=[{
	src:'images/s_26.1.jpg',
	title:'雪糕是我～'
},{
	src:'images/s_26.2.jpg',
	title:'兜仙中奖率最高直播间'
},{
	src:'images/s_26.3.jpg',
	title:'有了娃娃更萌了的萌萌'
},{
	src:'images/s_26.4.jpg',
	title:'【菜帮】唐三菜 10'
},{
	src:'images/s_26.5.jpg',
	title:'晓墨 ♥ 有你真好㏄'
},{
	src:'images/s_26.6.jpg',
	title:'霸兔♡感谢家人陪伴'
}];