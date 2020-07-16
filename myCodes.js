
  function hasCollided(Abullet,Awall){
  

    bullet.rightEdge=Abullet.x+Abullet.width
    wall.leftEdge=Awall.x+Awall.width
  
    if(bullet.rightEdge>=wall.leftEdge){
      return true
    }
  else{
    return false
  }
  
  
  
  }