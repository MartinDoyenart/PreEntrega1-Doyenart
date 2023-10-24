import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: "1",
      name: "Guitarra criolla 1",
      description: "Guitarra criolla de madera de balsa, ideal para no tocar.",
      stock: 5,
      Price: "$500",
      category: "Guitarras&Bajos",
    },
    {
      id: "2",
      name: "Guitarra criolla 2",
      description:
        "Guitarra criolla de pino abeto, con terminaciones de nacar, cuerdas de nylon, ideal para principiantes.",
      stock: 100,
      Price: "$2500",
      category: "Guitarras&Bajos",
    },
    {
      id: "3",
      name: "Guitarra elecrtica 1",
      description:
        "Guitarra electrica semiprofesional, madera de roble, excelente calidad.",
      stock: 16,
      Price: "$55000",
      category: "Guitarras&Bajos",
    },
    {
      id: "4",
      name: "Guitarra electrica 2",
      description:
        "Guitarra electrica profesional, mejor madera que la otra, la mejor!.",
      stock: 8,
      Price: "$75000",
      category: "Guitarras&Bajos",
    },
    {
      id: "5",
      name: "Bajo electrico",
      description: "Bajo electrico, un solo modelo (suenan todos igual).",
      stock: 3,
      Price: "$25000",
      category: "Guitarras&Bajos",
    },
    {
      id: "6",
      name: "Piano electrico",
      description:
        "Piano electrico con 84 teclas, blancas y negras, excelente sonido.",
      stock: 2,
      Price: "$250000",
      category: "Pianos&Tecaldos",
    },
    {
      id: "7",
      name: "Trompeta",
      description: "Trompeta semi-profesional, excelente calidad.",
      stock: 10,
      Price: "$250000",
      category: "Instrumentos de Viento",
    },
    {
      id: "8",
      name: "Saxo tenor",
      description: "Saxofon tenor, hermoso sonido, terminacion laca brillante.",
      stock: 6,
      Price: "$490000",
      category: "Instrumentos de Viento",
    },
    {
      id: "9",
      name: "Saxo alto",
      description:
        "Saxofon contralto, un poco mas chico, lindo, pero es mas lindo el tenor.",
      stock: 4,
      Price: "$380000",
      category: "Instrumentos de Viento",
    },
    {
      id: "10",
      name: "Trombon",
      description:
        "Trombon a vara con transpositor, origen china, pero igual va muy bien.",
      stock: 78,
      Price: "$255000",
      category: "Instrumentos de Viento",
    },
    {
      id: "11",
      name: "Clarinete",
      description: "Clarinete soprano en Sib, madera, excelente calidad.",
      stock: 8,
      Price: "$12500",
      category: "Instrumentos de Viento",
    },
    {
      id: "12",
      name: "Flauta",
      description:
        "Flauta traversa, sonido brillante, incluye tapones de oidos.",
      stock: 1,
      Price: "$9500",
      category: "Instrumentos de Viento",
    },
    {
      id: "13",
      name: "Violin 4/4",
      description: "Violin para tocar chacarera, otra musica no.",
      stock: 98,
      Price: "$35000",
      category: "Instrumentos de Cuerda",
    },
    {
      id: "14",
      name: "Violoncello",
      description: "Violoncello 4/4, como el violin pero mas grande.",
      stock: 3,
      Price: "$42500",
      category: "Instrumentos de Cuerda",
    },
    {
      id: "15",
      name: "Bateria",
      description:
        "Bateria 5 cuerpos, madera de maple, parches hidraulicos, espectacular!",
      stock: 100,
      Price: "$259000",
      category: "Instrumentos de Percusion",
    },
  ];
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("No se encontraron productos");
    }
  });

  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailContainer;
