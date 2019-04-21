var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world' });
});
//主页
router.get('/home', function (req, res, next) {
  var data = [
    arr={
    classify:[
        {id:1,
        title:'上衣'},
        {id:2,
        title:'裤子'},
        {id:3,
        title:'裙子'},
        {id:4,
        title:'内衣'},
        {id:5,
        title:'女鞋'},
        {id:6,
        title:'男友'},
        {id:7,
        title:'包包'},
        {id:8,
        title:'运动'},
        {id:9,
        title:'配饰'},
        {id:10,
        title:'美妆'},
        {id:11,
        title:'个护'},
        {id:12,
        title:'家居'},
        {id:13,
        title:'百货'},
        {id:14,
        title:'母婴'},
        {id:15,
        title:'食品'}
      ],
      clothing:[
        {img:'https://s11.mogucdn.com/mlcdn/17f85e/190111_7c2dgi89fkeaidc1a7eak2j0lkb8g_640x960.jpg_360x480.v1cAC.40.webp',
        hotSeller:'热卖',
        title:'【网红小黑裤】黑色打底裤女外穿显瘦春季新款裤子秋冬加绒高腰长裤弹力紧身裤夏季薄款瘦腿裤铅笔',
        price:'￥39.9',
        support:'2488'
        },
        {img:'https://s11.mogucdn.com/p1/151201/11ieey_ie3wiyrumq2tanjtguzdambqgayde_640x960.jpg_360x480.v1cAC.40.webp',
        hotSeller:'热卖',
        title:'春季新款韩版弹力显瘦高腰外穿打底裤女黑色紧身裤子薄款百搭九分裤',
        price:'￥29.9',
        support:'15.0瓦特'
        },
        {img:'https://s11.mogucdn.com/mlcdn/c45406/190226_22d44g853gg3ckak8akddbagh61h8_640x960.jpg_360x480.v1cAC.40.webp',
  
        title:'春夏季新款韩版豹纹嘴唇印花宽松半袖Ť恤上衣+高腰显瘦休闲牛仔裤小个子春装时尚套装两件套女装',
        price:'￥49',
        support:'5332'
        },
        {img:'https://s11.mogucdn.com/mlcdn/c45406/180321_7390k78dja7bd946abf133ach9143_640x960.jpg_360x480.v1cAC.40.webp',
        
        title:'哈伦裤九分棉麻宽松亚麻格子休闲百搭萝卜裤女裤春秋冬2018新款韩版加绒加厚女裤',
        price:'￥58.1',
        support:'1552'
        },
        {img:'https://s11.mogucdn.com/mlcdn/c45406/190104_0cli6g5jf6g1gh07dkf7elia2bjba_640x854.jpg_360x480.v1cAC.40.webp',
        
        title:'复古裤子女春季新款韩版小清新休闲卷边显高直筒哈伦老爹裤女士百搭春款减龄时髦洋气高腰牛仔裤',
        price:'￥59',
        support:'484'
        },
        {img:'https://s11.mogucdn.com/mlcdn/c45406/180518_8c7g947d6g99bl660g0c7d40je7be_640x960.jpg_360x480.v1cAC.40.webp',
       
        title:'韩国春季新品插件简约原宿小清新百搭高腰宽松显瘦学生九分休闲卷边破洞磨破直筒哈伦牛仔裤女潮',
        price:'￥58',
        support:'1.2瓦特'
        },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190213_0gk4e51bkgbb7ic03j2697g24g2bb_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'2019新款女装春装套装韩版时尚气质女神范雪纺衫显瘦小脚裤两件套',
    price:'￥119',
    support:'1725'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190218_5f2f9akd9a85303kbj1d70d20l2g3_640x853.jpg_360x480.v1cAC.40.webp',
           
    title:'时尚显瘦老爹裤女春季新款韩版宽松九分直筒哈伦萝卜裤百搭复古森系卷边小脚高腰牛仔裤裤子',
    price:'￥59',
    support:'667'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190302_68ae7igff75cji278h3echj8a40l1_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'飘带工装裤女宽松休闲裤子微胖显瘦新款春秋夏季胖妹妹学生街头帅气黑色阔腿韩版嘻哈哈伦裤',
    price:'￥49.9',
    support:'3685'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190321_68ebhijhbk02l7if5kd0djb0i1jd5_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'春季牛仔裤女小脚高腰新款百搭开叉裤脚刺绣弹力紧身黑色显瘦九分裤裤子',
    price:'￥63',
    support:'8783'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190216_712h25479d7ab72427gagk56ej444_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【优质款】新款春季打底裤女外穿显瘦黑色小脚铅笔长裤薄款九分紧身高腰修身学生韩版百搭魔术裤子',
    price:'￥35.9',
    support:'188'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190216_0b85gf0h194ff7ihj184652741kji_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'玫瑰定制早春新品拼接设计直筒牛仔裤女韩版显瘦高腰别致网红怪味少女裤子卷边宽松九分牛仔裤',
    price:'￥79.9',
    support:'358'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190111_7c2dgi89fkeaidc1a7eak2j0lkb8g_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【网红小黑裤】黑色打底裤女外穿显瘦春季新款裤子秋冬加绒高腰长裤弹力紧身裤夏季薄款瘦腿裤铅笔',
    price:'￥39.9',
    support:'2488'
    },
    {img:'https://s11.mogucdn.com/p1/151201/11ieey_ie3wiyrumq2tanjtguzdambqgayde_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'春季新款韩版弹力显瘦高腰外穿打底裤女黑色紧身裤子薄款百搭九分裤',
    price:'￥29.9',
    support:'15.0瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190226_22d44g853gg3ckak8akddbagh61h8_640x960.jpg_360x480.v1cAC.40.webp',
      
    title:'春夏季新款韩版豹纹嘴唇印花宽松半袖Ť恤上衣+高腰显瘦休闲牛仔裤小个子春装时尚套装两件套女装',
    price:'￥49',
    support:'5332'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180321_7390k78dja7bd946abf133ach9143_640x960.jpg_360x480.v1cAC.40.webp',
    
    title:'哈伦裤九分棉麻宽松亚麻格子休闲百搭萝卜裤女裤春秋冬2018新款韩版加绒加厚女裤',
    price:'￥58.1',
    support:'1552'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190104_0cli6g5jf6g1gh07dkf7elia2bjba_640x854.jpg_360x480.v1cAC.40.webp',
    
    title:'复古裤子女春季新款韩版小清新休闲卷边显高直筒哈伦老爹裤女士百搭春款减龄时髦洋气高腰牛仔裤',
    price:'￥59',
    support:'484'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180518_8c7g947d6g99bl660g0c7d40je7be_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'韩国春季新品插件简约原宿小清新百搭高腰宽松显瘦学生九分休闲卷边破洞磨破直筒哈伦牛仔裤女潮',
    price:'￥58',
    support:'1.2瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190213_0gk4e51bkgbb7ic03j2697g24g2bb_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'2019新款女装春装套装韩版时尚气质女神范雪纺衫显瘦小脚裤两件套',
    price:'￥119',
    support:'1725'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190218_5f2f9akd9a85303kbj1d70d20l2g3_640x853.jpg_360x480.v1cAC.40.webp',
           
    title:'时尚显瘦老爹裤女春季新款韩版宽松九分直筒哈伦萝卜裤百搭复古森系卷边小脚高腰牛仔裤裤子',
    price:'￥59',
    support:'667'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190302_68ae7igff75cji278h3echj8a40l1_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'飘带工装裤女宽松休闲裤子微胖显瘦新款春秋夏季胖妹妹学生街头帅气黑色阔腿韩版嘻哈哈伦裤',
    price:'￥49.9',
    support:'3685'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190321_68ebhijhbk02l7if5kd0djb0i1jd5_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'春季牛仔裤女小脚高腰新款百搭开叉裤脚刺绣弹力紧身黑色显瘦九分裤裤子',
    price:'￥63',
    support:'8783'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190216_712h25479d7ab72427gagk56ej444_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【优质款】新款春季打底裤女外穿显瘦黑色小脚铅笔长裤薄款九分紧身高腰修身学生韩版百搭魔术裤子',
    price:'￥35.9',
    support:'188'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190216_0b85gf0h194ff7ihj184652741kji_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'玫瑰定制早春新品拼接设计直筒牛仔裤女韩版显瘦高腰别致网红怪味少女裤子卷边宽松九分牛仔裤',
    price:'￥79.9',
    support:'358'
    },
     {img:'https://s11.mogucdn.com/mlcdn/17f85e/190111_7c2dgi89fkeaidc1a7eak2j0lkb8g_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【网红小黑裤】黑色打底裤女外穿显瘦春季新款裤子秋冬加绒高腰长裤弹力紧身裤夏季薄款瘦腿裤铅笔',
    price:'￥39.9',
    support:'2488'
    },
    {img:'https://s11.mogucdn.com/p1/151201/11ieey_ie3wiyrumq2tanjtguzdambqgayde_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'春季新款韩版弹力显瘦高腰外穿打底裤女黑色紧身裤子薄款百搭九分裤',
    price:'￥29.9',
    support:'15.0瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190226_22d44g853gg3ckak8akddbagh61h8_640x960.jpg_360x480.v1cAC.40.webp',
      
    title:'春夏季新款韩版豹纹嘴唇印花宽松半袖Ť恤上衣+高腰显瘦休闲牛仔裤小个子春装时尚套装两件套女装',
    price:'￥49',
    support:'5332'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180321_7390k78dja7bd946abf133ach9143_640x960.jpg_360x480.v1cAC.40.webp',
    
    title:'哈伦裤九分棉麻宽松亚麻格子休闲百搭萝卜裤女裤春秋冬2018新款韩版加绒加厚女裤',
    price:'￥58.1',
    support:'1552'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190104_0cli6g5jf6g1gh07dkf7elia2bjba_640x854.jpg_360x480.v1cAC.40.webp',
    
    title:'复古裤子女春季新款韩版小清新休闲卷边显高直筒哈伦老爹裤女士百搭春款减龄时髦洋气高腰牛仔裤',
    price:'￥59',
    support:'484'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180518_8c7g947d6g99bl660g0c7d40je7be_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'韩国春季新品插件简约原宿小清新百搭高腰宽松显瘦学生九分休闲卷边破洞磨破直筒哈伦牛仔裤女潮',
    price:'￥58',
    support:'1.2瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190213_0gk4e51bkgbb7ic03j2697g24g2bb_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'2019新款女装春装套装韩版时尚气质女神范雪纺衫显瘦小脚裤两件套',
    price:'￥119',
    support:'1725'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190218_5f2f9akd9a85303kbj1d70d20l2g3_640x853.jpg_360x480.v1cAC.40.webp',
           
    title:'时尚显瘦老爹裤女春季新款韩版宽松九分直筒哈伦萝卜裤百搭复古森系卷边小脚高腰牛仔裤裤子',
    price:'￥59',
    support:'667'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190302_68ae7igff75cji278h3echj8a40l1_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'飘带工装裤女宽松休闲裤子微胖显瘦新款春秋夏季胖妹妹学生街头帅气黑色阔腿韩版嘻哈哈伦裤',
    price:'￥49.9',
    support:'3685'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190321_68ebhijhbk02l7if5kd0djb0i1jd5_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'春季牛仔裤女小脚高腰新款百搭开叉裤脚刺绣弹力紧身黑色显瘦九分裤裤子',
    price:'￥63',
    support:'8783'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190216_712h25479d7ab72427gagk56ej444_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【优质款】新款春季打底裤女外穿显瘦黑色小脚铅笔长裤薄款九分紧身高腰修身学生韩版百搭魔术裤子',
    price:'￥35.9',
    support:'188'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190216_0b85gf0h194ff7ihj184652741kji_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'玫瑰定制早春新品拼接设计直筒牛仔裤女韩版显瘦高腰别致网红怪味少女裤子卷边宽松九分牛仔裤',
    price:'￥79.9',
    support:'358'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190111_7c2dgi89fkeaidc1a7eak2j0lkb8g_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【网红小黑裤】黑色打底裤女外穿显瘦春季新款裤子秋冬加绒高腰长裤弹力紧身裤夏季薄款瘦腿裤铅笔',
    price:'￥39.9',
    support:'2488'
    },
    {img:'https://s11.mogucdn.com/p1/151201/11ieey_ie3wiyrumq2tanjtguzdambqgayde_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'春季新款韩版弹力显瘦高腰外穿打底裤女黑色紧身裤子薄款百搭九分裤',
    price:'￥29.9',
    support:'15.0瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190226_22d44g853gg3ckak8akddbagh61h8_640x960.jpg_360x480.v1cAC.40.webp',
      
    title:'春夏季新款韩版豹纹嘴唇印花宽松半袖Ť恤上衣+高腰显瘦休闲牛仔裤小个子春装时尚套装两件套女装',
    price:'￥49',
    support:'5332'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180321_7390k78dja7bd946abf133ach9143_640x960.jpg_360x480.v1cAC.40.webp',
    
    title:'哈伦裤九分棉麻宽松亚麻格子休闲百搭萝卜裤女裤春秋冬2018新款韩版加绒加厚女裤',
    price:'￥58.1',
    support:'1552'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190104_0cli6g5jf6g1gh07dkf7elia2bjba_640x854.jpg_360x480.v1cAC.40.webp',
    
    title:'复古裤子女春季新款韩版小清新休闲卷边显高直筒哈伦老爹裤女士百搭春款减龄时髦洋气高腰牛仔裤',
    price:'￥59',
    support:'484'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/180518_8c7g947d6g99bl660g0c7d40je7be_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'韩国春季新品插件简约原宿小清新百搭高腰宽松显瘦学生九分休闲卷边破洞磨破直筒哈伦牛仔裤女潮',
    price:'￥58',
    support:'1.2瓦特'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190213_0gk4e51bkgbb7ic03j2697g24g2bb_640x960.jpg_360x480.v1cAC.40.webp',
           
    title:'2019新款女装春装套装韩版时尚气质女神范雪纺衫显瘦小脚裤两件套',
    price:'￥119',
    support:'1725'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190218_5f2f9akd9a85303kbj1d70d20l2g3_640x853.jpg_360x480.v1cAC.40.webp',
           
    title:'时尚显瘦老爹裤女春季新款韩版宽松九分直筒哈伦萝卜裤百搭复古森系卷边小脚高腰牛仔裤裤子',
    price:'￥59',
    support:'667'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190302_68ae7igff75cji278h3echj8a40l1_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'飘带工装裤女宽松休闲裤子微胖显瘦新款春秋夏季胖妹妹学生街头帅气黑色阔腿韩版嘻哈哈伦裤',
    price:'￥49.9',
    support:'3685'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190321_68ebhijhbk02l7if5kd0djb0i1jd5_640x960.jpg_360x480.v1cAC.40.webp',
     hotSeller:'热卖',
    title:'春季牛仔裤女小脚高腰新款百搭开叉裤脚刺绣弹力紧身黑色显瘦九分裤裤子',
    price:'￥63',
    support:'8783'
    },
    {img:'https://s11.mogucdn.com/mlcdn/c45406/190216_712h25479d7ab72427gagk56ej444_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'【优质款】新款春季打底裤女外穿显瘦黑色小脚铅笔长裤薄款九分紧身高腰修身学生韩版百搭魔术裤子',
    price:'￥35.9',
    support:'188'
    },
    {img:'https://s11.mogucdn.com/mlcdn/17f85e/190216_0b85gf0h194ff7ihj184652741kji_640x960.jpg_360x480.v1cAC.40.webp',
    hotSeller:'热卖',
    title:'玫瑰定制早春新品拼接设计直筒牛仔裤女韩版显瘦高腰别致网红怪味少女裤子卷边宽松九分牛仔裤',
    price:'￥79.9',
    support:'358'
    }
      ],
    attention:[
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180529_7h6c8a64aal82jf59ebkbjb78jba3_132x132.jpg_80x80.v1cAC.70.webp',
       attentionname:'十月_oct',
         attentionintro:'脑袋以下全是腿 / 不卖衣服！没有店铺！',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180712_23bbgb6lf8e2e2hejbl7k235jf6hd_400x400.jpg_80x80.v1cAC.70.webp',
       attentionname:'菇菇来了',
       attentionintro:'一个好看的人 / 分享穿搭 / 街拍采访 / 全网最宠粉博主',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180919_5blifc8b1ji9l6jcfac94e283k43c_400x400.jpg_80x80.v1cAC.70.webp',
       attentionname:'彤子蓝',
         attentionintro:'时尚博主 / 法式优雅 / SWAG女孩 / 部分单品有链接可私信',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180531_1aheb0d6g5l9h56dge43dhlida375_400x400.jpg_80x80.v1cAC.70.webp',
       attentionname:'桐桐桐掌柜',
         attentionintro:'博主 / 肚子小肉肉 / 就是穿啥都美 / 个性十足 / 百变Queen',
      },
      {attentionimg:'https://s5.mogucdn.com/mlcdn/5abf39/181211_2599gccjg5cd7797ij01l7c00ldk0_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'陈雅丽Allie',
         attentionintro:'经典不过时 / 流行请看我 / 买买买 / 护肤 / 做发型',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180726_8ad3117c98kjkca3dg1a27ci1cgi5_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'鱼一珉',
         attentionintro:'颜控少女 / 懒到没朋友 / 电影 / 读书 / wb：@甜味小鱼仔',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180718_0eh01i2dk9daia1ic811679ja2e15_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'无限正能量的大白',
         attentionintro:'博主 / 经典不过时 / 法式优雅 / 模特 / 百变Queen',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/190320_2hc5lbf77hlc2d2a03ggeb26ie384_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'虚枝zz',
         attentionintro:'法式优雅 / 经典不过时 / 纯分享不是卖家！！！ / 名媛风 / 就是穿啥都美',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180528_4f6i576b74ki1kje4h2fhg8i6j814_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'小甜椒Ruki',
         attentionintro:'博主 / 颜控少女 / 撸猫 / 美少女战士 / SWAG女孩',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/190130_185l41l70lj2ech3971h05ee9h14a_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'吃吃Amber',
         attentionintro:'气场1米8 / 个性十足 / 百变Queen / 佛系少女 / 护肤',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180625_5hl5lai8dbhlf8i6l2ej73gdaeci2_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'桃儿桃儿呀',
         attentionintro:'法式优雅 / 复古 / 经典不过时 / 颜控少女 / 小腰精',
      },
      {attentionimg:'https://s11.mogucdn.com/b7/avatar/141217/3zmi_ieydeyzzgm4wcyzsmuytambqgiyde_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'Kaciestyle阿娇',
         attentionintro:'全世界最可爱 / 就是穿啥都美 / 经典不过时 / 满分少女',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180716_0f5jk8kghkcl49lgeef6ach054cj0_132x132.jpg_80x80.v1cAC.70.webp',
         attentionname:'蘑菇搭配师',
         attentionintro:'爱臭美 / 爱穿搭 / 帮你解决各种穿搭烦恼 / 教你如何穿得很好看',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/c45406/180810_4k8795fjlee1h23gklfh8ljckl5ak_339x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'菇菇街拍',
         attentionintro:'只拍好看的人 / 时装周街拍 / 捕捉全球街头潮人',
      },
      {attentionimg:'https://s11.mogucdn.com/p2/170216/upload_0f6g6ji1c682803d0ffh3gef4lg1a_250x250.jpg_80x80.v1cAC.70.webp',
         attentionname:'小新',
         attentionintro:'小腰精 / 健身',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/190110_5i614ehfi3d0aedj3kabe085af65e_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'火箭少女101-孟美岐',
         attentionintro:'音乐 / 遛狗',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/181109_4gjhkjk814c51e48b2ebhc7638jc3_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'Theresa傅颖',
         attentionintro:'文艺工作者 / 经典不过时 / 喵星人 / 旅游 / 吃货',
      },
      {attentionimg:'https://s3.mogucdn.com/mlcdn/5abf39/180815_7kd4kd6dicd3be6b725djkh91e2c5_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'MOGU娱乐',
         attentionintro:'明星idol / 谁都不服 / 蹦迪',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/180720_5kb842264fd892b71e3ff7l2k118a_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'蘑菇化妆师',
         attentionintro:'教你美妆小技巧 / 热门单品亲测 / 爱美妆不踩雷',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/181220_20eahb37l8k3e7i97eeie1642860i_400x400.jpg_80x80.v1cAC.70.webp',
         attentionname:'惰娇鱼头',
          attentionintro:'黑到发亮 / 90后老阿姨 / 撸猫 / 就是穿啥都美 / 围脖：鱼头不吃鱼',
      },
      {attentionimg:'https://s11.mogucdn.com/mlcdn/5abf39/190313_6h00d3ib98gg8balidi345l9kb54i_400x400.jpg',
         attentionname:'是阿xin呀',
         attentionintro:'博主 / 经典不过时 / 法式优雅 / 模特 / 百变Queen',
      }
      
      
      
    ],
      banner: [
        'https://s11.mogucdn.com/mlcdn/c45406/190319_6la3h8d5h1ffe2c1a3h4he495g03c_750x300.jpg_999x999.v1c0.webp',
        'https://s17.mogucdn.com/mlcdn/c45406/190318_0f95h2b2bg5igad8h7h5jk8jcii7c_750x300.jpg_999x999.v1c0.webp',
        'https://s18.mogucdn.com/mlcdn/c45406/190225_533fe4d24h6ckfj918j78302dbc98_750x300.jpg_999x999.v1c0.webp',
        'https://s2.mogucdn.com/mlcdn/c45406/190319_877b82l2k718815e0d9c45g67kb6f_750x300.jpg_999x999.v1c0.webp',
    'https://s11.mogucdn.com/mlcdn/c45406/190321_3811f88ljgji8g35b3kfi2aahfgb4_750x300.jpg_999x999.v1c0.webp'
      ],
      list: [
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190115_0jh548j0b0hg0g2464jah3h23d3hg_150x150.png_640x640.v1cAC.40.webp',
          title: '女装'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/181126_58g8bkegg92k4bfj51adigb8g1l44_150x150.png_640x640.v1cAC.40.webp',
          title: '上衣'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190306_4258hl3e1kj8cegk3e4el4d6d45k6_120x120.png_640x640.v1cAC.40.webp',
          title: '裤子'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190306_5ifkajc430g0dbdf1eeccd637i5f9_135x135.png_640x640.v1cAC.40.webp',
          title: '裙子'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190306_3aa6fl08hhlkfd5kb08aif00jkeib_150x150.png_640x640.v1cAC.40.webp',
          title: '套装'
        },

        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190214_7i8baa688j214ib7eb2466fhj9i1d_150x150.jpg_640x640.v1cAC.40.webp',
          title: '女鞋'
        },
        {
          img: 'https://s3.mogucdn.com/mlcdn/c45406/171023_222kg9291h4l38j3b2lcdc3k6fc69_100x100.png_640x640.v1cAC.40.webp',
          title: '美妆/个护'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/181122_220dja64jidi7lbhb01d1ce021b58_150x150.png_640x640.v1cAC.40.webp',
          title: '包包'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190304_1lk6dldb1f9ghj2fj562c209k59l3_150x150.png_640x640.v1cAC.40.webp',
          title: '配饰'
        },
        {
          img: 'https://s3.mogucdn.com/mlcdn/c45406/171018_3j76aiahb09c5i1ga620k4lklfbal_100x100.png_640x640.v1cAC.40.webp',
          title: '内衣'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/181123_5g17c09663fffehde6kjakii091i5_150x150.png_640x640.v1cAC.40.webp',
          title: '男友'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190304_29l039if1d5bgh8i0ed1f1aieej41_150x150.png_640x640.v1cAC.40.webp',
          title: '家居'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190128_4kfibk807hi13jdf92d8lc680a32e_150x150.png_640x640.v1cAC.40.webp',
          title: '母婴'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190103_5hh29kj24jd78b1djl47l6c0ilhdd_150x150.jpg_640x640.v1cAC.40.webp',
          title: '食品'
        },
        {
          img: 'https://s10.mogucdn.com/mlcdn/c45406/190312_1156li3l7eel0ab19182ld338hdlb_135x135.png_640x640.v1cAC.40.webp',
          title: '签到'
        }
      ],
      user: [
        {
        userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181221_887960ikb858b43li9e3iik3044c9_400x400.jpg',
        username: '章鱼阿7',
        height: '166',
        weight: '49',
        address: '合肥',
        work: '自由职业',
    vermicelli :'3836',
    attention :'2',
    label:['脑袋以下全是腿',
        '就是穿啥都美',
        '气场1米8',
        '全世界最可爱',
        '运动',
        ],
    
    usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/180903_1c420894d4k261kk4gjf9bk2kei3b_366x108.png',
      userimgs:[
        "https://s11.mogucdn.com/mlcdn/c45406/190303_2a63j80lg26l8g536e47b3ib30kbc_526x876.jpg_300x9999.v1c7E.70.webp",
        "https://s5.mogucdn.com/mlcdn/c45406/190223_5h20255e3112d07efkk90iic28f1j_520x868.jpg_300x9999.v1c7E.70.webp",
        "https://s11.mogucdn.com/mlcdn/c45406/190216_0c0dc128f2kh9h5e9kc124e7gg3d2_524x876.jpg_300x9999.v1c7E.70.webp"
      ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_8fg3i6ke4l842gk636gg5ef547ek7_220x221.png_200x200.jpg",title:'SWAROVSKI'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/181203_54g8d66e5g1d0j1hg1244615g2cia_312x312.png_200x200.jpg",title:'夏梵尼'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180830_69ck3151fk37b0a77e2di9e89cd6c_324x324.png_200x200.jpg",title:'FFAN泛泛'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },    
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181220_3h0ck2ggigg0le03cd60fbe8fg5g2_400x400.jpg',
          username: '蓝甜甜STUDIO',
          height: '172',
          weight: '53',
          address: '上海',
          work: '设计师',
      vermicelli :'20.1w',
      attention :'20',
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/181127_8al0h412331i0h6k81a3b9j147e0a_366x108.png',
       label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动'],
    
    userimgs:[
      "https://s11.mogucdn.com/mlcdn/c45406/190319_37094j07h2l6f9iiilf2487j5i03h_620x1035.jpg_300x9999.v1c7E.70.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/190318_5c0lj5edda4f42c8l9h6ahc28j35i_608x1016.jpg_300x9999.v1c7E.70.webp",
      "https://s11.mogucdn.com/mlcdn/c45406/190311_2bledhc7213jje3dkea04a1e8l48j_660x1103.jpg_300x9999.v1c7E.70.webp"
      ],

          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180831_76i4gcdf54le01f3blef22lc8adg5_567x567.png_200x200.jpg",title:'adidas Originals'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/181203_54g8d66e5g1d0j1hg1244615g2cia_312x312.png_200x200.jpg",title:'夏梵尼'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180830_69ck3151fk37b0a77e2di9e89cd6c_324x324.png_200x200.jpg",title:'FFAN泛泛'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s3.mogucdn.com/mlcdn/c45406/190311_62551jikg29g67bh29d1g0dlgkkj4_800x800.jpg',
          username: '等到天空放晴穿这身可好！',
          height: '175',
          weight: '50',
          address: '安徽',
          work: '演员歌手',
      vermicelli :'2.1万',
      attention :'60',
       label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动'],
    
    userimgs:[
        "https://s11.mogucdn.com/mlcdn/c45406/190221_7di9kbf73fdjef4ibk0kfb6geglef_528x882.jpg_300x9999.v1c7E.70.webp",
        "https://s11.mogucdn.com/mlcdn/c45406/190316_7b795di45g5e4b82hfkjkag0igdd1_408x682.jpg_300x9999.v1c7E.70.webp",
        "https://s5.mogucdn.com/mlcdn/c45406/190221_8829a14231k2dccj310l8d76695d7_530x884.jpg_300x9999.v1c7E.70.webp"
        ],
    brand: [
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/181203_54g8d66e5g1d0j1hg1244615g2cia_312x312.png_200x200.jpg",title:'夏梵尼'},
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180830_69ck3151fk37b0a77e2di9e89cd6c_324x324.png_200x200.jpg",title:'FFAN泛泛'},
            
      ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/180529_7h6c8a64aal82jf59ebkbjb78jba3_132x132.jpg',
          username: 'Theresa傅颖',
          height: '178',
          weight: '45',
          address: '香港',
          work: '设计师',
      vermicelli :'3.9万',
      attention :'20',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
    userimgs:[
        "https://s11.mogucdn.com/mlcdn/c45406/181229_813kc2lf06hhj5jba25188cada73j_792x1323.jpg_300x9999.v1c7E.70.webp",
        "https://s11.mogucdn.com/mlcdn/c45406/190207_3f309h49l5g04532h13kj13c2f5i9_547x914.jpg_300x9999.v1c7E.70.webp",
        "https://s11.mogucdn.com/mlcdn/c45406/181227_47adh2cc6ackl6lj784dga999f6f6_756x1261.jpg_300x9999.v1c7E.70.webp"
        ],
    brand: [
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180831_76i4gcdf54le01f3blef22lc8adg5_567x567.png_200x200.jpg",title:'adidas Originals'},
        {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
        {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
        {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
        {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
        ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/180919_6a3khfe7a4ll7c17eck3cjj1ldi7b_132x132.jpg',
          username: '是小君儿呀',
          height: '176',
          weight: '42',
          address: '上海',
          work: '学生博主',
      vermicelli :'600',
      attention :'10',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
            ],
    
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/181127_8al0h412331i0h6k81a3b9j147e0a_366x108.png',
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190219_660eicikd981f16ehe7hbg8ahbfg1_526x878.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190221_14e7dd6haj2c7g08j9ic1b509djl7_596x995.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190308_69jjhbk5ai648a8ihcef4llbhjgje_708x1183.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/190301_2ig7a8f07h30c675c09l9fg36bbbh_400x400.jpg',
          username: 'InsSaki',
          height: '176',
          weight: '53',
          address: '广州',
          work: '博主',
      vermicelli :'30.9万',
      attention :'60',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190225_7dg3gcbi72gkljebka3ja0efkaf94_822x1373.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190312_7315bif1ah7ifb8il5ecgdk21bfcl_635x877.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190308_6ll111ich5kbhj0he8i192g2eaf3k_840x1401.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181019_762la2ldid1hk29lffdd8gi1idggb_400x400.jpg',
          username: '金金范s',
          height: '178',
          weight: '55',
      address: '杭州',
      work: '服装设计师',
      vermicelli :'3790',
      attention :'8',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190306_0e7j03hj74il2ad1ee76j0ghgaajb_244x407.jpg_999x999.v1c0.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190212_4hkhjlk5glcd8k6a6e2ei83a1licd_656x1096.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190319_6d93jj8i7je326kk3eaekck1377f3_220x369.jpg_999x999.v1c0.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180830_69ck3151fk37b0a77e2di9e89cd6c_324x324.png_200x200.jpg",title:'FFAN泛泛'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/190102_2e360j91fa76g46g918hi3cfb65h6_400x400.jpg',
          username: '黛西儿_',
          height: '181',
          weight: '59',
          address: '常州',
          work: '模特',
      vermicelli :'1.2万',
      attention :'9',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/180903_1c420894d4k261kk4gjf9bk2kei3b_366x108.png',
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190302_5leclg5592k2k286dkh3dgkb2cghl_142x236.jpg_999x999.v1c0.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190314_0fjlcic4l2c2f6lj19f3d58ld5f3e_530x883.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190314_6j5f042fg15h7d7h96j5lgih80d30_604x1009.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/181203_54g8d66e5g1d0j1hg1244615g2cia_312x312.png_200x200.jpg",title:'夏梵尼'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_8fg3i6ke4l842gk636gg5ef547ek7_220x221.png_200x200.jpg",title:'SWAROVSKI'}
            
            
          ]
        },
        {
          userimg: 'https://s3.mogucdn.com/mlcdn/5abf39/190305_3icfkaekd3ck83k2ac2a4g00l358c_400x400.jpg',
          username: 'SINCE THEN',
          height: '180',
          weight: '57',
          address: '常州',
          work: '模特',
      vermicelli :'5.4万',
      attention :'22',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
      ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190218_2171jge813c11k6dg5il9dj9jj8lh_573x953.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190228_322fb1899k4f45e184aj77fi4j0a7_588x980.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190217_29f0gffa45ebb1ebfbjkcecf3i211_540x900.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180831_76i4gcdf54le01f3blef22lc8adg5_567x567.png_200x200.jpg",title:'adidas Originals'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/180624_0j5c97cg2fjhh1ki3e47l620h12ga_400x400.jpg',
          username: '兔斯基Kayi',
          height: '158',
          weight: '42',
          address: '广州',
          work: '摄影师',
      vermicelli :'3.1万',
      attention :'36',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s3.mogucdn.com/mlcdn/c45406/190314_1b2k3ijk47jhalc1i5bf31720g5g7_344x573.png_999x999.v1c0.100.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190319_71fa216bk87ji42efl0h2a6jcg7id_570x953.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190314_1b2k3ijk47jhalc1i5bf31720g5g7_344x573.png_999x999.v1c0.100.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181027_512ecbh9356lbg0khli5e1j87cdgk_400x400.jpg',
          username: '你的李老师',
          height: '161',
          weight: '42',
          address: '杭州',
          work: '学生',
      vermicelli :'1.1万',
      attention :'39',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/180903_1c420894d4k261kk4gjf9bk2kei3b_366x108.png',
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190312_3idh1d4d004hl3l0986ak7g64995g_858x1432.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/181226_70igahkl5f607h3fh64e6f948ccgl_873x1454.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190209_193c19fij3a66fd41fa2jj33bka63_809x1352.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/c45406/190315_64813hhl7j1b212c941a07fa6ej63_262x261.png',
          username: '升温了,大长腿我先露为敬',
          height: '160',
          weight: '43',
          address: '长沙',
          work: '自由职业',
      vermicelli :'2.9万',
      attention :'137',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190312_4j166f3c5k732gk5898l1ek4g1588_784x1308.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190312_12gf44l64l4lh0a1i925016g08c5a_448x748.jpg_300x9999.v1c7E.70.webp",
            "https://s5.mogucdn.com/mlcdn/c45406/190306_6ahjifbi87jgl41ic7f260b047fbl_440x736.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'}
            
          ]
        },
        {
          userimg: 'https://s5.mogucdn.com/mlcdn/5abf39/180202_02d69052608j27llah13375kab22g_959x959.jpg',
          username: 'kluoyi',
          height: '160',
          weight: '46',
          address: '深圳',
          work: '学生',
      vermicelli :'3670',
      attention :'18',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/180903_1c420894d4k261kk4gjf9bk2kei3b_366x108.png',
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190214_4l42dje8alk8cfl5ikhl33l7a8bj4_444x743.png_999x999.v1c0.100.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190308_47447i0ak369bk0f10id815l1bhg9_479x798.png_999x999.v1c0.100.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190315_23e69ebak2gk38hc0ale49ia49d2k_518x865.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s5.mogucdn.com/mlcdn/5abf39/190122_88cdggi83e3lh46e4ac4adg0i36jj_400x400.jpg',
          username: '简小爱JONBAG',
          height: '169',
          weight: '49',
          address: '天津',
          work: '店主',
      vermicelli :'2078',
      attention :'18',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s3.mogucdn.com/mlcdn/c45406/190304_217jg4h918iadd2c0ae90644h6317_484x807.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190103_3cd5kfdcal7a7b3120j757g5d9cla_566x946.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190216_5ig5cli25i5a2f1d5gkha66hjg9ik_639x1066.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/190227_5cfc3j8c6kg3hgjbb7a8b24adkc1l_400x400.jpg',
          username: 'Julie200604',
          height: '160',
          weight: '47',
          address: '苏州',
          work: '摄影师',
      vermicelli :'7006',
      attention :'8',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s5.mogucdn.com/mlcdn/c45406/181130_7828g15h058i6k119102481ahbbi8_554x926.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190206_18hgf4fi79kid32a5jec20fdi477a_920x1534.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190221_1hakb8dd25ck764ka1e6d3b5i5bbc_836x1396.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180831_76i4gcdf54le01f3blef22lc8adg5_567x567.png_200x200.jpg",title:'adidas Originals'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181113_6c0j2g0ah12ijf44cg84d0j5k39g2_400x400.jpg',
          username: '栗子少女_kukuri26',
          height: '165',
          weight: '53',
          address: '杭州',
          work: '设计师',
      vermicelli :'6.8万',
      attention :'86',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/181127_18g2657bahl6820gj95cc8i9hdjke_922x1537.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/181108_0fi57l18badki13klf5facff95850_938x1566.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190320_2cihh1ldi12jabf4eh8e2df445h9k_662x1104.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/181108_11k71g6kak51a0g5k8cile826i89k_232x232.png_200x200.jpg",title:'H&M'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/c45406/190315_6e5j734ck1f5j9h5i2d729lc872fd_250x250.jpg',
          username: '实用简约主义这么穿',
          height: '166',
          weight: '49',
          address: '泉州',
          work: '学生妹',
      vermicelli :'3.3万',
      attention :'32',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190314_0ah34a30i8b3g527d1b6l25li58id_645x1074.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190314_8e1khdff81k4472l3hb8l60541g6k_776x1296.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190315_5gkehb41b3d8j9e7egjl31ieegl16_556x928.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'}
            
          ]
        },
        {
          userimg: 'https://s5.mogucdn.com/mlcdn/5abf39/190124_0dgb2j6g7ka54g1i3lg6i3gd5c5di_400x400.jpg',
          username: '一郑钰莹',
          height: '166',
          weight: '49',
          address: '深圳',
          work: 'limone原创店',
      vermicelli :'1.8万',
      attention :'16',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s5.mogucdn.com/mlcdn/c45406/190227_7c6g86a30h3j691ehkb9db8lc6a71_802x1339.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190128_3911al4acbf2h379707a128379hl6_884x1475.jpg_300x9999.v1c7E.70.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/181101_4lhh84b61akhf32iel2l0chil4di4_750x1251.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/190128_85477g4i45d022862gklj527dj52i_283x283.png_200x200.jpg",title:'ZARA'},
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/180923_497f1614i4a614500ccfh44d11ec2_400x400.jpg',
          username: '我是chen依依啊',
          height: '1688',
          weight: '48',
          address: '长沙',
          work: '时尚店主',
      vermicelli :'3786',
      attention :'39',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/181107_5ea6gb0gb407effig315hjdkhab4i_626x1045.jpg_300x9999.v1c7E.70.webp",
            "https://s5.mogucdn.com/mlcdn/c45406/181020_5gfeh9e0h4d53ack053j49202lcdf_814x1357.png_999x999.v1c0.100.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/181116_2bhdbi06gb0hj10lhaf4kajk7f6df_798x1333.png_999x999.v1c0.100.webp"
          ],
          brand: [
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181221_56f305ll4kb676bbebk2igfkik6a7_400x400.jpg',
          username: '是小君儿呀',
          height: '162',
          weight: '46',
          address: '广州',
          work: '博主',
      vermicelli :'9.5万',
      attention :'35',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/190222_0k33i83ab7d6588bf2lb4eagk6ih8_247x410.jpg_999x999.v1c0.webp",
            "https://s3.mogucdn.com/mlcdn/c45406/190226_3j5g7i15k3a9clb8kl32kf46ehh8a_162x271.jpg_999x999.v1c0.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/190303_62482j4di05ecfd2aeih130fa7gke_252x420.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180903_04cg32lg5j7a66be629d9c4jbdd99_286x287.png_200x200.jpg",title:'GUCCI'}
            
          ]
        },
        {
          userimg: 'https://s11.mogucdn.com/mlcdn/5abf39/181018_54j1i0ejah0lfjlh5hjcij7ff61kc_400x400.jpg',
          username: '石原桃美',
          height: '161',
          weight: '47',
          address: '南京',
          work: '模特',
      vermicelli :'1.7万',
      attention :'139',
      label:['脑袋以下全是腿',
              '就是穿啥都美',
              '气场1米8',
              '全世界最可爱',
              '运动',
        ],
    
      usernameimg:'https://s10.mogucdn.com/mlcdn/c45406/180903_1c420894d4k261kk4gjf9bk2kei3b_366x108.png',
          userimgs:[
            "https://s11.mogucdn.com/mlcdn/c45406/181107_3al7e19d8262a65kf960292efebc8_838x1396.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/181107_2220i682jh3h2b79df6dji0kbbcf6_800x1336.jpg_300x9999.v1c7E.70.webp",
            "https://s11.mogucdn.com/mlcdn/c45406/181027_19g8akgakj7jhf57h4kbd5jj47cg0_688x1149.jpg_300x9999.v1c7E.70.webp"
          ],
          brand: [
            {url:"https://s3.mogucdn.com/mlcdn/0ffcd9/180827_4dlhi24jk55a3j5762gkfjc2filf2_255x255.png_200x200.jpg",title:'PRADA'},
            {url:"https://s11.mogucdn.com/mlcdn/0ffcd9/180920_2ifaljedeaadiig521f2jeie128a4_136x136.png_200x200.jpg",title:'CONVERSE'}
            
          ]
        }
      ]
  
  }
  ]
  res.send(data);
});
//商城

