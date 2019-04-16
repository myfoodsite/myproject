var mongoose = require("mongoose"),
    food     = require("./models/food"),
    comment  = require("./models/comment");


var data=[
      {
          title:" Toffee carrot cake fruitcake gummi bears sugar plum powder biscuit danish",
          image:"https://cdn.pixabay.com/photo/2015/10/02/15/59/olive-oil-968657__340.jpg",
          text:"Toffee carrot cake fruitcake gummi bears sugar plum powder biscuit danish. Jelly beans halvah marzipan bear claw. Tiramisu apple pie bonbon lemon drops soufflé pie croissant brownie candy. Sesame snaps gummi bears carrot cake donut pastry powder jelly-o caramels sweet roll. Bonbon biscuit jelly donut jelly-o sweet roll tart tootsie roll lollipop. Carrot cake gummies lollipop cookie sweet roll. Bear claw chocolate cake marzipan jelly-o apple pie macaroon marshmallow sugar plum. Halvah pastry apple pie icing bear claw. Apple pie ice cream halvah ice cream cookie marzipan croissant.Marshmallow chocolate cake sweet chocolate biscuit sesame snaps croissant chupa chups apple pie. Cake jellyo brownie chocolate cake pastry cotton candy sweet chocolate bar. Jelly-o chocolate bar donut cake brownie tiramisu bear claw. Soufflé soufflé biscuit powder gummies cupcake. Gummi bears liquorice sugar plum halvah chocolate tootsie roll pie. Toffee biscuit pie sweet gummi bears macaroon gummi bears bonbon. Gummi bears apple pie cheesecake cookie chocolate cake ice cream lollipop. Chocolate bar sesame snaps biscuit dessert. Soufflé gingerbread cupcake halvah. Tart candy gingerbread. Oat cake jelly beans chocolate cookie cheesecake marzipan. Caramels icing sweet oat cake liquorice apple pie chupa chups topping.Candy canes cookie chocolate bar cake croissant. Dessert lollipop candy canes liquorice marzipan. Tiramisu cotton candy wafer soufflé chocolate. Oat cake soufflé danish pudding. Pastry tiramisu fruitcake jelly-o cake apple pie. Tootsie roll chocolate bar oat cake gingerbread gummi bears. Marzipan topping jelly beans chupa chups topping brownie tiramisu. Soufflé tart gummies icing dragée lollipop tiramisu cheesecake marshmallow. Sugar plum fruitcake sesame snaps cotton candy marshmallow gingerbread bonbon tart sesame snaps. Cake donut marzipan. Chocolate cake cake chocolate cake pie pie lemon drops croissant. Lemon drops sesame snaps oat cake gingerbread pudding.Candy canes cotton candy biscuit candy canes gingerbread chupa chups donut pie. Chupa chups cake icing tart. Dessert macaroon carrot cake soufflé caramels chocolate bar caramels biscuit. Gingerbread pastry cake biscuit muffin. Cotton candy bonbon bonbon gingerbread jujubes marshmallow chupa chups jujubes. Tart dessert sugar plum lemon drops pastry marshmallow ice cream jelly carrot cake. Marzipan chocolate cake chupa chups. Tootsie roll jujubes bonbon cookie. Bear claw sugar plum tootsie roll fruitcake. Donut caramels jujubes cake powder candy lollipop pie apple pie. Pie toffee chocolate danish dessert marzipan sesame snaps marzipan oat cake. Cupcake liquorice jelly tootsie roll. Cookie oat cake bonbon candy liquorice cheesecake. Fruitcake jelly beans carrot cake gummi bears soufflé topping powder. "
      },
      {
          title:" Powder bear claw bear claw wafer bear claw lemon drops sugar plum icing cotton candy",
          image:"https://cdn.pixabay.com/photo/2016/08/11/08/04/vegetables-1584999__340.jpg",
          text:"Powder bear claw bear claw wafer bear claw lemon drops sugar plum icing cotton candy. Sweet roll macaroon gingerbread pudding fruitcake. Icing icing biscuit tiramisu gummi bears pie. Tart gummi bears jelly beans. Cake ice cream tiramisu. Tart halvah gummi bears soufflé sweet chocolate cake chocolate. Cotton candy biscuit icing.Pastry brownie sweet roll biscuit marzipan bonbon topping bonbon brownie. Jelly-o fruitcake candy canes ice cream oat cake. Danish lemon drops chocolate bar. Sugar plum tootsie roll gummi bears. Powder chocolate chupa chups donut chocolate cake tart marshmallow chocolate cake. Chocolate bar caramels apple pie caramels oat cake bonbon. Lollipop donut soufflé. Wafer gummi bears topping liquorice powder dragée donut sesame snaps. Tart carrot cake dessert pudding icing. Caramels biscuit danish. Candy tootsie roll oat cake cookie soufflé jelly beans powder tootsie roll. Liquorice jelly beans cookie halvah. Danish donut fruitcake liquorice lemon drops biscuit candy canes carrot cake.Jelly beans cheesecake wafer cake pie chocolate pudding fruitcake. Gummi bears cupcake liquorice pudding sweet bear claw chocolate cake sweet. Gummi bears sweet roll chocolate bar. Tart chocolate biscuit croissant bonbon tiramisu oat cake chocolate cake sesame snaps. Gummies soufflé jujubes pie pastry topping. Cake tootsie roll jujubes marshmallow chocolate bar sweet roll carrot cake. Jelly-o tiramisu halvah cotton candy wafer liquorice. Ice cream marshmallow macaroon wafer liquorice cotton candy. Icing toffee cake carrot cake caramels. Candy topping gingerbread brownie macaroon bonbon brownie marshmallow. Pudding marshmallow gingerbread wafer marshmallow candy canes chocolate bar. Sweet lemon drops tiramisu ice cream powder cheesecake cake liquorice.Pastry candy candy icing sugar plum sugar plum bonbon apple pie. Macaroon chocolate bar croissant cake bear claw dragée lemon drops. Jujubes soufflé bear claw halvah candy lollipop cotton candy soufflé tootsie roll. Candy canes biscuit donut. Gummies brownie muffin pastry jelly beans soufflé tootsie roll chocolate. Donut gummi bears carrot cake gummi bears chocolate cotton candy candy canes wafer bear claw. Caramels jelly marshmallow apple pie. Candy canes chupa chups danish bear claw chocolate cake croissant marshmallow candy. Donut gummi bears muffin wafer caramels powder. Jujubes dessert candy canes carrot cake wafer fruitcake gummi bears jelly pie. Ice cream toffee tootsie roll gummies sweet roll jelly beans liquorice. Dessert halvah pastry tootsie roll lemon drops chocolate jelly jujubes. Cake topping croissant ice cream fruitcake sugar plum toffee candy."
      },
            {
          title:"Danish biscuit cotton candy sweet liquorice dragée gummi bears",
          image:"https://cdn.pixabay.com/photo/2017/11/23/13/50/pumpkin-soup-2972858__340.jpg",
          text:"Danish biscuit cotton candy sweet liquorice dragée gummi bears.Chocolate bar biscuit lollipop gingerbread pie croissant cotton candy. Lemon drops brownie macaroon jelly-o tootsie roll pudding topping jujubes. Gingerbread marzipan chocolate. Cheesecake cupcake candy sesame snaps croissant tootsie roll oat cake. Apple pie powder sweet liquorice. Croissant caramels pudding tart. Muffin pudding jelly. Donut cotton candy donut cheesecake ice cream. Biscuit jelly chocolate bar marshmallow dragée carrot cake chupa chups carrot cake. Cupcake cookie macaroon sesame snaps jelly bonbon halvah. Cake gingerbread dessert gummies gummies. Apple pie cake tiramisu pie donut topping carrot cake.Danish sesame snaps lemon drops gummies macaroon bear claw chocolate oat cake candy. Oat cake lemon drops pastry pudding toffee. Danish lemon drops gummi bears fruitcake candy canes wafer macaroon liquorice candy canes. Ice cream cupcake sugar plum. Pastry muffin dragée fruitcake. Halvah chocolate bar jujubes sesame snaps pie. Lollipop icing cookie soufflé sweet roll icing chocolate cake gummies dragée. Chocolate fruitcake wafer marzipan lemon drops danish cupcake jelly beans gummi bears. Apple pie pudding dessert lollipop topping. Toffee chupa chups apple pie lollipop bear claw chocolate bar lemon drops. Cake caramels muffin pie wafer cookie pastry tootsie roll. Cake chocolate cake caramels halvah cake icing gummies oat cake pie. Liquorice cheesecake halvah biscuit dragée. Gummi bears cheesecake cotton candy dragée.Sugar plum macaroon lollipop jujubes chocolate cake cake jujubes cake. Chocolate sugar plum cake liquorice chocolate cake toffee lollipop icing gummies. Caramels sesame snaps bonbon dragée wafer jelly-o. Cake gummi bears sugar plum jujubes tart tart muffin. Icing pie lollipop gingerbread halvah carrot cake bonbon. Ice cream jujubes donut biscuit jelly dessert dragée cookie. Cake powder brownie croissant. Chocolate gummies tart. Jujubes cake jujubes liquorice. Tart cheesecake brownie pudding apple pie cake gummi bears. Candy chocolate oat cake caramels cake dragée tootsie roll donut cake. Dragée pastry candy canes chupa chups macaroon gummies. Bear claw pudding cotton candy tootsie roll pastry liquorice toffee oat cake. Pie bear claw chocolate cake apple pie fruitcake candy canes powder."
      },
      {
          title:"ollipop candy canes candy canes candy canes toffee bear claw tiramisu chocolate pastry.",
          image:"https://cdn.pixabay.com/photo/2016/03/26/18/23/bread-1281053__340.jpg",
          text:" Lollipop candy canes candy canes candy canes toffee bear claw tiramisu chocolate pastry. Muffin cheesecake cake. Powder donut wafer oat cake tootsie roll topping sesame snaps. Pie sesame snaps chocolate cake. Muffin carrot cake danish chocolate bar bonbon marshmallow. Donut cake toffee cotton candy chupa chups apple pie topping halvah. Pudding croissant cookie cookie donut tootsie roll jelly-o. Marshmallow sugar plum cake cake gummies. Muffin candy chocolate bar pastry lollipop cake tiramisu tart. Croissant ice cream bonbon halvah chocolate bar. Apple pie apple pie apple pie muffin biscuit. Soufflé jelly-o donut. Danish jujubes biscuit tart cotton candy brownie gingerbread liquorice.Toffee toffee chocolate pudding chocolate bar cupcake. Bear claw caramels sweet roll fruitcake bonbon brownie sesame snaps chupa chups marshmallow. Gummies halvah cookie cookie pie gingerbread icing oat cake toffee. Gummies jelly-o lemon drops tootsie roll dragée muffin. Jujubes icing macaroon topping. Brownie cake jelly jelly croissant brownie tiramisu candy sesame snaps. Pastry wafer gummies sesame snaps jelly-o marshmallow toffee apple pie icing. Oat cake chocolate croissant lollipop dessert. Lollipop carrot cake halvah fruitcake tootsie roll macaroon fruitcake gingerbread. Chocolate cake caramels powder chocolate cake. Gummi bears apple pie chocolate bar caramels lollipop. Jujubes chocolate bar liquorice liquorice. Chocolate pastry cake. Chocolate jujubes jelly-o pie biscuit cotton candy.Cookie biscuit muffin. Ice cream sweet roll tootsie roll cookie. Muffin sweet gummies sweet croissant. Gummies candy gummi bears macaroon gingerbread marshmallow danish liquorice. Sugar plum cookie apple pie sesame snaps gummi bears gingerbread. Chocolate cake marshmallow chocolate lemon drops jelly-o pudding toffee marzipan. Candy canes cheesecake chocolate cake donut. Cupcake cupcake carrot cake pie lollipop danish pastry. Caramels toffee bear claw sugar plum cookie fruitcake chupa chups. Wafer tart danish dragée pie. Halvah marzipan jelly halvah dragée dessert topping oat cake topping. Tiramisu chocolate ice cream danish chocolate cake sugar plum tart liquorice."
      },
      {
          title:"Bonbon caramels ice cream tart tootsie roll topping pie sweet roll",
          image:"https://cdn.pixabay.com/photo/2015/06/19/16/48/watermelon-815072__340.jpg",
          text:"Bonbon caramels ice cream tart tootsie roll topping pie sweet roll. Cupcake jelly-o powder tart jelly-o jujubes cupcake sweet roll. Cake jelly sweet roll cheesecake apple pie gummi bears. Marshmallow cupcake muffin brownie. Muffin liquorice donut danish donut chocolate bar lollipop sweet jelly-o. Jelly-o sweet marzipan tart brownie sweet. Soufflé sweet chocolate. Chupa chups topping carrot cake sweet brownie jelly sesame snaps. Gummi bears carrot cake muffin cookie bonbon candy canes soufflé brownie cupcake. Oat cake ice cream muffin dragée bear claw dragée tiramisu. Oat cake cookie carrot cake marzipan jelly-o. Topping croissant sweet pastry.Jujubes chupa chups carrot cake oat cake. Cookie cupcake marshmallow tiramisu dragée. Icing fruitcake bonbon dragée toffee. Carrot cake jelly beans pie chocolate bar liquorice. Wafer apple pie cupcake jelly-o chocolate bar. Danish croissant jelly-o marzipan fruitcake chupa chups wafer jelly-o dessert. Bear claw jelly-o topping brownie ice cream. Pudding carrot cake gummies bonbon sesame snaps ice cream topping jujubes oat cake. Halvah apple pie jelly danish jelly cake bear claw jelly beans. Cotton candy jelly candy canes topping lemon drops. Gummies topping cupcake liquorice. Dragée marzipan brownie ice cream brownie sesame snaps. Biscuit danish cupcake dragée wafer gummies jelly dragée. Halvah marzipan sweet chupa chups.Gingerbread icing cake topping pie pudding marshmallow candy carrot cake. Topping halvah tiramisu sweet roll tiramisu candy canes. Pudding ice cream donut pie pastry powder liquorice. Tiramisu marzipan candy canes. Wafer sugar plum jelly beans jujubes tart jelly beans dessert candy chocolate bar. Marzipan sweet roll dessert topping croissant lemon drops. Toffee sweet roll cotton candy. Halvah chocolate bar biscuit cotton candy pie. Ice cream tart gingerbread oat cake jujubes gingerbread pudding. Biscuit halvah tart. Chocolate bar chocolate chupa chups. Pie chocolate tootsie roll pastry danish sweet roll wafer chupa chups. Biscuit liquorice cake oat cake icing caramels chocolate bar."

      },
      {
          title:"Jelly pastry oat cake carrot cake chupa chups oat cake cake chocolate bar",
          image:"https://cdn.pixabay.com/photo/2018/01/05/04/44/food-3062139__340.jpg",
          text:"Jelly pastry oat cake carrot cake chupa chups oat cake cake chocolate bar. Brownie caramels donut muffin. Bear claw powder sesame snaps donut jelly-o fruitcake chocolate sweet dessert. Brownie jelly cupcake lemon drops. Cake liquorice ice cream pie tootsie roll danish cake oat cake icing. Toffee biscuit cotton candy. Halvah jelly beans tiramisu tootsie roll sweet. Tootsie roll chupa chups gummies marshmallow. Marshmallow sweet roll sweet. Sweet fruitcake soufflé tiramisu sweet toffee sugar plum. Dragée marshmallow pastry tootsie roll biscuit. Pudding croissant liquorice sweet roll toffee biscuit ice cream candy. Pie muffin candy fruitcake candy sesame snaps. Cheesecake liquorice cheesecake tiramisu lollipop jelly beans icing pastry candy.Apple pie cake cake dragée chocolate bar. Tootsie roll chocolate bar sweet roll sweet roll gummi bears dragée macaroon candy sugar plum. Wafer cupcake jelly dragée carrot cake bonbon. Sweet gummies gummies. Danish lemon drops croissant. Danish jelly-o ice cream candy canes bonbon candy canes. Ice cream gummies sugar plum fruitcake marzipan. Tiramisu jelly-o jelly gingerbread ice cream carrot cake pie cotton candy liquorice. Jelly beans toffee oat cake chocolate tiramisu tart soufflé tart. Sugar plum sesame snaps cake wafer pudding. Jelly marzipan bear claw marzipan gummi bears sweet roll gummi bears. Marshmallow bonbon brownie sweet roll jelly-o. Cupcake candy canes donut halvah apple pie pastry.Lollipop marzipan lemon drops chocolate cake donut cake. Liquorice bonbon donut lemon drops croissant. Dragée halvah gummies tart jelly. Cake topping marshmallow chocolate tootsie roll. Donut cotton candy sweet roll soufflé macaroon sweet cake. Macaroon sugar plum jujubes biscuit dessert apple pie. Sweet chocolate bar carrot cake tart biscuit cupcake macaroon danish. Oat cake danish sesame snaps cotton candy. Toffee oat cake soufflé dessert sweet roll. Gingerbread macaroon gummies muffin candy marzipan cookie. Sesame snaps sweet biscuit biscuit. Jelly cheesecake wafer jujubes. Bear claw brownie chocolate sweet roll danish apple pie."
      }
];


function seedDB(){
    food.remove({}, function(err, foods){
        if(err){
            console.log(err)
        }else{
            console.log("Data base is removed");
            data.forEach(function(createFood){
              food.create(createFood, function(err, foods){
                  if(err){
                      console.log(err)
                  }else{
                      console.log("Data created!");
                      comment.create(
                          {
                              content:"This is relly good and tasty i like this food",
                              userName:"Goran"
                               
                          },

                              function(err, comment){
                                    if(err){
                                        console.log(err);
                                    }else{
                                        foods.comments.push(comment);
                                        foods.save();
                                        console.log("Comment is saved")
                          }
                      })
                  }
              }) 
            })
            
        }
    });
    
};

module.exports= seedDB;