export class AppUtill  { 

static apputill :AppUtill =new AppUtill();
 static show:boolean=true;
static getInstance():AppUtill{
   return this.apputill;
}
hide(){//this.show=false;
}

}