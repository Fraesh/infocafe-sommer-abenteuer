// Abenteuer config.

// Jeder Eintrag im Array ist 1 Kapitel mit x Rätseln.
// bsp: Kapitel 1 - 5 Rätsel
//      Kapitel 2 - 4 Rätsel ...
const sa2020 = { name: "sa2020", chapters: [4, 5, 6, 7, 5] };

// Freigeschaltete Kapitel
export const unlocked = new Date().getDate() > 19 ? 2 : 1;
// Aktuelle Config
export const config = sa2020;

//------------------------------------------------------

export const generateDefaultState = () => {
  return {
    progress: {},
  };
};
