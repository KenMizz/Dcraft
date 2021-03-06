/*
Thanks for Support Dcraft
ModPEName:Dcraft
author:YL12(BaiduTieba and DuoWan Minecraft Box)
Copyright©YL12 2015-2016 All rights reserved
CC-BY-NC-SA
WebSite:http://tieba.baidu.com/p/4398735803?share=9105&fr=share
:)
*/
/*Mod*/
/*ints*/
//Normal
var msg="Made by YL12"
//Settings
var version="b0.5"
var sdcard=android.os.Environment.getExternalStorageDirectory(). getAbsolutePath() ;
var GameMode=Level.getGameMode()
var MinecraftVersion=ModPE.getMinecraftVersion()
var PlayerHealth=Entity.getHealth(getPlayerEnt())
var PlayerName=Player.getName(getPlayerEnt())
var Debug=false
var ExpValue=0
var VendingMachineCheck=false
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var package=ctx.getPackageName()
var NewVersion="unknown"
var UpdateCheck=true
var isUpdateFile=true
var AutoCheckUpdateTime=600000
var isChocolateMilkButton=false
var money=0
var Introduction="unknown"
var StopButton_Show=false
var adfly="unknown"
//Fonts
var MinecraftFont
//Entity
var ChocolateCow
var Notch
var KenMizz
//UIImages
var CloseButton_UP=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Close_up.png"),null)
var CloseButton_DOWN=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Close_down.png"),null)
var Dialog_MinecraftStyle=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Minecraft_dialog.png"),null)
var SumbitButton_UP=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/ConfirmButton_UP.png"),null)
var SumbitButton_DOWN=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/ConfirmButton_DOWN.png"),null)
var MinecraftScreen=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/MinecraftScreen.png"),null)
var SelectButton_UP=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/SelectButton_UP.png"),null)
var SelectButton_DOWN=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/SelectButton_DOWN.png"),null)
var SelectionBox=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Selection box.png"),null)
var Drink_Sprite=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Sprite.png"),null)
var Drink_Coke=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Coke.png"),null)
var StopGameButton_false=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Stop game_0.png"),null)
var StopGameButton_true=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Stop game_1.png"),null)
var SwitchButton_MinecraftStyle_off=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/switch_off.png"),null)
var SwitchButton_MinecraftStyle_on=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/switch_on.png"),null)
var Stuff_coin=android.graphics.drawable.Drawable.createFromStream(ModPE.openInputStreamFromTexturePack("/images/UI/Coin.png"),null)
//Color
var Color=[ChatColor.AQUA,ChatColor.BEGIN,ChatColor.BLACK,ChatColor.BLUE,ChatColor.BOLD,ChatColor.DARK_AQUA,ChatColor.DARK_BLUE,ChatColor.DARK_GRAY,ChatColor.DARK_GREEN,ChatColor.DARK_PURPLE,ChatColor.DARK_RED,ChatColor.GOLD,ChatColor.GRAY,ChatColor.GREEN,ChatColor.LIGHT_PURPLE,ChatColor.RED,ChatColor.RESET,ChatColor.WHITE,ChatColor.YELLOW]
//DebugCheck
var ShowInformationCheck=false,SISwitchButtonImage=SwitchButton_MinecraftStyle_off,SIImageSwitch=false
//Farm
var CurrentPlant=[]
var PlantX
var PlantY
var PlantZ
var PlantType
var PlantTime
//Music
var MusicPlayer=new android.media.MediaPlayer()
var isPlayingMusic=false
var SourceText=""
var LastPlaySourceText=""
//Time
var Date=new Date()
var Month=Date.getMonth()
var Day=Date.getDate()
var Hour=Date.getHours()
var min=Date.getMinutes()
/*UILang(important!)*/
//Vending Machine
var VendingMachineUILang_US=["Vending Machine","Coke","Sprite","Sumbit"]
var VendingMachineUILang_US_backup=["Vending Machine","Coke","Sprite","Sumbit"]
var VendingMachineUILang_CN=["自动贩卖机","可乐","雪碧","确认"]
//StartUI
var Dcraft_StartUILang_US=["Dcraft Made by YL12\nDcraft version:"+version+"\nversion:"+MinecraftVersion+"\npackage:"+package+"","Submit"]
var Dcraft_StartUILang_US_backup=["Dcraft Made by YL12\nDcraft version:"+version+"\nversion:"+MinecraftVersion+"\npackage:"+package+"","Submit"]
var Dcraft_StartUILang_CN=["Dcraft 作者:YL12\nDcraft版本:"+version+"\n游戏版本:"+MinecraftVersion+"\n包名:"+package+"","确认"]
//UpdateCheck
var Dcraft_UpdateCheckUILang_US=["Check Update","New Version:","Dcraft version:","new version avilable","Nope","Yes","connect error!","No New Update","use adf.ly link","adf.ly can help author profit,pleace use adf.ly link"]
var Dcraft_UpdateCheckUILang_US_backup=["Check Update","New Version:","Dcraft version:","new version avilable","Nope","Yes","connect error!","No New Update","use adf.ly link","adf.ly can help author profit,pleace use adf.ly link"]
var Dcraft_UpdateCheckUILang_CN=["检查更新","新版本:","当前版本:","新版本已更新","不","更新","检查更新失败!","当前没有新版本","使用adf.ly链接","adf.ly可以帮助作者有一点小盈利,请使用adf.ly链接"]
//Computer
var Dcraft_ComputerUILang_US=["Computer","Website","GO!","Email","Email address","Text","Send","Subject"]
var Dcraft_ComputerUILang_US_backup=["Computer","Website","GO!","Email","Email address","Text","Send","Subject"]
var Dcraft_ComputerUILang_CN=["电脑","网页","进入","邮箱","邮箱地址","文字","发送","标题"]
//UpdateHelper
var Dcraft_UpdateHelperUILang_US=["Update Helper","It's your first time use Dcraft,Do you wanna auto check update when you join the game?(must have internet connection)","Yes","No","Next time when you gonna update you have to go to the website"]
var Dcraft_UpdateHelperUILang_US_backup=["Update Helper","It's your first time use Dcraft,Do you wanna auto check update when you join the game?(must have internet connection)","Yes","No","Next time when you gonna update you have to go to the website"]
var Dcraft_UpdateHelperUILang_CN=["升级帮助","这是你第一次使用Dcraft,你想开启自动更新吗(必须有互联网连接)","好啊","不要","下次如果你想要更新的话就得去贴吧上自行手动更新了哦"]
//FontDownloader
var Dcraft_FontDownloaderUILang_US=["Font Download","you don't have the font,you must download it or you can not see the ui text","Yes","No"]
var Dcraft_FontDownloaderUILang_US_backup=["Font Download","you don't have the font,you must download it or you can not see the ui text","Yes","No"]
var Dcraft_FontDownloaderUILang_CN=["字体下载","字体无法找到,你想要下载字体吗,没有的话字体就没有Minecraft风格咯","不","确认","不"]
//getChocolateMilkButton
var MilkButtonLang_US="Get Milk"
var MilkButtonLang_US_backup="Get Milk"
var MilkButtonLang_CN="取奶"
/*Item/tileLang(important)*/
var ItemLang_US=["Apple Pie","Sprite","Coke","CookedFlesh","CookedChickenNugget","Vending machine","Tin Ingot","Tin Sword","Big Torch","Tin Hoe","Tin Helmet","Tin Chestplate","Tin Leggings","Tin Boots","Baked Apple","Chocolate Milk","Coin","Chocolate","Cooked Carrot","Chocolate Apple","Big Apple","Diamond(try to eat)"]
var ItemLang_US_backup=["Apple Pie","Sprite","Coke","Cooked Flesh","Cooked ChickenNugget","Vending machine","Tin Ingot","Tin Sword","Big Torch","Tin Hoe","Tin Helmet","Tin Chestplate","Tin Leggings","Tin Boots","Baked Apple","Chocolate Milk","Coin","Chocolate","Cooked Carrot","Chocolate Apple","Big Apple","Diamond(try to eat)"]
var ItemLang_CN=["苹果派","雪碧","可乐","烤腐肉","烤鸡块","自动贩卖机","锡锭","锡剑","大火把","锡锄","锡头盔","锡护甲","锡护腿","锡鞋子","腐烂的苹果","巧克力奶","金币","巧克力","烤胡萝卜","巧克力苹果","大苹果","钻石(吃一口)"]
/*Dcraft_MediaPlayerUI*/
var Dcraft_MediaPlayerUILang_US=["Music","Set Data Source","Source","Start","stop","Looping","please type the source","No music playing","enjoy your music","Music Playing:","last time play:","play last time play"]
var Dcraft_MediaPlayerUILang_US_backup=["Music","Set Data Source","Source","Start","stop","Looping","please type the source","No music playing","enjoy your music","Music Playing:","last time play:","play last time play"]
var Dcraft_MediaPlayerUILang_CN=["音乐","设置音乐路径","路径","开始","停止","是否循环","请填写播放路径","当前没有音乐正在播放","享受你的音乐吧","播放中:","上次播放的路径:","播放上次播放的内容"]
/*functions(define by myself)*/
//addItem(Enchant)
function addItem(itemid,texturename,mainid,itemname,maxamount,categorytype,enchanttype){
	ModPE.setItem(itemid,texturename,mainid,itemname,maxamount)
	Player.addItemCreativeInv(itemid,1,mainid)
	Item.setCategory(itemid,categorytype)
	if(enchanttype==EnchantType.withoutEnchant){
		//nothing
	}
	else{
		Item.setEnchantType(itemid,enchanttype,1)
		}
		}
//ShowMessage
function ShowMessage(msg,MessageType){
	if(MessageType==0){
		clientMessage(msg)
		}
		if(MessageType==1){
			ModPE.showTipMessage(msg)
			}
			if(MessageType==2){
				Sever.sendChat(msg)
				}
				if(MessageType==3){
					print(msg)
					}
					}
