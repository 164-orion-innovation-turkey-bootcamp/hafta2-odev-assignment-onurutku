
//-----------------------------STOCK CONTROL CLASS --------------------------
class Stock{
    constructor(){
        this.marul=0;
        this.tursu=0;
        this.paketSos=0;
        this.sogan=0;
        this.kofte=0;
        this.tavuk=0;
        this.domates=0;
        this.ekmek=0;
        this.patates=0;
        this.cola=0;
        this.emptyGoods=[]; // this is an array for empty goods.i will use this array to make a check condition to get new order or not.
    }
    //add goods to stock method
    stockGoods(addStock){
        let stock=addStock;
        for(let i in stock){
            if(stock.hasOwnProperty(i)){
                this[i]+=stock[i]
            }
        }
    }
    //check stock to continue preparation order or NOT!
    checkStock(order,amount){
        const eksikler=[];
        for(let stok of Object.keys(this)){
            for(let urun in order){
                if((stok===urun)&&(this[stok]<(order[urun]*amount))){
                    const eksik = {};
                    eksik[stok]=`${this[stok]}/${order[urun]*amount}`;
                    eksikler.push(eksik);
                }
            }
        }
        if(eksikler.length!=0){
            console.log("Eksik Ürünler: ",eksikler);
            return false;
        }else{
            return true;
        }
    }
    //control the stock class after complete the order.
    substractGoodsAfterOrder(order,amount){
        let orders=order;
        for(let i in orders){
            if(orders.hasOwnProperty(i)){
                orders[i]=orders[i]*amount;
                //check for if stoks are enough to complete order
                if(this[i]-orders[i]>=0){
                    this[i]-=orders[i];
                }else if(i!="degree"){
                    this[i]=0;
                    this.emptyGoods.push(i);
                    console.error(i +" tükendi ve "+i+" içeren"+" siparişler kapandı");
                }
            }
        }
        console.log("-------------------------------");
        console.log("Eksilen ürünler stoktan düşüldü.");
        if(this.emptyGoods.length!=0){
            console.log("Biten Malzemeler:");
            console.log(this.emptyGoods);
        }
        console.log("Stokta kalan malzemeler:");
        console.log(this);
    }
}
//---------------------------------------------------------------------------


