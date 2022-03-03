# Proje Özelliklerinin Açıklaması

<strong>1.</strong>Proje'de iki tane CLASS kullandım. Birincisi "Stock" stok kontrolü için methodlar barındırıyor,diğeri ise "Order" siparişi oluşturma methodlarını barındırıyor. Stock:"3-70" satırları arası ve  Order:"75-234".satırlar arasında"

<strong>2.</strong>Dükkan açıldığında her üründen 5'er adet stok'a ekleniyor. İsteğe bağlı olarak ilgili method çağırılarak stok'a ekleme yapılabilir. "284.Satır"

<strong>3.</strong>Sipariş türleri tanımladım ve bu sipariş türleri üzerinden değişiklik yapılabilir.Siparişler sabit değil yani özelleştirilebilir. Örneğin tavuk menü seçilebilir ama marul ya da domates eklenmeden de sipariş verilebilir. Stok kontrolü bunu göz önünde bulundurarak yapılıyor. CheckStock:"27.Satır"

<strong>4.</strong>Sipariş verildiğinde siparişin adedi de değiştirilebilir. Örneğin 3 adet tavuk menü ya da köfte menü sipariş edilebilir. Stok kontrolü bunu da kontrol ediyor. "Amount parametresi ile"

<strong>5.</strong>Sipariş verildiğinde istenen sürelere göre sipariş hazırlanıyor. Sırasıyla
1-2-(3,4,5)-6-7 şeklinde ilerliyor ve 3-4-5 adımları birbirlerini beklemiyor fakat 3. adım kendi içerisinde birbirini bekliyor. Bunun için ayrı fonksiyonlar tanımladım. "219.Satır mainPreparation fonksiyonu"

<strong>6.</strong>Sipariş, stokta ürün kalmaması sebebi ile iptal olursa kaç adet eksik ürün olduğu da console.log'a yazdırılıyor. "39.satır"

<strong>7.</strong>Sipariş düzgün tamamlanıp ürünler teslim edildiğinde stokta kalan malzemeler de console.log'a yazdırılıyor. "231.Satır"

<strong>8.</strong>Sadece tek bir ürünün bittiği durumlarda eğer gelen siparişte biten ürün yoksa,sipariş düzgün şekilde tamamlanıyor. Yani tüm ürünler tek tek değerlendiriliyor. "27.Satır"

# Hamburger Hazırlama Projesi:

## 1-Malzeme Listesi: Tüm malzemelerden 5 er adet olduğu varsayılacaktır.
Marul
Turşu
Paket Sos
Soğan
Köfte
Tavuk
Domates
Ekmek
Patates
Cola


## 2-İş Süreci:

1.Sipariş al (1 Saniye)
2.Her malzeme için stok kontrolü (3 saniye)
2.1. Eğer stokta malzeme eksiği varsa uyarı mesajı verilmeli, işlem iptal edilmeli, yeni istek alınmamalı)
3. Köfte mi? - Tavuk mu? sorgusu(1 saniye)
Köfte ise :
3.1. Pişme derecesi kontrolü
3.1.1. Az Pişmiş(2 saniye)
3.1.2. Orta Pişmiş (3 saniye)
3.1.3. Çok Pişmiş (4 saniye)
Tavuk ise:
3.1. Tavuk Pişir (3 saniye)
3.2. Hamburger Yapımı(2 saniye): Köfte veya Tavuk(1 adet), Marul(1 adet), Domates(1 adet), Turşu(1 adet), Soğan(1 adet) hamburger ekmeğiyle birleştirilecek.
Malzemeler siparişte varsa eklenmeli!
4. Patatesleri Kızart (5 saniye)
5. İçeçeği Hazırla (2 saniye)
6. Sosları ve Ürünleri Servis Tepsisine Koy (1 saniye)
7. Müşteriye Servis Et (1 saniye)

<strong>
Genel sistemin akış şeması: 1. step -> 2. step -> 3,4,5 -> 6 -> 7
3,4 ve 5. stepler aynı anda başlatılmalı. Birbirlerinin bitmesini beklememeli.
6. step, 3,4 ve 5. stepler bittikten sonra başlamalı
7. step, 6. stepten sonra başlayacak.

<br/>

Verilen malzeme listesi ve iş sürecini kullanarak bir hamburger işletmesi fonksiyonelitesi hazırlanmalıdır.
Kullanılacak diller: (JavaScript, TypeScript)
Herhangi bir html,css görüntü katmanına gerek yok. Sadece fonksiyonelite örneği hazırlanmalıdır.
</strong>