//dip2px
function dip2px(ctx,dips){
return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)
}
//getColor
function getColor(HTMLColor){
return android.graphics.Color.parseColor(HTMLColor)
}
//dismissUI
function dismissUI(GUIName){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
     if(GUIName!=null){
         GUIName.dismiss()
         GUIName=null
         }
         }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_StartUI_dismiss
function Dcraft_StartUI_dismiss(){
	dismissUI(StartUIScreen)
	dismissUI(StartText_0)
	dismissUI(StartText_1)
	dismissUI(StartSubmitButton)
	}
//Dcraft_LanguageSettingsUI_dismiss
function Dcraft_LanguageSettingsUI_dismiss(){
	dismissUI(LanguageSettingScreen)
	dismissUI(LanguageSettingCloseButton)
	dismissUI(LanguageSettingText_0)
	}
//Dcraft_VendingMachineUI_dismiss
function Dcraft_VendingMachineUI_dismiss(){
	dismissUI(VendingMachineScreen)
	dismissUI(VendingMachineText_0)
	dismissUI(VendingMachineCloseButton)
	dismissUI(VendingMachineSelectButton_LEFT)
	dismissUI(VendingMachineSelectButton_RIGHT)
	dismissUI(VendingMachineBox)
	dismissUI(VendingMachineDrink)
	dismissUI(VendingMachineSubmitButton)
	dismissUI(VendingMachineText_1)
	dismissUI(CoinShow)
	dismissUI(MoneyShow)
	}
//addFood
function addFood(itemid,texturename,hungry,mainid,name,amount){
	ModPE.setFoodItem(itemid,texturename,hungry,mainid,name,amount)
	Player.addItemCreativeInv(itemid,1,mainid)
	Item.setCategory(itemid,ItemCategory.FOOD)
	}
//defineTool
function defineTool(itemid,texturename,mainid,name,enchanttype,maxdamage){
	ModPE.setItem(itemid,texturename,mainid,name,1)
	Player.addItemCreativeInv(itemid,1,mainid)
	Item.setCategory(itemid,ItemCategory.TOOL)
	Item.setHandEquipped(itemid,true)
	Item.setMaxDamage(itemid,maxdamage)
	if(enchanttype==EnchantType.withoutEnchant){
		//nothing
	}
	else{
		Item.setEnchantType(itemid,enchanttype,1)
		}
		}
//Damage
function Damage(itemid,getDamage,v){
	if(getCarriedItem()==itemid&&Entity.getHealth(v)>getDamage){
Entity.setHealth(v,Entity.getHealth(v)-getDamage)
}
else if(getCarriedItem()==itemid&&Entity.getHealth(v)<=getDamage){
Entity.setHealth(v,2)
}
}
//Damagedown
function Damagedown(MaxDamage,lower){
	if(Player.getCarriedItemData()>=MaxDamage){
Entity.setCarriedItem(getPlayerEnt(),0)
}
if(Level.getGameMode()==0){
Entity.setCarriedItem(getPlayerEnt(),Player.getCarriedItem(),Player.getCarriedItemCount(),Player.getCarriedItemData()+lower)
}
}
//defineArmor
function defineArmor(itemid,texturename,mainid,name,texture,damage,maxdamage,armortype){
	Item.defineArmor(itemid,texturename,mainid,name,texture,damage,maxdamage,armortype)
	Player.addItemCreativeInv(itemid,1,mainid)
	Item.setCategory(itemid,ItemCategory.TOOL)
	}
//clearInventory
function clearInventory(){
	for(var i=0;i<=36;i++){
		Player.clearInventorySlot(i)
		}
		}
//writetxt
function writetxt(path,text)
{
var fos=new java.io.FileOutputStream(path)
;
fos.write(java.lang.String(text).getBytes())
;
fos.close()
;

}
//readtxt
function readtxt(filepath)
{
var br=new java.io.BufferedReader(new java.io.FileReader(new java.io.File(filepath)));
var result="";
var value=null;
while((value=br.readLine())!=null)result=result+value+"\n";
return result;
}
//Dcraft_DebugSettingUI_dismiss
function Dcraft_DebugSettingUI_dismiss(){
	dismissUI(DebugScreenView)
	dismissUI(Debug_Text_0)
	dismissUI(Debug_CloseButton)
	dismissUI(Debug_ShowInformation_SwitchButton)
	}
//SpawnOre
function SpawnOre(){
var XA=getPlayerX()+Math.floor(Math.random()*100)
var YA=Math.floor(Math.random()*256)
var ZA=getPlayerZ()+Math.floor(Math.random()*100)
if(getTile(XA,YA,ZA)==15){
	setTile(XA,YA,ZA,137,0)
	}
	}
//SpawnFarm
function SpawnFarm(){
	for(var i=0;i<CurrentPlant.length;i++){
		CurrentPlant[i].PlantTime--
		if(CurrentPlant[i].PlantTime==0&&CurrentPlant[i].PlantType=="Coal"){
			setTile(CurrentPlant[i].PlantX,CurrentPlant[i].PlantY,CurrentPlant[i].PlantZ,59,7)
			setTile(CurrentPlant[i].PlantX,CurrentPlant[i].PlantY+1,CurrentPlant[i].PlantZ,16)
			CurrentPlant.splice(i,1)
			}
			}
			}
//writeCurrentPlant
function writeCurrentPlant(){
	var data=""
	for(var i in CurrentPlant){
		var PlantType=CurrentPlant[i].PlantType
		var PlantX=CurrentPlant[i].PlantX
		var PlantY=CurrentPlant[i].PlantY
		var PlantZ=CurrentPlant[i].PlantZ
		var PlantTime=CurrentPlant[i].PlantTime
		var mdata=PlantType+","+PlantTime+","+PlantX+","+PlantY+","+PlantZ+"\n"
		data+=mdata
		writetxt(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_CurrentPlant.txt",data)
		}
		}
//readCurrentPlant
function readCurrentPlant(){
	var data=readtxt(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_CurrentPlant.txt")
	data+=""
	if(data!=""){
		data=data.split("\n")
		for(i in data){
			var a=data[i].split(",")
			clientMessage(a[0])
			CurrentPlant.push({PlantType:""+a[0]+"",PlantTime:a[1],PlantX:a[2],PlantY:a[3],PlantZ:a[4]})
			}
			}
			}
//FileCheck_CurrentPlant
function FileCheck_CurrentPlant(){
	var a=new java.io.File(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir+"/Dcraft_CurrentPlant.txt")
	if(!a.exists()){
		//Nothing
		}
		else{
			readCurrentPlant()
			}
			}
//Dcraft_AutoCheckUpdate_version(Function from Crazy Weapons Mod,author by Stemo688)
function Dcraft_AutoCheckUpdate_version()
{
	try
	{
		var url = new java.net.URL("https://raw.githubusercontent.com/KenMizz/Dcraft/master/New%20version");
		var connection = url.openConnection();
		 
		var inputStream = connection.getInputStream();
		 
		var loadedVersion = "";
		var bufferedVersionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var rowVersion = "";

		while((rowVersion = bufferedVersionReader.readLine()) != null)
		{
			loadedVersion += rowVersion;
		}
		latestVersion = loadedVersion.split(" ")[0];
		NewVersion=latestVersion
		Dcraft_VersionCheck()
		bufferedVersionReader.close();

	}catch(err)
	{
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				print(Dcraft_UpdateCheckUILang_US[6])
			}
		});
	} 
}
//Dcraft_LanguageChange
function Dcraft_LanguageChange(){
	if(ModPE.getLanguage()=="zh_CN"){
		Dcraft_StartUILang_US=Dcraft_StartUILang_CN
		VendingMachineUILang_US=VendingMachineUILang_CN
		Dcraft_UpdateCheckUILang_US=Dcraft_UpdateCheckUILang_CN
	    Dcraft_ComputerUILang_US=Dcraft_ComputerUILang_CN
	Dcraft_UpdateHelperUILang_US=Dcraft_UpdateHelperUILang_CN
	Dcraft_FontDownloaderUILang_US=Dcraft_FontDownloaderUILang_CN
	MilkButtonLang_US=MilkButtonLang_CN
	Dcraft_MediaPlayerUILang_US=Dcraft_MediaPlayerUILang_CN
		}
		if(ModPE.getLanguage()=="en_US"){
			Dcraft_StartUILang_US=Dcraft_StartUILang_US_backup
			VendingMachineUILang_US=VendingMachineUILang_US_backup
			Dcraft_UpdateCheckUILang_US=Dcraft_UpdateCheckUILang_US_backup
			Dcraft_ComputerUILang_US=Dcraft_ComputerUILang_US_backup
			Dcraft_UpdateHelperUILang_US=Dcraft_UpdateHelperUILang_US_backup
			Dcraft_FontDownloaderUILang_US=Dcraft_FontDownloaderUILang_US_backup
			MilkButtonLang_US=MilkButtonLang_US_backup
			Dcraft_MediaPlayerUILang_US=Dcraft_MediaPlayerUILang_US_backup
			}
			}
//JumpToURL
function JumpToURL(URL){
	ctx.startActivity(android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(URL)));
	}
//Dcraft_Update
function Dcraft_Update(){
	if(package!="net.zhuoweizhang.mcpelauncher.pro"&&package!="net.zhuoweizhang.mcpelauncher"&&!UpdateCheck&&!isUpdateFile){
		}
		else{
			//Dcraft_AutoCheckUpdate_Introduction()
			Dcraft_AutoCheckUpdate_adfly()
			Dcraft_AutoCheckUpdate_version()
			}
			}
//Dcraft_VersionCheck
function Dcraft_VersionCheck(){
	if(NewVersion==version){
		print(Dcraft_UpdateCheckUILang_US[7])
		}
		else{
			Dcraft_UpdateCheckUI()
			}
			}
