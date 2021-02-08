import React, { createContext } from 'react';

export const ProductsContext = createContext();

export default function ProductsContextProvider({ children }) {
  /////Data
  const products = [
    {
      id: 0,
      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      name: 'CHECK PRINT SHIRT',
      price: 110,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere leo tellus, id malesuada justo eleifend eget. Suspendisse quis odio et enim tincidunt bibendum. Phasellus dictum egestas fringilla. Praesent nec neque velit. Sed dui velit, egestas tempor nunc sit amet, dapibus maximus turpis. Vivamus scelerisque, odio ',
    },
    {
      id: 1,
      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: 'GLORIA HIGH LOGO SNEAKER',
      price: 91,
      description:
        'Mauris imperdiet volutpat pellentesque. Morbi tempus ex nec sapien accumsan tempus. Vestibulum fringilla nisl odio, vel faucibus nulla gravida eu. Fusce ultricies ex odio. Duis dui erat, lacinia quis consectetur quis, luctus nec elit. Vestibulum urna nunc, feugiat vel sem non, cursus condimentum quam.',
    },
    {
      id: 2,

      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: 'CATE RIGID BAG',
      price: 94.5,
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean interdum eleifend dignissim. In nec dolor non odio molestie porttitor sodales a tortor. Sed tincidunt id nisi eleifend scelerisque. Donec non auctor nibh, at porttitor justo. Mauris ultricies vitae arcu a imperdiet. ',
    },
    {
      id: 3,

      imgUrl:
        'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
      name: 'GUESS CONNECT WATCH',
      price: 438.9,
      description:
        'Donec non velit sed risus pellentesque condimentum. Vivamus urna erat, vehicula vitae cursus eu, feugiat at tortor. Proin faucibus pretium sodales. Phasellus ut risus lacus. Morbi a tempus massa. In arcu ipsum, ultrices quis nunc vitae, malesuada placerat ante. Duis tempus mollis varius. ',
    },
    {
      id: 4,
      imgUrl:
        'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
      name: "'70s RETRO GLAM KEFIAH",
      price: 20,
      description:
        ' Suspendisse ac est justo. Donec eget libero hendrerit, iaculis mi at, commodo dui. Morbi eget sollicitudin augue. Nulla euismod, lectus non lobortis sagittis, tortor mi rutrum risus, id varius urna nunc sit amet risus. Integer eget nunc vel libero ornare ultricies a vitae dui. Proin rutrum, felis vel malesuada tempus, diam mi lacinia quam, eget pellentesque tortor tellus in arcu.',
    },
  ];

  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
