/*
* @Author: ZMT
* @Date:   2020-01-06 16:33:39
* @Last Modified by:   ZMT
* @Last Modified time: 2020-01-13 17:30:09
*/

'use strict';
var num1=0;
/*动态追加今日焦点的内容*/
for(var i=0;i<list1.length;i++){
	var tag1=$('.sec_1_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_1_con ul').html('');
	tag1.children('.top').children('a').children('img').attr('src',list1[i].src);
	tag1.children('.top').children('a').children('img').attr('alt',list1[i].p);
	tag1.children('.top').children('span').html(list1[i].span);
	tag1.children('.bottom').children('a').attr('title',list1[i].p);
	tag1.children('.bottom').children('a').children('p').html(list1[i].p);
	$('.sec_1_con ul').append(tag1);
};
/*今日焦点增加*/
var num3=1;
$('.sec_1_header .right .one').click(function(){
	if(num3==1) return;
	if(num3==2){
		$('.sec_1_con .left').hide();
		$('.sec_1_header .right .one').css({'background-position':'-230px 0','cursor':'default'});
	};
	$('.sec_1_con .right').show();
	num3--;
	$('.sec_1_header .right .two').css('background-position','-120px 0');
	$('.sec_1_header .right span').html(num3);
	$('.sec_1_con ul').css('left',-1285*+(num3-1)+'px');
});
$('.sec_1_header .right .two').click(function(){
	if(num3==4) return;
	if(num3==3){
		$('.sec_1_con .right').hide();
		$('.sec_1_header .right .two').css({'background-position':'-240px 0','cursor':'default'});
	};
	$('.sec_1_con .left').show();
	num3++;
	$('.sec_1_header .right .one').css('background-position','-110px 0');
	$('.sec_1_header .right span').html(num3);
	$('.sec_1_con ul').css('left',-1285*+(num3-1)+'px');
});
$('.sec_1_header .right .one').mouseenter(function(event) {
	if(num3==1){
		$(this).css({'cursor':'default'});
		return;
	}
	$(this).css({'background-position':'-130px 0','cursor':'pointer'});
});
$('.sec_1_header .right .one').mouseleave(function(event) {
	if(num3==1) return;
	$(this).css({'background-position':'-230px 0'});
});
$('.sec_1_header .right .two').mouseenter(function(event) {
	if(num3==4){
		$(this).css({'cursor':'default'});
		return;
	}
	$(this).css({'background-position':'-140px 0','cursor':'pointer'});
});
$('.sec_1_header .right .two').mouseleave(function(event) {
	if(num3==4) return;
	$(this).css({'background-position':'-120px 0'});
});	
$('.sec_1_con .left').click(function(event) {
	if(num3==1) return;
	if(num3==2){
		$('.sec_1_header .right .one').css({'background-position':'-230px 0','cursor':'default'});
		$('.sec_1_con .left').hide();
	};
	$('.sec_1_con .right').show();
	num3--;
	$('.sec_1_header .right .two').css('background-position','-120px 0');
	$('.sec_1_header .right span').html(num3);
	$('.sec_1_con ul').css('left',-1285*+(num3-1)+'px');
});
$('.sec_1_con .right').click(function(){
	if(num3==4) return;
	if(num3==3){
		$('.sec_1_header .right .two').css({'background-position':'-240px 0','cursor':'default'});
		$('.sec_1_con .right').hide();
	};
	$('.sec_1_con .left').show();
	num3++;
	$('.sec_1_header .right .one').css('background-position','-110px 0');
	$('.sec_1_header .right span').html(num3);
	$('.sec_1_con ul').css('left',-1285*+(num3-1)+'px');
});
/*综艺轮播图*/
var timer2;
function banner2(){
	timer2=setInterval(function(){
		num1++;
		if(num1==2) num1=0;
		$('.sec_2_con .left ul').css('left',-425*+num1+'px');
	},9000);
}
banner2();
$('.sec_2_con .left li').mouseenter(function(event) {
	clearInterval(timer2);
});
$('.sec_2_con .left li').mouseleave(function(event) {
	banner2();
});
$('.sec_2_con .left span').mouseenter(function(event) {
	clearInterval(timer2);
});
$('.sec_2_con .left span').mouseleave(function(event) {
	banner2();
});
$('.sec_2_con .left .bleft').click(function(){
	num1--;
	if(num1==-1) num1=1;
	$('.sec_2_con .left ul').css('left',-425*+num1+'px');
});
$('.sec_2_con .left .bright').click(function(){
	num1--;
	if(num1==-1) num1=1;
	$('.sec_2_con .left ul').css('left',-425*+num1+'px');
});
/*娱乐轮播图*/
var timer3;
var num4=0;
function banner3(){
	timer3=setInterval(function(){
		num4++;
		if(num4==2) num4=0;
		$('.sec_6_con .left ul').css('left',-425*+num4+'px');
	},9000);
}
banner3();
$('.sec_6_con .left li').mouseenter(function(event) {
	clearInterval(timer3);
});
$('.sec_6_con .left li').mouseleave(function(event) {
	banner3();
});
$('.sec_6_con .left span').mouseenter(function(event) {
	clearInterval(timer3);
});
$('.sec_6_con .left span').mouseleave(function(event) {
	banner3();
});
$('.sec_6_con .left .bleft').click(function(){
	num4--;
	if(num4==-1) num4=1;
	$('.sec_6_con .left ul').css('left',-425*+num4+'px');
});
$('.sec_6_con .left .bright').click(function(){
	num4--;
	if(num4==-1) num4=1;
	$('.sec_6_con .left ul').css('left',-425*+num4+'px');
});
/*动漫轮播图*/
var timer5;
var num7=0;
function banner4(){
	timer5=setInterval(function(){
		num7++;
		if(num7==2) num7=0;
		$('.sec_13_con .left ul').css('left',-425*+num7+'px');
	},9000);
}
banner4();
$('.sec_13_con .left li').mouseenter(function(event) {
	clearInterval(timer5);
});
$('.sec_13_con .left li').mouseleave(function(event) {
	banner4();
});
$('.sec_13_con .left span').mouseenter(function(event) {
	clearInterval(timer5);
});
$('.sec_13_con .left span').mouseleave(function(event) {
	banner4();
});
$('.sec_13_con .left .bleft').click(function(){
	num7--;
	if(num7==-1) num7=1;
	$('.sec_13_con .left ul').css('left',-425*+num7+'px');
});
$('.sec_13_con .left .bright').click(function(){
	num7--;
	if(num7==-1) num7=1;
	$('.sec_13_con .left ul').css('left',-425*+num7+'px');
});
/*儿童轮播图*/
var timer6;
var num8=0;
function banner5(){
	timer6=setInterval(function(){
		num8++;
		if(num8==2) num8=0;
		$('.sec_14_con .left ul').css('left',-425*+num8+'px');
	},9000);
}
banner5();
$('.sec_14_con .left li').mouseenter(function(event) {
	clearInterval(timer6);
});
$('.sec_14_con .left li').mouseleave(function(event) {
	banner5();
});
$('.sec_14_con .left span').mouseenter(function(event) {
	clearInterval(timer6);
});
$('.sec_14_con .left span').mouseleave(function(event) {
	banner5();
});
$('.sec_14_con .left .bleft').click(function(){
	num8--;
	if(num8==-1) num8=1;
	$('.sec_14_con .left ul').css('left',-425*+num8+'px');
});
$('.sec_14_con .left .bright').click(function(){
	num8--;
	if(num8==-1) num8=1;
	$('.sec_14_con .left ul').css('left',-425*+num8+'px');
});
/*正在直播轮播图*/
var timer7;
var num9=0;
function banner6(){
	timer7=setInterval(function(){
		num9++;
		if(num9==2) num9=0;
		$('.sec_16_con .left ul').css('left',-425*+num9+'px');
	},9000);
}
banner6();
$('.sec_16_con .left li').mouseenter(function(event) {
	clearInterval(timer7);
});
$('.sec_16_con .left li').mouseleave(function(event) {
	banner6();
});
$('.sec_16_con .left span').mouseenter(function(event) {
	clearInterval(timer7);
});
$('.sec_16_con .left span').mouseleave(function(event) {
	banner6();
});
$('.sec_16_con .left .bleft').click(function(){
	num9--;
	if(num9==-1) num9=1;
	$('.sec_16_con .left ul').css('left',-425*+num9+'px');
});
$('.sec_16_con .left .bright').click(function(){
	num9--;
	if(num9==-1) num9=1;
	$('.sec_16_con .left ul').css('left',-425*+num9+'px');
});
/*动态追加综艺的内容*/
for(var i=0;i<list2.length;i++){
	var tag2=$('.sec_2_con .middle ul li').eq(0).clone(true);
	if(i==0) $('.sec_2_con .middle ul').html('');
	tag2.children('.top').children('a').children('img').attr('src',list2[i].src);
	tag2.children('.top').children('a').children('img').attr('alt',list2[i].title);
	tag2.children('.top').children('span').html(list2[i].span);
	tag2.children('.bottom').children('.one').children('a').attr('title',list2[i].title);
	tag2.children('.bottom').children('.one').children('a').html(list2[i].title);
	tag2.children('.bottom').children('.two').children('a').attr('title',list2[i].p);
	tag2.children('.bottom').children('.two').children('a').html(list2[i].p);
	$('.sec_2_con .middle ul').append(tag2);
};
/*综艺动画效果*/
var timer4;
$('.sec_2_con .middle ul>li').mouseenter(function(event) {
	var this1=this;
	timer4=setTimeout(function(){
		$(this1).children('.m_big').show();
	},500)
});
$('.sec_2_con .middle ul>li').mouseleave(function(event) {
	$(this).children('.m_big').hide();
	clearTimeout(timer4);
});