//SendEmail
function SendEmail(Sendto,Subject,text){
var data=new android.content.Intent(android.content.Intent.ACTION_SENDTO); 
data.setData(android.net.Uri.parse("mailto:" + Sendto)); 
data.putExtra(android.content.Intent.EXTRA_SUBJECT,Subject)
data.putExtra(android.content.Intent.EXTRA_TEXT, text); 
ctx.startActivity(data)
}
//Dcraft_Update_FileCheck
function Dcraft_Update_FileCheck(){
	var a=new java.io.File(sdcard+"/games/DcraftData/Dcraft_UpdateFileCheck.txt")
	if(package=="net.zhuoweizhang.mcpelauncher.pro"||package=="net.zhuoweizhang.mcpelauncher"){
	if(!a.exists()){
		Dcraft_UpdateHelperUI()
		}
		else{
			Dcraft_UpdateHelper_readFile()
			Dcraft_Update()
			}
			}
			}
//Dcraft_UpdateHelper_writeFile
function Dcraft_UpdateHelper_writeFile(){
	var data=""
	data=data+UpdateCheck+"I"+AutoCheckUpdateTime+"I"
	writetxt(sdcard+"/games/DcraftData/Dcraft_UpdateFileCheck.txt",data)
	}
//Dcraft_UpdateHelper_readFile
function Dcraft_UpdateHelper_readFile(){
	var data=readtxt(sdcard+"/games/DcraftData/Dcraft_UpdateFileCheck.txt");
	data+=""
	data=data.split("I")
	UpdateCheck=data[0]
	AutoCheckUpdateTime=data[1]
	}
//Dcraft_FontCheck
function Dcraft_FontCheck(){
	var a=new java.io.File(sdcard+"/games/font/mcfont.ttf")
	if(!a.exists()){
		Dcraft_FontDownloaderUI()
		}
		else{
			MinecraftFont=android.graphics.Typeface.createFromFile(sdcard+"/games/font/mcfont.ttf")//by @小ASD555
			}
			}
//Dcraft_writeSettings
function Dcraft_writeSettings(){
	var data=""
	data=data+StopButton_Show+"I"
	writetxt(sdcard+"/games/com.mojang/DcraftSettings.txt",data)
	}
//Dcraft_readSettings
function Dcraft_readSettings(){
	var data=readtxt(sdcard+"/games/com.mojang/DcraftSettings.txt");
	data+=""
	data=data.split("I")
	StopButton_Show=data[0]
	}
//Dcraft_SettingsFileCheck
function Dcraft_SettingsFileCheck(){
	var a=new java.io.File(sdcard+"/games/com.mojang/DcraftSettings.txt")
	if(!a.exists()){
		//_(:D)∠)_
		}
		else{
			Dcraft_readSettings()
			}
			}
//add人模型(from @rgdsfgdf的故事)
function add人模型(renderer)
{
model = renderer.getModel();
model.getPart("head").clear();
model.getPart("rightArm").clear();
model.getPart("leftArm").clear();
model.getPart("rightLeg").clear();
model.getPart("leftLeg").clear();
model.getPart("body").clear();
头 = model.getPart("head");
身体 = model.getPart("body");
左手 = model.getPart("leftArm");
右手 = model.getPart("rightArm");
左脚 = model.getPart("leftLeg");
右脚 = model.getPart("rightLeg");
头.setTextureSize(64,64);
身体.setTextureSize(64,64);
左手.setTextureSize(64,64);
右手.setTextureSize(64,64);
左脚.setTextureSize(64,64);
右脚.setTextureSize(64,64);
头.setTextureOffset(0,0);
头.setRotationPoint(0,1000,0);
头.addBox(-3.4,-8,-4,8,8,8,0);
头.setTextureOffset(32,0,true);
头.setRotationPoint(0,1000,0); 
头.addBox(-3.4,-8,-4,8,8,8,0.5);
身体.setTextureOffset(16,16);
身体.addBox(-4,0,-2,8,12,4,0);
身体.setTextureOffset(16,32,true);
身体.addBox(-4,0,-2,8,12,4,0.5);
左手.setTextureOffset(40,16);
左手.addBox(-1,-2,-2,4,12,4,0);
左手.setTextureOffset(0,32,true);
左手.addBox(-1,-2,-2,4,12,4,0.5);
右手.setTextureOffset(40,16);
右手.addBox(-3,-2,-2,4,12,4,0);
右手.setTextureOffset(0,32,true);
右手.addBox(-3,-2,-2,4,12,4,0.5);
左脚.setTextureOffset(0,16);
左脚.addBox(-2,0,-2,4,12,4,0);
左脚.setTextureOffset(0,32,true);
左脚.addBox(-2,0,-2,4,12,4,0.5);
右脚.setTextureOffset(0,16);
右脚.addBox(-2,0,-2,4,12,4,0);
右脚.setTextureOffset(0,32,true);
右脚.addBox(-2,0,-2,4,12,4,0.5);
}
var 人模型 = Renderer.createHumanoidRenderer()
add人模型(人模型)
//Dcraft_Trick
function Dcraft_Trick(){}
//Dcraft_modLoad
function Dcraft_modLoad(){
	var a=new java.io.File(sdcard+"/games/DcraftData/Dcraftmod/main.dmod")
	if(a.exists()){
		ShowMessage("Loading mod",0)
		Dcraft_readmod()
		}
		}
//Dcraft_readmod
function Dcraft_readmod(){
		var a=new java.io.File(sdcard+"/games/DcraftData/Dcraftmod/main.dmod")
		var reader=new java.io.InputStreamReader(new java.io.FileInputStream(a))
		var readerB=new java.io.BufferedReader(reader)
		var line=""
		line=readerB.readLine()
		var mdata=line.split(",")
		var d=mdata[0]+""
		return d
		}
//Dcraft_CreateSaveFile
function Dcraft_CreateSaveFile(){
	var a=new java.io.File(sdcard+"/games/DcraftData")
	if(!a.exists()){
		a.mkdirs()
		}
		}
//Dcraft_AutoCheckUpdate_adfly
function Dcraft_AutoCheckUpdate_adfly()
{
	try
	{
		var url = new java.net.URL("https://raw.githubusercontent.com/KenMizz/Dcraft/master/adfly");
		var connection = url.openConnection();
		 
		var inputStream = connection.getInputStream();
		 
		var loadedlink = "";
		var bufferedlinkReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var rowlink = "";

		while((rowlink = bufferedlinkReader.readLine()) != null)
		{
			loadedlink += rowlink;
		}
		latestlink = loadedlink.split(" ")[0];
		adfly=latestlink
		bufferedlinkReader.close();

	}catch(err)
	{
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				print(Dcraft_UpdateCheckUILang_US[6])
			}
		});
	} 
}
//Dcraft_AutoCheckUpdate_Introduction
function Dcraft_AutoCheckUpdate_Introduction()
{
	try
	{
		var url = new java.net.URL("https://raw.githubusercontent.com/KenMizz/Dcraft/master/Introduction");
		var connection = url.openConnection();
		 
		var inputStream = connection.getInputStream();
		 
		var loadedIntroduction = "";
		var bufferedIntroductionReader = new java.io.BufferedReader(new java.io.InputStreamReader(inputStream));
		var rowIntroduction = "";

		while((rowIntroduction = bufferedIntroductionReader.readLine()) != null)
		{
			loadedIntroduction += rowIntroduction;
		}
		latestIntroduction = loadedIntroduction.split(" ")[0];
		Introduction=latestIntroduction
		bufferedIntroductionReader.close();

	}catch(err)
	{
		ctx.runOnUiThread(new java.lang.Runnable()
		{
			run: function()
			{
				print(Dcraft_UpdateCheckUILang_US[6])
			}
		});
	} 
}
//notify(function from JsIDE,author by 沈士超ssc)
function notify(main,title,content,http)
	{
		var hellomc=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(http))
		var pi=android.app.PendingIntent.getActivity(hellomc,0,intent,0)
		hellomc.runOnUiThread(new java.lang.Runnable()
			{
				run: function()
					{
						var nm=hellomc.getSystemService(hellomc.NOTIFICATION_SERVICE)
						var notify=new android.app.Notification(android.R.drawable.btn_dialog,main,0);
						notify.defaults=android.app.Notification.DEFAULT_SOUND
						notify.setLatestEventInfo(hellomc,title,content,pi);
						nm.notify(0,notify);
					}
			})
	}
//Dcraft_SaveLastPlaySource
function Dcraft_SaveLastPlaySource(){
	var data=""
	data=data+LastPlaySourceText+"I"
	writetxt(sdcard+"/games/DcraftData/LastPlaySource.txt",data)
	}
//Dcraft_readLastPlaySource
function Dcraft_readLastPlaySource(){
	var a=new java.io.File(sdcard+"/games/DcraftData/LastPlaySource.txt")
	if(a.exists()){
	var data=readtxt(sdcard+"/games/DcraftData/LastPlaySource.txt")
	data=data.split("I")
	LastPlaySourceText=data[0]
	}
	}
//Dcraft_SpawnDreamWorld
function Dcraft_SpawnDreamWorld(){}
/*functions(Blocklauncher)*/
//newLevel
function newLevel(){
Dcraft_LanguageChange()
Dcraft_CreateSaveFile()
Dcraft_Update_FileCheck()
Dcraft_FontCheck()
Dcraft_StartUI()
Dcraft_SettingsFileCheck()
Dcraft_readLastPlaySource()
	}
//leaveGame
function leaveGame(){
	print(msg)
	dismissUI(StopGameButton)
	Dcraft_SaveLastPlaySource()
	}
