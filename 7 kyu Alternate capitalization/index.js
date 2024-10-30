function capitalize(s){
    const odd = [...s].map((l, i) => i % 2 ? l.toUpperCase() : l).join``;
    const even = [...s].map((l, i) => !(i % 2) ? l.toUpperCase() : l).join``;
    return [even, odd];
  };
  