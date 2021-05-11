const SHOP_DATA = {
  hats:{
    id: 1,
    title: 'Bookmarks',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Blue Flowers',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/blueflowers.jpeg?alt=media&token=599cfda3-b1ee-4f9b-b3d6-8f731ce0e53f',
        price: 4
      },
      {
        id: 2,
        name: 'Giraffe',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/giraffe1.jpeg?alt=media&token=99f51f9e-4fbe-4e5f-a078-ce697b5ae912',
        price: 4
      },
      {
        id: 3,
        name: 'Pink Flowers',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/pinkflowers.jpeg?alt=media&token=ac9780eb-959b-4d81-b5c8-dc046d50e848',
        price: 4
      },
      {
        id: 4,
        name: 'Poppy',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/poppy1.jpeg?alt=media&token=1a2abc34-e318-4b80-9331-ae01747c15ea',
        price: 4
      },
      {
        id: 5,
        name: 'Poppy',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/poppy3.jpeg?alt=media&token=d10bbf2c-dc18-4c10-a474-5729eb734c13',
        price: 4
      },
      {
        id: 6,
        name: 'Pumpkin',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/pumpkin1.jpeg?alt=media&token=2cb6735e-8b22-423c-8343-7811e0df51f0',
        price: 4
      },
      {
        id: 7,
        name: 'Spider',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/spider.jpeg?alt=media&token=e8d8eda8-3394-493d-ba62-42c2b14872ab',
        price: 4
      },
      {
        id: 8,
        name: 'Cute Whale',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/jadore-db.appspot.com/o/whale1.jpeg?alt=media&token=56def094-9680-47af-bd60-c38aca2dab0e',
        price: 4
      }/*{
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }*/
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 4
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  jackets:{
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  womens:{
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20
      }
    ]
  },
  mens:{
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
