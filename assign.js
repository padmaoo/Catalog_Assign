const testcase1 = {
    "keys": { "n": 4, "k": 3 },
    "1": { "base": "10", "value": "4" },
    "2": { "base": "2", "value": "111" },
    "3": { "base": "10", "value": "12" },
    "6": { "base": "4", "value": "213" }
};
const testcase2 = {
"keys": {
    "n": 10,
    "k": 7
  },
  "1": {
    "base": "6",
    "value": "13444211440455345511"
  },
  "2": {
    "base": "15",
    "value": "aed7015a346d63"
  },
  "3": {
    "base": "15",
    "value": "6aeeb69631c227c"
  },
  "4": {
    "base": "16",
    "value": "e1b5e05623d881f"
  },
  "5": {
    "base": "8",
    "value": "316034514573652620673"
  },
  "6": {
    "base": "3",
    "value": "2122212201122002221120200210011020220200"
  },
  "7": {
    "base": "3",
    "value": "20120221122211000100210021102001201112121"
  },
  "8": {
    "base": "6",
    "value": "20220554335330240002224253"
  },
  "9": {
    "base": "12",
    "value": "45153788322a1255483"
  },
  "10": {
    "base": "7",
    "value": "1101613130313526312514143"
  }
};
function decodeValue(base,value){
    return parseInt(value,base);
}

function lagrangeInterpolation(points) {
    let constantTerm = 0; 
    const n = points.length; 

    for (let i = 0; i < n; i++) {
        let xi = points[i][0];
        let yi = points[i][1];
        let li = 1; 

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let xj = points[j][0];
                li *= (0 - xj) / (xi - xj); 
            }
        }

        constantTerm += yi * li;
    }

    return Math.round(constantTerm); 
}
function findConstantTerm(data) {
    const keys = data.keys;
    const k = keys.k;
    let points = [];
    for (let key in data) {
        if (key !== 'keys') {
            const x = parseInt(key, 10); 
            const base = parseInt(data[key].base, 10);
            const value = data[key].value;
            const y = decodeValue(base, value); 
            points.push([x, y]);
        }
    }
    points = points.slice(0, k);
    const c = lagrangeInterpolation(points);

    console.log('The constant term (c) is:', c);
}
console.log("For Test Case 1:");
findConstantTerm(testcase1);
console.log("For Test Case 2:");
findConstantTerm(testcase2);