/*动态追加自制综艺的内容*/
for(var i=0;i<list3.length;i++){
	var tag3=$('.sec_3_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_3_con ul').html('');
	tag3.children('.top').children('a').children('img').attr('src',list3[i].src);
	tag3.children('.top').children('a').children('img').attr('alt',list3[i].title);
	tag3.children('.bottom').children('a').attr('title',list3[i].title);
	tag3.children('.bottom').children('a').children('p').html(list3[i].p);
	$('.sec_3_con ul').append(tag3);
};
/*动态追加脱口秀的内容*/
for(var i=0;i<list4.length;i++){
	var tag4=$('.sec_4_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_4_con ul').html('');
	tag4.children('.top').children('a').children('img').attr('src',list4[i].src);
	tag4.children('.top').children('a').children('img').attr('alt',list4[i].title);
	tag4.children('.top').children('i').html(list4[i].i);
	tag4.children('.bottom').children('p').children('a').attr('title',list4[i].title);
	tag4.children('.bottom').children('p').children('a').html(list4[i].title);
	tag4.children('.bottom').children('.two').html(list4[i].p);
	tag4.children('.bottom').children('.two').attr('title',list4[i].p);
	$('.sec_4_con ul').append(tag4);
};
/*动态追加娱乐的内容*/
for(var i=0;i<list5.length;i++){
	var tag5=$('.sec_6_con .right ul li').eq(0).clone(true);
	if(i==0) $('.sec_6_con .right ul').html('');
	tag5.children('.top').children('a').children('img').attr('src',list5[i].src);
	tag5.children('.top').children('a').children('img').attr('alt',list5[i].p);
	tag5.children('.top').children('a').children('span').html(list5[i].date1);
	tag5.children('.bottom').children('p').children('a').attr('title',list5[i].p);
	tag5.children('.bottom').children('p').children('a').html(list5[i].p);
	$('.sec_6_con ul').append(tag5);
}
/*动态追加爱奇艺号的内容*/
for(var i=0;i<list6.length;i++){
	var tag6=$('.sec_7_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_7_con ul').html('');
	tag6.children('.top').children('a').children('img').attr('src',list6[i].src);
	tag6.children('.top').children('a').children('img').attr('alt',list6[i].title);
	tag6.children('.top').children('span').html(list6[i].date2);
	tag6.children('.bottom').children('p').children('a').attr('title',list6[i].title);
	tag6.children('.bottom').children('p').children('a').html(list6[i].title);
	tag6.children('.bottom').children('.two').html(list6[i].p);
	tag6.children('.bottom').children('.two').attr('title',list6[i].p1);
	$('.sec_7_con ul').append(tag6);
};
/*爱奇艺号引入鼠标出现关注*/
$('.sec_7_con li').mouseenter(function(event) {
	$(this).children('.bottom').children('.three').show();
});
$('.sec_7_con li').mouseleave(function(event) {
	$(this).children('.bottom').children('.three').hide();
});
/*动态追加电影的内容*/
for(var i=0;i<list7.length;i++){
	var tag7=$('.sec_9_cleft ul li').eq(0).clone(true);
	if(i==0) $('.sec_9_cleft ul').html('');
	tag7.children('.top').children('a').children('img').attr('src',list7[i].src);
	tag7.children('.top').children('a').children('img').attr('alt',list7[i].title);
	tag7.children('.top').children('span').html(list7[i].spansrc);
	tag7.children('.bottom').children('p').children('a').attr('title',list7[i].title);
	tag7.children('.bottom').children('p').children('a').html(list7[i].title);
	tag7.children('.bottom').children('.two').html(list7[i].p);
	tag7.children('.bottom').children('.two').attr('title',list7[i].p);
	tag7.children('.bottom').children('span').html(list7[i].score);
	$('.sec_9_cleft ul').append(tag7);
};
/*动态追加网络电影的内容*/
for(var i=0;i<list8.length;i++){
	var tag8=$('.sec_10_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_10_con ul').html('');
	tag8.children('.top').children('a').children('img').attr('src',list8[i].src);
	tag8.children('.top').children('a').children('img').attr('alt',list8[i].title);
	tag8.children('.top').children('i').html(list8[i].i);
	tag8.children('.bottom').children('p').children('a').attr('title',list8[i].title);
	tag8.children('.bottom').children('p').children('a').html(list8[i].title);
	tag8.children('.bottom').children('.two').html(list8[i].p);
	tag8.children('.bottom').children('.two').attr('title',list8[i].p);
	$('.sec_10_con ul').append(tag8);
};
/*动态追加电视剧的内容*/
for(var i=0;i<list9.length;i++){
	var tag9=$('.sec_11_cleft ul li').eq(0).clone(true);
	if(i==0) $('.sec_11_cleft ul').html('');
	tag9.children('.top').children('a').children('img').attr('src',list9[i].src);
	tag9.children('.top').children('a').children('img').attr('alt',list9[i].title);
	tag9.children('.top').children('span').html(list9[i].spansrc);
	tag9.children('.top').children('i').html(list9[i].i);
	tag9.children('.bottom').children('p').children('a').attr('title',list9[i].title);
	tag9.children('.bottom').children('p').children('a').html(list9[i].title);
	tag9.children('.bottom').children('span').html(list9[i].score);
	$('.sec_11_cleft ul').append(tag9);
};
/*动态追加动漫的内容*/
for(var i=0;i<list10.length;i++){
	var tag10=$('.sec_13_con .right ul li').eq(0).clone(true);
	if(i==0) $('.sec_13_con .right ul').html('');
	tag10.children('.top').children('a').children('img').attr('src',list10[i].src);
	tag10.children('.top').children('a').children('img').attr('alt',list10[i].p);
	tag10.children('.top').children('a').children('span').html(list10[i].date1);
	tag10.children('.bottom').children('p').children('a').attr('title',list10[i].p);
	tag10.children('.bottom').children('p').children('a').html(list10[i].p);
	$('.sec_13_con ul').append(tag10);
}
/*动态追加儿童的内容*/
for(var i=0;i<list11.length;i++){
	var tag11=$('.sec_14_con .right ul li').eq(0).clone(true);
	if(i==0) $('.sec_14_con .right ul').html('');
	tag11.children('.top').children('a').children('img').attr('src',list11[i].src);
	tag11.children('.top').children('a').children('img').attr('alt',list11[i].p);
	tag11.children('.top').children('a').children('span').html(list11[i].date1);
	tag11.children('.bottom').children('p').children('a').attr('title',list11[i].p);
	tag11.children('.bottom').children('p').children('a').html(list11[i].p);
	$('.sec_14_con ul').append(tag11);
}
/*动态追加游戏视频的内容*/
for(var i=0;i<list12.length;i++){
	var tag12=$('.sec_15_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_15_con ul').html('');
	tag12.children('.top').children('a').children('img').attr('src',list12[i].src);
	tag12.children('.top').children('a').children('img').attr('alt',list12[i].title);
	tag12.children('.top').children('span').html(list12[i].date2);
	tag12.children('.bottom').children('p').children('a').attr('title',list12[i].title);
	tag12.children('.bottom').children('p').children('a').html(list12[i].title);
	tag12.children('.bottom').children('.two').html(list12[i].p);
	tag12.children('.bottom').children('.two').attr('title',list12[i].p1);
	$('.sec_15_con ul').append(tag12);
};
/*动态追加正在直播的内容*/
for(var i=0;i<list13.length;i++){
	var tag13=$('.sec_16_con .right ul li').eq(0).clone(true);
	if(i==0) $('.sec_16_con .right ul').html('');
	tag13.children('.top').children('a').children('img').attr('src',list13[i].src);
	tag13.children('.top').children('a').children('img').attr('alt',list13[i].p);
	tag13.children('.top').children('a').children('span').html(list13[i].date1);
	tag13.children('.bottom').children('p').children('a').attr('title',list13[i].p);
	tag13.children('.bottom').children('p').children('a').html(list13[i].p);
	$('.sec_16_con ul').append(tag13);
}
/*动态追加体育的内容*/
for(var i=0;i<list14.length;i++){
	var tag14=$('.sec_17_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_17_con ul').html('');
	tag14.children('.top').children('a').children('img').attr('src',list14[i].src);
	tag14.children('.top').children('a').children('img').attr('alt',list14[i].title);
	tag14.children('.top').children('span').html(list14[i].date2);
	tag14.children('.bottom').children('p').children('a').attr('title',list14[i].title);
	tag14.children('.bottom').children('p').children('a').html(list14[i].title);
	tag14.children('.bottom').children('.two').html(list14[i].p);
	tag14.children('.bottom').children('.two').attr('title',list14[i].p1);
	$('.sec_17_con ul').append(tag14);
};
/*动态追加原创的内容*/
for(var i=0;i<list15.length;i++){
	var tag15=$('.sec_18_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_18_con ul').html('');
	tag15.children('.top').children('a').children('img').attr('src',list15[i].src);
	tag15.children('.top').children('a').children('img').attr('alt',list15[i].title);
	tag15.children('.top').children('span').html(list15[i].date2);
	tag15.children('.bottom').children('p').children('a').attr('title',list15[i].title);
	tag15.children('.bottom').children('p').children('a').html(list15[i].title);
	tag15.children('.bottom').children('.two').html(list15[i].p);
	tag15.children('.bottom').children('.two').attr('title',list15[i].p1);
	$('.sec_18_con ul').append(tag15);
};
/*动态追加纪录片的内容*/
for(var i=0;i<list16.length;i++){
	var tag16=$('.sec_19_cleft ul li').eq(0).clone(true);
	if(i==0) $('.sec_19_cleft ul').html('');
	tag16.children('.top').children('a').children('img').attr('src',list16[i].src);
	tag16.children('.top').children('a').children('img').attr('alt',list16[i].title);
	tag16.children('.top').children('span').html(list16[i].spansrc);
	tag16.children('.bottom').children('p').children('a').attr('title',list16[i].title);
	tag16.children('.bottom').children('p').children('a').html(list16[i].title);
	tag16.children('.bottom').children('.two').html(list16[i].p);
	tag16.children('.bottom').children('.two').attr('title',list16[i].p);
	tag16.children('.bottom').children('span').html(list16[i].score);
	$('.sec_19_cleft ul').append(tag16);
};
/*动态追加教育母婴的内容*/
for(var i=0;i<list17.length;i++){
	var tag17=$('.sec_20_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_20_con ul').html('');
	tag17.children('.top').children('a').children('img').attr('src',list17[i].src);
	tag17.children('.top').children('a').children('img').attr('alt',list17[i].title);
	tag17.children('.top').children('i').html(list17[i].i);
	tag17.children('.bottom').children('p').children('a').attr('title',list17[i].title);
	tag17.children('.bottom').children('p').children('a').html(list17[i].title);
	tag17.children('.bottom').children('.two').html(list17[i].p);
	tag17.children('.bottom').children('.two').attr('title',list17[i].p);
	$('.sec_20_con ul').append(tag17);
};
/*动态追加音乐时尚的内容*/
for(var i=0;i<list18.length;i++){
	var tag18=$('.sec_21_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_21_con ul').html('');
	tag18.children('.top').children('a').children('img').attr('src',list18[i].src);
	tag18.children('.top').children('a').children('img').attr('alt',list18[i].title);
	tag18.children('.top').children('i').html(list18[i].i);
	tag18.children('.bottom').children('p').children('a').attr('title',list18[i].title);
	tag18.children('.bottom').children('p').children('a').html(list18[i].title);
	tag18.children('.bottom').children('.two').html(list18[i].p);
	tag18.children('.bottom').children('.two').attr('title',list18[i].p);
	$('.sec_21_con ul').append(tag18);
};
/*动态追加汽车科技的内容*/
for(var i=0;i<list19.length;i++){
	var tag19=$('.sec_22_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_22_con ul').html('');
	tag19.children('.top').children('a').children('img').attr('src',list19[i].src);
	tag19.children('.top').children('a').children('img').attr('alt',list19[i].title);
	tag19.children('.top').children('i').html(list19[i].i);
	tag19.children('.bottom').children('p').children('a').attr('title',list19[i].title);
	tag19.children('.bottom').children('p').children('a').html(list19[i].title);
	tag19.children('.bottom').children('.two').html(list19[i].p);
	tag19.children('.bottom').children('.two').attr('title',list19[i].p);
	$('.sec_22_con ul').append(tag19);
};
/*动态追加旅游健康的内容*/
for(var i=0;i<list20.length;i++){
	var tag20=$('.sec_23_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_23_con ul').html('');
	tag20.children('.top').children('a').children('img').attr('src',list20[i].src);
	tag20.children('.top').children('a').children('img').attr('alt',list20[i].title);
	tag20.children('.top').children('i').html(list20[i].i);
	tag20.children('.bottom').children('p').children('a').attr('title',list20[i].title);
	tag20.children('.bottom').children('p').children('a').html(list20[i].title);
	tag20.children('.bottom').children('.two').html(list20[i].p);
	tag20.children('.bottom').children('.two').attr('title',list20[i].p);
	$('.sec_23_con ul').append(tag20);
};
/*动态追加搞笑生活的内容*/
for(var i=0;i<list21.length;i++){
	var tag21=$('.sec_24_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_24_con ul').html('');
	tag21.children('.top').children('a').children('img').attr('src',list21[i].src);
	tag21.children('.top').children('a').children('img').attr('alt',list21[i].title);
	tag21.children('.top').children('i').html(list21[i].i);
	tag21.children('.bottom').children('p').children('a').attr('title',list21[i].title);
	tag21.children('.bottom').children('p').children('a').html(list21[i].title);
	tag21.children('.bottom').children('.two').html(list21[i].p);
	tag21.children('.bottom').children('.two').attr('title',list21[i].p);
	$('.sec_24_con ul').append(tag21);
};
/*动态追加军事财经的内容*/
for(var i=0;i<list22.length;i++){
	var tag22=$('.sec_25_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_25_con ul').html('');
	tag22.children('.top').children('a').children('img').attr('src',list22[i].src);
	tag22.children('.top').children('a').children('img').attr('alt',list22[i].title);
	tag22.children('.top').children('i').html(list22[i].i);
	tag22.children('.bottom').children('p').children('a').attr('title',list22[i].title);
	tag22.children('.bottom').children('p').children('a').html(list22[i].title);
	tag22.children('.bottom').children('.two').html(list22[i].p);
	tag22.children('.bottom').children('.two').attr('title',list22[i].p);
	$('.sec_25_con ul').append(tag22);
};
/*动态追加奇秀的内容*/
for(var i=0;i<list23.length;i++){
	var tag23=$('.sec_26_con ul li').eq(0).clone(true);
	if(i==0) $('.sec_26_con ul').html('');
	tag23.children('.top').children('a').children('img').attr('src',list23[i].src);
	tag23.children('.top').children('a').children('img').attr('alt',list23[i].title);
	tag23.children('.bottom').children('p').children('a').attr('title',list23[i].title);
	tag23.children('.bottom').children('p').children('a').html(list23[i].title);
	$('.sec_26_con ul').append(tag23);
};
/*头部轮播图*/
$('.m_top .t_ul li').eq(0).show();
$('.m_top_center li').eq(0).css({'height': '74px','background':'rgba(0,0,0,0.3)'});
$('.m_top_center li').eq(0).children('').children('.one').css({'display':'block','color':'#00be06','font-size':'24px','line-height':'26px','margin-bottom':'10px','padding-top':'10px'});
$('.m_top_center li').eq(0).children('').children('.three').css({'display':'block','color':'#00be06','line-height':'18px'});
$('.m_top_center li').eq(0).children('').children('.two').hide();
var num2=0;
var index1;
var timer1;
function banner1(){
	var list3=$('.m_top_center li');
	timer1=setInterval(function(){
		num2++;
		if(num2==9) num2=0;
		$('.m_top .t_ul li').eq(num2).show();
		$('.m_top .t_ul li').eq(num2).siblings('').hide();
		$(list3[num2]).css({'height': '74px','background':'rgba(0,0,0,0.3)'});
		$(list3[num2]).siblings('').css({'height': '41.5px','background':'rgba(0,0,0,0.0)'});
		$(list3[num2]).children('').children('.two').hide();
		$(list3[num2]).siblings('').children('').children('.two').show();
		$(list3[num2]).children('').children('.one').css({'display':'block','color':'#00be06','font-size':'24px','line-height':'26px','margin-bottom':'10px','padding-top':'10px'});
		$(list3[num2]).children('').children('.three').css({'display':'block','color':'#00be06','line-height':'18px'});
		$(list3[num2]).siblings('').children('').children('.one').css({'display':'inline','color':'#ddd','font-size':'16px'});
		$(list3[num2]).siblings('').children('').children('.three').css({'display':'inline','color':'#ddd'});
	},7000)
};
banner1();
$('.m_top_center li').mouseenter(function(event) {
	index1=$(this).index();
	$('.m_top .t_ul li').eq(index1).show();
	$('.m_top .t_ul li').eq(index1).siblings('').hide();
	$(this).css({'height': '74px','background':'rgba(0,0,0,0.3)'});
	$(this).siblings('').css({'height': '41.5px','background':'rgba(0,0,0,0.0)'});
	$(this).children('').children('.two').hide();
	$(this).siblings('').children('').children('.two').show();
	$(this).children('').children('.one').css({'display':'block','color':'#00be06','font-size':'24px','line-height':'26px','margin-bottom':'10px','padding-top':'10px'});
	$(this).children('').children('.three').css({'display':'block','color':'#00be06','line-height':'18px'});
	$(this).siblings('').children('').children('.one').css({'display':'inline','color':'#ddd','font-size':'16px'});
	$(this).siblings('').children('').children('.three').css({'display':'inline','color':'#ddd'});
	clearInterval(timer1);
});
$('.m_top_center li').mouseleave(function(event) {
	num2=index1;
	banner1();
});
/*头部栏鼠标移入*/
$('.h_center .right .one').mouseenter(function(event) {
	$(this).children('.wrap1').slideDown(10);
});
$('.h_center .right .one').mouseleave(function(event) {
	$(this).children('.wrap1').hide();
});
$('.h_center .right .two').mouseenter(function(event) {
	$(this).children('.wrap2').slideDown(10);
});
$('.h_center .right .two').mouseleave(function(event) {
	$(this).children('.wrap2').hide();
});
$('.h_center .right .three').mouseenter(function(event) {
	$(this).children('.wrap3').slideDown(10);
});
$('.h_center .right .three').mouseleave(function(event) {
	$(this).children('.wrap3').hide();
});
$('.h_center .right .four').mouseenter(function(event) {
	$(this).children('.wrap4').slideDown(10);
});
$('.h_center .right .four').mouseleave(function(event) {
	$(this).children('.wrap4').hide();
});
var index2;
var div1=$('.h_center .wrap4 .bottom>div');
$('.h_center .wrap4 li').eq(0).children('span').show();
$('.h_center .wrap4 li').eq(0).children('span').css('display','block');
$('.h_center .wrap4 li').eq(0).children('a').css('color','#00be06');
$('.h_center .wrap4 .bottom>div').eq(0).show();
$('.h_center .wrap4 li').mouseenter(function(event) {
	index2=$(this).index();
	$(div1[index2]).show();
	$(div1[index2]).siblings('div').hide();
	$(this).children('a').css('color','#00be06');
	$(this).siblings('li').children('a').css('color','#222');
	$(this).children('span').show();
	$(this).children('span').css('display','block');
	$(this).siblings('li').children('span').hide();
});
$('.h_center .wrap4').mouseenter(function(event) {
	$('.h_center .icon-xiaoxi').css('color','#00be06');
	$('.h_center .four').children('a').css('color','#00be06');
});
$('.h_center .wrap4').mouseleave(function(event) {
	$('.h_center .icon-xiaoxi').css('color','#999');
	$('.h_center .four').children('a').css('color','#999');
});
$('.h_center .four').mouseenter(function(event) {
	$(this).children('a').css('color','#00be06');
	$('.h_center .icon-xiaoxi').css('color','#00be06');
});
$('.h_center .four').mouseleave(function(event) {
	$(this).children('a').css('color','#999');
	$('.h_center .icon-xiaoxi').css('color','#999');
});
var flag1=true;
$('.h_center .wrap5 .one').click(function(event) {
	if(flag1){
		$('.h_center .wrap5 i').css('background-position','-30px -120px');
		$('.h_center .wrap5 .two').show();
		$('.h_center .wrap5 .three').hide();
		flag1=false;
	}else{
		$('.h_center .wrap5 i').css('background-position','-60px -120px');
		$('.h_center .wrap5 .two').hide();
		$('.h_center .wrap5 .three').show();
		flag1=true;
	}
});
$('.h_center .right .five').mouseenter(function(event) {
	$(this).children('.wrap5').slideDown(10);
});
$('.h_center .right .five').mouseleave(function(event) {
	$(this).children('.wrap5').hide();
});
$('.h_center .right .six').mouseenter(function(event) {
	$(this).children('.wrap6').slideDown(10);
});
$('.h_center .right .six').mouseleave(function(event) {
	$(this).children('.wrap6').hide();
});
/*右下固定栏*/
$('.fixed .two').mouseenter(function(event) {
	$(this).children('.hover2').slideDown(10);
});
$('.fixed .two').mouseleave(function(event) {
	$(this).children('.hover2').hide();
});
$('.fixed .three').mouseenter(function(event) {
	$(this).children('').children('span').show();
});
$('.fixed .three').mouseleave(function(event) {
	$(this).children('').children('span').hide();
});
$('.fixed .four').mouseenter(function(event) {
	$(this).children('').children('span').show();
});
$('.fixed .four').mouseleave(function(event) {
	$(this).children('').children('span').hide();
});
/*返回顶部*/
$('.fixed .four').click(function(event) {
	$('html,body').animate({'scrollTop':'0px'},500);
});

