namespace DBHC
{
  export class HardDrive
  {
    temp:Uint16Array;

    constructor(size:number)
    {
      if (typeof(Storage) !== "undefined")
      {
        this.temp = JSON.parse(localStorage.getItem("hardDrive"));
        if (this.temp == undefined)
        {
          this.temp = new Uint16Array(size);
        }
      }
      else
      {
        console.log("I'm afraid loading won't be possible in this browser");
      }
    }

    writeToDrive(data:number,position:number)
    {
      this.temp[position] = data;
    }

    readFromDrive()
    {

    }

  }
}