//useItem
function useItem(x,y,z,i,b){
	if(i==1512&&b==130&&Level.getData(x,y,z)==1&&!Entity.isSneaking(getPlayerEnt())&&VendingMachineCheck){
		money=Player.getCarriedItemCount()
		DrinkText=VendingMachineUILang_US[1]
		DrinkCheck=0
		Dcraft_VendingMachineUI()
		}
	if(i==1512&&b==130&&Level.getData(x,y,z)==0&&!Entity.isSneaking(getPlayerEnt())&&VendingMachineCheck){
		money=Player.getCarriedItemCount()
		DrinkText=VendingMachineUILang_US[1]
		DrinkCheck=0
		Dcraft_VendingMachineUI()
		}
		if(i==276&&Debug){
			ChocolateCow=Level.spawnMob(x,y+1,z,EntityType.COW,"mob/ChocolateCow.png")
			}
			if(b==63&&Debug){
				Dcraft_editSignUI()
				}
				if(i==1516&&(b==2||b==3)){
					setTile(x,y,z,60)
					Damagedown(300,1)
					Level.playSound(x,y,z,"step.gravel",1000)
					}
					if(i==1510&&!Entity.isSneaking(getPlayerEnt())&&getTile(x,y+2,z)==0){
						setTile(x,y+1,z,130,0)
						setTile(x,y+2,z,130,1)
						addItemInventory(1510,-1,0)
						}
						if(i==1515){
							setTile(x,y+1,z,50,0)
							Damagedown(128,1)
							}
							if(b==36&&Level.getData(x,y,z)==0&&Player.getHunger()!=20){
								preventDefault()
								Player.setHunger(Player.getHunger()+1)
								setTile(x,y,z,36,1)
								}
								if(b==36&&Level.getData(x,y,z)==1&&Player.getHunger()!=20){
									preventDefault()
									Player.setHunger(Player.getHunger()+1)
										setTile(x,y,z,36,2)
										}
										if(b==36&&Level.getData(x,y,z)==2&&Player.getHunger()!=20){
											preventDefault()
											Player.setHunger(Player.getHunger()+1)
											setTile(x,y,z,36,3)
											}
											if(b==36&&Level.getData(x,y,z)==3&&Player.getHunger()!=20){
												preventDefault()
												Player.setHunger(Player.getHunger()+1)
												setTile(x,y,z,0)
												}
												if(b==249&&Level.getData(x,y,z)==2&&!Entity.isSneaking(getPlayerEnt())){
												//Dcraft_ExperienceSaverUI()
												}
												if(b==36&&Level.getData(x,y,z)==4&&Player.getHunger()!=20){
								preventDefault()
								Player.setHunger(Player.getHunger()+1)
								setTile(x,y,z,36,5)
								}
								if(b==36&&Level.getData(x,y,z)==5&&Player.getHunger()!=20){
									preventDefault()
									Player.setHunger(Player.getHunger()+1)
										setTile(x,y,z,36,6)
										}
										if(b==36&&Level.getData(x,y,z)==6&&Player.getHunger()!=20){
											preventDefault()
											Player.setHunger(Player.getHunger()+1)
											setTile(x,y,z,36,7)
											}
											if(b==36&&Level.getData(x,y,z)==7&&Player.getHunger()!=20){
												preventDefault()
												Player.setHunger(Player.getHunger()+1)
												setTile(x,y,z,0)
												}
												if(b==249&&Level.getData(x,y,z)==4&&!Entity.isSneaking(getPlayerEnt())){
													preventDefault()
													Dcraft_ComputerUI()
													}
													if(i==1513&&!Entity.isSneaking(getPlayerEnt())){
														preventDefault()
														Dcraft_BugReportUI()
														}
														if(i==267&&Debug){
															KenMizz=Level.spawnMob(x,y+1,z,EntityType.VILLAGER,"mob/pete with glasses.png")
															Entity.setRenderType(KenMizz,人模型)
															Entity.setNameTag(KenMizz,"游乐12")
															Entity.setMaxHealth(KenMizz,3000)
															Entity.setHealth(KenMizz,3000)
															}
															if(b==137&&Level.getData(x,y,z)==5&&!Entity.isSneaking(getPlayerEnt())){
																preventDefault()
																Dcraft_MediaPlayerUI()
																}
																}
//attackHook
function attackHook(a,v){
	if(getCarriedItem()==1514){
		Damage(1514,3,v)
		Damagedown(300,1)
		}
		if(getCarriedItem()==325&&Entity.getNameTag(v)=="ChocolateCow"){
			Entity.setCarriedItem(getPlayerEnt(),1506,1,0)
			}
			if(getCarriedItem()==329){
				preventDefault()
				rideAnimal(a,v)
				}
				if(Entity.getNameTag(v)=="游乐12"&&getCarriedItem()!=1513){
					preventDefault()
					Entity.setHealth(a,0)
					ShowMessage("don't try to challenge me,I'm author",0)
					}
					}
//destroyBlock
function destroyBlock(x,y,z,s){
	if(getTile(x,y,z)==130&&Level.getData(x,y,z)==0){
		Level.destroyBlock(x,y,z,false)
		Level.destroyBlock(x,y+1,z,false)
		Level.dropItem(x,y,z,0,1510,1,0)
		}
		if(getTile(x,y,z)==130&&Level.getData(x,y,z)==1){
			Level.destroyBlock(x,y,z,false)
			Level.destroyBlock(x,y-1,z,false)
			Level.dropItem(x,y,z,0,1510,1,0)
			}
			if(getTile(x,y,z)==137&&Level.getData(x,y,z)==0&&Level.getGameMode()==0){
				Level.destroyBlock(x,y,z,false)
				Level.dropItem(x,y,z,0,1011,1,0)
				}
					if(getTile(x,y,z)==36){
						Level.destroyBlock(x,y,z,false)
						}
						if(getTile(x,y,z)==18&&Level.getGameMode()==0){
							if(Math.random()*100<20){
								Level.dropItem(x,y,z,0,1505,1,0)
									}
									}
									}
//procCmd
function procCmd(cmd){
	var Data=cmd.split(" ")
	if(Data[0]=="clear"&&Debug){
		clearInventory()
		ShowMessage("Successful!",0)
			}
			if(Data[0]=="gamemode"&&Debug){
				if(Data[1]!=null){
					Level.setGameMode(parseInt(Data[1]))
					}
					}
					if(Data[0]=="setTime"&&Debug){
						if(Data[1]!=null){
							Level.setTime(parseInt(Data[1]))
							}
							}
							}
//redstoneUpdateHook
function redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData){
	if(blockId==130&&newCurrent==15){
		VendingMachineCheck=true
		}
		else{
			VendingMachineCheck=false
			}
			}
//modTick
function modTick(){
	SpawnOre()
	var UpdateTime=0
	if(UpdateCheck){
	UpdateTime++
	if(UpdateTime==AutoCheckUpdateTime){
		UpdateTime=0
		Dcraft_AutoCheckUpdate_version()
	}
	}
	}
//eatHook
function eatHook(h,s){
	var food=getCarriedItem()
	if(food==1505){
		if(Math.random()*100<50){
		Entity.addEffect(getPlayerEnt(),MobEffect.hunger,20*10,0,false,true)
		}
		}
		if(food==1521){
			Entity.setHealth(getPlayerEnt(),Entity.getHealth(getPlayerEnt())+5)
			}
			}
//entityAddedHook
function entityAddedHook(e){
	if(Entity.getMobSkin(e)=="mob/ChocolateCow"){
		Entity.setMobSkin(e,"mob/ChocolateCow.png")
		Entity.setNameTag(e,"ChocolateCow")
		}
		if(Entity.getEntityTypeId(e)==EntityType.COW){
			if(Math.random()*100<5){
				ChocolateCow=Level.spawnMob(Entity.getX(e),Entity.getY(e)+1,Entity.getZ(e),EntityType.COW,"mob/ChocolateCow.png")
				Entity.setNameTag(ChocolateCow,"ChocolateCow")
				}
				}
				if(Entity.getNameTag(e)=="游乐12"){
					Entity.setMobSkin(e,"mob/pete with glasses.png")
					Entity.setRenderType(e,人模型)
					Entity.setMaxHealth(e,3000)
					Entity.setHealth(e,3000)
					}
					}
//deathHook
function deathHook(m,v){
	if(Entity.getNameTag(v)=="ChocolateCow"){
		if(Math.random()*100<80){
		Level.dropItem(Entity.getX(v),Entity.getY(v),Entity.getZ(v),1018,1,0)
		}
		}
		if(Entity.getEntityTypeId(v)==getPlayerEnt()){
			Level.spawnMob(Entity.getX(v),Entity.getY(v)+1,Entity.getZ(v),EntityType.ZOMBIE)
			}
			if(Entity.getNameTag(v)=="游乐12"){
				Level.dropItem(Entity.getX(v),Entity.getY(v)+1,Entity.getZ(v),0,1522,1,0)
				}
				}
