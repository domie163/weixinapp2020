<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"0 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221219/e2fba4798c544678b229915b312732b5.png) no-repeat center bottom / 100% auto,#f6f6f6","height":"auto"}'>
		<form :style='{"width":"100%","padding":"100rpx 40rpx","background":"none","display":"block","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">医生工号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yishenggonghao" v-model="ruleForm.yishenggonghao" placeholder="医生工号"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">医生姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yishengxingming" v-model="ruleForm.yishengxingming" placeholder="医生姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yonghuming" v-model="ruleForm.yonghuming" placeholder="用户名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">联系电话</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.lianxidianhua" v-model="ruleForm.lianxidianhua" placeholder="联系电话"></input>
			</view>
			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">反馈时间</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' v-model="ruleForm.fankuishijian" placeholder="反馈时间" @tap="toggleTab('fankuishijian')"></input>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"12rpx 0","margin":"0 0 20rpx 0","borderColor":"#ccc","alignItems":"center","borderRadius":"16rpx","borderWidth":"0 0 0px 0","background":"linear-gradient(180deg, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","display":"flex","width":"100%","borderStyle":"dashed","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">问题描述</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.wentimiaoshu" placeholder="问题描述"></textarea>
			</view>
			
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"space-between","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"border":"0","padding":"0px","margin":"0","color":"#069ffa","borderRadius":"16rpx","background":"radial-gradient(circle, rgba(246,246,246,1) 0%, rgba(103,197,254,1) 80%, rgba(6,159,250,1) 100%),#069ffa","width":"48%","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="fankuishijianConfirm" ref="fankuishijian" themeColor="#333333"></w-picker>
	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				yishenggonghao: '',
				yishengxingming: '',
				yonghuming: '',
				xingming: '',
				lianxidianhua: '',
				wentimiaoshu: '',
				fankuishijian: '',
				shhf: '',
				},
				// 登陆用户信息
				user: {},
                ro:{
                   yishenggonghao : false,
                   yishengxingming : false,
                   yonghuming : false,
                   xingming : false,
                   lianxidianhua : false,
                   wentimiaoshu : false,
                   fankuishijian : false,
                   shhf : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.fankuishijian = this.$utils.getCurDateTime();

			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.yonghuming = this.user.yonghuming
			this.ro.yonghuming = true;
			this.ruleForm.xingming = this.user.xingming
			this.ro.xingming = true;
			this.ruleForm.lianxidianhua = this.user.lianxidianhua
			this.ro.lianxidianhua = true;



			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yonghufankui`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yishenggonghao'){
					this.ruleForm.yishenggonghao = obj[o];
					this.ro.yishenggonghao = true;
					continue;
					}
					if(o=='yishengxingming'){
					this.ruleForm.yishengxingming = obj[o];
					this.ro.yishengxingming = true;
					continue;
					}
					if(o=='yonghuming'){
					this.ruleForm.yonghuming = obj[o];
					this.ro.yonghuming = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='lianxidianhua'){
					this.ruleForm.lianxidianhua = obj[o];
					this.ro.lianxidianhua = true;
					continue;
					}
					if(o=='wentimiaoshu'){
					this.ruleForm.wentimiaoshu = obj[o];
					this.ro.wentimiaoshu = true;
					continue;
					}
					if(o=='fankuishijian'){
					this.ruleForm.fankuishijian = obj[o];
					this.ro.fankuishijian = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数


			// 日长控件选择日期时间
			fankuishijianConfirm(val) {
				console.log(val)
				this.ruleForm.fankuishijian = val.result;
				this.$forceUpdate();
			},



			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

















//跨表计算判断
				var obj;
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yonghufankui`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yonghufankui`, this.ruleForm);
						}else{
							await this.$api.add(`yonghufankui`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yonghufankui`, this.ruleForm);
					}else{
						await this.$api.add(`yonghufankui`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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
