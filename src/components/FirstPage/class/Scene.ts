class Scene {
	name:string;
	bgImg: string;
	constructor(parms:any) {
		this.name = parms["name"] || "场景";
		this.bgImg = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F55402f62682e3.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670308317&t=bd657479ebc881c7f1de76ed79a4df57"
	}
}

class DefaultScene extends Scene{
	constructor(parms:any) {
		super(parms);
		this.name = parms["name"];
	}
}