/* GET home page. */
router.get('/remen', function (req, res, next) {
  var arr = [
    [
      {
        "img":'https://s3.mogucdn.com/mlcdn/c45406/180913_5j8224i641fff8cc965k99kcc14id_640x960.jpg_360x480.v1cAC.40.webp',
        "title":'光腿保暖神器',
        "desc":'秋冬季连裤袜，防勾丝袜加绒加厚美腿连裤袜~超逼真超自然哟~',
        "oprice":'新品价',
        "price":' ¥49.00 ',
        "btn":'立即购买'
      },
      {
        "img":'https://s3.mogucdn.com/mlcdn/c45406/180922_8342l242c7kd77chl82h8h4688k1f_640x960.jpg_360x480.v1cAC.40.webp',
        "title":'复古圆环紧身打底裤',
        "desc":'高腰敲显身材，小脚铅笔裤修饰腿型。秋冬季百搭各类上装哦~保暖不臃肿，百搭显瘦！',
        "oprice":'新品价',
        "price":' ¥65.00 ',
        "btn":'立即购买'
      },
      {
        "img":'https://s3.mogucdn.com/mlcdn/c45406/171014_8119b22def6c3695g9l4h4j3b63hg_640x960.jpg_360x480.v1cAC.40.webp',
        "title":'百搭九分弹力魔术裤',
        "desc":'瘦腿提臀高腰显瘦的经典打底裤 .  多款可选  。精致双车线，用料实在，结实耐穿。',
        "oprice":'新品价',
        "price":' ¥49.90 ',
        "btn":'立即购买'
      },
      {
        "img":'https://s3.mogucdn.com/mlcdn/c45406/181118_1dfbgl902id96hkbgkd1036l76d0f_640x960.jpg_360x480.v1cAC.40.webp',
        "title":'加绒加厚打底裤',
        "desc":'巨显瘦不起球魔术裤，不抽丝，不起球。回弹性好 ，不容易变形，质量有保障！',
        "oprice":'新品价',
        "price":' ¥68.60 ',
        "btn":'立即购买'
      }
    ],
    [
      {
        "img":'https://s17.mogucdn.com/mlcdn/c45406/170814_2ja0g3332ge6bl967j2aggbdd0faa_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'2019年春夏新款显瘦韩版打底裤外穿长裤女黑色铅笔裤高腰九分裤仿牛仔裤百搭打底小脚裤女裤子'
      },
      {
        "img":'https://s18.mogucdn.com/mlcdn/c45406/171207_197i610ijclg3c83f2i4a49ei781a_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥49.00',
        "title":'加绒打底裤冬季2018新款女外穿加厚显瘦修身光腿保暖裤神器踩脚裤'
      },
      {
        "img":'https://s11.mogucdn.com/mlcdn/c45406/181006_81dccc2f0la27g7932447cgjhb521_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥33.90',
        "title":'打底裤女外穿2018秋冬季光腿神器加绒加厚一体裤袜踩脚保暖裤'
      },
      {
        "img":'https://s17.mogucdn.com/mlcdn/c45406/171203_6gg8b5dd9fl63250383k2cligkd5c_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'2019年春夏新款显瘦韩版打底裤外穿长裤女黑色铅笔裤高腰九分裤仿牛仔裤百搭打底小脚裤女裤子'
      },
      {
        "img":'https://s18.mogucdn.com/mlcdn/c45406/180913_1h8bd1gkh25l6fge6li7j80637233_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'2019年春夏新款显瘦韩版打底裤外穿长裤女黑色铅笔裤高腰九分裤仿牛仔裤百搭打底小脚裤女裤子'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/170928_4gcgkk89e442491kfe87balafi6g8_790x1123.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'2019年春夏新款显瘦韩版打底裤外穿长裤女黑色铅笔裤高腰九分裤仿牛仔裤百搭打底小脚裤女裤子'
      },
      {
        "img":'https://s2.mogucdn.com/p2/161127/63004282_5kf40815di4lij4f9e5576c3dk1kg_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'2019年春夏新款显瘦韩版打底裤外穿长裤女黑色铅笔裤高腰九分裤仿牛仔裤百搭打底小脚裤女裤子'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      },
      {
        "img":'https://s2.mogucdn.com/mlcdn/c45406/181011_3i1kd64faa0cb7fe6g6118hc1l398_640x960.jpg_360x480.v1cAC.40.webp',
        "price":'￥28.00',
        "title":'秋冬新款高腰提臀加厚加绒竖条纹螺纹纯棉保暖一体裤显瘦打底裤袜'
      }
    ],
    [
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      },
      {
        "img":'https://s10.mogucdn.com/mlcdn/c45406/181016_0k381fjl6b2d6i5j84biibh55a4ea_750x450.jpg_999x999.v1c0.webp'
      }
    ]
  ]
  res.send(arr)
})
router.get('/store', function(req, res, next) {
 var getstoreArr = [
    [
       {imgurl1:'https://s10.mogucdn.com/mlcdn/c45406/180918_4fab0c58k47f54395gb7didb5b6ib_165x165.png',imgurl2:'https://s11.mogucdn.com/mlcdn/1689c6/190316_1k9c2j1e8l955j874ik6l7b4602k9_210x280.png',title:'风尚快抢'},
       {imgurl1:'https://s10.mogucdn.com/mlcdn/c45406/190305_230cjd1174jj8be3e8fk51e26aiel_248x248.png',title:'热销榜单'},
       {imgurl1:'https://s10.mogucdn.com/mlcdn/c45406/190308_09al5kkaikg82f59dj8bieh0beak3_248x248.png',title:'好货精选'},
       {imgurl1:'https://s10.mogucdn.com/mlcdn/c45406/190306_3c67egb4jfhfgdhce16g07h50ha92_248x248.png',title:'新品快抢'}
    ],
    [
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181018_7fljb563cceb6i15kl84jkh39ek5j_100x100.jpg_640x640.v1cAC.40.webp',title:'女装'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181018_6f97gkfb8h9i8dbc2iba2bj8fd83e_100x100.jpg_640x640.v1cAC.40.webp',title:'上衣'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190312_09h3igjigfefdl9c223haf8daf5f1_120x120.jpg_640x640.v1cAC.40.webp',title:'裙子'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190202_5c2i6ch488h51hifkg68ej5kd2l28_100x100.jpg_640x640.v1cAC.40.webp',title:'裤子'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180903_7g79dk79344h192b48dich6ia50k2_180x180.jpg_640x640.v1cAC.40.webp',title:'套装'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180827_5if9f4ek2cg0e5da5bc8l39la6ja5_100x100.png_640x640.v1cAC.40.webp',title:'男友'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181228_6jbl9kc9ld3gb51iffkh0cjgbgke0_200x200.png_640x640.v1cAC.40.webp',title:'家居'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190213_20d2bee792f231i1ka61k7k7le5ea_100x100.jpg_640x640.v1cAC.40.webp',title:'母婴'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181228_3542d29dl2b1a989k0ajhj69i109e_200x200.png_640x640.v1cAC.40.webp',title:'食品'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190107_687e8gegbfa1b65ie155a32dkg6b3_100x100.jpg_640x640.v1cAC.40.webp',title:'运动'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180913_7f0h850ka9lheefa1bj1b47fci1g4_100x100.jpg_640x640.v1cAC.40.webp',title:'男友'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190301_2g061l9bf0a1lji64hjegj89b3k0h_400x400.jpg_640x640.v1cAC.40.webp',title:'家居'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181221_0fh9a8kbfe18cg19i9fche7j27a9c_100x100.jpg_640x640.v1cAC.40.webp',title:'母婴'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181228_7b64i3432akid3lb9c3alhf58g9k1_200x200.png_640x640.v1cAC.40.webp',title:'食品'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180827_521b50739781fde2cd2jeff0h2hdj_100x100.jpg_640x640.v1cAC.40.webp',title:'运动'}
    ],
    [
      {title:'流行元素'},
      [
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190114_78c90b0fk84ghedl0c477bgf1a7e9_160x120.png',title:'省心两件套'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181016_218684d3b23cd920fjelf5ji90l9d_160x120.png',title:'chic衬衫'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180817_0fbfg0l9298gjfcf1d6l0d2e68b0g_160x120.png',title:'藏肉阔腿裤'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180817_725669332g917agbiblkh3l9a1ll0_160x120.png',title:'时尚戒指'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/190114_597bkc7e7fih0a3dkc66l865lb8ef_160x120.png',title:'懒人三件套'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/181016_36c1cb4b5hd7ijj18bj1dk1f2j43f_160x120.png',title:'长款卫衣'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180831_181c1bb9fdacf1j92c0b2dff10fhh_160x120.png',title:'项链'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180817_29h6f1i5k52441df47h68gdk61j5h_160x120.png',title:'舒适孕妇裤'},
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180903_6g4hh1ki44619kd27k3akfh878f0e_160x120.png',title:'省心两件套'},

      ]
    ],
    [
       {imgurl:'https://s10.mogucdn.com/mlcdn/c45406/180904_79g7dd4id14ii77j2hd068li89i2i_2154x222.png_1200x9999.v1c7E.webp'},
       [
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190225_3ijceidhf98h7h96l8b3la6bj50j1_640x900.jpg_640x854.v1cAC.40.webp',buyed:'248',discribe:'2019春上新款潮牛仔外套女短款宽松韩版学生百搭上衣原宿秋装流行+打底衫百褶裙子三件套装',price:'46.9',start:'1357'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190214_19ge2be2ja96klj68h1l2d31j78d5_640x960.jpg_640x854.v1cAC.40.webp',buyed:'1600',discribe:'春装2019新款糖果色t恤女短袖学生宽松潮韩范ins半袖打底衫上衣服 色',price:'23.9',start:'2758'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180921_1756dgf8c49d2b4737f9afc5i90k0_640x960.jpg_640x854.v1cAC.40.webp',buyed:'524',discribe:'显瘦显高松紧腰设计高腰牛仔裤女休闲牛仔裤宽松哈伦裤2019新款韩版显瘦老爹裤九分萝卜裤女裤',price:'79.9',start:'3151'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180328_3l73dgd91d9gellba4l76eki4jd6b_640x960.jpg_640x854.v1cAC.40.webp',buyed:'486',discribe:'2019春装新款棉麻九分裤宽松哈伦裤大码松紧腰女裤大码休闲裤',price:'63',start:'6441'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_3j31kb46cl39432780c4g29ja395l_800x1200.jpg_640x854.v1cAC.40.webp',buyed:'202',discribe:'春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套',price:'63',start:'809'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190223_76h9lj53gebd5kg4336j8kgladk78_640x960.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'【韩版时尚】chic时尚风衣学生女装春季2019新款修身显瘦百搭中长款薄款外套',price:'89.8',start:'96'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_65bk399lkcd51a7kb4i3ciefd8e83_640x854.jpg_640x854.v1cAC.40.webp',buyed:'188',discribe:'吊带连衣裙春装气质微胖显瘦仙女裙夏季女装新款裙子2019春季闺蜜装长裙针织夏装黑色背带裙',price:'69',start:'1005'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180319_0ifa5590a37iej1keigdgg9f664l7_640x960.jpg_640x854.v1cAC.40.webp',buyed:'648',discribe:'ins超火的鞋子女老爹鞋2018春季新款休闲运动鞋ulzzang厚底小白鞋',price:'69',start:'1.3w'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190114_2dch1j266i46lij5igig54gk20j55_640x960.jpg_640x854.v1cAC.40.webp',buyed:'72',discribe:'运动鞋男鞋春季2019新款飞织网面鞋男士潮流休闲鞋男韩版鞋子男百搭厚底鞋男时尚跑步鞋男潮鞋',price:'89.6',start:'75'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_0lc76bfk3a74e3j6kh3d0fb3l36ha_640x962.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'妈妈装春装新款长袖T恤中年女装中长款打底小衫宽松加肥大码上衣',price:'68.6',start:'14'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190225_3ijceidhf98h7h96l8b3la6bj50j1_640x900.jpg_640x854.v1cAC.40.webp',buyed:'248',discribe:'2019春上新款潮牛仔外套女短款宽松韩版学生百搭上衣原宿秋装流行+打底衫百褶裙子三件套装',price:'46.9',start:'1357'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190214_19ge2be2ja96klj68h1l2d31j78d5_640x960.jpg_640x854.v1cAC.40.webp',buyed:'1600',discribe:'春装2019新款糖果色t恤女短袖学生宽松潮韩范ins半袖打底衫上衣服 色',price:'23.9',start:'2758'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180921_1756dgf8c49d2b4737f9afc5i90k0_640x960.jpg_640x854.v1cAC.40.webp',buyed:'524',discribe:'显瘦显高松紧腰设计高腰牛仔裤女休闲牛仔裤宽松哈伦裤2019新款韩版显瘦老爹裤九分萝卜裤女裤',price:'79.9',start:'3151'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180328_3l73dgd91d9gellba4l76eki4jd6b_640x960.jpg_640x854.v1cAC.40.webp',buyed:'486',discribe:'2019春装新款棉麻九分裤宽松哈伦裤大码松紧腰女裤大码休闲裤',price:'63',start:'6441'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_3j31kb46cl39432780c4g29ja395l_800x1200.jpg_640x854.v1cAC.40.webp',buyed:'202',discribe:'春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套',price:'63',start:'809'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190223_76h9lj53gebd5kg4336j8kgladk78_640x960.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'【韩版时尚】chic时尚风衣学生女装春季2019新款修身显瘦百搭中长款薄款外套',price:'89.8',start:'96'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_65bk399lkcd51a7kb4i3ciefd8e83_640x854.jpg_640x854.v1cAC.40.webp',buyed:'188',discribe:'吊带连衣裙春装气质微胖显瘦仙女裙夏季女装新款裙子2019春季闺蜜装长裙针织夏装黑色背带裙',price:'69',start:'1005'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180319_0ifa5590a37iej1keigdgg9f664l7_640x960.jpg_640x854.v1cAC.40.webp',buyed:'648',discribe:'ins超火的鞋子女老爹鞋2018春季新款休闲运动鞋ulzzang厚底小白鞋',price:'69',start:'1.3w'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190114_2dch1j266i46lij5igig54gk20j55_640x960.jpg_640x854.v1cAC.40.webp',buyed:'72',discribe:'运动鞋男鞋春季2019新款飞织网面鞋男士潮流休闲鞋男韩版鞋子男百搭厚底鞋男时尚跑步鞋男潮鞋',price:'89.6',start:'75'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_0lc76bfk3a74e3j6kh3d0fb3l36ha_640x962.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'妈妈装春装新款长袖T恤中年女装中长款打底小衫宽松加肥大码上衣',price:'68.6',start:'14'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190225_3ijceidhf98h7h96l8b3la6bj50j1_640x900.jpg_640x854.v1cAC.40.webp',buyed:'248',discribe:'2019春上新款潮牛仔外套女短款宽松韩版学生百搭上衣原宿秋装流行+打底衫百褶裙子三件套装',price:'46.9',start:'1357'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190214_19ge2be2ja96klj68h1l2d31j78d5_640x960.jpg_640x854.v1cAC.40.webp',buyed:'1600',discribe:'春装2019新款糖果色t恤女短袖学生宽松潮韩范ins半袖打底衫上衣服 色',price:'23.9',start:'2758'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180921_1756dgf8c49d2b4737f9afc5i90k0_640x960.jpg_640x854.v1cAC.40.webp',buyed:'524',discribe:'显瘦显高松紧腰设计高腰牛仔裤女休闲牛仔裤宽松哈伦裤2019新款韩版显瘦老爹裤九分萝卜裤女裤',price:'79.9',start:'3151'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180328_3l73dgd91d9gellba4l76eki4jd6b_640x960.jpg_640x854.v1cAC.40.webp',buyed:'486',discribe:'2019春装新款棉麻九分裤宽松哈伦裤大码松紧腰女裤大码休闲裤',price:'63',start:'6441'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_3j31kb46cl39432780c4g29ja395l_800x1200.jpg_640x854.v1cAC.40.webp',buyed:'202',discribe:'春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套',price:'63',start:'809'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190223_76h9lj53gebd5kg4336j8kgladk78_640x960.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'【韩版时尚】chic时尚风衣学生女装春季2019新款修身显瘦百搭中长款薄款外套',price:'89.8',start:'96'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_65bk399lkcd51a7kb4i3ciefd8e83_640x854.jpg_640x854.v1cAC.40.webp',buyed:'188',discribe:'吊带连衣裙春装气质微胖显瘦仙女裙夏季女装新款裙子2019春季闺蜜装长裙针织夏装黑色背带裙',price:'69',start:'1005'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180319_0ifa5590a37iej1keigdgg9f664l7_640x960.jpg_640x854.v1cAC.40.webp',buyed:'648',discribe:'ins超火的鞋子女老爹鞋2018春季新款休闲运动鞋ulzzang厚底小白鞋',price:'69',start:'1.3w'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190114_2dch1j266i46lij5igig54gk20j55_640x960.jpg_640x854.v1cAC.40.webp',buyed:'72',discribe:'运动鞋男鞋春季2019新款飞织网面鞋男士潮流休闲鞋男韩版鞋子男百搭厚底鞋男时尚跑步鞋男潮鞋',price:'89.6',start:'75'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_0lc76bfk3a74e3j6kh3d0fb3l36ha_640x962.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'妈妈装春装新款长袖T恤中年女装中长款打底小衫宽松加肥大码上衣',price:'68.6',start:'14'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190225_3ijceidhf98h7h96l8b3la6bj50j1_640x900.jpg_640x854.v1cAC.40.webp',buyed:'248',discribe:'2019春上新款潮牛仔外套女短款宽松韩版学生百搭上衣原宿秋装流行+打底衫百褶裙子三件套装',price:'46.9',start:'1357'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190214_19ge2be2ja96klj68h1l2d31j78d5_640x960.jpg_640x854.v1cAC.40.webp',buyed:'1600',discribe:'春装2019新款糖果色t恤女短袖学生宽松潮韩范ins半袖打底衫上衣服 色',price:'23.9',start:'2758'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180921_1756dgf8c49d2b4737f9afc5i90k0_640x960.jpg_640x854.v1cAC.40.webp',buyed:'524',discribe:'显瘦显高松紧腰设计高腰牛仔裤女休闲牛仔裤宽松哈伦裤2019新款韩版显瘦老爹裤九分萝卜裤女裤',price:'79.9',start:'3151'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180328_3l73dgd91d9gellba4l76eki4jd6b_640x960.jpg_640x854.v1cAC.40.webp',buyed:'486',discribe:'2019春装新款棉麻九分裤宽松哈伦裤大码松紧腰女裤大码休闲裤',price:'63',start:'6441'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_3j31kb46cl39432780c4g29ja395l_800x1200.jpg_640x854.v1cAC.40.webp',buyed:'202',discribe:'春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套',price:'63',start:'809'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190223_76h9lj53gebd5kg4336j8kgladk78_640x960.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'【韩版时尚】chic时尚风衣学生女装春季2019新款修身显瘦百搭中长款薄款外套',price:'89.8',start:'96'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_65bk399lkcd51a7kb4i3ciefd8e83_640x854.jpg_640x854.v1cAC.40.webp',buyed:'188',discribe:'吊带连衣裙春装气质微胖显瘦仙女裙夏季女装新款裙子2019春季闺蜜装长裙针织夏装黑色背带裙',price:'69',start:'1005'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180319_0ifa5590a37iej1keigdgg9f664l7_640x960.jpg_640x854.v1cAC.40.webp',buyed:'648',discribe:'ins超火的鞋子女老爹鞋2018春季新款休闲运动鞋ulzzang厚底小白鞋',price:'69',start:'1.3w'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190114_2dch1j266i46lij5igig54gk20j55_640x960.jpg_640x854.v1cAC.40.webp',buyed:'72',discribe:'运动鞋男鞋春季2019新款飞织网面鞋男士潮流休闲鞋男韩版鞋子男百搭厚底鞋男时尚跑步鞋男潮鞋',price:'89.6',start:'75'},
         {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190227_0lc76bfk3a74e3j6kh3d0fb3l36ha_640x962.jpg_640x854.v1cAC.40.webp',buyed:'16',discribe:'妈妈装春装新款长袖T恤中年女装中长款打底小衫宽松加肥大码上衣',price:'68.6',start:'14'}
       ]
    ],
    [ 
       [
         [
         'https://s3.mogucdn.com/mlcdn/c45406/190227_3j31kb46cl39432780c4g29ja395l_800x1200.jpg_640x960.v1cAC.70.webp',
         'https://s11.mogucdn.com/mlcdn/c45406/190227_6ed2ga22f0380940k0be3bb3hg199_800x1200.jpg_640x960.v1cAC.70.webp',
         'https://s5.mogucdn.com/mlcdn/c45406/190227_44h6jh21kka9fla9e6ed5af3f69eg_800x1200.jpg_640x960.v1cAC.70.webp',
         'https://s11.mogucdn.com/mlcdn/c45406/190227_7d8ke003ejeh70g6gaej80633kafd_800x1200.jpg_640x960.v1cAC.70.webp',
         ],
         [
          {price:'69~139',zprice:'90.00',youhui:'优惠价',describe:'春季新款韩版宽松钉珠星星短款牛仔外套女+鱼尾裙中长款V领碎花雪纺吊带裙套装两件套',isfree:'免运费',address:'广东省广州市',evalute:'10',sale:'251',himgurl:'https://s3.mogucdn.com/mlcdn/5abf39/190226_6jciaihgj2321b403ali0b329la0g_132x132.jpg_48x48.webp',htitle:'wx_nw5a15u0etc4x',descripe:'收到了挺好的，妹妹见好看，也要买一条，挺好看的，外面搭针织衫，牛仔衣都很好看呢，人家也瘦，穿出来效果了，不错质量也很好的小碎花',htime:'2019-4-12',}
         ],
         [
           'https://s11.mogucdn.com/mlcdn/c45406/190227_0e6f7e6gaf89kc2ja9f420g3e07i7_650x789.jpg_468x468.webp',
           'https://s5.mogucdn.com/mlcdn/c45406/190227_0l8ghk0g05fc3cdf1434l0ece3l1l_650x789.jpg_468x468.webp',
           'https://s5.mogucdn.com/mlcdn/c45406/190227_3h0c32791hka3ackdha296j5823a1_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_23hdhak39bi506l2ea03dkk934871_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_7ie0i0lf6cdagf69j9lhjljbdf9bf_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_1d5kkge0f3egjjd12ji62ec995b4d_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_6ja7h3djlc4e2fc9g32dachcbg6c2_650x789.jpg_468x468.webp',
           'https://s3.mogucdn.com/mlcdn/c45406/190227_8bhia8j1kkl8dkcgblebl30ge2b65_650x789.jpg_468x468.webp',
           'https://s3.mogucdn.com/mlcdn/c45406/190227_55cbe0d94lhfdilf3bdc18k3405aj_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_2lg7e13527d9l07ej52248jb20hcd_650x789.jpg_468x468.webp',
           'https://s11.mogucdn.com/mlcdn/c45406/190227_09eh23014113ea851c05lbcj174a5_650x789.jpg_468x468.webp'
         ],
         [
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/181110_5kcd1ab134fl79fhh19ile2d03kac_640x960.jpg_320x999.webp',describe:'秋冬新款韩版宽松撞色长袖套头针织毛衣+高腰显廋蓬蓬网纱半身裙套装裙两件套女',price:'¥126'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/181016_5hf253d173b6ldlg98ecc5d77f2f8_640x960.jpg_320x999.webp',describe:'秋冬新款韩版甜美宽松蝴蝶结系开叉红色套头卫衣+高腰显廋加绒加厚外穿黑色紧身打底裤套装两件套',price:'¥69'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180815_5h322cc21licib8bd33g3ehhdg1dk_640x960.jpg_320x999.webp',describe:'明星同款春季新款英伦风短款西装领双排扣格子西服外套女韩版休闲显廋气质长袖外套上衣',price:'¥109'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190213_321880bh4f3dfi82b3jha3fgf00e1_640x960.jpg_320x999.webp',describe:'春夏季新款韩版百搭字母卡通印花短袖T恤+高腰显廋洋气修身开叉格子半身裙套装裙两件套女',price:'¥96'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190212_3g5304ggbcfc1dgef73g5d7g6b313_640x960.jpg_320x999.webp',describe:'2019春季新款韩版宽松BF百搭休闲短款牛仔外套+纯色简约中长款黑色背心裙套装裙两件套女',price:'¥73'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180801_24219f0b5l3j907c4fj2i7l63cekb_640x960.jpg_320x999.webp',describe:'早秋新款韩版撞色拼接条纹长袖POLO领衬衫+防走光高腰显廋百褶半身裙套装两件套女',price:'¥59'}, 
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190221_22j3d2d611b1alhjajh4ica0d4f17_640x960.jpg_320x999.webp',describe:'夏季新款韩版纯色修身黑色短袖T恤上衣+高腰中长款小碎花荷叶边层层蛋糕半身裙套装裙两件套女',price:'¥89'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/190213_6k15bf4lhd5ghglf7dbajcbd8ejdj_640x960.jpg_320x999.webp',describe:'2019春夏季新款韩版纯色甜美超仙灯笼袖衬衫上衣+白色吊带+休闲收脚九分裤子套装三件套女',price:'¥109'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180907_3k4ig2l1b448ce829dfa6j9ea0j8l_640x960.jpg_320x999.webp',describe:'春季新款韩版宽松纯色显廋九分袖T恤+休闲高腰九分哈伦裤套装两件套女小个子',price:'¥93'},
          {imgurl:'https://s3.mogucdn.com/mlcdn/c45406/190302_4f66176fhag4lick40l7k69431e5j_800x1200.jpg_320x999.webp',describe:'春季新款小清新法国小众碎花裙子拼接蕾丝翻领高腰A字裙显瘦百褶大摆裙长袖碎花连衣裙',price:'¥105'},
          {imgurl:'https://s11.mogucdn.com/mlcdn/c45406/180917_71d23e9b8583865cle10k0j1ilf18_640x960.jpg_320x999.webp',describe:'早春新款韩版甜美俏皮粉色套头长袖流苏上衣+松紧腰刺绣网纱半身裙套装裙两件套女',price:'¥109'},
          {imgurl:'https://s3.mogucdn.com/mlcdn/c45406/181217_24h8c8ki7082986j22jhd4da1a1f3_640x960.jpg_320x999.webp',describe:'春季新款韩版甜美小个子翻领长袖条纹衬衣+高腰显廋a字网纱半身裙套装裙两件套女',price:'¥109'}
         ]

       ],
    ]
 ];
 res.send(getstoreArr);
});
//直播
router.get('/live', function(req, res, next) {
  var obj=[
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"https://s3.mogucdn.com/mlcdn/c45406/180808_0895kfj27d0kb700062hdcck2h2j8_2929x1953.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"https://s3.mogucdn.com/mlcdn/c45406/180808_0895kfj27d0kb700062hdcck2h2j8_2929x1953.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"https://s3.mogucdn.com/mlcdn/c45406/180808_0895kfj27d0kb700062hdcck2h2j8_2929x1953.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"https://s3.mogucdn.com/mlcdn/c45406/180808_0895kfj27d0kb700062hdcck2h2j8_2929x1953.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    }
  ]
  res.send(obj)
});
router.get('/hot', function(req, res, next) {
  var obj=[
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s3.mogucdn.com/mlcdn/c45406/190307_88i0icec9839kff7akjf65e9b44ka_1242x709.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s3.mogucdn.com/mlcdn/c45406/190307_88i0icec9839kff7akjf65e9b44ka_1242x709.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s3.mogucdn.com/mlcdn/c45406/190307_88i0icec9839kff7akjf65e9b44ka_1242x709.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s3.mogucdn.com/mlcdn/c45406/190307_88i0icec9839kff7akjf65e9b44ka_1242x709.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    }
  ]
  res.send(obj)
});
router.get('/wear', function(req, res, next) {
  var obj=[
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s11.mogucdn.com/mlcdn/c45406/180928_2df2dbk76aec4kf9lblhjgiaj4h97_750x750.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s11.mogucdn.com/mlcdn/c45406/180928_2df2dbk76aec4kf9lblhjgiaj4h97_750x750.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s11.mogucdn.com/mlcdn/c45406/180928_2df2dbk76aec4kf9lblhjgiaj4h97_750x750.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    },
    {
      userphoto:'http://s11.mogucdn.com/mlcdn/5abf39/190307_35h5hk6be7e5i702j6h6b6bfb8c4b_400x400.jpg_100x100.jpg',
      username:"Zing蛮大大",
      label:"https://s10.mogucdn.com/mlcdn/c45406/190311_856211bj29l5i622a45ij6fhcg53f_300x180.png_80x103.v1cAC.png",
      state:"直播中",
      moods:"14.4W",
      title:"网红款大量劲爆上新",
      banner:"http://s11.mogucdn.com/mlcdn/c45406/180928_2df2dbk76aec4kf9lblhjgiaj4h97_750x750.jpg_750x500.jpg",
      imgs:[
        'https://s11.mogucdn.com/mlcdn/55cf19/190306_4ihd15cl31kk031dg8ik27e9bch2d_640x960.jpg_100x100.jpg',
        'https://s11.mogucdn.com/mlcdn/c45406/190317_7g333j8c523106ihlgjbj091h1l79_640x960.jpg_100x100.jpg',
        'https://s5.mogucdn.com/mlcdn/c45406/190314_8h7b7ej5c70h4j4ce9gh20efcjg3k_800x800.jpg_100x100.jpg'

      ],
    comment:[
       "拍了，你穿看看",
       "我要42号",
       "都是秒杀价哦"
     ] 
    }
  ]
  res.send(obj)
});
router.get('/cart', function(req, res, next) {
    var obj=
      {
        pic:'http://s11.mogucdn.com/mlcdn/c45406/190315_2ea1k630ihild13dife1i3b3gc454_800x800.jpg_200x200.jpg" alt=""',
        id:'1号',
        name:'双眼放电的猫咪T恤（3-30天发货）',
        price:89.00,
        color:['黄色','蓝色','绿色','紫色','黑色','白色'],
        size:['S【80-95斤】','M【95-105斤】','L【105-115斤】','XL【115-130斤】'] 
      }
    res.send(obj);  
});
//分类
router.get('/fenlei', function(req, res, next) {
  var classify = [{
      "Larr": [
        "正在流行",
        "上衣",
        "裤子",
        "裙子",
        "内衣",
        "女鞋",
        "男友",
        "包包",
        "运动",
        "配饰",
        "美妆",
        "个护",
        "家居",
        "百货",
        "母婴",
        "食品"
      ]
    },
    {
      "Rarr": [{
          "imgurl": 'https://s11.mogucdn.com/mlcdn/c45406/180903_3de2717i8dj6hjjifj4d5e3a28f6e_180x180.gif_200x9999.v1c7E.webp',
          "title": "春上新"
        },
        {
          "imgurl": 'https://s17.mogucdn.com/mlcdn/c45406/190313_03alja47b63d90ll8el6d1k8bf41k_120x120.jpg_999x999.v1c0.webp',
          "title": "时尚 套装"
        },
        {
          "imgurl": 'https://s18.mogucdn.com/mlcdn/c45406/190215_553389jj21c4b4l5jl5dfeak2d9e6_120x120.jpg_999x999.v1c0.webp',
          "title": "早春外套"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/181017_1i9d6ge0ll7j58fh43fg0k26g6a2f_120x120.jpg_999x999.v1c0.webp',
          "title": "流行风衣"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/181017_7liclj4dac18a35ajah8c36a901j1_120x120.jpg_999x999.v1c0.webp',
          "title": "毛呢大衣"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190313_7fb4l50iclekd7da7jlg8chh11cc8_120x120.jpg_999x999.v1c0.webp',
          "title": "裙子套装"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190313_3c3cf754g1k1721k1337a4793i371_120x120.jpg_999x999.v1c0.webp',
          "title": "裤子套装"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190219_00c55h7c7g354h7j2di2f069kelb5_120x120.jpg_999x999.v1c0.webp',
          "title": "懒人三件套"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/181120_2dac156efh348a769ke336c1i58ed_120x120.jpg_999x999.v1c0.webp',
          "title": "毛衣"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190215_0iga4dbic9fgd5c4gd9acai2gb139_120x120.jpg_999x999.v1c0.webp',
          "title": "牛仔外套"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190215_57ji79350i2fl9hhge8b3982hje07_120x120.jpg_999x999.v1c0.webp',
          "title": "棒球服"
        },
        {
          "imgurl": 'https://s11.mogucdn.com/mlcdn/c45406/180903_3gjj68llefd9920id1242ijfaj408_120x120.png_999x999.v1c0.webp',
          "title": "连衣裙"
        },
        {
          "imgurl": 'https://s17.mogucdn.com/mlcdn/c45406/180903_11jc696d6303jflc5lahaahb12if0_120x120.jpg_999x999.v1c0.webp',
          "title": "牛仔裤"
        },
        {
          "imgurl": 'https://s18.mogucdn.com/mlcdn/c45406/181017_22clfjk46k211c96e7ke9jkg16ceb_120x120.jpg_999x999.v1c0.webp',
          "title": "百搭卫衣"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/181017_4f43jg93l5bi83a11hf8e645kebb9_120x120.jpg_999x999.v1c0.webp',
          "title": "打底衫"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/180211_78k7b1f3c0g2cgh5fib3afgi9gehd_120x120.png_999x999.v1c0.webp',
          "title": "休闲裤"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190109_30620a2if4li1lakb4250dhi56229_120x120.jpg_999x999.v1c0.webp',
          "title": "卫衣男"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/190218_2b65e3khd42fi5l8h0g62k3f002hi_120x120.png_999x999.v1c0.webp',
          "title": "夹克男"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/181123_6fi07faaae85jh8k36b95k23chh4e_120x120.jpg_999x999.v1c0.webp',
          "title": "衬衫男"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/180613_1hkc4klbjlejil2k1jklhfc57515f_120x120.jpg_999x999.v1c0.webp',
          "title": "T恤衫"
        },
        {
          "imgurl": 'https://s11.mogucdn.com/mlcdn/c45406/181122_49jhlaikbf36il2ga4b1ff37i46kd_120x120.jpg_999x999.v1c0.webp',
          "title": "休闲裤男"
        },
        {
          "imgurl": 'https://s17.mogucdn.com/mlcdn/c45406/181122_7h6833ih29gbkfg8344gd6lafh6gj_120x120.jpg_999x999.v1c0.webp',
          "title": "牛仔裤男"
        },
        {
          "imgurl": 'https://s18.mogucdn.com/mlcdn/c45406/180523_8f53b86fafljll11hjh4b8i0h9i10_120x120.png_999x999.v1c0.webp',
          "title": "男鞋"
        },
        {
          "imgurl": 'https://s2.mogucdn.com/mlcdn/c45406/180731_5a5d7ci9l24l256k06k0a35dg3g76_120x120.jpg_999x999.v1c0.webp',
          "title": "单鞋"
        }
      ]
    },
    {
      "zonghe": [{
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/181124_4g5hcbdi7j8217a47dd1j68kdie4f_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "WIS水润面膜24片补水保湿面膜贴去印收缩毛孔抖音同款男女正品",
          "p_price": 98.8,
          "p_feed": 13104,
          "bo_pv": 3944
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/180310_3kf8a7a3a05hjhclcjgg20llcd610_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "买一件送一件 买一套送一套 秋冬性感聚拢无痕无钢圈文胸套装少女学生上托胸罩收副乳调整型内衣",
          "p_price": 39.9,
          "p_feed": 9114,
          "bo_pv": 2407
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/190227_57518flk89k975ki60e9d8ajkb8fj_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "2019春季新款复古英伦风一粒扣黑色网红小西装女chic休闲气质外套",
          "p_price": 99,
          "p_feed": 2088,
          "bo_pv": 1599
        },
        {
          "imgurl": "https://s11.mogucdn.com/mlcdn/c45406/190224_5bfagg97elg18h161a5l1kj433726_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "单鞋女2019春季新款百搭浅口尖头平底鞋女金属扣软底平跟晚晚仙女鞋",
          "p_price": 63.3,
          "p_feed": 2384,
          "bo_pv": 1383
        },
        {
          "imgurl": "https://s17.mogucdn.com/mlcdn/c45406/190216_7526e763b7chkkl8713i2ali85949_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "【买7送5】韩熙贞化妆品超值美妆套装初学者淡妆裸妆彩妆全套",
          "p_price": 139,
          "p_feed": 29267,
          "bo_pv": 277
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/181208_8al1igkfaac2ada13745a3jc0dj89_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "买2送1 10支装美白淡斑面部精华液安瓶淡化色斑补水保湿祛斑收缩毛孔提亮肤色",
          "p_price": 59.9,
          "p_feed": 3472,
          "bo_pv": 2430
        },
        {
          "imgurl": "https://s18.mogucdn.com/mlcdn/17f85e/180710_14gjh5fihf7086021c3ca68494b9j_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "【79选3件】依莱丽六色眼影盘哑光大地色酒红色防水自然初学者眼影少女系桃花妆三色彩妆盘正品",
          "p_price": 29,
          "p_feed": 1438,
          "bo_pv": 1259
        }
      ]
    },
    {
      "xiaoliang": [{
          "imgurl": "https://s18.mogucdn.com/mlcdn/c45406/190226_78dj964782e04782j2le6d63g023a_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "WIS水润面膜24片补水保湿面膜贴去印收缩毛孔抖音同款男女正品",
          "p_price": 98,
          "p_feed": 51150,
          "bo_pv": 3944
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/180310_1501k58j30h9ikfei7gakd67c75i0_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "买一件送一件 买一套送一套 秋冬性感聚拢无痕无钢圈文胸套装少女学生上托胸罩收副乳调整型内衣",
          "p_price": 39.9,
          "p_feed": 9411,
          "bo_pv": 2407
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/190220_7g70g9d4bdalf0ej8d7l77l1b4752_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "水做的防晒！！W.Lab水光防晒乳隔离啫喱霜spf50清爽防水50ml",
          "p_price": 788,
          "p_feed": 766,
          "bo_pv": 5217
        },
        {
          "imgurl": "https://s18.mogucdn.com/mlcdn/55cf19/190226_5hc8a1l897601601jcai0de9fj6ad_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "轻熟洋气2019新款春季女装时髦套装裙钉珠网纱裙子气质长裙时尚三件套",
          "p_price": 39.9,
          "p_feed": 3617,
          "bo_pv": 640
        }
      ]
    },
    {
      "xinpin": [{
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/190323_3k3999b13d1j2b1314cfkj0048k1l_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "2019新款韩版春款原宿风复古ulzzang帆布鞋女学生百搭透气平底小白鞋文艺小清新白球鞋",
          "p_price": 75,
          "p_feed": 0,
          "bo_pv": 0
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/190323_2b08adcg66b29j6fh0ehd6jc00jk4_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "2019夏季新款宽松复古印花女装三件套无袖背心T恤小脚裤+休闲长款雪纺披肩外披套装潮",
          "p_price": 188,
          "p_feed": 0,
          "bo_pv": 0
        },
        {
          "imgurl": "https://s2.mogucdn.com/mlcdn/c45406/190323_3a667he6g8bbiche0f931de8430l1_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "儿童袜子春秋薄款女童舞蹈袜纯白色公主花边袜春夏季网眼棉短丝袜",
          "p_price": 18.9,
          "p_feed": 0,
          "bo_pv": 0
        },
        {
          "imgurl": "https://s11.mogucdn.com/mlcdn/c45406/190323_15ke78hef2352e7jll76a4159fdhi_640x960.jpg_480x640.v1cAC.40.webp",
          "goods_name": "夏季 短袖可外穿大码女装纯棉产后孕妇装哺乳衣孕妇家居睡衣月子服",
          "p_price": 86,
          "p_feed": 0,
          "bo_pv": 0
        }
      ]
    }
  ]
  res.send(classify);
});

module.exports = router;