//--------------------------ORDER PREPARATION CLASS---------------------------
class Order{
    constructor(){
        this.order=null;
        this.amount=null;
    }
    //get order and log this
    getOrder(order,amount){
        return new Promise((res,rej)=>{
            console.log("Sipariş Alınıyor...");
            setTimeout(()=>{
            this.order=order;
            this.amount=amount;
            console.log("Sipariş Alındı!");
            res();
        },1000)
        })
    }
    //check stock to continue preparation
    checkForStock(){
        return new Promise((res,rej)=>{
            console.log("Stok Kontrol Ediliyor...");
            setTimeout(()=>{
                const durum = stock.checkStock(this.order,this.amount);
                if(durum){
                    console.log("Stok, siparişi hazırlamak için yeterli");
                }else{
                    console.error("Stok, siparişi hazırlamak için yeterli değil!");
                }
                res(durum);
        },3000)
        })
    }
    //check orders type to get if it is chicken or meetball
    checkOrderType(){
        return new Promise((res,rej)=>{
            console.log("Hamburger türüne karar veriliyor...")
            setTimeout(()=>{
                if(this.order.tavuk!=0){
                    console.log("Tavukburger hazırlanıyor.")
                    return res("chicken");
                }else{
                    console.log("Köfteburger hazırlanıyor.")
                    return res("meetballs");
                }
            },1000)
        })

    }
    //if it is meetball,it will check its cooking degree
    checkcookingDegree(){
        return new Promise((res,rej)=>{
            console.log("Köfte Pişiriliyor...")
            let time;
            switch(this.order.degree){
                case "rare":
                time=2000;
                break;
                case "medium":
                time=3000;
                break;
                case "well":
                time=4000;
                break;
            }
            setTimeout(()=>{
                res(console.log("Köfte "+time/1000+" saniye boyunca "+this.order.degree +" olarak pişirildi."));
            },time)
        })
    }
    //wait 3 sec for cook chicken
    cookChicken(){
        return new Promise((res,rej)=>{
            console.log("Tavuk Pişiriliyor...");
            setTimeout(()=>{
                res(console.log("Tavuk 3 saniye boyunca pişirildi."));
            },3000)
        })
    }
    //prep the burder
    prepBurger(){
        return new Promise((res,rej)=>{
            console.log("Burger Toparlanıyor...");
            setTimeout(()=>{
                res(console.log("Malzemeler eklendi hamburger hazırlandı."));
            },2000)
        })
    }
    //fry chips
    frenchFries(){
        return new Promise((res,rej)=>{
            console.log("Patatesler Kızartılıyor...");
            setTimeout(()=>{
                res(console.log("Patatesler 5 saniye boyunca kızartıldı."));
            },5000)
        })
    }
    //prep drink
    prepDrink(){
        return new Promise((res,rej)=>{
            console.log("İçecek Hazırlanıyor...");
            setTimeout(()=>{
                res(console.log("İçecek Dolduruldu."));
            },2000)
        })
    }
    //prep souces
    prepSouces(){
        return new Promise((res,rej)=>{
            console.log("Soslar ve Ürünler Tepsiye Diziliyor...");
            setTimeout(()=>{
                res(console.log("Soslar eklendi.Tepsi Hazırlandı."));
            },1000)
        })
    }
    //service the meal
    service(){
        return new Promise((res,rej)=>{
            console.log("Ürünler Teslim Ediliyor...");
            setTimeout(()=>{
                res(console.log("Ürünler Hazır.Afiyet Olsun"));
            },1000)
        })
    }
    //step three is async inside itself.so there is a step three function as seperately.
    async stepThree(){
    //3.Step (1s)
            const type=await this.checkOrderType();
            if(type=="meetballs"){
                //3.1.X Step (2/3/4 s)
                await this.checkcookingDegree();
            }else{
                //3.1 Step (3s)
                await this.cookChicken();
            }
            //3.2 Step (2s)
            await this.prepBurger();
    }
    //this layerstep function is for syncrone 3-4-5.Steps.
    layerSteps(){
        return new Promise((res,rej)=>{
            res(this.stepThree(),this.frenchFries(),this.prepDrink());
        })
    }
    //Whole store kontrol method is this main Preparation.
    async mainPreparation(order,amount){
        //1.Step (1s)
        await this.getOrder(order,amount);
        //2.Step (3s)
        const stockOkOrNot = await this.checkForStock();
        if(stockOkOrNot){
            //3-4-5.Steps
            await this.layerSteps();
            //6.Step (1s)
            await this.prepSouces();
            //7. Last Step (1s)
            await this.service();
            stock.substractGoodsAfterOrder(this.order,this.amount);
        }
    }
}
//-----------------------ORDER PREPARATION CLASS----------------------------

//-----------------------------ORDER VARIANTS-------------------------------
const orderTavuk = {
    tavuk:1,
    kofte:0,
    marul:1,
    tursu:1,
    paketSos:1,
    sogan:1,
    domates:1,
    ekmek:1,
    patates:1,
    cola:1,
}
const orderKofte = {
    tavuk:0,
    kofte:1,
    marul:1,
    tursu:1,
    paketSos:1,
    sogan:1,
    domates:1,
    ekmek:1,
    patates:1,
    cola:1,
    degree:"rare",
    // degree:"medium",
    // degree:"well"
}
//----------------------------------ORDER VARIANTS------------------------------------

//------------------------------GIVE ORDER OR ADD STOCK-------------------------------
//stock object
const stock = new Stock();
//a truck carries goods for stock
const goodsTruck={
        marul:5,
        tursu:5,
        paketSos:5,
        sogan:5,
        kofte:5,
        tavuk:5,
        domates:5,
        ekmek:5,
        patates:5,
        cola:5
    }
//call to add goods in stock (you can call truck to add goods)
stock.stockGoods(goodsTruck);


//order object
const order = new Order();

//get order and start preparation*****************************************************

order.mainPreparation(orderTavuk,5); //you can order chicken and change amount
// order.mainPreparation(orderKofte,1); //you can order meetball and change amount

//-----------------------GIVE ORDER OR ADD STOCK-------------------------
