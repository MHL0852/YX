import { getMessage } from '../utils/intl'

let baseConf = {
	name: '扬翔后台管理系统',
	appName: '扬翔后台管理系统',
	loginTitle: '欢迎登录管理后台',
	prefix: 'antdAdmin',
// 	footerText: '云徙科技 版权所有 © 2018',
	logoText: getMessage('console_title'),
  // sysType:'entCenter',
	needLogin: false,
	iconFontUrl: '//at.alicdn.com/t/font_c4y7asse3q1cq5mi.js',
	baseURL: '',
	crossDomains: [
		'http://www.zuimeitianqi.com',
	],
	//登录cookie超时 ，单位天
	loginTimeout: 1,
	largePageSizeList: ['10', '20', '50', '100', '200', '500'],
	smallPageSizeList: ['10', '20', '50', '100', '200', '500'],
	// 默认路由
	homePath: '/',
	// 登录后是否跳转
	isRedirect: true,
	// 是否需要切换组织
	isSwitchOrg: false,
	//应用id
	applicationId: 4,
	//appid
	appId: 4,
	//商户appid
	sellerAppId: 2,
	//库存appid
	invAppId: 6,
	//是否需要消息通知
	needMsgNotify: false,
	//统一配置auth
	cookie: {
		auth: 'auth_sys',
		user_name: 'user_sys'
	},
	// 默认模拟菜单权限
	defaultAuthMenu: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16"],
	//列表页一些配置
	listConfig: {
		//表格是否添加滚动条td上限
		scrollTd: 5,
		//表格滚动配置
		tableScroll: { x: 1500 },
		//处理表格是否有滚动条
		tableTdLength: e => {
			let scroll = {};
			if (e.length > baseConf.listConfig.scrollTd) {
				scroll = { x: 1200 };
			}
			return scroll;
		},
		//处理表格头部信息
		columns: e => {
			//如果没有滚动条，就删除最后一列的浮动，否则就添加
			if (e.length > baseConf.listConfig.scrollTd) {
				let last = e[e.length - 1];
				if (last.title == '操作') {
					last.fixed = 'right';
					last.width = '170px';
				}
				e[0].width = '40px';
			} else {
				e[e.length - 1].fixed = false;
				e.map((item, i) => {
					i != 0 ? item.width = (97 / (e.length)) + "%" : item.width = '3%';
				});
			}

			return e;
		},
		//搜索框布局
		searchCol: {
			xs: { span: 12 },
			md: { span: 12 },
			lg: { span: 8 },
			xl: { span: 6 }
		},
		searchFormItem: {
			labelCol: { span: 8 },
			wrapperCol: { span: 16 }
		},
	},
	//api 模块名
	comp: 'inventory',
	//todo: 临时菜单权限改为固定，因为全局管理设计问题，导致用户菜单无法动态获取
	needTempUserAuthFlag: true,
  // 图片上传的项目签名
  ossFolderName: 'pearlriver',
	// 当前系统默认的API头部
  defaultApiHeader: '/pearlriver-mgmt-b2b-application/api',
  // 系统应用服务的API头部
	sysApiHeader: '/pearlriver-sys-application/api',
  // 司机后端服务的API头部
	tradeApiHeader: '/pearlriver-trade-b2b-application/api',
	noTab: true
};

if ('dev' === '' + ENV || 'development' === '' + ENV || 'yunxi-dev' === '' + ENV) {

}

//请求url
baseConf.requestApiUrl = {
	//获取手机验证码
	phoneCode: `${baseConf.baseURL}/pearlriver-sys-application/api/v1/pearlriver/sms/send`,
	//修改登录密码
	updatedPassword: `${baseConf.baseURL}/pearlriver-sys-application/api/v1/pearlriver/comm/user/password/update`,
	//忘记登录密码
	forgetPassword: `${baseConf.baseURL}/smartsales-sys-application/api/v1/sys/user/password/forget`,
	// 查询角色操作按钮
	queryAuth: `${baseConf.baseURL}/smartsales-sys-application//api/admin/user/getRoleRes`,
	// 查询菜单权限
	queryAuthPath: `${baseConf.baseURL}/pearlriver-sys-application/api/v1/pearlriver/sys/menu/list`,
	// 获取图形验证码
	getValidateImg: `${baseConf.baseURL}/huieryun-identity/api/v1/auth/pearlriver/verify/img/get`,
	//注销
	delCacheUser: `${baseConf.baseURL}/huieryun-identity/api/v1/auth/pearlriver/user/sys-web-pc/logout`,
	//获取组织
	userOrg: `${baseConf.baseURL}/smartsales-sys-application/api/v1/sys/user/unit/list`,
	//组织切换保存
	updateSelCurOrg: `${baseConf.baseURL}/smartsales-sys-application/api/v1/sys/user/change/unitid`,
  //获取用户详情
  getUserDetail: `${baseConf.baseURL}/pearlriver-sys-application/api/v1/pearlriver/user/get/detail`
};
// 上传签名url
baseConf.getPolicyUrl = `${baseConf.baseURL}/pearlriver-sys-application/api/v1/huieryun/objectstorage/policy/pearlriver/getpolicy`;
//登录
baseConf.loginUrl = `${baseConf.baseURL}/huieryun-identity/api/v1/auth/pearlriver/user/sys-web-pc/auth`;

// 上传图片
baseConf.uploadUrl = `${baseConf.baseURL}/pearlriver-sys-application/api/v1/huieryun/objectstorage/policy/pearlriver/getpolicy`;


baseConf.ENV = ENV;

module.exports = baseConf;
