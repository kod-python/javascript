let degreeCelcius = prompt("determine the temperature by entering a number:")

let temperature;


switch (true) {
  case degreeCelcius < 0:
    temperature = "Freezing"
    break;

    case degreeCelcius >= 0 && <= 10:
      temperature = "cold"
      break;

      case degreeCelcius >= 11 && <= 20:
        temperature = "cool"
        break;

        case degreeCelcius >= 21 && <= 30:
          temperature = "warm"
          break;


          case degreeCelcius > 30:
            temperature = "hot"
            break;
        
      
    

  default:
    temperature = "the weather can not be determined"
    break;
}

console.log(`the temperature level is at ${temperature} degree celcius`)