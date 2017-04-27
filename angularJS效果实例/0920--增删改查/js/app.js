angular.module('app',['ngRoute','ngAnimate','ngMessages']).controller('main',['$scope','$window','$location',function($scope,$window,$location){
	$scope.xingming = '';
	$scope.zhiye = '';
	$scope.ary = [
		{
			name:'唐门',
			sex:'男',
			time:'1992年08月01日',
			work:'远程DPS',
			email:'123456789@qq.com',
			wangzhi:'http://www.tangmen.com',
			jianjie:'唐门乃百年世家，其暗器机关独步武林，更因善使机关傀儡合击之术，被江湖人称为“半人半影”。',
			img:'1.jpg',
			year:'1992',
			month:'8',
			date:'8'
		},
		{
			name:'五毒',
			sex:'女',
			time:'1992年09月01日',
			work:'刺客',
			email:'234567890@qq.com',
			wangzhi:'http://www.wudu.com',
			jianjie:'地处云滇的五毒以诡秘凌厉的刀法配合神鬼莫测的身法，可谓是举手之间、取人性命；轻烟散尽、乃见五毒。',
			img:'2.png',
			year:'1993',
			month:'9',
			date:'8'
		},
		{
			name:'太白',
			sex:'男',
			time:'1992年09月08日',
			work:'近战',
			email:'345678901@qq.com',
			wangzhi:'http://www.taibai.com',
			jianjie:'剑者百刃之君也。太白乃武林第一剑派。',
			img:'3.jpg',
			year:'1993',
			month:'8',
			date:'28'
		},
		{
			name:'神威',
			sex:'男',
			time:'1992年09月18日',
			work:'坦克',
			email:'456789012@qq.com',
			wangzhi:'http://www.shenwei.com',
			jianjie:'神威是源自军旅的门派，注重实战、刚猛霸道、勇往直前。',
			img:'4.jpg',
			year:'1992',
			month:'9',
			date:'1'
		}
	];
	/*10.115.25.224:8080/201608-09/angular*/
	
	$scope.remove = function(index) {
		if($window.confirm("确定要删除该条信息?")) {
			$scope.ary.splice(index, 1);
		}
	}
	
	$scope.xinzeng = function(url){
		$location.path(url);
	}
	
}])
.config(function($routeProvider){
	$routeProvider.when('/liebiao',{
		templateUrl:'templates/list.html'
	}).when('/chakan/:idx',{
		templateUrl:'templates/cha.html'
	}).when('/xiugai/:index',{
		templateUrl:'templates/zeng.html',
	}).when('/denglu',{
		templateUrl:'templates/login.html',
	}).otherwise('/liebiao')
	
})
.controller('main_chakan',['$scope','$routeParams',function($scope,$routeParams){
	$scope.chakan =  $scope.ary[parseInt($routeParams.idx)];
	
}])
.controller('ctrl_form',['$scope','$routeParams',function($scope,$routeParams){
	$scope.xingming = '';
	var index = parseInt($routeParams.index);
	
	if(index != -1){
		function copyObj(obj){
			var newObj = {};
			for(var key in obj){
				newObj[key] = obj[key];
			}
			return newObj;
		}
		$scope.xingming = copyObj($scope.ary[index])
	}else{
		$scope.xingming = {};
	}
	
	
	$scope.tjxiugai = function(){
		if(index != -1){
			$scope.ary[index] = $scope.xingming;
		}else{
			$scope.ary.unshift({
				name:$scope.xingming.name,
				sex:$scope.xingming.sex,
				work:$scope.xingming.work,
				year:$scope.xingming.year,
				month:$scope.xingming.month,
				date:$scope.xingming.date,
				email:$scope.xingming.email,
				wangzhi:$scope.xingming.wangzhi,
				jianjie:$scope.xingming.jianjie,
			})
		}
		
	}	
	//console.log($scope.myData);
}])
.controller("ctrl_login",["$scope","$location","$http","tokenFactory",function($scope,$location,$http,tokenFactory){
	$scope.user_name = '';
	$scope.user_work = '';
	$scope.clickBtn_login = function(){
		if($scope.user_name == "" || $scope.user_work == ""){
			alert("用户名或密码输入错误，请检查！");
		}else if($scope.user_name == "1" || $scope.user_work == "2"){
			$location.path("'#/chakan/'+$index");
			
			/*//发送请求
			$http.post('http://10.115.25.224:3000/login',{
				name:$scope.user_name,
				pw:$scope.user_pw
			}).then(function(resp){
				if(resp.data.err_code == "0"){
					//登陆成功
					//1 记录token
					tokenFactory.token = resp.data.token;
					//2 跳转到个人信息页面
					$location.path("'#/chakan/'+$index");
				}else{
					alert("登陆失败，请检查用户名或密码")
				}
			},function(resp){
				alert('登陆请求失败');
			});*/

		}
	}
}])