/*Items*/
//food
addFood(1500,"ApplePie",0,6,ItemLang_US[0],64)//Apple Pie
addFood(1501,"Sprite",0,2,ItemLang_US[1],1)//Sprite
addFood(1502,"Coke",0,2,ItemLang_US[2],1)//Coke
addFood(1503,"CookedFlesh",0,2,ItemLang_US[3],64)//Cooked Flesh
addFood(1504,"CookedChickenNugget",0,4,ItemLang_US[4],64)//Cooked ChickenNugget
addFood(1505,"BakedApple",0,1,ItemLang_US[14],64)//Baked Apple
addFood(1506,"ChocolateMilk",0,4,ItemLang_US[15],1)//Chocolate Milk
addFood(1507,"ChocolateBar",0,4,ItemLang_US[17],64)//Chocolate
addFood(1508,"CookedCarrot",0,5,ItemLang_US[18],64)//Cooked Carrot
addFood(1509,"ChocolateApple",0,5,ItemLang_US[19],64)//Chocolate Apple
addFood(1521,"apple",0,10,ItemLang_US[20],64)//Big Apple
addFood(1522,"diamond",0,50,ItemLang_US[21],1)//Diamond(try to eat)
//normal
addItem(1510,"Vending machine",0,ItemLang_US[5],1,ItemCategory.FOOD,EnchantType.withoutEnchant)//Vending Machine
addItem(1511,"tin_ingot",0,ItemLang_US[6],64,ItemCategory.FOOD,EnchantType.withoutEnchant)//Tin Ingot
addItem(1512,"Coin",0,ItemLang_US[16],64,ItemCategory.FOOD,EnchantType.withoutEnchant)//Coin
addItem(1513,"book_writable",0,"BugReport",1,ItemCategory.FOOD,EnchantType.withoutEnchant)//BugReport
//weapon
defineTool(1514,"tin_sword",0,ItemLang_US[7],EnchantType.weapon,300)//Tin Sword
//Tool
defineTool(1515,"big_torch",0,ItemLang_US[8],EnchantType.withoutEnchant,128)//Big Torch
defineTool(1516,"tin_hoe",0,ItemLang_US[9],EnchantType.withoutEnchant,300)//Tin Hoe
//armor
defineArmor(1517,"tin_helmet",0,ItemLang_US[10],"armor/tin_1.png",200,300,ArmorType.helmet)//Tin Helmet
defineArmor(1518,"tin_chestplate",0,ItemLang_US[11],"armor/tin_1.png",200,300,ArmorType.chestplate)//Tin Chestplate
defineArmor(1519,"tin_leggings",0,ItemLang_US[12],"armor/tin_2.png",200,300,ArmorType.leggings)//Tin Leggings
defineArmor(1520,"tin_boots",0,ItemLang_US[13],"armor/tin_2.png",200,300,ArmorType.boots)//Tin Boots
//Seed
/*Blocks*/
//Machine
Block.defineBlock(130,"Machine",[["machine",6/*底部*/],["machine",5/*顶部*/],["machine",3],["machine",5],["machine",5],["machine",5],["machine",6/*底部*/],["machine",6/*顶部*/],["machine",2],["machine",6],["machine",6],["machine",6]],1,false)
Block.setLightOpacity(130,1)
Block.setRedstoneConsumer(130,true)
//Ore
Block.defineBlock(137,"Ore",[["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["CoalFurnace_side",0],["CoalFurnace_top",0],["CoalFurnace",0],["CoalFurnace_side",0],["CoalFurnace_side",0],["CoalFurnace_side",0],["experience_saver_bottom",0],["experience_saver_bottom",0],["experience_saver",0],["experience_saver",0],["experience_saver",0],["experience_saver",0],["stone_mill_bottom",0],["stone_mill_top",0],["stone_mill_side",0],["stone_mill_side",0],["stone_mill_side",0],["stone_mill_side",0],["computer_bottom",0],["computer_top",0],["computer",0],["computer_back",0],["computer_side",0],["computer_side",0],["jukebox_side",0],["jukebox_top",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]],15,false)
Block.setLightOpacity(137,1)
Player.addItemCreativeInv(137,1,0)
Player.addItemCreativeInv(137,1,1)
Player.addItemCreativeInv(137,1,2)
Player.addItemCreativeInv(137,1,3)
Player.addItemCreativeInv(137,1,4)
Player.addItemCreativeInv(137,1,5)
//Cake
Block.defineBlock(36,"Cake",[/*ChocolateCake1_start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake1_End*/,/*ChocolateCake2_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake2_End*/,/*ChocolateCake3_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake3_End*/,/*ChocolateCake4_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake4_End*/,/*CarrotCake1_Start*/["CarrotCake_bottom",0],["CarrotCake_top",0],["CarrotCake_side",0],["CarrotCake_side",0],["CarrotCake_side",0],["CarrotCake_side",0]/*CarrotCake1_End*/,/*CarrotCake2_Start*/["CarrotCake_bottom",0],["CarrotCake_top",0],["CarrotCake_inner",0],["CarrotCake_side",0],["CarrotCake_side",0],["CarrotCake_side",0]/*CarrotCake2_End*/,/*CarrotCake3_Start*/["CarrotCake_bottom",0],["CarrotCake_top",0],["CarrotCake_inner",0],["CarrotCake_side",0],["CarrotCake_side",0],["CarrotCake_side",0]/*CarrotCake3_End*/,/*CarrotCake4_Start*/["CarrotCake_bottom",0],["CarrotCake_top",0],["CarrotCake_inner",0],["CarrotCake_side",0],["CarrotCake_side",0],["CarrotCake_side",0]/*CarrotCake4_End*/],92,false)
Block.setShape(36, 1/16, 0, 1/16, 15/16, 0.5, 15/16,0)
Block.setShape(36, 1/16, 0, 5/16, 15/16, 0.5, 15/16,1)
Block.setShape(36, 1/16, 0, 9/16, 15/16, 0.5, 15/16,2)
Block.setShape(36, 1/16, 0, 13/16, 15/16, 0.5, 15/16,3)
Block.setShape(36, 1/16, 0, 1/16, 15/16, 0.5, 15/16,4)
Block.setShape(36, 1/16, 0, 5/16, 15/16, 0.5, 15/16,5)
Block.setShape(36, 1/16, 0, 9/16, 15/16, 0.5, 15/16,6)
Block.setShape(36, 1/16, 0, 13/16, 15/16, 0.5, 15/16,7)
Player.addItemCreativeInv(36,1,0)
Player.addItemCreativeInv(36,1,4)
//Pan
Block.defineBlock(84,"Pan",[["iron_pan_bottom",0],["iron_pan_top"],["iron_pan_side",0],["iron_pan_side",0],["iron_pan_side",0],["iron_pan_side",0]],1,false)
Block.setShape(84,0,0,0,1,0.5,1,0)
Player.addItemCreativeInv(84,1,0)
/*Recipe(CraftingTable)*/
//Big Torch
Item.addShapedRecipe(1515,1,0,[
" 11",
" 21",
"2  "],["1",173,0,"2",17,0]);
//Vending Machine
Item.addShapedRecipe(1510,1,0,[
"111",
"121",
"111"],["1",265,0,"2",331,0]);
//Tin Sword
Item.addShapedRecipe(1514,1,0,[
" 1 ",
" 1 ",
" 2 "],["1",1511,0,"2",280,0]);
//Tin Hoe
Item.addShapedRecipe(1516,1,0,[
"11 ",
" 2 ",
" 2 "],["1",1511,0,"2",280,0]);
//Tin Helmet
Item.addShapedRecipe(1517,1,0,[
"111",
"1 1",
"   "],["1",1511,0]);
//Tin Chestplate
Item.addShapedRecipe(1518,1,0,[
"1 1",
"111",
"111"],["1",1511,0]);
//Tin Leggings
Item.addShapedRecipe(1519,1,0,[
"111",
"1 1",
"1 1"],["1",1511,0]);
//Tin Boots
Item.addShapedRecipe(1520,1,0,[
"   ",
"1 1",
"1 1"],["1",1511,0]);
//Apple Pie
Item.addShapedRecipe(1500,1,0,[
"12 ",
"3  ",
"   "],["1",260,0,"2",353,0,"3",344,0]);
//CookedChickenNugget
Item.addShapedRecipe(1504,4,0,[
" 1 ",
"   ",
"   "],["1",366,0])
//CarrotCake
Item.addShapedRecipe(36,1,4,[
"111",
"232",
"444"],["1",391,0,"2",353,0,"3",344,0,"4",296,0])
//Coin
Item.addShapedRecipe(1512,1,0,[
"11 ",
"11 ",
"   "],["1",371,0])
//Big Apple
Item.addShapedRecipe(1521,1,0,[
"111",
"111",
"111"],["1",260,0])
/*Recipe(Furnace)*/
Item.addFurnaceRecipe(367,1503,0)//Rotten Flesh to Cooked Flesh
Item.addFurnaceRecipe(391,1508,0)//Carrot to Cooked Carrot
/*UI*/
//Dcraft_StartUI
var StartUIScreen=null,StartText_0=null,StartText_1=null,StartSubmitButton=null
function Dcraft_StartUI(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
     var fill=android.view.ViewGroup.LayoutParams.FILL_PARENT
     StartUIScreen = new android.widget.PopupWindow()
   var layout = new android.widget.LinearLayout(ctx)
   var imageView = new android.widget.ImageView(ctx)
   imageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(fill,fill))
   imageView.setBackground(Dialog_MinecraftStyle)
   layout.addView(imageView)
   StartUIScreen.setContentView(layout)
   StartUIScreen.setWidth(dip2px(ctx,400))
   StartUIScreen.setHeight(dip2px(ctx,267))
   StartUIScreen.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,0);
   
   
   
   StartText_0=new android.widget.PopupWindow()
   var layout2 = new android.widget.LinearLayout(ctx)
   var Text_0 = new android.widget.TextView(ctx)
   Text_0.setText("Dcraft")
   Text_0.setTextColor(getColor("#FFED00"))
   Text_0.setTypeface(MinecraftFont)
   layout2.addView(Text_0)
   StartText_0.setContentView(layout2)
   StartText_0.setWidth(dip2px(ctx,60))
   StartText_0.setHeight(dip2px(ctx,40))
   StartText_0.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP,0,220);
   
   
   
   StartText_1=new android.widget.PopupWindow()
   var layout3 = new android.widget.LinearLayout(ctx)
   var Text_1 = new android.widget.TextView(ctx)
   Text_1.setText(Dcraft_StartUILang_US[0])
   Text_1.setTextColor(getColor("#00FFE8"))
   Text_1.setTypeface(MinecraftFont)
   layout3.addView(Text_1)
   StartText_1.setContentView(layout3)
   StartText_1.setWidth(dip2px(ctx,200))
   StartText_1.setHeight(dip2px(ctx,200))
   StartText_1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP,0,350);
   
   
   
   StartSubmitButton=new android.widget.PopupWindow()
   var layout3 = new android.widget.LinearLayout(ctx)
   var SumbitButton = new android.widget.Button(ctx)
   SumbitButton.setText(Dcraft_StartUILang_US[1])
   SumbitButton.setTextColor(getColor("#FF1600"))
   SumbitButton.setBackground(SumbitButton_UP)
   SumbitButton.setTypeface(MinecraftFont)
   SumbitButton.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
