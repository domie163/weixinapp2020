<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"400rpx 80rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat left top / 240rpx,url(http://codegen.caihongy.cn/20221220/8fb6b4f30229439db2e15009b4e57f85.gif) no-repeat right top / 240rpx,url(http://codegen.caihongy.cn/20221219/c3e62f5892524428b7203d1e83151307.png) no-repeat center top / 100% auto,#fff","height":"100%"}'>
			<view :style='{"width":"100%","padding":"24rpx","borderRadius":"8rpx","background":"#fff","display":"block","height":"auto"}'>
				<image :style='{"width":"200rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","objectFit":"cover","display":"none","height":"200rpx"}' src="http://codegen.caihongy.cn/20221114/3aeec87ad33541ebae3d5427ea9016a5.jpg" mode="aspectFill"></image>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0","borderRadius":"8rpx 8rpx 0 0","background":"#fff","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"none","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view v-if="loginType==1" :style='{"width":"100%","margin":"0","borderRadius":"8rpx 8rpx 0 0","background":"#fff","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 24rpx","margin":"0px","borderColor":"#d5d7d8","color":"rgb(0, 0, 0)","borderRadius":"0px","background":"none","borderWidth":"0 0 2rpx 0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"margin":"0 0 48rpx 0","borderColor":"#d5d7d8","borderRadius":"0 0 0px 0px","background":"#fff","borderWidth":"0 0 2rpx 0","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#767676"}'>{{options[index]}}</view>
				</picker>
				<button v-if="loginType==1" class="btn-submit" @tap="onLoginTap" type="primary" :style='{"border":"0","padding":"0px","margin":"0 0 24rpx 0","color":"#fff","borderRadius":"24rpx","background":"url(http://codegen.caihongy.cn/20221219/a612b8d092364fdf92654a5a57d0a4f0.png) no-repeat 80% center / auto 36rpx,linear-gradient(270deg, rgba(6,159,250,1) 0%, rgba(7,43,254,1) 80%, rgba(7,43,254,1) 100%),#072bfe","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}'>登录</button>
				<button v-if="loginType==2" class="btn-submit" @tap="onFaceLoginTap" type="primary" :style='{"border":"0","padding":"0px","margin":"0 0 24rpx 0","color":"#fff","borderRadius":"24rpx","background":"url(http://codegen.caihongy.cn/20221219/a612b8d092364fdf92654a5a57d0a4f0.png) no-repeat 80% center / auto 36rpx,linear-gradient(270deg, rgba(6,159,250,1) 0%, rgba(7,43,254,1) 80%, rgba(7,43,254,1) 100%),#072bfe","width":"100%","lineHeight":"88rpx","fontSize":"32rpx","height":"88rpx"}'>人脸识别登录</button>
				<view class="links" :style='{"width":"100%","margin":"0 0 24rpx 0","flexWrap":"wrap","display":"flex","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('yisheng')" :style='{"color":"#333","padding":"0 8rpx","fontSize":"28rpx"}'>注册医生</view>
					<view class="link-highlight" @tap="onRegisterTap('yonghu')" :style='{"color":"#333","padding":"0 8rpx","fontSize":"28rpx"}'>注册用户</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
                loginType:1,
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                optionsValues: [
					'',
                    'yisheng',
                    'yonghu',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
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
