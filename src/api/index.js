import requests from './request'
import mockRequest from './mockRequest'
//商品分类的数据接口
export const reqCategoryList = ()=> requests({url:'/api/product/getBaseCategoryList',method:'get'})
//获取banner数据的接口函数
export const reqGetBannerList = ()=> mockRequest.get('/banner');
//获取Floor(楼层)数据接口的函数
export const reqGetFloorList = ()=>mockRequest({url:`/floor`,method:'get'});
//搜索产品的接口[真实的接口]
export const reqGetSearchInfo = (params)=> requests({url:"/list",method:'post',data:params});