SumbitButton.setBackground(SumbitButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
SumbitButton.setBackground(SumbitButton_UP)
}
return false;
}});
SumbitButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
Dcraft_StartUI_dismiss()
}})
   layout3.addView(SumbitButton)
   StartSubmitButton.setContentView(layout3)
   StartSubmitButton.setWidth(dip2px(ctx,100))
   StartSubmitButton.setHeight(dip2px(ctx,100))
   StartSubmitButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP,0,850);
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_VendingMachineUI
var VendingMachineScreen=null,VendingMachineCloseButton=null,VendingMachineText_0=null,VendingMachineText_1=null,VendingMachineSelectButton_LEFT=null,VendingMachineSelectButton_RIGHT=null,VendingMachineBox=null,VendingMachineDrink=null,VendingMachineSubmitButton=null,DrinkCheck=0,DrinkText="Coke",CoinShow=null,MoneyShow=null
function Dcraft_VendingMachineUI(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
	var fill=android.view.ViewGroup.LayoutParams.FILL_PARENT
     VendingMachineScreen = new android.widget.PopupWindow()
   var layout = new android.widget.LinearLayout(ctx)
   var imageView = new android.widget.ImageView(ctx)
   imageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(fill,fill))
   imageView.setBackground(MinecraftScreen)
   layout.addView(imageView)
   VendingMachineScreen.setContentView(layout)
   VendingMachineScreen.setWidth(fill)
   VendingMachineScreen.setHeight(dip2px(ctx,400))
   VendingMachineScreen.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.BOTTOM,0,0);
   
   
   
   VendingMachineCloseButton=new android.widget.PopupWindow()
   var layout2 = new android.widget.LinearLayout(ctx)
   var CloseButton = new android.widget.Button(ctx)
   CloseButton.setBackground(CloseButton_UP)
   CloseButton.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
CloseButton.setBackground(CloseButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
CloseButton.setBackground(CloseButton_UP)
}
return false;
}});
CloseButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
Dcraft_VendingMachineUI_dismiss()
}})
   layout2.addView(CloseButton)
   VendingMachineCloseButton.setContentView(layout2)
   VendingMachineCloseButton.setWidth(dip2px(ctx,35))
   VendingMachineCloseButton.setHeight(dip2px(ctx,35))
   VendingMachineCloseButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.RIGHT,0,0);
   
   
   
   VendingMachineText_0=new android.widget.PopupWindow()
   var layout3 = new android.widget.LinearLayout(ctx)
   var Text_0 = new android.widget.TextView(ctx)
   Text_0.setTypeface(MinecraftFont)
   Text_0.setTextColor(getColor("#00FFBB"))
   Text_0.setText(VendingMachineUILang_US[0])
   
   layout3.addView(Text_0)
   VendingMachineText_0.setContentView(layout3)
   VendingMachineText_0.setWidth(dip2px(ctx,150))
   VendingMachineText_0.setHeight(dip2px(ctx,150))
   VendingMachineText_0.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.CENTER,0,50);
   
   
   
   VendingMachineSelectButton_LEFT=new android.widget.PopupWindow()
   var layout4 = new android.widget.LinearLayout(ctx)
   var SelectButton_LEFT = new android.widget.Button(ctx)
   SelectButton_LEFT.setBackground(SelectButton_UP)
   SelectButton_LEFT.setText("<")
   SelectButton_LEFT.setTextColor(getColor("#FFFFFF"))
   SelectButton_LEFT.setTypeface(MinecraftFont)
   SelectButton_LEFT.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
SelectButton_LEFT.setBackground(SelectButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
SelectButton_LEFT.setBackground(SelectButton_UP)
}
return false;
}});
SelectButton_LEFT.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
if(DrinkCheck==1){
	DrinkCheck=0
	Drink.setBackground(Drink_Coke)
	DrinkText=""+VendingMachineUILang_US[1]+"\n2 coin"
	Text_1.setText(DrinkText)
	}
}})
   layout4.addView(SelectButton_LEFT)
   VendingMachineSelectButton_LEFT.setContentView(layout4)
   VendingMachineSelectButton_LEFT.setWidth(dip2px(ctx,50))
   VendingMachineSelectButton_LEFT.setHeight(dip2px(ctx,50))
   VendingMachineSelectButton_LEFT.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.LEFT,0,0);
   
   
   
   VendingMachineSelectButton_RIGHT=new android.widget.PopupWindow()
   var layout5 = new android.widget.LinearLayout(ctx)
   var SelectButton_RIGHT = new android.widget.Button(ctx)
   SelectButton_RIGHT.setText(">")
   SelectButton_RIGHT.setTextColor(getColor("#FFFFFF"))
   SelectButton_RIGHT.setTypeface(MinecraftFont)
   SelectButton_RIGHT.setBackground(SelectButton_UP)
   SelectButton_RIGHT.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
SelectButton_RIGHT.setBackground(SelectButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
SelectButton_RIGHT.setBackground(SelectButton_UP)
}
return false;
}});
SelectButton_RIGHT.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
if(DrinkCheck==0){
	DrinkCheck=1
	Drink.setBackground(Drink_Sprite)
	DrinkText=""+VendingMachineUILang_US[2]+"\n2 coin"
	Text_1.setText(DrinkText)
	}
}})
   layout5.addView(SelectButton_RIGHT)
   VendingMachineSelectButton_RIGHT.setContentView(layout5)
   VendingMachineSelectButton_RIGHT.setWidth(dip2px(ctx,50))
   VendingMachineSelectButton_RIGHT.setHeight(dip2px(ctx,50))
   VendingMachineSelectButton_RIGHT.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.RIGHT,0,0);
   
   
   
   VendingMachineBox=new android.widget.PopupWindow()
   var layout6 = new android.widget.LinearLayout(ctx)
   var BottomBox = new android.widget.Button(ctx)
   BottomBox.setBackground(SelectionBox)
   layout6.addView(BottomBox)
   VendingMachineBox.setContentView(layout6)
   VendingMachineBox.setWidth(dip2px(ctx,50))
   VendingMachineBox.setHeight(dip2px(ctx,50))
   VendingMachineBox.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,0);
   
   
   
   VendingMachineDrink=new android.widget.PopupWindow()
   var layout7 = new android.widget.LinearLayout(ctx)
   var Drink = new android.widget.Button(ctx)
   Drink.setBackground(Drink_Coke)
   layout7.addView(Drink)
   VendingMachineDrink.setContentView(layout7)
   VendingMachineDrink.setWidth(dip2px(ctx,50))
   VendingMachineDrink.setHeight(dip2px(ctx,50))
   VendingMachineDrink.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,0);
   
   
   
   VendingMachineSubmitButton=new android.widget.PopupWindow()
   var layout8 = new android.widget.LinearLayout(ctx)
   var SumbitButton = new android.widget.Button(ctx)
   SumbitButton.setBackground(SumbitButton_UP)
   SumbitButton.setText(VendingMachineUILang_US[3])
   SumbitButton.setTextColor(getColor("#FFA500"))
   SumbitButton.setTypeface(MinecraftFont)
   SumbitButton.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
