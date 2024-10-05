const points = games=>games.reduce((total, current)=>{
    return total += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
},0);