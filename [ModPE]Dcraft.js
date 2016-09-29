/*
Thanks for Support Dcraft
ModPEName:Dcraft
author:YL12(BaiduTieba and DuoWan Minecraft Box)
Copyright©YL12 2015-2016 All rights reserved
CC-BY-NC-SA
WebSite:http://tieba.baidu.com/p/4398735803?share=9105&fr=share
:)
*/
/*ints*/
//Normal
var msg="Made by YL12"
//Settings
var version="Alpha build 2"
var sdcard=android.os.Environment.getExternalStorageDirectory(). getAbsolutePath() ;
var GameMode=Level.getGameMode()
var MinecraftVersion=ModPE.getMinecraftVersion()
var PlayerHealth=Entity.getHealth(getPlayerEnt())
var PlayerName=Player.getName(getPlayerEnt())
var Debug=false
var DefaultLanguage="en_US"
var StopGameCheck=false
var ExpValue=0
var VendingMachineCheck=false
//Fonts
var MinecraftFont=android.graphics.Typeface.createFromFile(sdcard+"/games/font/mc字体.ttf")//by @小ASD555
var TerrariaFont=android.graphics.Typeface.createFromFile(sdcard+"/games/font/terraria-font.ttf")//from Terraria game file
//Entity
var ChocolateCow
var Notch
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
//Debug_FileCheck
function Debug_FileCheck(){
	var DebugFile=new java.io.File(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_DebugSettings.txt")
	if(!DebugFile.exists()){
		clientMessage(ChatColor.RED+"Debug File not exists,creating a new file")
		writetxt(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_DebugSettings.txt",""+Level.getWorldName()+"")
		print("path:"+DebugFile.getAbsolutePath()+"")
		}
		else{
			Debug_readFile()
			clientMessage(ChatColor.RED+"File exists")
			}
			}
//Debug_UpdateFile
function Debug_UpdateFile(){
	var data=""
	data=data+Level.getWorldName()+"I"+ShowInformationCheck+"I"+SIImageSwitch+"I"
	writetxt(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_DebugSettings.txt",data)
	}
//Debug_readFile
function Debug_readFile(){
	var data=readtxt(sdcard+"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/Dcraft_DebugSettings.txt");
	data+=""
	data=data.split("I")
	ShowInformationCheck=data[0]
	SISwitchButtonImage=data[1]
	SIImageSwitch=data[2]
	}
//Debug_SIImageSwitch
function Debug_SIImageSwitch(){
	if(SIImageSwitch){
		SISwitchButtonImage=SwitchButton_MinecraftStyle_on
		}
		else{
			SISwitchButtonImage=SwitchButton_MinecraftStyle_off
			}
			}
//Dcraft_UpdateCheck
function Dcraft_UpdateCheck(){}
//SpawnOre
function SpawnOre(){
var XA=getPlayerX()+Math.floor(Math.random()*100)
var YA=Math.floor(Math.random()*256)
var ZA=getPlayerZ()+Math.floor(Math.random()*100)
if(getTile(XA,YA,ZA)==15){
	setTile(XA,YA,ZA,249,0)
	}
	}
//SpawnFarm
function SpawnFarm(){
	for(var i=0;i<CurrentPlant.length;i++){
		CurrentPlant[i].PlantTime--
		if(CurrentPlant[i].PlantTime==0&&CurrentPlant[i].PlantType=="Coal"){
			setTile(CurrentPlant[i].PlantX,CurrentPlant[i].PlantY,CurrentPlant[i].PlantZ,59,7)
			setTile(CurrentPlant[i].PlantX,CurrentPlant[i].PlantY+1,CurrentPlant[i].PlantZ,16)
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
	for(var i in data){
		var b=data[i].split(",")
		CurrentPlant.push({PlantType:b[0],PlantTime:b[1],PlantX:b[2],PlantY:b[3],PlantZ:b[4]})
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
/*functions(Blocklauncher)*/
//newLevel
function newLevel(){
FileCheck_CurrentPlant()
Dcraft_StartUI()
if(Debug){
Debug_FileCheck()
}
}
//leaveGame
function leaveGame(){
	print(""+version+"")
	if(Debug){
		Debug_UpdateFile()
	}
	}
//useItem
function useItem(x,y,z,i,b){
	if(b==248&&Level.getData(x,y,z)==1&&!Entity.isSneaking(getPlayerEnt())&&VendingMachineCheck){
		DrinkText="Coke"
		DrinkCheck=0
		Dcraft_VendingMachineUI()
		}
	if(b==248&&Level.getData(x,y,z)==0&&!Entity.isSneaking(getPlayerEnt())&&VendingMachineCheck){
		DrinkText="Coke"
		DrinkCheck=0
		Dcraft_VendingMachineUI()
		}
		if(i==276&&Debug){
			Debug_SIImageSwitch()
			Dcraft_DebugSettingUI()
			}
			if(b==63&&Debug){
				Dcraft_editSignUI()
				}
				if(i==1005&&(b==2||b==3)){
					setTile(x,y,z,60)
					Damagedown(300,1)
					Level.playSound(x,y,z,"step.gravel",1000)
					}
					if(i==1004&&b!=199&&getTile(x,y+2,z)==0){
						setTile(x,y+1,z,248,0)
						setTile(x,y+2,z,248,1)
						addItemInventory(1004,-1,0)
						}
						if(i==1010){
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
												if(i==1014&&b==60){
													setTile(x,y+1,z,59)
													CurrentPlant.push({PlantType:"Coal",PlantTime:20,PlantX:x,PlantY:y+1,PlantZ:z})
													writeCurrentPlant()
													}
													}
//attackHook
function attackHook(a,v){
	if(getCarriedItem()==1003){
		Damage(1003,4,v)
		Damagedown(300,1)
		}
			if(getCarriedItem()==1010){
				Entity.setFireTicks(v,6)
				Damagedown(128,1)
				}
				if(StopGameCheck){
					preventDefault()
					}
					}
//destroyBlock
function destroyBlock(x,y,z,s){
	if(getTile(x,y,z)==248&&Level.getData(x,y,z)==0){
		Level.destroyBlock(x,y,z,false)
		Level.destroyBlock(x,y+1,z,false)
		Level.dropItem(x,y,z,0,1004,1,0)
		}
		if(getTile(x,y,z)==248&&Level.getData(x,y,z)==1){
			Level.destroyBlock(x,y,z,false)
			Level.destroyBlock(x,y-1,z,false)
			Level.dropItem(x,y,z,0,1004,1,0)
			}
			if(getTile(x,y,z)==249&&Level.getData(x,y,z)==0&&Level.getGameMode()==0){
				Level.destroyBlock(x,y,z,false)
				Level.dropItem(x,y,z,0,1011,1,0)
				}
				if(StopGameCheck){
					preventDefault()
					}
					}
//procCmd
function procCmd(cmd){
	var Data=cmd.split(" ")
	if(Data[0]=="clear"){
		clearInventory()
		ShowMessage("Successful!",0)
			}
			}
//redstoneUpdateHook
function redstoneUpdateHook(x, y, z, newCurrent, someBooleanIDontKnow, blockId, blockData){
	if(blockId==248&&newCurrent==15){
		VendingMachineCheck=true
		}
		else{
			VendingMachineCheck=false
			}
			}
//modTick
function modTick(){
	SpawnOre()
	SpawnFarm()
	if(ShowInformationCheck){
		ShowMessage("Dcraft version:"+version+"\nID:"+getCarriedItem()+"\nBlockID:"+Player.getPointedBlockId()+"\nBlockData:"+Player.getPointedBlockData()+"\nBlockSide:"+Player.getPointedBlockSide()+"",1)
		}
		}
/*Items*/
//food
addFood(1000,"ApplePie",0,6,"Apple Pie",64)//Apple Pie
addFood(1001,"Sprite",0,2,"Sprite",1)//Sprite
addFood(1002,"Coke",0,2,"Coke",1)//Coke
addFood(1012,"CookedFlesh",0,2,"CookedFlesh",64)//CookedFlesh
addFood(1013,"CookedChickenNugget",0,4,"CookedChickenNugget",64)//CookedChickenNugget
//normal
addItem(1004,"Vending machine",0,"Vending Machine",1,ItemCategory.FOOD,EnchantType.withoutEnchant)//Vending Machine
addItem(1011,"tin_ingot",0,"Tin Ingot",64,ItemCategory.FOOD,EnchantType.withoutEnchant)//Tin Ingot
//weapon
defineTool(1003,"tin_sword",0,"Tin Sword",EnchantType.weapon,300)//Tin Sword
//Tool
defineTool(1010,"big_torch",0,"Big Torch",EnchantType.withoutEnchant,128)//Big Torch
defineTool(1005,"tin_hoe",0,"Tin Hoe",EnchantType.withoutEnchant,300)//Tin Hoe
//armor
defineArmor(1006,"tin_helmet",0,"Tin Helmet","armor/tin_1.png",200,300,ArmorType.helmet)//Tin Helmet
defineArmor(1007,"tin_chestplate",0,"Tin Chestplate","armor/tin_1.png",200,300,ArmorType.chestplate)//Tin Chestplate
defineArmor(1008,"tin_leggings",0,"Tin Leggings","armor/tin_2.png",200,300,ArmorType.leggings)//Tin Leggings
defineArmor(1009,"tin_boots",0,"Tin Boots","armor/tin_2.png",200,300,ArmorType.boots)//Tin Boots
//Seed
addItem(1014,"seeds_wheat",0,"Coal Ore Seed",64,ItemCategory.FOOD,EnchantType.withoutEnchant)//Coal Ore Seed
/*Blocks*/
//Machine
Block.defineBlock(248,"Machine",[["machine",6/*底部*/],["machine",5/*顶部*/],["machine",3],["machine",5],["machine",5],["machine",5],["machine",6/*底部*/],["machine",6/*顶部*/],["machine",2],["machine",6],["machine",6],["machine",6]],1,false)
Block.setLightOpacity(248,1)
Block.setRedstoneConsumer(248,true)
//Ore
Block.defineBlock(249,"Ore",[["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["tin_ore",0],["CoalFurnace_side",0],["CoalFurnace_top",0],["CoalFurnace",0],["CoalFurnace_side",0],["CoalFurnace_side",0],["CoalFurnace_side",0],["experience_saver_bottom",0],["experience_saver_bottom",0],["experience_saver",0],["experience_saver",0],["experience_saver",0],["experience_saver",0],["stone_mill_bottom",0],["stone_mill_top",0],["stone_mill_side",0],["stone_mill_side",0],["stone_mill_side",0],["stone_mill_side",0]],15,false)
Block.setLightOpacity(249,1)
Player.addItemCreativeInv(249,1,0)
Player.addItemCreativeInv(249,1,1)
Player.addItemCreativeInv(249,1,2)
Player.addItemCreativeInv(249,1,3)
Item.setCategory(249,ItemCategory.MATERIAL)
//Cake
Block.defineBlock(36,"Cake",[/*ChocolateCake1_start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake1_End*/,/*ChocolateCake2_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake2_End*/,/*ChocolateCake3_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]/*ChocolateCake3_End*/,/*ChocolateCake4_Start*/["ChocolateCake_bottom",0],["ChocolateCake_top",0],["ChocolateCake_inner",0],["ChocolateCake_side",0],["ChocolateCake_side",0],["ChocolateCake_side",0]],92,false)
Block.setShape(36, 1/16, 0, 1/16, 15/16, 0.5, 15/16,0)
Block.setShape(36, 1/16, 0, 5/16, 15/16, 0.5, 15/16,1)
Block.setShape(36, 1/16, 0, 9/16, 15/16, 0.5, 15/16,2)
Block.setShape(36, 1/16, 0, 13/16, 15/16, 0.5, 15/16,3)
Player.addItemCreativeInv(36,1,0)
//Pan
Block.defineBlock(84,"Pan",[["iron_pan_bottom",0],["iron_pan_top"],["iron_pan_side",0],["iron_pan_side",0],["iron_pan_side",0],["iron_pan_side",0]],1,false)
Block.setShape(84,0,0,0,1,0.5,1,0)
Player.addItemCreativeInv(84,1,0)
/*Recipe(CraftingTable)*/
//Big Torch
Item.addShapedRecipe(1010,1,0,[
" 11",
" 21",
"2  "],["1",173,0,"2",17,0]);
//Vending Machine
Item.addShapedRecipe(1004,1,0,[
"111",
"121",
"111"],["1",265,0,"2",331,0]);
//Tin Sword
Item.addShapedRecipe(1003,1,0,[
" 1 ",
" 1 ",
" 2 "],["1",1011,0,"2",280,0]);
//Tin Hoe
Item.addShapedRecipe(1005,1,0,[
"11 ",
" 2 ",
" 2 "],["1",1011,0,"2",280,0]);
//Tin Helmet
Item.addShapedRecipe(1006,1,0,[
"111",
"1 1",
"   "],["1",1011,0]);
//Tin Chestplate
Item.addShapedRecipe(1007,1,0,[
"1 1",
"111",
"111"],["1",1011,0]);
//Tin Leggings
Item.addShapedRecipe(1008,1,0,[
"111",
"1 1",
"1 1"],["1",1011,0]);
//Tin Boots
Item.addShapedRecipe(1009,1,0,[
"   ",
"1 1",
"1 1"],["1",1011,0]);
//Apple Pie
Item.addShapedRecipe(1000,1,0,[
"12 ",
"3  ",
"   "],["1",260,0,"2",353,0,"3",344,0]);
//CookedChickenNugget
Item.addShapedRecipe(1013,4,0,[
" 1 ",
"   ",
"   "],["1",366,0]);
/*Recipe(Furnace)*/
Item.addFurnaceRecipe(367,1012,0)//Rotten Flesh to CookedFlesh
/*UI*/
//Dcraft_StartUI
var StartUIScreen=null,StartText_0=null,StartText_1=null,StartSubmitButton=null
function Dcraft_StartUI(){
	var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
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
   var package=ctx.getPackageName()
   Text_1.setText("Dcraft Made by YL12\nDcraft版本:"+version+"\n游戏版本:"+MinecraftVersion+"\n包名:"+package+"")
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
   SumbitButton.setText("Sumbit")
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
var VendingMachineScreen=null,VendingMachineCloseButton=null,VendingMachineText_0=null,VendingMachineText_1=null,VendingMachineSelectButton_LEFT=null,VendingMachineSelectButton_RIGHT=null,VendingMachineBox=null,VendingMachineDrink=null,VendingMachineSubmitButton=null,DrinkCheck=0,DrinkText="Coke"
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
   Text_0.setText("VendingMachine")
   
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
	DrinkText="Coke"
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
	DrinkText="Sprite"
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
   SumbitButton.setText("Sumbit")
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
if(DrinkCheck==0){
	addItemInventory(1002,1,0)
	}
	else{
		addItemInventory(1001,1,0)
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
   Text_1.setText(DrinkText)
   Text_1.setTextColor(getColor("#FFFFFF"))
   Text_1.setTypeface(MinecraftFont)
   layout9.addView(Text_1)
   VendingMachineText_1.setContentView(layout9)
   VendingMachineText_1.setWidth(dip2px(ctx,60))
   VendingMachineText_1.setHeight(dip2px(ctx,120))
   VendingMachineText_1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER,0,30);
   }
		catch(err){
			print(err)
			}}
	}))
	}
//Dcraft_BugReport
function Dcraft_BugReport(){
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
text.setText("有什么bug就反馈给作者吧qwq");
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
		var data=new android.content.Intent(android.content.Intent.ACTION_SENDTO); 
data.setData(android.net.Uri.parse("abc993273913@163.com")); 
data.putExtra(android.content.Intent.EXTRA_SUBJECT, "Bugreport"); 
data.putExtra(android.content.Intent.EXTRA_TEXT, ""+a+""); 
 com.mojang.minecraftpe.MainActivity.currentMainActivity.get().startActivity(data)
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