SumbitButton.setBackground(SumbitButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
SumbitButton.setBackground(SumbitButton_UP)
}
return false;
}});
SumbitButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
if(DrinkCheck==0&&money>=2){
	addItemInventory(1502,1,0)
	money=money-2
	addItemInventory(1512,-2,0)
	Show.setText(""+money+"")
	}
	else if(DrinkCheck==1&&money>=2){
		addItemInventory(1501,1,0)
		money=money-2
		addItemInventory(1512,-2,0)
		Show.setText(""+money+"")
		}
}})
   layout8.addView(SumbitButton)
   VendingMachineSubmitButton.setContentView(layout8)
   VendingMachineSubmitButton.setWidth(dip2px(ctx,100))
   VendingMachineSubmitButton.setHeight(dip2px(ctx,100))
   VendingMachineSubmitButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,600);
   
   
   
   VendingMachineText_1=new android.widget.PopupWindow()
   var layout9 = new android.widget.LinearLayout(ctx)
   var Text_1 = new android.widget.TextView(ctx)
   Text_1.setText(""+DrinkText+"\n2 coin")
   Text_1.setTextColor(getColor("#FFFFFF"))
   Text_1.setTypeface(MinecraftFont)
   layout9.addView(Text_1)
   VendingMachineText_1.setContentView(layout9)
   VendingMachineText_1.setWidth(dip2px(ctx,60))
   VendingMachineText_1.setHeight(dip2px(ctx,120))
   VendingMachineText_1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,10);
   
   
   
   CoinShow=new android.widget.PopupWindow()
   var layout10 = new android.widget.LinearLayout(ctx)
   var Show = new android.widget.Button(ctx)
   Show.setBackground(Stuff_coin)
   Show.setText(""+money+"")
   Show.setTextColor(getColor("#FF8A00"))
   Show.setTypeface(MinecraftFont)
   layout10.addView(Show)
   CoinShow.setContentView(layout10)
   CoinShow.setWidth(dip2px(ctx,50))
   CoinShow.setHeight(dip2px(ctx,50))
   CoinShow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,1000,800);
   
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_BugReportUI
function Dcraft_BugReportUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle("Bugreport");
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText("有什么bug就反馈给作者吧");
text.setTextSize(20);
text.setTextColor(getColor("#FFEE00"));
text.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText("确认");
button.setTextSize(20);
button.setTextColor(getColor("#8D00FF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if("".equals(editText.getText().toString().trim())){
	print("你还没有输入任何内容")
	}
	else{
		var a=editText.getText()
		SendEmail("abc993273913@163.com","BugReport",a)
		}
}}));
var editText=new android.widget.EditText(ctx);
editText.setHint("Text");
editText.setTextSize(20);
editText.setTextColor(getColor("#FF8900"));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(editText);
layout2.addView(button);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_editSignUI
function Dcraft_editSignUI(){
var x=Player.getPointedBlockX()
var y=Player.getPointedBlockY()
var z=Player.getPointedBlockZ()
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle("调整木牌");
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText("木牌的第一行内容");
text.setTextSize(10);
text.setTextColor(getColor("#00A2FF"));
text.setLayoutParams(textParams);
var text2=new android.widget.TextView(ctx);
text2.setText("木牌的第二行内容");
text2.setTextSize(10);
text2.setTextColor(getColor("#FF9D00"));
text2.setLayoutParams(textParams);
var text3=new android.widget.TextView(ctx);
text3.setText("木牌的第三行内容");
text3.setTextSize(10);
text3.setTextColor(getColor("#9C00FF"));
text3.setLayoutParams(textParams);
var text4=new android.widget.TextView(ctx);
text4.setText("木牌的第四行内容");
text4.setTextSize(20);
text4.setTextColor(getColor("#00EAFF"));
text4.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText("确认");
button.setTextSize(20);
button.setTextColor(getColor("#00FF3B"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
var a=editText.getText()
var b=editText2.getText()
var c=editText3.getText()
var d=editText4.getText()
Level.setSignText(x,y,z,0,a)
Level.setSignText(x,y,z,1,b)
Level.setSignText(x,y,z,2,c)
Level.setSignText(x,y,z,3,d)
window.dismiss()
print("Success")
}}));
var button2=new android.widget.Button(ctx);
button2.setText("取消");
button2.setTextSize(20);
button2.setTextColor(getColor("#FF1200"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
}}));
var editText=new android.widget.EditText(ctx);
editText.setText(""+Level.getSignText(x,y,z,0)+"");
editText.setHint("Text");
editText.setTextSize(20);
editText.setTextColor(getColor("#000000"));
var editText2=new android.widget.EditText(ctx);
editText2.setText(""+Level.getSignText(x,y,z,1)+"");
editText2.setHint("Text");
editText2.setTextSize(20);
editText2.setTextColor(getColor("#000000"));
var editText3=new android.widget.EditText(ctx);
editText3.setText(""+Level.getSignText(x,y,z,2)+"");
editText3.setHint("Text");
editText3.setTextSize(20);
editText3.setTextColor(getColor("#000000"));
var editText4=new android.widget.EditText(ctx);
editText4.setText(""+Level.getSignText(x,y,z,3)+"");
editText4.setHint("Text");
editText4.setTextSize(20);
editText4.setTextColor(getColor("#000000"));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(editText);
layout2.addView(text2);
layout2.addView(editText2);
layout2.addView(text3);
layout2.addView(editText3);
layout2.addView(text4);
layout2.addView(editText4);
layout2.addView(button);
layout2.addView(button2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_StopGameButton
var StopGameButton=null
function Dcraft_StopGameButton(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
     StopGameButton = new android.widget.PopupWindow()
   var layout = new android.widget.LinearLayout(ctx)
   var Button = new android.widget.Button(ctx)
   Button.setBackground(StopGameButton_false)
   Button.setAlpha(0.60)
   Button.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
if(StopGameCheck==false){
	Button.setBackground(StopGameButton_true)
	StopGameCheck=true
	ModPE.setGameSpeed(0)
	}
	else{
		Button.setBackground(StopGameButton_false)
		StopGameCheck=false
		ModPE.setGameSpeed(20)
		}
}})
   layout.addView(Button)
   StopGameButton.setContentView(layout)
   StopGameButton.setWidth(dip2px(ctx,50))
   StopGameButton.setHeight(dip2px(ctx,50))
   StopGameButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER,0,0);
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_ExperienceSaverUI
function Dcraft_ExperienceSaverUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle("经验储存器");
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText(""+PlayerName+",你当前储存的经验有:"+ExpValue+"");
text.setTextSize(20);
text.setTextColor(getColor("#FFA300"));
text.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText("提取");
button.setTextSize(20);
button.setTextColor(getColor("#00AAFF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
var a=EditText.getText()
if(a>ExpValue){
	print("你没有足够的经验来提取")
	}
	else{
		window.dismiss()
		ExpValue=ExpValue-a
		Player.setExp(Player.getExp()+a)
		print("已提取"+a+"")
		}
}}));
var button2=new android.widget.Button(ctx);
button2.setText("存入");
button2.setTextColor(getColor("#9500FF"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
var b=EditText.getText()
if(b>Math.floor(Player.getExp())){
	print("你没有足够的经验来存入")
	}
	else{
		Player.setExp(Player.getExp()-b)
		ExpValue=ExpValue+b
		print("已存入"+b+"")
		}
}}));
var EditText=new android.widget.EditText(ctx)
EditText.setHint("Number")
EditText.setTextColor(getColor("#00B9FF"))
layout.addView(layout3);
layout2.addView(text);
layout2.addView(EditText)
layout2.addView(button);
layout2.addView(button2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_DebugSettingUI
var DebugScreenView=null
var Debug_Text_0=null
var Debug_CloseButton=null
var Debug_ShowInformation_SwitchButton=null
var Debug_ShowInformation_TextView=null
function Dcraft_DebugSettingUI(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
     var fill=android.view.ViewGroup.LayoutParams.FILL_PARENT
     DebugScreenView = new android.widget.PopupWindow()
   var layout = new android.widget.LinearLayout(ctx)
   var imageView = new android.widget.ImageView(ctx)
   imageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(fill,fill))
   imageView.setBackground(Dialog_MinecraftStyle)
   layout.addView(imageView)
   DebugScreenView.setContentView(layout)
   DebugScreenView.setWidth(dip2px(ctx,400))
   DebugScreenView.setHeight(dip2px(ctx,267))
   DebugScreenView.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,0);
   
   
   
   Debug_Text_0=new android.widget.PopupWindow()
   var layout2 = new android.widget.LinearLayout(ctx)
   var Text_0 = new android.widget.TextView(ctx)
   Text_0.setText("Debug")
   Text_0.setTextColor(getColor("#00DEFF"))
   Text_0.setTypeface(MinecraftFont)
   layout2.addView(Text_0)
   Debug_Text_0.setContentView(layout2)
   Debug_Text_0.setWidth(dip2px(ctx,60))
   Debug_Text_0.setHeight(dip2px(ctx,40))
   Debug_Text_0.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP,0,220);
   
   
   
   Debug_CloseButton=new android.widget.PopupWindow()
   var layout3 = new android.widget.LinearLayout(ctx)
   var CloseButton = new android.widget.Button(ctx)
   CloseButton.setBackground(CloseButton_UP)
   CloseButton.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
CloseButton.setBackground(CloseButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
CloseButton.setBackground(CloseButton_UP)
}
return false;
}});
CloseButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
Dcraft_DebugSettingUI_dismiss()
}})
   layout3.addView(CloseButton)
   Debug_CloseButton.setContentView(layout3)
   Debug_CloseButton.setWidth(dip2px(ctx,35))
   Debug_CloseButton.setHeight(dip2px(ctx,35))
   Debug_CloseButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.TOP,730,185);
   
   
   Debug_ShowInformation_SwitchButton=new android.widget.PopupWindow()
   var layout4 = new android.widget.LinearLayout(ctx)
   var SwitchButton = new android.widget.Button(ctx)
   SwitchButton.setBackground(SISwitchButtonImage)
