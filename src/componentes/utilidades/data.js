const productos = [
  {
    id: "hgt344",
    nombre: "Auriculares WF XB700 - Inalambrico",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 10,
    precio: 15.099,
    imagen: "/img/auriculares-WF-XB700.webp",
    categoria: "auriculares",
  },
  {
    id: "ljm322",
    nombre: "Auriculares WH CH720N - Inalambrico",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 2,
    precio: 12.999,
    imagen: "/img/auriculares-WH-CH720N.webp",
    categoria: "auriculares",
  },
  {
    id: "shx688",
    nombre: "Auriculares Float Run - Inalambrico",
    descripcion: "Este es el mejor auricular del mundo",
    stock: 6,
    precio: 17.099,
    imagen: "/img/auriculares-Float-Run.webp",
    categoria: "auriculares",
  },
  {
    id: "jht332",
    nombre: "Teclado gamer Redragon Kumara K552 Negro",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 9,
    precio: 70.999,
    imagen:
      "/img/Teclado gamer Redragon Kumara K552 QWERTY Outemu Red español latinoamérica color negro con luz RGB.webp",
    categoria: "Teclados",
  },
  {
    id: "wes236",
    nombre: "Teclado Gamer T-dagger Arena T-tgk321 Negro",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 9,
    precio: 41.924,
    imagen:
      "/img/Teclado Gamer T-dagger Arena T-tgk321 Qwerty T-dagger Brown Español Color Negro Con Luz Rainbow.webp",
    categoria: "Teclados",
  },
  {
    id: "kmt866",
    nombre: "Teclado gamer T-Dagger Arena T-TGK321 Blanco",
    descripcion: "Este es el mejor teclado del mundo",
    stock: 15,
    precio: 43.999,
    imagen:
      "/img/Teclado gamer T-Dagger Arena T-TGK321 QWERTY T-Dagger Brown inglés US color blanco con luz rainbow.webp",
    categoria: "Teclados",
  },
  {
    id: "khg522",
    nombre: "Logitech G Series Lightsync G203 - Blanco",
    descripcion: "Esta es la mejor mouse del mundo",
    stock: 3,
    precio: 41.999,
    imagen: "/img/Logitech G Series Lightsync G203 - Blanco.webp",
    categoria: "Mouse",
  },
  {
    id: "prw092",
    nombre: "Mouse gamer de juego Razer DeathAdder Essential blanco",
    descripcion: "Esta es la mejor mouse del mundo",
    stock: 10,
    precio: 45.265,
    imagen: "/img/Mouse gamer de juego Razer DeathAdder Essential blanco.webp",
    categoria: "Mouse",
  },
  {
    id: "ujm422",
    nombre: "Mouse Inalámbrico Recargable Luces Led Gamer",
    descripcion: "Esta es la mejor mouse del mundo",
    stock: 5,
    precio: 9.580,
    imagen:
      "/img/Mouse Inalámbrico Recargable Luces Led Gamer Pclaptop Fino Xinua Color Negro.webp",
    categoria: "Mouse",
  },
];

const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos;
