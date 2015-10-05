var img = {
  pixel: function(x, y)
  {
    if (x < 0 || y < 0)
      return undefined;
    if (x >= this.width)
      return undefined;
      //x = this.width - 1;
    if (y >= this.height)
      return undefined;
      //y = this.height - 1;
    var pos = y * this.width + x;
    var ret = this.pixeldata[pos]; //(invert)
    //if (ret == undefined)
//      ret = 0;
    return ret;
  },
  pixeldata: []
};