SwitchButton.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.click",1000)
if(!ShowInformationCheck){
	ShowInformationCheck=true
	SIImageSwitch=true
	Debug_SIImageSwitch()
SwitchButton.setBackground(SISwitchButtonImage)
}
else{
	ShowInformationCheck=false
	SIImageSwitch=false
	Debug_SIImageSwitch()
	SwitchButton.setBackground(SISwitchButtonImage)
	}
}})
   layout4.addView(SwitchButton)
   Debug_ShowInformation_SwitchButton.setContentView(layout4)
   Debug_ShowInformation_SwitchButton.setWidth(dip2px(ctx,50))
   Debug_ShowInformation_SwitchButton.setHeight(dip2px(ctx,25))
   Debug_ShowInformation_SwitchButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP,-500,400);
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_UpdateCheckUI
function Dcraft_UpdateCheckUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_UpdateCheckUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText(Dcraft_UpdateCheckUILang_US[3]);
text.setTextSize(20);
text.setTextColor(getColor("#00D2FF"));
text.setLayoutParams(textParams);
var text2=new android.widget.TextView(ctx);
text2.setText(""+Dcraft_UpdateCheckUILang_US[1]+""+NewVersion+"\n"+Dcraft_UpdateCheckUILang_US[2]+""+version+"");
text2.setTextSize(20);
text2.setTextColor(getColor("#00D2FF"));
text2.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_UpdateCheckUILang_US[4]);
button.setTextSize(20);
button.setTextColor(getColor("#0061FF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
}}));
var button2=new android.widget.Button(ctx);
button2.setText(Dcraft_UpdateCheckUILang_US[5]);
button2.setTextSize(20);
button2.setTextColor(getColor("#7C00FF"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
	if(checkBox.isChecked()){
		JumpToURL(adfly)
		}
		else{
JumpToURL("https://github.com/KenMizz/Download/archive/master.zip")
}
}}));
var checkBox=new android.widget.CheckBox(ctx)
checkBox.setChecked(false)
checkBox.setText(Dcraft_UpdateCheckUILang_US[8])
checkBox.setTextSize(20)
var text3=new android.widget.TextView(ctx);
text3.setText(Dcraft_UpdateCheckUILang_US[9]);
text3.setTextSize(10);
text3.setTextColor(getColor("#FFC500"));
var text4=new android.widget.TextView(ctx);
text4.setText(Introduction);
text4.setTextSize(20);
text4.setTextColor(getColor("#0061FF"));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(text2)
layout2.addView(text4)
layout2.addView(checkBox)
layout2.addView(text3)
layout2.addView(button);
layout2.addView(button2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_ComputerUI
function Dcraft_ComputerUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_ComputerUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_ComputerUILang_US[1]);
button.setTextSize(20);
button.setTextColor(getColor("#00ABFF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
Dcraft_ComputerUI_Website()
}}));
var button2=new android.widget.Button(ctx);
button2.setText(Dcraft_ComputerUILang_US[3]);
button2.setTextSize(20);
button2.setTextColor(getColor("#00ABFF"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
Dcraft_ComputerUI_Email()
}}));
layout.addView(layout3);
layout2.addView(button);
layout2.addView(button2)
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_ComputerUI_Website
function Dcraft_ComputerUI_Website(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_ComputerUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_ComputerUILang_US[2]);
button.setTextSize(20);
button.setTextColor(getColor("#BF00FF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
if(checkBox.isChecked()){
	var a=editText.getText().toString()
	openURL("http://"+a+"")
	}
	if(checkBox2.isChecked()){
		var b=editText.getText().toString()
		openURL("https://"+b+"")
		}
}}));
var editText=new android.widget.EditText(ctx);
editText.setTextSize(20);
editText.setTextColor(getColor("#0079FF"));
var checkBox=new android.widget.CheckBox(ctx);
checkBox.setText("http://");
checkBox.setChecked(true);
checkBox.setTextSize(20);
checkBox.setTextColor(getColor("#00D9FF"));
checkBox.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(checkBox2.isChecked()){
	checkBox2.setChecked(false)
	}
	else{
		checkBox2.setChecked(true)
		}
}}));
var checkBox2=new android.widget.CheckBox(ctx);
checkBox2.setText("https://");
checkBox2.setChecked(false);
checkBox2.setTextSize(20);
checkBox2.setTextColor(getColor("#FF8D00"));
checkBox2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
if(checkBox.isChecked()){
	checkBox.setChecked(false)
	}
	else{
		checkBox.setChecked(true)
		}
}}));
layout.addView(layout3);
layout2.addView(editText);
layout2.addView(button);
layout2.addView(checkBox);
layout2.addView(checkBox2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//openURL
function openURL(URLL){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
	ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
		try{
			var layout=new android.widget.LinearLayout(ctx)
			var menu1=new android.widget.PopupWindow(layout)
			menu1.setFocusable(true)
			layout.setOrientation(1)
			var layout = new android.widget.LinearLayout(ctx); 
			var webview = new android.webkit.WebView(ctx);
			webview.getSettings().setJavaScriptEnabled(true);
			webview.loadUrl(URLL);			
			var abc=new android.webkit.WebViewClient();
			webview.setWebViewClient(abc);
			layout.addView(webview);
   var mlayout=makeMenu(ctx,menu1,layout)
   menu1.setContentView(mlayout)
   menu1.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth())
   menu1.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu1.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0)
   

 }catch(err){
    clientMessage("错误: "+err+".")
 }}}))
}
//makeMenu
function makeMenu(ctx,menu1,layout){
  var mlayout=new android.widget.RelativeLayout(ctx)
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
 var pad = dip2px(ctx,5)
 scrollview.setPadding(pad,pad,pad,pad)
 scrollview.setLayoutParams(svParams)
 scrollview.addView(layout)
 mlayout.addView(scrollview)
 return mlayout
}
//Dcraft_UpdateHelperUI
function Dcraft_UpdateHelperUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_UpdateHelperUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText(Dcraft_UpdateHelperUILang_US[1]);
text.setTextSize(20);
text.setTextColor(getColor("#2CFF00"));
text.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_UpdateHelperUILang_US[2]);
button.setTextSize(20);
button.setTextColor(getColor("#0087FF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
Dcraft_UpdateHelper_writeFile()
}}));
var button2=new android.widget.Button(ctx);
button2.setText(Dcraft_UpdateHelperUILang_US[3]);
button2.setTextSize(20);
button2.setTextColor(getColor("#00FFC6"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
UpdateCheck=false
Dcraft_UpdateHelper_writeFile()
print(Dcraft_UpdateHelperUILang_US[4])
}}));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(button);
layout2.addView(button2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_FontDownloaderUI
function Dcraft_FontDownloaderUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_FontDownloaderUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText(Dcraft_FontDownloaderUILang_US[1]);
text.setTextSize(20);
text.setTextColor(getColor("#FF6900"));
text.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_FontDownloaderUILang_US[2]);
button.setTextSize(20);
button.setTextColor(getColor("#008DFF"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
JumpToURL("https://github.com/KenMizz/FontDownload/archive/master.zip")
}}));
var button2=new android.widget.Button(ctx);
button2.setText(Dcraft_FontDownloaderUILang_US[3]);
button2.setTextSize(20);
button2.setTextColor(getColor("#4900FF"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
}}));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(button);
layout2.addView(button2);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_getChocolateMilkButton
var MilkButton=null
function Dcraft_getChocolateMilkButton(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
     MilkButton = new android.widget.PopupWindow()
   var layout = new android.widget.LinearLayout(ctx)
   var Button = new android.widget.Button(ctx)
   Button.setBackground(SumbitButton_UP)
   Button.setAlpha(0.60)
   Button.setOnTouchListener(new android.view.View.OnTouchListener(){
onTouch: function(v, event) {
if(event.getAction() == android.view.MotionEvent.ACTION_DOWN){
Button.setBackground(SumbitButton_DOWN)
}else if(event.getAction() == android.view.MotionEvent.ACTION_UP){
Button.setBackground(SumbitButton_UP)
}
return false;
}});
Button.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(v) {
if(getCarriedItem()==325){
	Entity.setCarriedItem(getPlayerEnt(),1015,1,0)
	}
}})
   layout.addView(Button)
   MilkButton.setContentView(layout)
   MilkButton.setWidth(dip2px(ctx,100))
   MilkButton.setHeight(dip2px(ctx,100))
   MilkButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,600);
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_ComputerUI_Email
function Dcraft_ComputerUI_Email(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_ComputerUILang_US[3]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_ComputerUILang_US[6]);
button.setTextSize(20);
button.setTextColor(getColor("#FF9300"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
var a=editText.getText()
var b=editText2.getText()
var c=editText3.getText()
SendEmail(a,b,c)
}}));
var editText=new android.widget.EditText(ctx);
editText.setHint(Dcraft_ComputerUILang_US[4]);
editText.setTextSize(20);
editText.setTextColor(getColor("#009AFF"));
var editText2=new android.widget.EditText(ctx);
editText2.setTextSize(20);
editText2.setHint(Dcraft_ComputerUILang_US[7])
editText2.setTextColor(getColor("#0020FF"));
var editText3=new android.widget.EditText(ctx);
editText3.setTextSize(20);
editText3.setHint(Dcraft_ComputerUILang_US[5])
editText3.setTextColor(getColor("#FF4900"));
layout.addView(layout3);
layout2.addView(editText);
layout2.addView(editText2);
layout2.addView(editText3)
layout2.addView(button);
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
//Dcraft_MediaPlayerUI
function Dcraft_MediaPlayerUI(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
window=new android.app.Dialog(ctx);
window.setTitle(Dcraft_MediaPlayerUILang_US[0]);
var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
textParams.setMargins(dip2px(ctx,5),0,0,0);
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var layout2=new android.widget.LinearLayout(ctx);
layout2.setOrientation(1);
var layout3=new android.widget.ScrollView(ctx);
var text=new android.widget.TextView(ctx);
text.setText(Dcraft_MediaPlayerUILang_US[1]);
text.setTextSize(20);
text.setTextColor(getColor("#009FFF"));
text.setLayoutParams(textParams);
var button=new android.widget.Button(ctx);
button.setText(Dcraft_MediaPlayerUILang_US[3]);
button.setTextSize(20);
button.setTextColor(getColor("#FFD100"));
button.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
if(checkBox.isChecked()&&!isPlayingMusic){
	isPlayingMusic=true
		var a=editText.getText()
		SourceText=a
		LastPlaySourceText=a
		Dcraft_SaveLastPlaySource()
		MusicPlayer.setDataSource(sdcard+a)
		MusicPlayer.prepare()
		MusicPlayer.start()
		MusicPlayer.setLooping(true)
		}
		else if(!checkBox.isChecked()&&!isPlayingMusic){
			isPlayingMusic=true
			var a=editText.getText()
			SourceText=a
			LastPlaySourceText=a
			Dcraft_SaveLastPlaySource()
		MusicPlayer.setDataSource(sdcard+a)
		MusicPlayer.prepare()
		MusicPlayer.start()
		MusicPlayer.setLooping(false)
		}
}}));
var button2=new android.widget.Button(ctx);
button2.setText(Dcraft_MediaPlayerUILang_US[4]);
button2.setTextColor(getColor("#0900FF"));
button2.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
window.dismiss()
if(isPlayingMusic){
isPlayingMusic=false
MusicPlayer.stop()
MusicPlayer.release()
}
else{
	ShowMessage(Dcraft_MediaPlayerUILang_US[7],3)
	}
}}));
var editText=new android.widget.EditText(ctx);
editText.setHint(Dcraft_MediaPlayerUILang_US[2]);
editText.setText(SourceText)
editText.setTextSize(20);
editText.setTextColor(getColor("#FF0500"));
var checkBox=new android.widget.CheckBox(ctx)
checkBox.setChecked(false)
checkBox.setText(Dcraft_MediaPlayerUILang_US[5])
checkBox.setTextSize(20)
checkBox.setTextColor(getColor("#81FF00"))
var text2=new android.widget.TextView(ctx)
text2.setText(""+Dcraft_MediaPlayerUILang_US[10]+""+LastPlaySourceText+"")
text2.setTextSize(20)
text2.setTextColor(getColor("#FFD500"))
var button3=new android.widget.Button(ctx)
button3.setText(Dcraft_MediaPlayerUILang_US[11])
button3.setTextSize(20)
button3.setTextColor(getColor("#00FF9E"))
button3.setOnClickListener(new android.view.View.OnClickListener({onClick:function(){
	editText.setText(LastPlaySourceText)
}}));
layout.addView(layout3);
layout2.addView(text);
layout2.addView(editText);
layout2.addView(text2)
layout2.addView(checkBox)
layout2.addView(button);
layout2.addView(button2);
layout2.addView(button3)
layout3.addView(layout2);
window.setContentView(layout);
window.show();
}}))}
