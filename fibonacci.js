function fibonaci(num)
    {
      const list = [];
      for(var i = 0; i < num; i++)
      {
        if(i < 2){list.push(i); }
        else
        {
          list.push(list[i -1] + list[i -2]);
        }
      }
      return list;
    }