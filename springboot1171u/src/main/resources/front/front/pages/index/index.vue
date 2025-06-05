<template>
<view class="content">
	<view :style='{"width":"100%","padding":"0 0 0px","background":"#f6f6f6","height":"auto"}'>
		<swiper :style='{"width":"100%","padding":"20rpx 0 20rpx ","background":"none","height":"400rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","position":"relative","borderRadius":"24rpx","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 40rpx)","margin":"0 auto","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"60rpx 0 60rpx","margin":"20rpx 0 0","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right center / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,url(http://codegen.caihongy.cn/20221219/4d6a4e63542545c29d09fa1fffe85408.png) no-repeat center bottom,#069ffa","display":"flex","width":"100%","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"width":"25%","padding":"12rpx 0","margin":"10rpx 0","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","margin":"0px auto","color":"#eee","borderRadius":"100%","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"64rpx","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		
		<!-- 新闻资讯 -->
		<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"#f6f6f6","display":"flex","width":"100%","justifyContent":"space-between"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#333","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","lineHeight":"80rpx","height":"80rpx"}'>医疗公告</view>
				<text :style='{"padding":"0 40rpx","margin":"-16rpx 0px 0 0","fontSize":"28rpx","lineHeight":"80rpx","color":"#666","background":"none"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  
			
			
		  <!-- 样式4 -->
		  
		  <!-- 样式5 -->
		  
		  <!-- 样式6 -->
		  
		  <!-- 样式7 -->
		  <view class="news-box4" :style='{"width":"100%","padding":"100rpx 24rpx","margin":"0","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,url(http://codegen.caihongy.cn/20221219/1b095853bf4e4d35a2bb619408c392b3.png) no-repeat center bottom,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","height":"auto"}'>
			<block v-for="(item,index) in news" :key="index">
			  <view @tap="onNewsDetailTap(item.id)" v-if="index%2==0" class="list-item" :style='{"boxShadow":"0 2rpx 0px rgba(0,0,0,.3)","padding":"0 0 24rpx","margin":"0 0 20rpx","flexWrap":"wrap","display":"flex","width":"100%","height":"auto"}'>
				<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
				<view class="list-item-body" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
				  <view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#111","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{item.title}}</view>
				  <view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				  <view :style='{"width":"100%","padding":"0 20rpx","margin":"0","lineHeight":"48rpx","fontSize":"24rpx","color":"#666"}' class="time">{{item.addtime.split(" ")[0]}}</view>
				</view>
			  </view>
			  <view @tap="onNewsDetailTap(item.id)" v-if="index%2==1" class="list-item" :style='{"boxShadow":"0 2rpx 0px rgba(0,0,0,.3)","padding":"0 0 24rpx","margin":"0 0 20rpx","flexWrap":"wrap","display":"flex","width":"100%","height":"auto"}'>
				<view class="list-item-body" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
				  <view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#111","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="title ">{{item.title}}</view>
				  <view :style='{"padding":"0 20rpx","margin":"0","overflow":"hidden","color":"#666","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","textIndent":"2em","height":"96rpx"}' class="desc ">{{item.introduction}}</view>
				  <view :style='{"width":"100%","padding":"0 20rpx","margin":"0","lineHeight":"48rpx","fontSize":"24rpx","color":"#666"}' class="time">{{item.addtime.split(" ")[0]}}</view>
				</view>
				<image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"16rpx","display":"block","height":"200rpx"}' mode="aspectFill" class="listmpic" :src="baseUrl+item.picture"></image>
			  </view>
			</block>
		  </view>
		  
		  <!-- 样式8 -->
		  
		  <!-- 样式9 -->
			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
		<!-- 新闻资讯 -->
		

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		
		<!-- 系统简介 -->
		<view :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"40rpx 20rpx 40rpx 20rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"calc(100% - 40rpx)","height":"auto"}'>
		  <view :style='{"padding":"0 0 48rpx","margin":"0px auto 0","color":"#333","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221219/13d40d7a5e614c75ac6170d341391486.png) no-repeat center bottom","width":"60%","lineHeight":"72rpx","fontSize":"36rpx"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"width":"100%","margin":"8rpx 0 16rpx 0","lineHeight":"1.5","fontSize":"32rpx","color":"#666","textAlign":"center"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"0px","margin":"8rpx 0 0 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		    <img :style='{"padding":"20rpx 20rpx 0","margin":"0px","borderColor":"#069efa","objectFit":"cover","borderRadius":"24rpx 24rpx 0 0","borderWidth":"4rpx 4rpx 0 4rpx","display":"block","width":"260rpx","borderStyle":"solid","height":"260rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"20rpx 20rpx 0","margin":"0px","borderColor":"#069efa","objectFit":"cover","borderRadius":"24rpx 24rpx 0 0","borderWidth":"4rpx 4rpx 0 4rpx","display":"block","width":"calc(100% - 300rpx)","borderStyle":"solid","height":"260rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10rpx","objectFit":"cover","flex":1,"display":"none","height":"160rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"border":"4rpx dotted #f7de91","padding":"20rpx","boxShadow":"0px 4rpx 8rpx rgba(0,0,0,.1)","margin":"0px 0 20rpx 0","borderColor":"#069efa","color":"rgb(102, 102, 102)","textIndent":"2em","borderRadius":"0px 0px 24rpx 24rpx","background":"none","borderWidth":"0px 4rpx 4rpx 4rpx","width":"100%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
						<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"80rpx 0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,#069efa","display":"flex","width":"100%","justifyContent":"space-between"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#111","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","height":"80rpx"}'>医生</view>
				<text :style='{"padding":"0 40rpx","margin":"-16rpx 0px 0 0","fontSize":"28rpx","color":"#eee","background":"none"}' @tap="onPageTap('yisheng')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  
		  		  
		  		  <!-- 样式3 -->
		  <view v-if="3 == 3" class="list-box style3" :style='{"padding":"0px 24rpx 60rpx","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"0px 0px 0px","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/1b095853bf4e4d35a2bb619408c392b3.png) no-repeat center bottom,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","width":"calc(100% - 0px)","height":"auto"}'>
			<view @tap="onDetailTap('yisheng',product.id)" v-for="(product,index) in homeyishenglist" :key="index" class="list-item" :style='{"border":"0px solid #f7de91","padding":"20rpx","boxShadow":"0 8rpx 6rpx rgba(0,0,0,.1),inset 0px 0px 0px 0px #ffef92","margin":"0 0 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"rgba(255,255,255,.8)","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-if="product.touxiang.substring(0,4)=='http'" :src="product.touxiang"></image>
			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.touxiang?baseUrl+product.touxiang.split(',')[0]:''"></image>
			  			  			  			  			  <view class="list-item-body" :style='{"border":"0px dotted #f7de91","padding":"0","margin":"0","overflow":"hidden","borderRadius":"16rpx","background":"none","width":"calc(100% - 224rpx)","position":"relative","height":"192rpx"}'>
				                				                				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"16rpx","background":"none","width":"80%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title">{{product.yishengxingming}}</view>
								                				                				                				                				                				                				                				                				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"16rpx","background":"none","width":"80%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title">{{product.suoshuyiyuan}}</view>
																																																																																															  </view>
			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																												<view class="listBox list">
			<view v-if="false && 1 == 1" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		  
			<view class="title" :style='{"padding":"80rpx 0 20rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.1)","margin":"0","background":"url(http://codegen.caihongy.cn/20221219/53c3a93f62624145a4483eea1ef21d2d.png) no-repeat center top,#069efa","display":"flex","width":"100%","justifyContent":"space-between"}'>
				<view :style='{"padding":"0 48rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","color":"#111","borderRadius":"0 0 0px 0","background":"none","display":"inline-block","width":"auto","fontSize":"32rpx","height":"80rpx"}'>保健知识</view>
				<text :style='{"padding":"0 40rpx","margin":"-16rpx 0px 0 0","fontSize":"28rpx","color":"#eee","background":"none"}' @tap="onPageTap('baojianzhishi')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
		  		  
		  		  
		  		  <!-- 样式3 -->
		  <view v-if="3 == 3" class="list-box style3" :style='{"padding":"0px 24rpx 60rpx","boxShadow":"0 0px 0px rgba(0,0,0,.1)","margin":"0px 0px 0px","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left center / 240rpx,url(http://codegen.caihongy.cn/20221219/1b095853bf4e4d35a2bb619408c392b3.png) no-repeat center bottom,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%)","width":"calc(100% - 0px)","height":"auto"}'>
			<view @tap="onDetailTap('baojianzhishi',product.id)" v-for="(product,index) in homebaojianzhishilist" :key="index" class="list-item" :style='{"border":"0px solid #f7de91","padding":"20rpx","boxShadow":"0 8rpx 6rpx rgba(0,0,0,.1),inset 0px 0px 0px 0px #ffef92","margin":"0 0 40rpx","borderRadius":"24rpx","flexWrap":"wrap","background":"rgba(255,255,255,.8)","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
			  			  			  			  			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-if="product.wenzhangtupian.substring(0,4)=='http'" :src="product.wenzhangtupian"></image>
			  <image :style='{"width":"200rpx","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" v-else :src="product.wenzhangtupian?baseUrl+product.wenzhangtupian.split(',')[0]:''"></image>
			  			  			  			  			  			  			  			  			  			  			  			  			  <view class="list-item-body" :style='{"border":"0px dotted #f7de91","padding":"0","margin":"0","overflow":"hidden","borderRadius":"16rpx","background":"none","width":"calc(100% - 224rpx)","position":"relative","height":"192rpx"}'>
				                				<view :style='{"padding":"0 20rpx","margin":"0","whiteSpace":"nowrap","overflow":"hidden","color":"#333","borderRadius":"16rpx","background":"none","width":"80%","lineHeight":"48rpx","fontSize":"28rpx","textOverflow":"ellipsis"}' class="list-item-title">{{product.biaotimingcheng}}</view>
								                				                				                				                				                				                																																																																			  </view>
			</view>
		  </view>
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
		  		  
			<view v-if="false && 1 == 3" class="idea listIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																										<!-- 商品列表 -->
		
		
		<!-- 关于我们 -->
		<view :style='{"padding":"24rpx 24rpx 60rpx","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"0","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left top / 240rpx,linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"space-between","height":"auto"}'>
		  <view :style='{"padding":"0 0 48rpx","margin":"0 auto","color":"#111","borderRadius":"0","textAlign":"center","background":"url(http://codegen.caihongy.cn/20221219/13d40d7a5e614c75ac6170d341391486.png) no-repeat center bottom","width":"60%","lineHeight":"72rpx","fontSize":"36rpx"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"margin":"0 auto","color":"#666","textAlign":"center","background":"none","display":"none","width":"60%","lineHeight":"80rpx","fontSize":"32rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"32rpx 0 0","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"0 24rpx 24rpx 0","flexWrap":"wrap","background":"none","width":"30%","height":"auto","order":"1"}'>
		    <img :style='{"padding":"16rpx","margin":"0","borderColor":"#069ffa","objectFit":"cover","borderRadius":"0 24rpx 24rpx 0","borderWidth":"4rpx 4rpx 4rpx 0","display":"inline-block","width":"100%","borderStyle":"solid","height":"392rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"border":"0px dotted #f7de91","padding":"0px","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","width":"48%","height":"160rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"padding":"16rpx","boxShadow":"-4rpx 4rpx 8rpx rgba(0,0,0,.1)","margin":"32rpx 0px 0 0","borderColor":"#069ffa","color":"rgb(102, 102, 102)","textIndent":"2em","float":"left","overflow":"hidden","borderRadius":"24rpx 0 0 24rpx","background":"rgba(255,255,255,.6)","borderWidth":"4rpx 0 4rpx 4rpx","width":"70%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"392rpx"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				homeyishenglist: [],
				homebaojianzhishilist: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 医疗公告
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


			res = await this.$api.list('yisheng', {
				page: 1,

				limit: 6
			});
			this.homeyishenglist = res.data.list
			res = await this.$api.list('baojianzhishi', {
				page: 1,
        sort: 'faburiqi',
        order: 'desc',

				limit: 6
			});
			this.homebaojianzhishilist = res.data.list
		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