/*滚动条滚动*/
var flag2=false;
$(window).scroll(function(event) {
	if($(window).scrollTop()>250){
		$('.fixed .four').slideDown(100);
		$('.fixed .hover2').css('top','19px');
		$('.fixed .triangle2_1').css('top','110px');
		$('.fixed .triangle2_2').css('top','110.5px');
	};
	if($(window).scrollTop()<=250){
		$('.fixed .four').hide();
		$('.fixed .hover2').css('top','-20px');
		$('.fixed .triangle2_1').css('top','149px');
		$('.fixed .triangle2_2').css('top','149.5px');
	};
	if($(window).scrollTop()>=584){
		if(flag2) return;
		$('header').css({'position':'fixed','left':'0px','top':'0px'});
		setTimeout(function(){
			$('header').fadeIn(1000);
			flag2=true;
		},10);
	};
	if($(window).scrollTop()>584){
		if(flag2) return;
		$('header').hide();
	};
	if($(window).scrollTop()<584){
		$('header').css('position','absolute');
		flag2=false;
	};
});
/*登录*/
$('.login_herder span').click(function(event) {
	$('.login').hide();
	$('.drak').hide();
});
$('.h_center .six .top').click(function(event) {
	$('.login').show();
	$('.drak').show();
});
$('.h_center .wrap6 .login5').click(function(event) {
	$('.login').show();
	$('.drak').show();
});
$('.login_footer .one').click(function(event) {
	$('.login').hide();
	$('.register').show();
});
/*注册*/
$('.register_herder span').click(function(event) {
	$('.register').hide();
	$('.drak').hide();
});
$('.h_center .wrap6 .register5').click(function(event) {
	$('.register').show();
	$('.drak').show();
});
$('.register_main .middle input').focus(function(event) {
	$('.register_main .m_one p').show();
	$('.register_main .middle').css('border-bottom','1px solid #222');
	$(this).attr('placeholder','');
});
$('.register_main .middle input').blur(function(event) {
	if($('.register_main .middle input').val()==''){
		$('.register_main .m_one p').hide();
		$('.register_main .middle').css('border-bottom','1px solid #ddd');
		$(this).attr('placeholder','请输入手机号');
		$('.register_main .next').css({'background-color':'#bcdd98','cursor':'no-drop'});
		$('.register_main .next a').css('cursor','no-drop');
	};
});
var reg1=/^[1-9]+[0-9]*]*$/;
$('.register_main .middle input').keyup(function(event) {
	if($('.register_main .middle input').val()==''){
		$('.register_main .m_one p').css('color','#aaa');
		$('.register_main .m_one p').html('请输入手机登录');
		$('.register_main .m_one p').show();
		$('.register_main .next').css({'background-color':'#bcdd98','cursor':'no-drop'});
		$('.register_main .next a').css('cursor','no-drop');
	}else if(!reg1.test($('.register_main .middle input').val())){
		$('.register_main .m_one p').html('手机号格式错误,请重新输入');
		$('.register_main .m_one p').css('color','red');
		$('.register_main .m_one p').show();
		$('.register_main .next').css({'background-color':'#bcdd98','cursor':'no-drop'});
		$('.register_main .next a').css('cursor','no-drop');
	}else{
		$('.register_main .m_one p').css('color','#aaa');
		$('.register_main .m_one p').html('请输入手机登录');
		$('.register_main .m_one p').show();
		$('.register_main .next').css({'background-color':'#5aa700','cursor':'pointer'});
		$('.register_main .next a').css('cursor','pointer');
	};
	if($('.register_main .middle input').val().length>11){
		$('.register_main .m_one p').html('手机号格式错误,请重新输入');
		$('.register_main .m_one p').css('color','red');
		$('.register_main .m_one p').show();
		$('.register_main .next').css({'background-color':'#bcdd98','cursor':'no-drop'});
		$('.register_main .next a').css('cursor','no-drop');
	};
});
$('.register_footer .four').click(function(event) {
	$('.login').show();
	$('.register').hide();
});
/*爱奇艺号下的推广广告8左右点击事件*/
var num5=0;
$('.sec_8 .left').click(function(event) {
	num5--;
	if(num5==-1) num5=2;
	$('.sec_8 ul').css('left',-1075*+num5+'px');
});
$('.sec_8 .right').click(function(event) {
	num5++;
	if(num5==3) num5=0;
	$('.sec_8 ul').css('left',-1075*+num5+'px');
});
/*电视剧下的推广广告12左右点击事件*/
var num6=0;
$('.sec_12 .left').click(function(event) {
	num6--;
	if(num6==-1) num6=2;
	$('.sec_12 ul').css('left',-1075*+num6+'px');
});
$('.sec_12 .right').click(function(event) {
	num6++;
	if(num6==3) num6=0;
	$('.sec_12 ul').css('left',-1075*+num6+'px');
});
/*奇秀鼠标移入*/
$('.sec_27 li').mouseenter(function(event) {
	$(this).css({'transform':'scale(1.05)','background-color':'#fff','box-shadow':'0 0 2px 0 rgba(2,2,2,0.2)'});
	$(this).siblings('').css({'transform':'scale(1)','background-color':'#f8f8f8','box-shadow':''});
});
$('.sec_27 li').mouseleave(function(event) {
	$(this).css({'transform':'scale(1)','background-color':'#f8f8f8','box-shadow':''});
});