// Target class (position and width)
class Target {
  constructor(x, y, w, l, id, type) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.label = l;
    this.id = id;
    this.type = type;
  }

  clicked(mouse_x, mouse_y) {
    return dist(this.x, this.y, mouse_x, mouse_y) < this.width / 2;
  }

  draw() {
      let fillColor;
      switch (this.label) {
        case "0% Milk":
        case "0% Yoghurt":
          fillColor =  color(255,255,255);
          break;
          case "Anjou":
          case "Avocado":
        case "Asparagus":
        case "Aubergine":
          fillColor = color(255,192,203);
          break;
        case "Apple Juice":
          fillColor = color(255,105,180);
          break;
          case "Banana":
          fillColor = color(255,160,122);
          break;
        case "Beef Tomato":
          case "Beef Pepper":
          case "Bio Cream":
          case "Bio Milk":
          case "Bio Soyghurt":
          fillColor = color(255,99,71);
          break;
        case "Bio Fat Milk":
        case "Bio Skim Milk":
        case "Bio Soy Milk":
          fillColor = color(255,0,0);
          break;
        case "Cabbage":
          case "Cantaloupe":
          case "Carrots":
          case "Conference":
          case "Cucumber":
          fillColor = color(152,251,152);
          break;
        case "Cherry Juice":
        case "Cherry Yoghurt":
          fillColor = color(0,255,0);
          break;
          case "Fat Milk":
        case "Fresh Juice":
          	fillColor = color(147,112,219);
            break;
            case "Garlic":
        case "Ginger":
        case "Golden":
          	fillColor = color(135,206,250);
          break;
        case "Galia Melon":
        case "Granny Smith":
          fillColor = color(0,191,255);
          break;
          case "Kaiser":
        case "Kiwi":
          	fillColor = color(205,133,63);
          break;
          case "Leek":
        case "Lemon":
        case "Lime":
          fillColor = color(255,255,0);
          break;
          case "Mango":
        case "Melon":
        case "Mushroom":
          fillColor = color(255,127,80);
          break;
          case "Mandarin Juice":
        case "Mango Juice":
        case "Mango Yoghurt":
        case "Mild Pepper":
          fillColor = color(220,20,60);
          break;
          case "Nectarine":
          fillColor = color(240,230,140);
          break;
          case "Oatghurt":
        case "Orange":
          	fillColor = color(245, 176, 65);
          break;
          case "Oat Milk":
        case "Orange Juice":
          fillColor = color(243, 156, 18);
          break;
        case "Papaya":
        case "Peach":
        case "Pineapple":
        case "Plum":
        case "Pomegranate":
          fillColor = color(211,211,211);
          break;
          case "Passion Fruit":
        case "Peach Juice":
        case "Pear Juice":
        case "Pear Yoghurt":
        case "Pink Lady":
        case "Piri Piri":
          fillColor = color(169,169,169);
          break;
          case "Red Beet":
        case "Red Delicious":
        case "Red Grapefruit":
        case "Red Potato":
        case "Rocoto Pepper":
        case "Royal Gala":
          fillColor = color(195, 155, 211);
          break;
          case "Satsumas":
        case "Smoothie":
        case "Soyghurt":
          fillColor = color(163, 228, 215 );
          break;
          case "Sour Cream":
        case "Sour Milk":
        case "Soy Milk":
        case "Standard Milk":
        case "Sweet Potato":
          fillColor = color(26, 188, 156 );
          break;
          case "Tomato":
          fillColor = color(231, 76, 60 );
          break;
          case "Vanilla Yoghurt":
        case "Vine Tomato":
          fillColor = color(252, 243, 207);
          break;
          case "Watermelon":
          fillColor = color(169, 204, 227 );
          break;
          case "White Potato":
          fillColor = color(41, 128, 185 );
          break;
          case "Yoghurt":
          fillColor = color(249, 231, 159);
          break;
          case "Yellow Onion":
          fillColor = color(244, 208, 63 );
          break;
          case "Zucchini":
          fillColor = color(88, 214, 141 );
          break;
        default:
          fillColor = color(255,99,71);
      }
      
      fill(fillColor);
      rect(this.x - (this.width - 22)/2, this.y - (this.width - 22)/2, this.width - 22, this.width - 22);

      
    
      textFont("Arial", this.width/2.5);
      fill(color(255, 255, 255));
      strokeWeight(2);
      textAlign(LEFT,BOTTOM);
      textStyle(BOLD);
      switch(this.label) {
      case "0% Milk":
        text("0", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Anjou":
        text("A", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Banana":
        text("B", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Cabbage":
        text("C", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Fat Milk":
        text("F", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Garlic":
        text("G", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Kaiser":
        text("K", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Leek":
        text("L", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Mango":
        text("M", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Nectarine":
        text("N", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Oatghurt":
        text("O", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Papaya":
        text("P", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Red Beet":
        text("R", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Satsumas":
        text("S", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Tomato":
        text("T", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Vanilla Yoghurt":
        text("V", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Watermelon":
        text("W", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Yoghurt":
        text("Y", this.x-this.width/1.5, this.y-this.width/3);
        break;
      case "Zucchini":
        text("Z", this.x-this.width/1.5, this.y-this.width/3);
        break;
      }
      textFont("Arial", 10);
      fill(color(0));
      strokeWeight(2);
      textAlign(CENTER, CENTER);
      textStyle(BOLD);
  
      let words = this.label.split(" ");

      let textY = this.y - 8; 
      if(words.length > 1){
        if(words[0].localeCompare("Bio") == 0){ 
          text(words[0], this.x, textY);
          textY += 14; 
          text(this.label.substring(4), this.x, textY);

        } else if (this.label.length > 10) {
          text(words[0], this.x, textY);
          textY += 14;
          text(words[1], this.x, textY);
        } else {
          text(this.label, this.x, this.y);
        }
      } else{
        text(this.label, this.x, this.y);
      }
    }
}