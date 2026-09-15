export type CarouselPhoto = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const studioPhotos: CarouselPhoto[] = [
  { id: 1, src: "/carrousel-1.jpg", alt: "Denise Lo Guercio trabajando en la prensa, con grabados colgados secándose de fondo", width: 1129, height: 1461 },
  { id: 2, src: "/carrousel-2.jpg", alt: "Serie de grabados recién impresos, extendidos sobre tela", width: 1170, height: 1470 },
  { id: 3, src: "/carrousel-3.jpg", alt: "Vista del taller: la prensa, la mesa de entintado y grabados secándose", width: 857, height: 1189 },
  { id: 4, src: "/carrousel-4.jpg", alt: "Denise sosteniendo una de sus planchas de grabado", width: 908, height: 1457 },
];
