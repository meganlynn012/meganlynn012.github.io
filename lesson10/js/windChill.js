function windChill(t, s) {

    //only calculate windchill if variables allow
    if (t <= 50 && s > 3) {
        let chill = 35.74 + (.6215 * t) - (35.75 * (s ** .16)) + (.4275 * t * (s ** .16));
        
    //round the result to the nearest whole number
        let digits = 0;
        let rounder = Math.pow(10, digits);
        chill = Math.round(chill * rounder) / rounder + '&deg; F';
        return chill;
    } 

    else {
        chill = 'n/a';
        return chill;
    }
}