const ApiRootUrl = 'http://192.168.2.204:8360/';

const BaseUrl = 'http://localhost:8081/wechat/';
module.exports = {
  IndexUrl: BaseUrl + 'home/index', //首页数据接口
  CatalogList: BaseUrl + 'catalog/index',  //分类目录全部分类数据接口
  CatalogCurrent: BaseUrl + 'catalog',  //分类目录当前分类数据接口

  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录

  GoodsCount: BaseUrl + 'goods/count',  //统计商品总数
  GoodsList: BaseUrl + 'goods/list',  //获得商品列表
  GoodsCategory: BaseUrl + 'goods/category',  //获得分类数据
  GoodsDetail: BaseUrl + 'goods/detail',  //获得商品的详情
  GoodsNew: BaseUrl + 'goods/new',  //新品
  GoodsHot: BaseUrl + 'goods/hot',  //热门
  GoodsRelated: BaseUrl + 'goods/related',  //商品详情页的关联商品（大家都在看）

  BrandList: ApiRootUrl + 'brand/list',  //品牌列表
  BrandDetail: ApiRootUrl + 'brand/detail',  //品牌详情

  CartList: ApiRootUrl + 'cart/index', //获取购物车的数据
  CartAdd: ApiRootUrl + 'cart/add', // 添加商品到购物车
  CartUpdate: ApiRootUrl + 'cart/update', // 更新购物车的商品
  CartDelete: ApiRootUrl + 'cart/delete', // 删除购物车的商品
  CartChecked: ApiRootUrl + 'cart/checked', // 选择或取消选择商品
  CartGoodsCount: BaseUrl + 'cart/goods-count', // 获取购物车商品件数
  CartCheckout: ApiRootUrl + 'cart/checkout', // 下单前信息确认

  OrderSubmit: ApiRootUrl + 'order/submit', // 提交订单
  PayPrepayId: ApiRootUrl + 'pay/prepay', //获取微信统一下单prepay_id

  CollectList: ApiRootUrl + 'collect/list',  //收藏列表
  CollectAddOrDelete: ApiRootUrl + 'collect/addordelete',  //添加或取消收藏

  CommentList: ApiRootUrl + 'comment/list',  //评论列表
  CommentCount: ApiRootUrl + 'comment/count',  //评论总数
  CommentPost: ApiRootUrl + 'comment/post',   //发表评论

  TopicList: ApiRootUrl + 'topic/list',  //专题列表
  TopicDetail: ApiRootUrl + 'topic/detail',  //专题详情
  TopicRelated: ApiRootUrl + 'topic/related',  //相关专题

  SearchIndex: ApiRootUrl + 'search/index',  //搜索页面数据
  SearchResult: ApiRootUrl + 'search/result',  //搜索数据
  SearchHelper: ApiRootUrl + 'search/helper',  //搜索帮助
  SearchClearHistory: ApiRootUrl + 'search/clearhistory',  //搜索帮助

  AddressList: ApiRootUrl + 'address/list',  //收货地址列表
  AddressDetail: ApiRootUrl + 'address/detail',  //收货地址详情
  AddressSave: ApiRootUrl + 'address/save',  //保存收货地址
  AddressDelete: ApiRootUrl + 'address/delete',  //保存收货地址

  RegionList: ApiRootUrl + 'region/list',  //获取区域列表

  OrderList: ApiRootUrl + 'order/list',  //订单列表
  OrderDetail: ApiRootUrl + 'order/detail',  //订单详情
  OrderCancel: ApiRootUrl + 'order/cancel',  //取消订单
  OrderExpress: ApiRootUrl + 'order/express', //物流详情

  FootprintList: BaseUrl + 'footprint/list',  //足迹列表
  FootprintDelete: BaseUrl + 'footprint',  //删除足迹
};